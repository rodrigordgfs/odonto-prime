import { Linkedin, Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center mt-16 gap-10 md:gap-0">
      <div className="flex-1 flex flex-col">
        <h1 className="font-semibold text-4xl md:text-6xl mb-5 text-center md:text-start">
          Get ready for yout best ever dental experience!
        </h1>

        <p className="text-lg mb-10 text-center md:text-start">
          We use only the best quality materials on the market in order to
          provide the best products to our patients, So don’t worry about
          anything and book yourself.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-5 mb-10">
          <button className="bg-blue-600 w-full md:w-auto text-white rounded-xl px-8 py-4 font-semibold hover:bg-blue-500 transition-all">
            Book an appointment
          </button>
          <div className="flex flex-row justify-center gap-5">
            <div className="border-2 border-blue-600 rounded-xl p-4">
                <Phone size={24} className="text-blue-600" />
            </div>
            <div className="flex flex-col justify-center">
            <span className="font-semibold text-sm text-blue-600">
              Dental 24H Emergency
            </span>
            <span className="text-sm font-medium">+55 11 1234-5678</span>
            </div>
          </div>
        </div>

        <div className="shadow rounded-lg py-3 px-4 max-w-full md:max-w-96 w-full flex flex-col gap-3">
            <div className="flex flex-row items-center gap-2">
                <Image src="/person.png" alt="" width={40} height={40} />
                <div className="flex flex-col">
                    <span className="font-medium text-sm">Dr. John Doe</span>
                    <span className="text-xs">Dentist</span>
                </div>
                <Linkedin size={24} className="text-blue-600 ml-auto" />
            </div>
            <p className="text-sm">Top Quailty dental treatment done by field experts, Highly Recommended for everyone</p>
        </div>
      </div>
      <Image src="/hero.png" alt="Odonto Prime" width={500} height={500} className="mx-auto md:mx-0" />
    </div>
  );
}
