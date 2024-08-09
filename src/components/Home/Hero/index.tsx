"use client";

import { Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const rates = [
  {
    image: "/person.png",
    name: "Dr. Lucas Almeida",
    job: "Ortodontia",
    linkedin: "https://www.linkedin.com",
    description:
      "Tratamento odontológico de alta qualidade feito por especialistas da área, altamente recomendado para todos",
  },
  {
    image: "/person.png",
    name: "Dr. Eduardo Silva",
    job: "Periodontia",
    linkedin: "https://www.linkedin.com",
    description:
      "Especialista em aparelho ortodôntico e alinhamento de dentes, proporcionando atendimento de primeira linha.",
  },
  {
    image: "/person.png",
    name: "Dr. Rafael Oliveira",
    job: "Implantodontia",
    linkedin: "https://www.linkedin.com",
    description:
      "Especializada em saúde gengival e prevenção de doenças periodontais.",
  },
  {
    image: "/person.png",
    name: "Dr. Marcelo Pereira",
    job: "Odontopediatria",
    linkedin: "https://www.linkedin.com",
    description: "Hábil em cirurgias e tratamentos bucais complexos.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const currentRate = rates[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rates.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center mb-16 mt-10 gap-10 md:gap-0">
      <div className="flex-1 flex flex-col py-10">
        <h1 className="font-semibold text-3xl md:text-5xl mb-5 text-center md:text-start">
          Prepare-se para sua melhor experiência odontológica de todos os
          tempos!
        </h1>

        <p className="text-lg mb-10 text-center md:text-start leading-5">
          estamos comprometidos em proporcionar um atendimento excepcional e
          personalizado que vai além das suas expectativas.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-5 mb-10">
          <button className="bg-blue-600 w-full md:w-auto text-white rounded-xl px-8 py-4 font-semibold hover:bg-blue-500 transition-all">
            Marque uma consulta
          </button>
          <div className="flex flex-row justify-center gap-5">
            <div className="border-2 border-blue-600 rounded-xl p-4">
              <Phone size={24} className="text-blue-600" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-semibold text-sm text-blue-600">
                Emergência Odontológica 24H
              </span>
              <span className="text-sm font-medium">+55 11 1234-5678</span>
            </div>
          </div>
        </div>

        <motion.div
          className="shadow rounded-lg py-3 px-4 max-w-full md:max-w-96 w-full flex flex-col gap-3"
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-row items-center gap-2">
            <Image src={currentRate.image} alt="" width={40} height={40} />
            <div className="flex flex-col">
              <span className="font-medium text-sm">{currentRate.name}</span>
              <span className="text-xs">{currentRate.job}</span>
            </div>
            <a
              href={currentRate.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} className="text-blue-600 ml-auto" />
            </a>
          </div>
          <p className="text-sm">{currentRate.description}</p>
        </motion.div>
      </div>
      <Image
        src="/hero.png"
        alt="Odonto Prime"
        width={500}
        height={500}
        className="hidden md:block"
      />
    </div>
  );
}
