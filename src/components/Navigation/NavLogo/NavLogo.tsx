import Image from "next/image";
import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-1 font-semibold">
      <Image src="/icon.png" alt="" width={26} height={26} />
      <p className="text-2xl font-bold">
        Dewa<span className="text-primary ">Min</span>
      </p>
    </Link>
  );
}
