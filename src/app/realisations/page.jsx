import H1 from "@/components/H1.jsx";
import CTA from "@/components/CTA.jsx";

const Realisations = () => {
    return (
        <>
            <section className="text-center">
                <H1>Nos réalisations</H1>
                <p className="mt-6 normal-text max-w-3xl mx-auto">
                    Des projets concrets, des résultats visibles.
                    Chez NewCrea, chaque réalisation est conçue sur mesure pour répondre aux besoins réels de nos clients.
                </p>
            </section>

            <section className="text-center">
                <h2>Bientôt en ligne</h2>
                <p className="max-w-2xl mx-auto mb-6 normal-text">
                    Cette page vous présentera prochainement nos projets les plus marquants : sites web, refontes, logos et identités visuelles.
                    L’occasion de découvrir notre travail concret, nos méthodes, et les résultats obtenus.
                </p>
                <p className="max-w-xl mx-auto normal-text">
                    Revenez bientôt pour vous inspirer ou contactez-nous directement pour en discuter.
                </p>
            </section>

            <CTA
                title="Vous avez un projet à concrétiser ?"
                desc="Faites partie de nos prochaines réalisations. Parlons de votre site, votre logo ou votre besoin digital."
                route="/contact"
                cta="Discutons ensemble"
                note="Réponse sous 24h, sans engagement"
            />
        </>
    );
};

export default Realisations;
