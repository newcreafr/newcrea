import H1 from "@/components/H1.jsx";
import CTA from "@/components/CTA.jsx";

export const metadata = {
    title: "Création d’identité visuelle • Logo & charte graphique pro",
    description: "Logo, couleurs, typographies : nous façonnons une image de marque forte, cohérente et mémorable pour votre activité.",
};

const CreationLogo = () => {
    return (
        <>
            <section className="text-center px-4">
                <H1>Création d'identité visuelle</H1>
                <p className="normal-text max-w-3xl mx-auto">
                    Un logo simple, clair, et reconnaissable en un clin d’œil.<br/>
                    Chez NewCrea, nous concevons des identités visuelles modernes, épurées, et adaptées à tous les supports : site web, réseaux sociaux, cartes de visite, enseignes...
                </p>
            </section>

            <div className="w-[90%] mx-auto max-w-[400px] mt-16 px-4">
                <img
                    src="/img/creation-identite-visuelle.svg"
                    alt="Illustration création d'identité visuelle"
                    className="w-full h-auto"
                    loading="lazy"
                />
            </div>

            <section className="text-center px-4">
                <h2>Des logos polyvalents, pensés pour durer</h2>
                <p className="max-w-2xl mx-auto normal-text">
                    Nos créations sont optimisées pour être lisibles et impactantes, même en petit format.
                    Elles s’adaptent à tous les contextes : impression, web, écrans mobiles ou affichage vitrine.
                </p>
            </section>

            <section className="text-center px-4">
                <h2>Des exemples à venir</h2>
                <p className="max-w-2xl mx-auto normal-text">
                    La page dédiée à nos réalisations sera bientôt en ligne.
                    Vous pourrez y retrouver nos derniers projets de logos clients.
                </p>
            </section>

            <CTA
                title="Besoin d’un logo impactant ?"
                desc="Créons ensemble une identité visuelle qui marquera les esprits. Un logo professionnel, moderne et adapté à votre image."
                route="/contact"
                cta="Faites une demande"
            />
        </>
    );
};

export default CreationLogo;
