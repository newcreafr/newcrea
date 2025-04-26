import H1 from "@/components/H1";

export const metadata = {
    title: "Questionnaire - Quel site pour votre entreprise ? Vos besoins, votre budget",
    description: "Ce formulaire vise à mieux comprendre les besoins des petites entreprises et des entrepreneurs en matière de site internet : création, refonte, budget, fonctionnalités, etc.",
    robots: "noindex, nofollow",
};

const Questionnaire2 = () => {
    return (
        <section className="px-4 mb-32">
            <div className="max-w-5xl mx-auto">
                <H1>Site web ou pas ? Ce qui influence vos choix</H1>

                <div className="mt-10 bg-white border border-paletteColor2 rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSf4i2zjgxXXc0bRsycBiRZktsHB5T0FHWlbSnhfbFh-ab9W3A/viewform?embedded=true"
                        className="w-full min-h-[1800px] sm:min-h-[1600px] md:min-h-[1400px]"
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

export default Questionnaire2;

