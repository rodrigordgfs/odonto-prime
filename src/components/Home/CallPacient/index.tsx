import { Phone } from "lucide-react";
import Image from "next/image";

export default function CallPacient() {
  return (
    <div className="py-16 flex flex-col md:flex-row items-center gap-10 md:gap-20">
      <div className="flex-1 flex flex-col gap-10">
        <h2 className="font-semibold text-4xl text-center md:text-start">
          We’re welcoming new patients and can’t wait to meet you.
        </h2>
        <p className="text-lg leading-5 text-center md:text-start">
          We use only the best quality materials on the market in order to
          provide the best products to our patients, So don’t worry about
          anything and book yourself.
        </p>
        <div className="flex flex-row items-center">
          <form className="flex-1 flex flex-row max-w-[450px] w-full">
            <div className="py-4 px-5 border border-y-zinc-300 border-l-zinc-300 border-r-none rounded-l-md flex flex-row gap-4 flex-1">
              <Phone size={24} className="text-zinc-300" />
              <input
                className="bg-transparent border-none flex-1 outline-none"
                type="tel"
                placeholder="Enter your Phone Number"
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
