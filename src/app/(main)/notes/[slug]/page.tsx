"use client";
import { Button } from "@/components/ui/button";
import { getNoteById } from "@/data/note";
import { useCurrentUserId } from "@/hooks/useCurrentUser";
import { useDebounce } from "@/hooks/useDebounce";
import { updateNote } from "@/server-actions/note";
import { Note } from "@prisma/client";
import { ArrowLeftIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import TextAreaAutoSize from "react-textarea-autosize";

const Editor = dynamic(() => import("@/components/common/tool/Editor"), {
	ssr: false,
});

const NoteView: React.FC = () => {
	const [note, setNote] = useState<Note | null>(null);
	const [editable, setEditable] = useState<boolean>(false);
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");
	const [isPublic, setIsPublic] = useState<boolean>(false);
	const [renderEditor, setRenderEditor] = useState<boolean>(false); // Add this state

	const debouncedTitle = useDebounce(title, 1000);
	const debouncedContent = useDebounce(content, 1000);
	const uId = useCurrentUserId();
	const searchParams = useSearchParams();
	const noteId = searchParams.get("id");
	const router = useRouter();

	if (!noteId) {
		throw new Error("Id is needed!");
	}

	useEffect(() => {
		const fetchNote = async () => {
			try {
				const noteData = await getNoteById(noteId);
				if (!noteData) {
					throw new Error("Note not found");
				}
				const isEditable = noteData.userId === uId;
				setEditable(isEditable);
				setNote(noteData);
				setTitle(noteData.title);
				setContent(noteData.content);
				setIsPublic(noteData.isPublic);
			} catch (error) {
				console.error("Error fetching note:", error);
			}
		};
		fetchNote();
	}, [noteId, uId]);

	useEffect(() => {
		const handleSaveNote = async () => {
			if (!editable || !note) return;
			try {
				await updateNote({
					id: note.id,
					title: debouncedTitle,
					content: debouncedContent,
					isPublic: isPublic,
				});
			} catch (error) {
				console.error("Error updating note:", error);
			}
		};
		handleSaveNote();
	}, [debouncedTitle, debouncedContent, editable, note, isPublic]);

	useEffect(() => {
		// Delay rendering the Editor component by 500ms
		const timeout = setTimeout(() => {
			setRenderEditor(true);
		}, 500);

		return () => clearTimeout(timeout); // Clean up the timeout on component unmount
	}, []); // Empty dependency array ensures the effect runs only once

	const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTitle(e.target.value);
	};

	const handleTogglePublic = () => {
		setIsPublic((prev) => !prev);
	};

	const handleGoBack = () => {
		router.push("/notes");
	};

	return (
		<div className="flex h-full w-full">
			<div className="flex flex-1 flex-col">
				<header className="flex flex-col-reverse md:flex-row pt-1 items-center overflow-hidden justify-between gap-4">
					<TextAreaAutoSize
						className="w-full resize-none appearance-none overflow-hidden bg-transparent text-2xl md:text-4xl md:pl-12 font-bold"
						value={title}
						onChange={handleTitleChange}
						readOnly={!editable}
					/>
					<div className="flex w-full items-start justify-between md:justify-end gap-2">
						<Button
							onClick={handleGoBack}
							variant="outline"
						>
							<ArrowLeftIcon />
						</Button>
						{editable ? (
							<Button
								onClick={handleTogglePublic}
								variant={isPublic ? "default" : "outline"}
							>
								{isPublic ? "Set Private" : "Set Public"}
							</Button>
						) : (
							""
						)}
					</div>
				</header>
				<div className=" flex-1 overflow-auto gap-2 md:gap-4">
					{renderEditor && (
						<Editor
							editable={editable}
							onChange={(value) => setContent(value)}
							initialContent={note?.content}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default NoteView;
