import Image from "next/image";
import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href="/dashboard" className="flex items-center font-semibold">
      <Image src="/icon.png" alt="" width={36} height={36} />
      <p className="text-4xl mb-0 font-bold">
        ewa<span className="text-primary">Pedia</span>
      </p>
    </Link>
  );
}
