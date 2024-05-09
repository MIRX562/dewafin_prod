import { getNote } from "@/server-actions/notion";
import NotionPage from "./renderer";

export default async function NotePage() {
	const pageId = "35c4fa5a9e9e46ac8c897042ba3bd85c";
	const note = await getNote(pageId);

	console.log(note);
	return (
		<NotionPage
			recordMap={note}
			rootPageId={pageId}
		/>
	);
}
