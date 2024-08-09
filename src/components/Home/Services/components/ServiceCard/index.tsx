import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <div className="rounded-lg py-6 px-8 bg-white flex flex-col items-center justify-center gap-4">
      <Image src={image} alt="Canal Threatment" width={70} height={70} />
      <h3 className="font-medium text-2xl text-center">{title}</h3>
      <p className="text-lg text-center leading-5">{description}</p>
      <div className="flex flex-row items-center gap-3 group cursor-pointer">
        <p className="underline font-semibold group-hover:text-blue-600">
          Learn More
        </p>
        <div className="rounded-full border-2 border-zinc-950 p-1 group-hover:border-blue-600">
          <ChevronRight size={18} className="group-hover:text-blue-600" />
        </div>
      </div>
    </div>
  );
}
