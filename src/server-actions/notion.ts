"use server";

import { notion } from "@/lib/notion";

export const getNote = async (pageId: string) => {
	return await notion.getPage(pageId);
};
