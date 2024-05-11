import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";

export function LoginForm() {
  return (
    <Card className="w-full max-w-sm shadow-slate-400 shadow-md">
      <CardHeader className="flex flex-col items-center">
        <Image src="/icon_light.png" alt="" width={32} height={32} />
        <span className="text-2xl font-bold">DewaFin</span>
      </CardHeader>
      <Separator />
      <CardContent className="grid gap-4 mt-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="mail@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="P@5sw0rd..."
            required
          />
        </div>
      </CardContent>
      <CardFooter>
        <Link href="/dashboard" className="w-full">
          <Button className="w-full">LogIn</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
