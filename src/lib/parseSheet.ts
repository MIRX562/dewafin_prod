import XLSX from "xlsx";
import { formatCurrency, parseCurrency } from "./utils";

// Define types for the data structure
export interface ParsedData {
	NO: number;
	TGL: string;
	KETERANGAN: string;
	DEBIT?: string;
	KREDIT?: string;
	SALDO: string;
}

export interface ParsedResult {
	data: ParsedData[];
	saldoAwal: number | null;
	danaMasuk: number;
	danaKeluar: number;
	totalRefund: number;
	pendapatan: number;
	saldoAkhir: number;
	totalBersih: number;
	totalPinjaman: number;
}

export const parseFile = (fileData: string | ArrayBuffer): ParsedResult => {
	const workbook = XLSX.read(fileData, { type: "binary" });
	const sheet = workbook.Sheets[workbook.SheetNames[0]];
	const jsonData = XLSX.utils.sheet_to_json<string[]>(sheet, { header: 1 });

	const header = jsonData[0];
	const rows = jsonData.slice(1);

	// Find the initial balance (Saldo Awal)
	const initialBalanceRow = rows.find(
		(row) => row[header.indexOf("KETERANGAN")] === "Saldo Awal"
	);
	const saldoAwal = initialBalanceRow
		? parseCurrency(initialBalanceRow[header.indexOf("SALDO")])
		: 0;
	let saldo = saldoAwal;

	const data: ParsedData[] = rows.map((row, index) => {
		const debit = parseCurrency(row[header.indexOf("DEBIT")]) || 0;
		const kredit = parseCurrency(row[header.indexOf("KREDIT")]) || 0;

		// Update saldo based on DEBIT and KREDIT values
		if (row[header.indexOf("KETERANGAN")] !== "Saldo Awal") {
			//@ts-ignore
			saldo += debit - kredit;
		}

		const entry: ParsedData = {
			NO: Number(row[header.indexOf("NO")]),
			TGL: row[header.indexOf("TGL")] || "",
			KETERANGAN: row[header.indexOf("KETERANGAN")] || "",
			DEBIT: row[header.indexOf("DEBIT")] || "-",
			KREDIT: row[header.indexOf("KREDIT")] || "-",
			SALDO: formatCurrency(saldo), // Format saldo
		};
		return entry;
	});

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
	const totalPinjaman = data.reduce(
		(sum: any, row: any) =>
			sum +
			(row["KETERANGAN"].includes("Pinjaman")
				? parseCurrency(row["DEBIT"] || "0")
				: 0),
		0
	);
	const saldoAkhir = saldoAwal + danaMasuk - danaKeluar;
	const totalBersih = danaMasuk - danaKeluar;
	const pendapatan = danaMasuk - totalRefund - totalPinjaman;

	const result: ParsedResult = {
		data,
		saldoAwal,
		danaMasuk,
		danaKeluar,
		totalRefund,
		pendapatan,
		saldoAkhir,
		totalBersih,
		totalPinjaman,
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
