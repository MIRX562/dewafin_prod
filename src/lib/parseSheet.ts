import XLSX from "xlsx";
import { parseCurrency } from "./utils";

// Define types for the data structure
export interface ParsedData {
	SALDO: string;
	DEBIT?: string;
	KREDIT?: string;
	KETERANGAN: string;
}

export interface ParsedResult {
	data: ParsedData[];
	saldoAwal: number | null;
	danaMasuk: number;
	danaKeluar: number;
	totalRefund: number;
	saldoAkhir: number;
	totalBersih: number;
}

export const parseFile = (fileData: string | ArrayBuffer): ParsedResult => {
	const workbook = XLSX.read(fileData, { type: "binary" });
	const sheet = workbook.Sheets[workbook.SheetNames[0]];
	const jsonData = XLSX.utils.sheet_to_json<string[]>(sheet, { header: 1 });

	const header = jsonData[0];
	const rows = jsonData.slice(1);

	const data: ParsedData[] = rows.map((row) => {
		const entry: ParsedData = {
			SALDO: row[header.indexOf("SALDO")] || "",
			DEBIT: row[header.indexOf("DEBIT")] || "",
			KREDIT: row[header.indexOf("KREDIT")] || "",
			KETERANGAN: row[header.indexOf("KETERANGAN")] || "",
		};
		return entry;
	});

	const saldoAwal = parseCurrency(data[0]["SALDO"]);
	const danaMasuk = data.reduce(
		(sum: any, row: any) => sum + parseCurrency(row["DEBIT"] || "0"),
		0
	);
	const danaKeluar = data.reduce(
		(sum: any, row: any) => sum + parseCurrency(row["KREDIT"] || "0"),
		0
	);
	const totalRefund = data.reduce(
		(sum: any, row: any) =>
			sum +
			(row["KETERANGAN"].includes("Refund")
				? parseCurrency(row["DEBIT"] || "0")
				: 0),
		0
	);
	const saldoAkhir = saldoAwal + danaMasuk - danaKeluar;
	const totalBersih = danaMasuk - danaKeluar;

	const result: ParsedResult = {
		data,
		saldoAwal,
		danaMasuk,
		danaKeluar,
		totalRefund,
		saldoAkhir,
		totalBersih,
	};

	return result;
};

export const readFile = (file: File): Promise<string | ArrayBuffer> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = (event) => {
			const fileData = event.target?.result;
			if (fileData) {
				resolve(fileData);
			} else {
				reject(new Error("File reading error"));
			}
		};
		reader.onerror = (error) => {
			reject(error);
		};
		reader.readAsBinaryString(file);
	});
};
