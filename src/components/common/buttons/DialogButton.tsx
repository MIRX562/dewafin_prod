import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
type Props = {
	children: React.ReactNode;
	asChild?: boolean;
	title: string;
};

export default function DialogButton({ children, asChild, title }: Props) {
	return (
		<Dialog>
			<DialogTrigger asChild={asChild}>
				<Button size="sm">{title}</Button>
			</DialogTrigger>
			<DialogContent className="w-full lg:w-[400px] grid place-items-center p-1 bg-transparent border-none shadow-sm">
				{children}
			</DialogContent>
		</Dialog>
	);
}
