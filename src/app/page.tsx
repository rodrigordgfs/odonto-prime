import Hero from "@/components/Home/Hero";
import Header from "../components/shared/Header";
import Services from "@/components/Home/Services";
import CallPacient from "@/components/Home/CallPacient";
import Specialists from "@/components/Home/Specialists";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <CallPacient />
      <Specialists />
    </main>
  );
}
