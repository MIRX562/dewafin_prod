import dynamic from "next/dynamic";
import Link from "next/link";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";

const Code = dynamic(() =>
	import("react-notion-x/build/third-party/code").then((m) => m.Code)
);
const Collection = dynamic(() =>
	import("react-notion-x/build/third-party/collection").then(
		(m) => m.Collection
	)
);
const Equation = dynamic(() =>
	import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
);
// const Pdf = dynamic(
// 	() => import("react-notion-x/build/third-party/pdf").then((m) => m.Pdf),
// 	{
// 		ssr: false,
// 	}
// );
const Modal = dynamic(
	() => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
	{
		ssr: false,
	}
);

type NotionPagePops = {
	recordMap: ExtendedRecordMap;
	rootPageId: string;
};

export default async function NotionPage({
	recordMap,
	rootPageId,
}: NotionPagePops) {
	return (
		<div className="container">
			<NotionRenderer
				recordMap={recordMap}
				rootPageId={rootPageId}
				fullPage={true}
				darkMode={true}
				previewImages
				components={{ nextLink: Link, Code, Collection, Equation, Modal }}
			/>
		</div>
	);
}
