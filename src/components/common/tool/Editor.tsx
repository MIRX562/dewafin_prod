"use client";
import { uploadFiles } from "@/lib/uploadthing";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { useTheme } from "next-themes";

type EditorProps = {
	onChange: (value: string) => void;
	initialContent?: string;
	editable: boolean;
};

const Editor: React.FC<EditorProps> = ({
	onChange,
	initialContent,
	editable,
}) => {
	const { resolvedTheme } = useTheme();
	const editor: BlockNoteEditor = useCreateBlockNote({
		initialContent: initialContent
			? (JSON.parse(initialContent) as PartialBlock[])
			: undefined,
		uploadFile: async (file: File) => {
			const [res] = await uploadFiles("imageUploader", { files: [file] });
			return res.url;
		},
	});
	return (
		// Renders the editor instance using a React component.
		<BlockNoteView
			editor={editor}
			editable={editable}
			theme={resolvedTheme === "dark" ? "dark" : "light"}
			onChange={() => onChange(JSON.stringify(editor.document))}
			sideMenu={false}
		/>
	);
};

export default Editor;
