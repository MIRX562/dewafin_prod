import LoginButton from "@/components/authComponents/loginButton/LoginButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-slate-300">
      <div className="space-y-6">
        <div className="flex w-full items-center justify-center space-x-2">
          <Image
            src="/icon.png"
            alt="logo"
            width={62}
            height={32}
            className="drop-shadow-md"
          />
          <h1
            className={cn(
              font.className,
              "text-6xl font-semibold text-black drop-shadow-md",
            )}
          >
            Dewa<span className="text-primary">Min</span>
          </h1>
        </div>
        <p className="text-primary text-lg text-center">
          Simple Admin Dashboard
        </p>
        <div className="flex flex-col items-center">
          <LoginButton mode="redirect" asChild>
            <Button
              variant={"secondary"}
              size={"lg"}
              className="shadow-lg font-medium"
            >
              Sign In
            </Button>
          </LoginButton>
        </div>
        <div className="flex justify-center text-slate-800 font-bold text-center">
          <a
            href="https://www.flaticon.com/free-icons/system"
            title="system icons"
          >
            Main icon created by Freepik - Flaticon
          </a>
        </div>
      </div>
    </main>
  );
}
