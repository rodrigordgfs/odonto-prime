"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SpecialistCard from "./components/SpecialistCard";

const specialists = [
  {
    id: "9786dca4-4860-4ac5-8500-9f254461f548",
    name: "Dr. Lucas Almeida",
    role: "Ortodontia",
    image: "/doctor-1.jpg",
  },
  {
    id: "9786dca4-4860-4ac5-8500-9f254461f548",
    name: "Dr. Eduardo Silva",
    role: "Periodontia",
    image: "/doctor-2.jpg",
  },
  {
    id: "9786dca4-4860-4ac5-8500-9f254461f548",
    name: "Dr. Gabriel Costa",
    role: "Endodontia",
    image: "/doctor-3.jpg",
  },
  {
    id: "9786dca4-4860-4ac5-8500-9f254461f548",
    name: "Dr. Rafael Oliveira",
    role: "Implantodontia",
    image: "/doctor-4.jpg",
  },
  {
    id: "9786dca4-4860-4ac5-8500-9f254461f548",
    name: "Dr. Marcelo Pereira",
    role: "Odontopediatria",
    image: "/doctor-5.jpg",
  },
  {
    id: "9786dca4-4860-4ac5-8500-9f254461f548",
    name: "Dr. André Santos",
    role: "Estética Dentária",
    image: "/doctor-6.jpg",
  },
];

export default function Specialists() {
  return (
    <div className="rounded-xl bg-[#E6F6FE] flex flex-col justify-center p-10" id="especialists">
      <h2 className="font-semibold text-4xl text-center">
        Conheça nossos especialistas
      </h2>
      <p className="max-w-[500px] w-full leading-5 text-lg text-center mt-10 mb-20 mx-auto">
        Na Odontoprime, contamos com um time de dentistas altamente qualificados
        e dedicados a proporcionar o melhor cuidado para sua saúde bucal.
      </p>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1.15}
        spaceBetween={16}
        loop={true}
        navigation
        className="w-full h-full"
        breakpoints={{
          640: {
            slidesPerView: 1.15,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.15,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3.15,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 4.15,
            spaceBetween: 16,
          },
        }}
      >
        {specialists.map((specialist) => (
          <SwiperSlide key={specialist.id}>
            <SpecialistCard
              image={specialist.image}
              name={specialist.name}
              role={specialist.role}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
