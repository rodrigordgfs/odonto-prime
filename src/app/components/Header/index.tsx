import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-5 px-10 bg-[#E6F6FE] rounded-lg mt-10 flex flex-row items-center justify-between">
      <Image src="/logo.svg" alt="Odonto Prime" width={200} height={113} />

      <nav className="flex flex-row gap-9 font-medium text-base">
        <Link href="/" prefetch className="font-semibold">
          Home
        </Link>
        <Link href="/services" prefetch>
          Services
        </Link>
        <Link href="/about" prefetch>
          About
        </Link>
        <Link href="/contact" prefetch>
          Contact
        </Link>
      </nav>

      <button className="bg-blue-600 text-white rounded-xl px-8 py-4 font-semibold hover:bg-blue-500 transition-all">
        Book now
      </button>
    </header>
  );
}
