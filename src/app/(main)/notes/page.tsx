import { getAllNotes } from "@/data/note";
import { currentUser } from "@/lib/sessionUser";
import AddNoteButton from "./_components/AddNoteButton";
import NoteList from "./_components/NoteList";

export default async function NotePage() {
	const user = await currentUser();
	if (!user) return null;
	const userId: string = user.id || ""; //
	const data = await getAllNotes(userId);
	if (!data) {
		throw new Error("No notes available yet");
	}

	if (data.length === 0) {
		return (
			<main className="w-full h-full items-center justify-center flex flex-col gap-4">
				<p>No notes available yet.</p>
				<AddNoteButton />
			</main>
		);
	}

	return (
		<main className="w-full h-full flex flex-col">
			<NoteList notes={data} />
		</main>
	);
}
