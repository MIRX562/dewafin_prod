/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cS4jgO5DYc3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	ChevronDownIcon,
	FileIcon,
	FileJsonIcon,
	FileSpreadsheetIcon,
	FileTextIcon,
	UploadIcon,
} from "lucide-react";
import Link from "next/link";

type Props = {
	table: string;
};

export default function TableExportButton(props: Props) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					className="flex items-center gap-2"
					variant="outline"
					size="sm"
				>
					<UploadIcon className="h-4 w-4 text-primary" />
					Export
					<ChevronDownIcon className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-48">
				<Link href={`/api/export/${props.table}?format=xlsx`}>
					<DropdownMenuItem>
						<FileSpreadsheetIcon className="mr-2 h-4 w-4 text-primary" />
						Export to XLSX
					</DropdownMenuItem>
				</Link>
				<Link href={`/api/export/${props.table}?format=csv`}>
					<DropdownMenuItem>
						<FileSpreadsheetIcon className="mr-2 h-4 w-4 text-primary" />
						Export to CSV
					</DropdownMenuItem>
				</Link>
				<Link href={`/api/export/${props.table}?format=txt`}>
					<DropdownMenuItem>
						<FileTextIcon className="mr-2 h-4 w-4 text-primary" />
						Export to TXT
					</DropdownMenuItem>
				</Link>
				<Link href={`/api/export/${props.table}?format=json`}>
					<DropdownMenuItem>
						<FileJsonIcon className="mr-2 h-4 w-4 text-primary" />
						Export to JSON
					</DropdownMenuItem>
				</Link>
				<Link href={`/api/export/${props.table}?format=html`}>
					<DropdownMenuItem>
						<FileIcon className="mr-2 h-4 w-4 text-primary" />
						Export to HTML
					</DropdownMenuItem>
				</Link>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
