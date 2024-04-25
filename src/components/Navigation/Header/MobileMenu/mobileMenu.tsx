"use client";
import { UserRoundCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import MobileMenuLinks from "./MobileMenuLinks/mobileMenuLinks";
import NavLogo from "../../NavLogo/NavLogo";
import Image from "next/image";
import CopyRights from "../../CopyRights/CopyRights";

export default function MobileMenu() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="shrink-0 md:hidden p-0.5"
				>
					<Image
						src="/icon.png"
						alt=""
						width={28}
						height={28}
					/>
					<span className="sr-only">Toggle navigation menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent
				side="left"
				className="flex flex-col w-2/3"
			>
				<nav className="grid gap-2 text-lg font-medium">
					<NavLogo />
					<Separator />
					<MobileMenuLinks />
				</nav>
				<Separator />
				<div className="mt-auto p-4">
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
					<CopyRights />
				</div>
			</SheetContent>
		</Sheet>
	);
}
