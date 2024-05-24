import { format } from "date-fns";
import fs from "fs";
import path from "path";
import pino from "pino";
import { db } from "./db";
import { currentUser } from "./sessionUser";

const logger = pino({
	transport: {
		target: "pino-pretty",
		options: {
			colorize: true,
		},
	},
});

type LogLevels = "fatal" | "error" | "warn" | "info" | "debug" | "trace";

export const logActivity = async (level: LogLevels, message: string) => {
	const user = await currentUser();
	const userInfo = user
		? `User ID: ${user.id}, Name: ${user.name}`
		: "Unknown User";
	const logMessage = `${message} - ${userInfo}`;

	logger[level](logMessage);

	try {
		await db.logs.create({
			data: {
				level,
				message: logMessage,
				timestamp: new Date(),
			},
		});
	} catch (error) {
		logger.error("Failed to write log to database:", error);
	}
};

export const exportOldLogs = async () => {
	const oneMonthAgo = new Date();
	oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

	const oldLogs = await db.logs.findMany({
		where: {
			timestamp: {
				lt: oneMonthAgo,
			},
		},
	});

	if (oldLogs.length === 0) {
		return;
	}

	const logFileName = `logs-${format(oneMonthAgo, "yyyy-MM")}.json`;
	const logFilePath = path.join(__dirname, logFileName);

	fs.writeFileSync(logFilePath, JSON.stringify(oldLogs, null, 2));

	await db.logs.deleteMany({
		where: {
			id: {
				in: oldLogs.map((log) => log.id),
			},
		},
	});

	logger.info(`Exported ${oldLogs.length} logs to ${logFilePath}`);
};
