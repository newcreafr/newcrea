"use client";

import React, { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const questions = [
  {
    question:
        "Je n’y connais rien en création de site… est-ce que je peux quand même faire appel à vous ?",
    answer:
        "Évidemment, vous n’êtes pas censé être expert en création de site — et c’est bien pour ça qu’on est là.\n\n" +
        "On vous accompagne à chaque étape du projet, en répondant à toutes vos questions avec clarté et précision, pour que tout soit simple, compréhensible et sans surprise.",
  },
  {
    question: "Combien de temps faut-il pour créer un site ?",
    answer:
        "Le délai de création dépend surtout de la complexité de votre projet et de vos besoins spécifiques.\n\n" +
        "Un site vitrine simple peut être finalisé en quelques jours, tandis qu’un projet plus personnalisé demandera un peu plus de temps.\n\n" +
        "Dans tous les cas, on vous communique un planning clair dès le départ, et on avance avec vous étape par étape.",
  },
  {
    question: "Est-ce que je peux voir un aperçu du site avant de m’engager ?",
    answer: "Bien sûr, demander une maquette ne vous engage à rien.\n\n" +
        "Justement, elle est là pour ça : vous permettre de visualiser concrètement ce que pourrait être votre site, avant toute décision.\n\n" +
        "C’est un moyen simple de vous projeter, sans pression ni engagement.",
  },
  {
    question: "Est-ce que vous vous occupez de tout (design, texte, mise en ligne...) ?",
    answer: "Tout à fait. Selon vos besoins et ce que vous souhaitez nous confier, nous pouvons prendre en charge la création complète de votre site, de A à Z.\n\n" +
        "Que vous ayez déjà des éléments à nous transmettre ou que vous partiez de zéro, on s’adapte et on s’occupe de tout.",
  },
  {
    question: "Mon site sera-t-il visible sur Google ?",
    answer: "Oui, votre site sera bien visible sur Google.\n\n" +
        "Nous appliquons les bonnes pratiques en matière de référencement naturel (SEO) dès la création, pour que vos futurs clients puissent vous trouver facilement en ligne.",
  },
  {
    question: "Et après la mise en ligne, vous restez disponibles ?",
    answer: "Une fois votre site en ligne, on ne vous laisse pas seul.\n\n" +
        "On reste à votre disposition pour répondre à vos questions, vous accompagner si besoin, ou même faire évoluer votre site selon vos nouveaux objectifs."
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const formatAnswer = (text) => {
    return (
        "<p>" +
        text
            .trim()
            .split(/\n{2,}/)
            .map((para) => para.replace(/\n/g, " "))
            .join("</p><p>") +
        "</p>"
    );
  };

  return (
      <section>
        <div className="text-center">
          <h2  id="faq" className="scroll-mt-32">Vos questions fréquentes</h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {questions.map((item, index) => {
            const isOpen = index === activeIndex;
            const ref = (el) => (contentRefs.current[index] = el);

            return (
                <div
                    key={index}
                    className={`rounded-xl transition-all duration-300 ${
                        isOpen
                            ? "border border-[#6338e4] bg-paletteColor4"
                            : "bg-paletteColor4 border border-transparent"
                    }`}
                >
                  <button
                      onClick={() => toggle(index)}
                      className="w-full flex items-center justify-between px-5 pt-5 text-left font-medium text-paletteColor1 transition-colors duration-300 focus:outline-none normal-text"
                  >
                    <span className="flex-1">{item.question}</span>
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
                        opacity: isOpen ? 1 : 0,
                      }}
                      className="overflow-hidden px-5 pb-5 transition-[max-height,opacity] duration-300 ease-in-out"
                  >
                    <div
                        className="[&>p]:small-text text-smTextWhtColor mt-3 [&>p]:mb-3 [&>p:last-child]:mb-0"
                        dangerouslySetInnerHTML={{
                          __html: formatAnswer(item.answer),
                        }}
                    />
                  </div>

                </div>
            );
          })}
        </div>
      </section>
  );
};

export default FAQSection;
