import Image from "next/image";
import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-1 font-semibold">
      <Image src="/icon.png" alt="" width={36} height={36} />
      <p className="text-3xl font-bold">
        Dewa<span className="text-primary ">Min</span>
      </p>
    </Link>
  );
}
