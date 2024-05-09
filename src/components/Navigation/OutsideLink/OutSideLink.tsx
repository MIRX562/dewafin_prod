import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRoundCheck } from "lucide-react";

export default function OutSideLink() {
	return (
		<Card>
			<CardHeader className="p-2 pt-2 md:p-4 text-center">
				<CardTitle className="flex justify-center gap-4">
					<UserRoundCheck />
					Sadewa
				</CardTitle>
			</CardHeader>
			<CardContent className="p-2 pt-0 md:p-4 md:pt-0">
				<Button
					size="sm"
					className="w-full"
				>
					Login
				</Button>
			</CardContent>
		</Card>
	);
}
