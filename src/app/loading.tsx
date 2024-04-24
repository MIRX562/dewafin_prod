import { ScaleLoader } from "react-spinners";

function Loading() {
	return (
		<div className="w-full h-full flex items-center justify-center">
			<ScaleLoader color="#006bf9" />;
		</div>
	);
}

export default Loading;
