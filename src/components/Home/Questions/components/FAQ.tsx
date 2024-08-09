"use client";

import { useState } from "react";

type Question = {
  question: string;
  answer: string;
};

interface FAQProps {
  questions: Question[];
}

export default function FAQ({ questions }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="max-w-2xl mx-auto">
      {questions.map((question, index) => (
        <div key={index} className={`border-b border-gray-300  px-4 ${index === activeIndex ? 'text-white bg-blue-600 rounded-t-lg mt-2' : ''}`}>
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
          >
            <span className={`text-lg font-medium ${index === activeIndex ? 'font-semibold' : ''}`}>{question.question}</span>
            <svg
              className={`w-6 h-6 transform transition-transform duration-200 ${
                index === activeIndex ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-200 ${
              index === activeIndex ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="py-2">{question.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
