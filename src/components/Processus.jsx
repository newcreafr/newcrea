import  { useState, useEffect } from "react";
import ProcessusStep from "./ProcessusStep.jsx";

const steps = [
  {
    num: 1,
    title:
      "Visualisez votre futur site et obtenez un audit gratuit de votre site actuel !",
    desc: "Vous avez une idée de votre futur site ? Nous vous proposons une maquette sur mesure et un audit UX de votre site actuel. Tout ça, gratuitement et sans engagement. Voyez comment nous pouvons améliorer votre présence en ligne !",
  },
  {
    num: 2,
    title: "Collaborez pour définir un site qui vous ressemble",
    desc: "Ensemble, nous clarifions vos besoins et objectifs. Que vous souhaitiez un site vitrine, un site e-commerce ou un blog, nous créons une stratégie sur mesure pour donner vie à votre projet digital.",
  },
  {
    num: 3,
    title: "Création sur-mesure : de l'idée à la réalité",
    desc: "Nous passons à la phase de conception et de développement, en mettant l'accent sur un design moderne, une navigation fluide et une expérience utilisateur optimale. Votre site sera conçu pour performer dès le premier jour.",
  },
  {
    num: 4,
    title: "Validez votre site et ajustez les détails",
    desc: "Nous revenons vers vous à chaque étape clé pour valider les choix réalisés et ajuster selon vos retours. Nous nous assurons que chaque détail correspond exactement à vos attentes avant la mise en ligne.",
  },
  {
    num: 5,
    title: "Votre site est prêt : prêt à performer !",
    desc: "Une fois validé, nous déployons votre site et vous le livrons clé en main. Vous bénéficiez désormais d'un site performant, optimisé et prêt à propulser votre activité en ligne !",
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
    <section>
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
                  desc={step.desc}
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
