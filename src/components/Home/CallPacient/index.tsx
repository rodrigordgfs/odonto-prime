import { Phone } from "lucide-react";
import Image from "next/image";

export default function CallPacient() {
  return (
    <div className="py-16 px-10 flex flex-col md:flex-row items-center gap-10 md:gap-20" id="contact">
      <div className="flex-1 flex flex-col gap-10">
        <h2 className="font-semibold text-4xl text-center md:text-start">
          Estamos recebendo novos pacientes e mal podemos esperar para
          conhecê-lo.
        </h2>
        <p className="text-lg leading-5 text-center md:text-start">
          Na Odontoprime, estamos entusiasmados em receber novos pacientes e
          fazer parte da sua jornada para uma saúde bucal excelente. Nossa
          equipe dedicada está pronta para oferecer um atendimento personalizado
          e acolhedor, garantindo que cada visita seja confortável e eficaz.
        </p>
        <div className="flex flex-row items-center">
          <form className="flex-1 flex flex-row max-w-[450px] w-full">
            <div className="py-4 px-5 border border-y-zinc-300 border-l-zinc-300 border-r-none rounded-l-md flex flex-row gap-4 flex-1">
              <Phone size={24} className="text-zinc-300" />
              <input
                className="bg-transparent border-none flex-1 outline-none min-w-28 w-full"
                type="tel"
                placeholder="Telefone"
              />
            </div>
            <button className="bg-blue-600 w-full md:w-auto text-white rounded-r-xl px-8 py-4 font-semibold hover:bg-blue-500 transition-all">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <Image src="/client.png" alt="" width={400} height={400} />
    </div>
  );
}
