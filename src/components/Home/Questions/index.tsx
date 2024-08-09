import FAQ from "./components/FAQ";

const questions = [
  {
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites.",
  },
  {
    question: "What is Tailwind CSS?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for creating custom designs without having to write CSS from scratch.",
  },
  {
    question: "How do I install Tailwind CSS?",
    answer:
      "You can install Tailwind CSS by following the official documentation at tailwindcss.com/docs/installation.",
  },
];

export default function Questions() {
  return (
    <div className="my-20 flex flex-col items-center">
      <h2 className="font-semibold text-4xl text-center">
        Frequently Ask Question
      </h2>
      <p className="leading-5 max-w-[500px] w-full text-center mt-5 mb-10">
        We use only the best quality materials on the market in order to provide
        the best products to our patients.
      </p>
      <FAQ questions={questions} />
    </div>
  );
}
