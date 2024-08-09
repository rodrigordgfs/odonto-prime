import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ServiceCard from "./components/ServiceCard";

const services = [
  {
    id: "9786dca4-4860-4ac5-8500-9f254461f548",
    title: "Root Canal Treatment",
    description:
      "Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.",
    image: "/canal.png",
  },
  {
    id: "d9b1b1c2-5f7e-4b3d-8a4d-8e5b3b4f7a4f",
    title: "Cosmetic Dentist",
    description:
      "Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.",
    image: "/cosmetic.png",
  },
  {
    id: "f3e7a1d1-8b8e-4d8f-8c8f-8b8e4d8f8c8f",
    title: "Dental Implants",
    description:
      "A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.",
    image: "/implants.png",
  },
];

export default function Services() {
  return (
    <div className="bg-[#E6F6FE] p-10 grid grid-cols-1 md:grid-cols-3 gap-6 rounded-xl">
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
