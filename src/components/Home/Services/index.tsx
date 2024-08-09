import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ServiceCard from "./components/ServiceCard";

const services = [
  {
    id: "9786dca4-4860-4ac5-8500-9f254461f548",
    title: "Tratamento de Canal",
    description:
      "O tratamento de canal radicular (endodontia) é um procedimento odontológico usado para tratar infecções no centro de um dente.",
    image: "/canal.png",
  },
  {
    id: "d9b1b1c2-5f7e-4b3d-8a4d-8e5b3b4f7a4f",
    title: "Odontologia Estética",
    description:
      "A odontologia estética é o ramo da odontologia que se concentra em melhorar a aparência do seu sorriso.",
    image: "/cosmetic.png",
  },
  {
    id: "f3e7a1d1-8b8e-4d8f-8c8f-8b8e4d8f8c8f",
    title: "Implantes Dentários",
    description:
      "Um implante dentário é uma raiz de dente artificial colocada na mandíbula para segurar uma prótese dentária ou ponte.",
    image: "/implants.png",
  },
];

export default function Services() {
  return (
    <div className="bg-[#E6F6FE] p-10 grid grid-cols-1 md:grid-cols-3 gap-6 rounded-xl" id="services">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          image={service.image}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}
