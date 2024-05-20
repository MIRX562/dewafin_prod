import Loading from "@/app/loading";
import { getAllNotes } from "@/data/note";
import { currentUser } from "@/lib/sessionUser";
import { Suspense } from "react";
import AddNoteButton from "./_components/AddNoteButton";
import NoteList from "./_components/NoteList";

export default async function NotePage() {
	try {
		const user = await currentUser();

		if (!user) {
			console.warn("User not authenticated.");
			return (
				<main className="w-full h-full items-center justify-center flex flex-col gap-4">
					<p>User not authenticated. Please log in.</p>
				</main>
			);
		}

		const userId: string = user.id || "";
		const data = await getAllNotes(userId);

		if (!data || data.length === 0) {
			console.warn("No notes available or error fetching notes.");
			return (
				<main className="w-full h-full items-center justify-center flex flex-col gap-4">
					<p>No notes available yet.</p>
					<AddNoteButton />
				</main>
			);
		}

		return (
			<main className="w-full h-full flex flex-col">
				<Suspense fallback={<Loading />}>
					<NoteList notes={data} />
				</Suspense>
			</main>
		);
	} catch (error) {
		console.error("Error loading notes page:", error);
		return (
			<main className="w-full h-full items-center justify-center flex flex-col gap-4">
				<p>There was an error loading the notes. Please try again later.</p>
			</main>
		);
	}
}
