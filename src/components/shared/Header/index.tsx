import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-5 px-10 bg-[#E6F6FE] rounded-lg mt-10 flex flex-row items-center justify-between">
      <Image priority src="/logo.svg" alt="Odonto Prime" width={200} height={113} />

      <nav className="flex-row gap-9 font-medium text-base hidden md:flex">
        <Link href="#services">
          Serviços
        </Link>
        <Link href="#contact">
          Contato
        </Link>
        <Link href="#especialists">
          Especialistas
        </Link>
        <Link href="#faq">
          FAQ
        </Link>
      </nav>

      <button className="bg-blue-600 text-white rounded-xl px-8 py-4 font-semibold hover:bg-blue-500 transition-all hidden md:flex">
        Agendar 
      </button>
      <button className="bg-blue-600 text-white rounded-xl p-4 font-semibold hover:bg-blue-500 transition-all flex md:hidden">
        <Menu size={24} />
      </button>
    </header>
  );
}
