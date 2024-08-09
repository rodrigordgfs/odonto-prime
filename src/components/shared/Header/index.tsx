"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative py-5 px-10 bg-[#E6F6FE] rounded-lg mt-10 flex flex-row items-center justify-between">
      <Image
        priority
        src="/logo.svg"
        alt="Odonto Prime"
        width={200}
        height={113}
      />

      <nav className="flex-row gap-9 font-medium text-base hidden md:flex">
        <Link href="#services">Serviços</Link>
        <Link href="#contact">Contato</Link>
        <Link href="#especialists">Especialistas</Link>
        <Link href="#faq">FAQ</Link>
      </nav>

      <button className="bg-blue-600 text-white rounded-xl px-8 py-4 font-semibold hover:bg-blue-500 transition-all hidden md:flex">
        Agendar
      </button>

      <button
        className="bg-blue-600 text-white rounded-xl p-2 font-semibold hover:bg-blue-500 transition-all flex md:hidden"
        onClick={toggleMenu}
      >
        <Menu size={24} />
      </button>

      {isMenuOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-zinc-50 shadow-xl rounded-lg p-5 flex flex-col items-start gap-3 z-10">
          <Link
            href="#services"
            onClick={closeMenu}
            className="font-medium text-base w-full text-center hover:text-white hover:bg-blue-600 hover:rounded-lg transition-all py-2"
          >
            Serviços
          </Link>
          <Link
            href="#contact"
            onClick={closeMenu}
            className="font-medium text-base w-full text-center hover:text-white hover:bg-blue-600 hover:rounded-lg transition-all py-2"
          >
            Contato
          </Link>
          <Link
            href="#especialists"
            onClick={closeMenu}
            className="font-medium text-base w-full text-center hover:text-white hover:bg-blue-600 hover:rounded-lg transition-all py-2"
          >
            Especialistas
          </Link>
          <Link
            href="#faq"
            onClick={closeMenu}
            className="font-medium text-base w-full text-center hover:text-white hover:bg-blue-600 hover:rounded-lg transition-all py-2"
          >
            FAQ
          </Link>
          <button className="bg-blue-600 text-white rounded-xl px-8 py-4 font-semibold hover:bg-blue-500 transition-all w-full mt-5">
            Agendar
          </button>
        </div>
      )}
    </header>
  );
}
