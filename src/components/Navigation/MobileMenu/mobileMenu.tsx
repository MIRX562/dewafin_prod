"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import CopyRights from "../CopyRights";
import NavLogo from "../NavLogo";
import OutSideLink from "../OutSideLink";
import MobileMenuLinks from "./mobileMenuLinks";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden p-0.5"
        >
          <Menu className="w-8 h-8" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col w-2/3">
        <nav className="grid gap-2 text-lg font-medium">
          <NavLogo />
          <Separator />
          <MobileMenuLinks />
        </nav>
        <Separator />
        <div className="mt-auto p-4 space-y-2">
          <OutSideLink />
          <CopyRights />
        </div>
      </SheetContent>
    </Sheet>
  );
}
