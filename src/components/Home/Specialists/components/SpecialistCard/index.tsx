import { Linkedin } from "lucide-react";
import Image from "next/image";

interface SpecialistCardProps {
  name: string;
  role: string;
  image: string;
}

export default function SpecialistCard({
  name,
  role,
  image,
}: SpecialistCardProps) {
  return (
    <div className="h-80 flex w-full relative">
      <Image
        src={image}
        alt="Doctor"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute flex flex-col justify-between h-80 w-full">
        <Linkedin size={24} className="text-blue-600 m-4" />
        <div className="p-4 m-4 rounded-lg flex flex-col text-white bg-blue-500">
          <h3 className="font-semibold text-xl">{name}</h3>
          <p className="text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}
