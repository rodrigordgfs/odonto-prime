import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col items-center py-5 px-10 bg-[#E6F6FE] rounded-lg mb-10">
      <Image
        priority
        src="/logo.svg"
        alt="Odonto Prime"
        width={200}
        height={113}
      />
      <div className="w-full h-[1px] my-4 bg-blue-600" />
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-5">
        <p className="text-sm font-medium text-center">
          Todos os direitos reservados © Feito com ❤️ por{" "}
          <a
            className="font-semibold hover:text-blue-600 transition-all"
            target="_blank"
            href="https://shinodalabs.com.br"
          >
            Shinoda Labs
          </a>
        </p>
        <ul className="flex flex-row items-center gap-2">
          <li className="rounded-full bg-blue-600 h-7 w-7 flex items-center justify-center hover:bg-blue-400 transition-all">
            <a target="_blank" href="https://www.instagram.com/shinodalabs">
              <Instagram size={18} color="#fff" />
            </a>
          </li>
          <li className="rounded-full bg-blue-600 h-7 w-7 flex items-center justify-center hover:bg-blue-400 transition-all">
            <a target="_blank" href="https://www.linkedin.com/in/shinoda-labs/">
              <Linkedin size={18} color="#fff" />
            </a>
          </li>
          <li className="rounded-full bg-blue-600 h-7 w-7 flex items-center justify-center hover:bg-blue-400 transition-all">
            <a target="_blank" href="mailto:shinodalabs@gmail.com">
              <Mail size={18} color="#fff" />
            </a>
          </li>
          <li className="rounded-full bg-blue-600 h-7 w-7 flex items-center justify-center hover:bg-blue-400 transition-all">
            <a target="_blank" href="https://wa.me/5551996236798">
              <Phone size={18} color="#fff" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
