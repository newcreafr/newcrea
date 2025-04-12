"use client";

import React, { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const questions = [
  {
    question: "Question 1",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    question: "Question 2",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aspernatur sed eum perspiciatis...",
  },
  {
    question: "Question 3",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    question: "Question 4",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    question: "Question 5",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section>
      <div className="text-center">
        <h2 >
          Vos questions fréquentes
        </h2>
      </div>
      <div className="max-w-2xl mx-auto space-y-4">
        {questions.map((item, index) => {
          const isOpen = index === activeIndex;
          const ref = el => (contentRefs.current[index] = el);

          return (
            <div
              key={index}
              className="bg-paletteColor4 rounded-xl p-5 transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className={`w-full flex justify-between items-center text-left normal-text font-medium text-paletteColor1 transition-colors duration-300 ${
                  isOpen ? "text-paletteColor2" : ""
                }`}
              >
                <span>{item.question}</span>
                <FaChevronDown
                  className={`text-paletteColor2 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                ref={ref}
                style={{
                  maxHeight: isOpen
                    ? contentRefs.current[index]?.scrollHeight + "px"
                    : "0px",
                }}
                className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
              >
                <p className="small-text text-smTextWhtColor mt-3">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
