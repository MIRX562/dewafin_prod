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
  const debouncedTitle = useDebounce(title, 2000);
  const debouncedContent = useDebounce(content, 2000);
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
        setContent(noteData.content || "");
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
        <header className="flex h-[10vh] items-center border-b overflow-hidden justify-between gap-2">
          <TextAreaAutoSize
            className="w-full resize-none appearance-none overflow-hidden bg-transparent text-3xl md:text-5xl md:pl-12 font-extrabold"
            value={title}
            onChange={handleTitleChange}
            readOnly={!editable}
          />
          <Button onClick={handleGoBack} variant="outline">
            <ArrowLeftIcon />
          </Button>
          <Button onClick={handleTogglePublic}>
            {isPublic ? "Set Private" : "Set Public"}
          </Button>
        </header>
        <div className="flex-1 overflow-auto group pt-2">
          <Editor
            editable={editable}
            onChange={(value) => setContent(value)}
            initialContent={note?.content || ""}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteView;
