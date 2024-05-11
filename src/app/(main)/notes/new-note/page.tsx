/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RvS98os53Yq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SaveIcon } from "lucide-react";
import NoteView from "../[slug]/page";

export default function NewNote() {
  return (
    <div className="flex h-full w-full">
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center border-b ">
          <div className="flex w-full items-center justify-between gap-2">
            <Input
              className="w-full rounded-md border-none text-3xl focus:border-l "
              placeholder="Note title"
              type="text"
            />
            <Button variant="outline" className="gap-2">
              <SaveIcon className="h-5 w-5" />
              Save Note
            </Button>
          </div>
        </header>
        <div className="flex-1 overflow-auto">
          <NoteView />
        </div>
      </div>
    </div>
  );
}
