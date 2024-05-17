"use client";
import { Button } from "@/components/ui/button";
import { currentUserId } from "@/lib/sessionUser";
import { formatDate } from "@/lib/utils";
import { createNote } from "@/server-actions/note";
import { PlusCircleIcon } from "lucide-react";

const AddNoteButton = () => {
  const handleCreateNote = async () => {
    const uId = await currentUserId();
    if (!uId) return;
    const date = formatDate(new Date());

    try {
      const userId = uId;
      const title = `Untitled-${date}`;
      const content = "";
      const isPublic = false;

      await createNote(userId, title, content, isPublic);
    } catch (error) {
      console.error("Error creating new note:", error);
    }
  };

  return (
    <Button onClick={handleCreateNote} className="gap-2">
      <PlusCircleIcon />
      New Note
    </Button>
  );
};

export default AddNoteButton;
