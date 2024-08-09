import FAQ from "./components/FAQ";

const questions = [
  {
    question: "Quais são os horários de funcionamento da clínica Odontoprime?",
    answer:
      "A Odontoprime está aberta de segunda a sexta-feira, das 8h às 18h, e aos sábados, das 8h às 14h. Estamos fechados aos domingos.",
  },
  {
    question: "Preciso de um agendamento para uma consulta?",
    answer:
      "Sim, é necessário agendar uma consulta para garantir um horário com um de nossos dentistas. Você pode agendar pelo telefone, pelo nosso site ou diretamente na clínica.",
  },
  {
    question: "Qual é a política de cancelamento de consultas?",
    answer:
      "Se você precisar cancelar ou remarcar uma consulta, pedimos que o faça com pelo menos 24 horas de antecedência para evitar taxas de cancelamento. Por favor, entre em contato conosco o mais rápido possível para informar sobre qualquer mudança.",
  },
  {
    question: "A clínica oferece tratamentos de ortodontia?",
    answer:
      "Sim, a Odontoprime oferece uma variedade de tratamentos ortodônticos, incluindo aparelhos fixos e invisíveis. Nossos especialistas podem avaliar sua necessidade e recomendar o melhor tratamento para você.",
  },
  {
    question: "Vocês aceitam convênios odontológicos?",
    answer:
      "Sim, aceitamos diversos convênios odontológicos. Para confirmar se o seu plano é aceito, entre em contato conosco com as informações do seu convênio, e verificaremos as condições para o atendimento.",
  },
];

export default function Questions() {
  return (
    <div className="my-20 flex flex-col items-center" id="faq">
      <h2 className="font-semibold text-4xl text-center">
        Perguntas frequentes
      </h2>
      <p className="leading-5 max-w-[500px] w-full text-center mt-5 mb-10">
        Utilizamos apenas materiais da melhor qualidade do mercado para fornecer
        os melhores produtos para nossos pacientes.
      </p>
      <FAQ questions={questions} />
    </div>
  );
}
