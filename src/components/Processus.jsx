"use client";

import { useState, useEffect } from "react";
import ProcessusStep from "./ProcessusStep.jsx";

const steps = [
  {
    num: 1,
    title: "Premier contact & découverte",
    desc:
        "Une fois votre message reçu, on vous recontacte rapidement pour convenir d’un rendez-vous. Que ce soit en visio ou autour d’un café, ce moment est fait pour poser les bases du projet.\n\n" +
        "On apprend à vous connaître, on écoute ce que vous avez en tête, et on commence à imaginer ensemble ce que pourrait devenir votre futur site.\n" +
        "C’est sur cette base qu’on pourra construire une solution adaptée à vos besoins.",
  },
  {
    num: 2,
    title: "Compréhension de vos besoins",
    desc: "C’est ici qu’on construit le cœur de votre projet.\n\n" +
        "On identifie ce qui compte vraiment pour vous : vos priorités, vos messages clés, le type de public que vous visez, et le style visuel qui vous correspond.\n\n" +
        "On vous accompagne pas à pas pour définir un site clair, cohérent et aligné avec vos objectifs.\n\n" +
        "Et si vous avez déjà un site, on vous propose un audit complet pour en tirer le meilleur et corriger le reste.",
  },
  {
    num: 3,
    title: "Maquettes personnalisées et retours",
    desc: "À partir de tout ce qu’on a défini ensemble, on vous présente une première maquette de votre futur site.\n\n" +
        "C’est une version sur-mesure, pensée pour vous permettre de vous projeter concrètement.\n\n" +
        "Vous nous partagez vos retours : textes, couleurs, disposition… on ajuste ensemble chaque détail pour coller au plus près de votre vision.",
  },
  {
    num: 4,
    title: "Développement & ajustements",
    desc: "Après validation de la maquette, on passe à la construction du site.\n\n" +
        "On développe une version fonctionnelle, performante et fidèle à vos attentes.\n\n" +
        "Vous êtes impliqué à chaque étape : on avance ensemble, on ajuste si besoin, et on finalise un site prêt à être lancé dans les meilleures conditions.",
  },
  {
    num: 5,
    title: "Livraison & mise en ligne",
    desc:
        "Une fois les derniers réglages faits, on met votre site en ligne.\n\n" +
        "Tout est prêt pour accueillir vos visiteurs : le site est visible, rapide et fonctionnel.\n\n" +
        "On prend également le temps de vous expliquer comment l’utiliser au quotidien, en toute simplicité.\n\n" +
        "Un doute, une question, une envie d’évolution ? On sera toujours là pour vous accompagner.",
  },
];

export default function Processus() {
  const [currentStep, setCurrentStep] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep - 1 + steps.length) % steps.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 100) {
      nextStep();
    } else if (touchEnd - touchStart > 100) {
      prevStep();
    }
  };

  const handleMouseDown = (e) => {
    setTouchStart(e.clientX);
  };

  const handleMouseUp = (e) => {
    const touchEnd = e.clientX;
    if (touchStart - touchEnd > 100) {
      nextStep();
    } else if (touchEnd - touchStart > 100) {
      prevStep();
    }
  };

  useEffect(() => {
    const swipeElement = document.getElementById("processus-container");

    swipeElement.addEventListener("touchstart", handleTouchStart);
    swipeElement.addEventListener("touchend", handleTouchEnd);
    swipeElement.addEventListener("mousedown", handleMouseDown);
    swipeElement.addEventListener("mouseup", handleMouseUp);

    return () => {
      swipeElement.removeEventListener("touchstart", handleTouchStart);
      swipeElement.removeEventListener("touchend", handleTouchEnd);
      swipeElement.removeEventListener("mousedown", handleMouseDown);
      swipeElement.removeEventListener("mouseup", handleMouseUp);
    };
  }, [touchStart]);

  return (
      <section className="w-full">
        <div className="bg-paletteColor1 text-center text-paletteColor3">
          <h2 id="processus" className="w-[90%] xs:w-auto">
            Un processus simple et efficace
          </h2>
          <div
              id="processus-container"
              className="mx-auto mb-10 flex w-full justify-center gap-4 overflow-hidden xs:w-full xs:max-w-[90%] xs:px-2"
          >
            <div
                className="flex transition-all duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentStep * 100}%)`,
                }}
            >
              {steps.map((step, index) => (
                  <div
                      key={index}
                      className="w-full flex-shrink-0"
                      style={{ flex: "0 0 100%" }}
                  >
                    <ProcessusStep
                        num={step.num}
                        title={step.title}
                        desc={
                            "<p>" +
                            step.desc
                                .trim()
                                .split(/\n{2,}/)
                                .map((para) => para.replace(/\n/g, " "))
                                .join("</p><p>") +
                            "</p>"
                        }
                    />
                  </div>
              ))}
            </div>
          </div>
          <div className="pb-10 flex justify-center gap-3">
            <button
                className="flex size-12 items-center justify-center rounded-full border-2 border-paletteColor3 bg-paletteColor1 text-2xl text-paletteColor3 transition-all duration-300 ease-in-out hover:border-paletteColor2 hover:text-paletteColor2"
                onClick={prevStep}
            >
              &#60;
            </button>
            <button
                className="flex size-12 items-center justify-center rounded-full border-2 border-paletteColor3 bg-paletteColor1 text-2xl text-paletteColor3 transition-all duration-300 ease-in-out hover:border-paletteColor2 hover:text-paletteColor2"
                onClick={nextStep}
            >
              &#62;
            </button>
          </div>
        </div>
      </section>
  );
}
