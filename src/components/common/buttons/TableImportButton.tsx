"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { formatFileSize } from "@/lib/utils";
import { dataImportFileSchema } from "@/schemas/file";
import { DownloadIcon, FileIcon, UploadIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Card } from "../../ui/card";

const validateFile = (file: File) => {
	try {
		dataImportFileSchema.parse({
			name: file.name,
			size: file.size,
			type: file.type,
		});
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
};

export default function TableImportButton() {
	const [isOpen, setIsOpen] = useState(false);
	const [file, setFile] = useState<File | null>(null);
	const [isDragOver, setIsDragOver] = useState(false);
	const [fileError, setFileError] = useState<string | null>(null);

	const handleFileChange = (e: any) => {
		const selectedFile = e.target.files?.[0] || null;

		if (selectedFile) {
			const isValid = validateFile(selectedFile);
			if (isValid) {
				setFile(selectedFile);
				setFileError(null);
			} else {
				setFile(null);
				setFileError("Invalid file");
			}
		} else {
			setFile(null);
			setFileError(null);
		}
	};

	const handleUpload = () => {
		// Handle file upload here
		console.log("Uploading file:", file);
		setIsOpen(false);
	};

	const handleDragOver = (e: any) => {
		e.preventDefault();
		setIsDragOver(true);
	};

	const handleDragLeave = () => {
		setIsDragOver(false);
	};

	const handleDrop = (e: any) => {
		e.preventDefault();
		setIsDragOver(false);
		const droppedFile = e.dataTransfer.files[0];
		if (droppedFile) {
			const isValid = validateFile(droppedFile);
			if (isValid) {
				setFile(droppedFile);
				setFileError(null);
			} else {
				setFile(null);
				setFileError("Invalid file");
			}
		} else {
			setFile(null);
			setFileError(null);
		}
	};

	return (
		<Dialog
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<DialogTrigger asChild>
				<Button
					variant="outline"
					size="sm"
					className="flex gap-2 items-center"
				>
					<DownloadIcon className="text-primary w-4 h-4" />
					Import
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-[90svh] md:max-w-[500px]">
				<DialogHeader>
					<DialogTitle>Upload File</DialogTitle>
					<DialogDescription>
						Upload the file with apropriate atributes to import!
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div
						className={`group relative flex h-48 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed transition-colors duration-300 ${
							isDragOver
								? "border-primary bg-primary/10 dark:bg-primary/20"
								: "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
						} ${file ? "hover:border-primary dark:hover:border-primary" : ""}`}
						onDragOver={handleDragOver}
						onDragLeave={handleDragLeave}
						onDrop={handleDrop}
					>
						<div className="z-10 flex flex-col items-center justify-center space-y-2 text-center text-gray-500 transition-colors duration-300 group-hover:text-primary dark:text-gray-400 dark:group-hover:text-primary">
							<UploadIcon className="h-8 w-8" />
							<p>Drag and drop your file here</p>
							<p className="text-sm">or click to select a file</p>
						</div>
						<input
							className="absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
							type="file"
							onChange={handleFileChange}
						/>
					</div>
					<div className="grid gap-2 space-y-2">
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Supported file types: XLS, XLSX, CSV
						</p>
						{fileError && (
							<p className="text-sm text-red-500 dark:text-red-400">
								{fileError}
							</p>
						)}
						{file && (
							<div className="grid gap-2">
								<Card className="flex items-center justify-between p-2">
									<div className="flex items-center gap-3">
										<FileIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
										<div>
											<p className="text-sm font-medium text-gray-900 dark:text-gray-100">
												{file.name}
											</p>
											<p className="text-sm text-gray-500 dark:text-gray-400">
												{formatFileSize(file.size)}
											</p>
										</div>
									</div>
									<Button
										size="icon"
										onClick={() => setFile(null)}
										variant="ghost"
									>
										<XIcon className="h-4 w-4" />
									</Button>
								</Card>
							</div>
						)}
						<div className="flex justify-between">
							<Button
								onClick={() => {
									setFile(null);
									setIsOpen(false);
								}}
								disabled={!file}
								variant="outline"
							>
								Cancel
							</Button>
							<Button
								onClick={handleUpload}
								disabled={!file}
							>
								Upload
							</Button>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
