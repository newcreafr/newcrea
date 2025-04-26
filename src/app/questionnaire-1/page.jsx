import H1 from "@/components/H1";

export const metadata = {
    title: "Questionnaire - Site web ou pas ? Ce qui influence vos choix",
    description: "Ce formulaire a pour objectif de comprendre si (et comment) un site internet influence la décision de se rendre dans un lieu physique.",
    robots: "noindex, nofollow",
};

const Questionnaire1 = () => {
    return (
        <section className="px-4 mb-32">
            <div className="max-w-5xl mx-auto">
                <H1>Site web ou pas ? Ce qui influence vos choix</H1>

                <div className="mt-10 bg-white border border-paletteColor2 rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScSObUM3WZxdxbMbmZ4wlB9NYjcoVui7nJ2m5dXlz51N51MpA/viewform?embedded=true"
                        className="w-full min-h-[1800px] sm:min-h-[2000px] md:min-h-[2200px]"
                        title="Formulaire - Influence du site web"
                        loading="lazy"
                    >
                        Chargement…
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Questionnaire1;
