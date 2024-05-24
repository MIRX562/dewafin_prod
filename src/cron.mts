// cron.ts
import cron from "node-cron";
import { exportOldLogs } from "./lib/logger";

cron.schedule(
	"0 0 1 * *",
	async () => {
		console.log("Running exportOldLogs job...");
		await exportOldLogs();
	},
	{
		timezone: "UTC",
	}
);

console.log("Cron job scheduled.");
