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
                <p className="normal-text max-w-4xl mx-auto text-left">
                    Un style <strong>simple</strong>, <strong>clair</strong>, et <strong>reconnaissable</strong> en un clin d’œil.<br/><br/>
                    Chez <strong>NewCrea</strong>, nous concevons des identités visuelles modernes, épurées, et adaptées à tous les supports : site web, réseaux sociaux, cartes de visite, enseignes...
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
                <p className="max-w-4xl mx-auto normal-text text-left">
                    Nos créations sont optimisées pour être <strong>lisibles</strong> et <strong>impactantes</strong>, même en petit format.
                    Elles s’adaptent à <strong>tous les contextes</strong> : impression, web, écrans mobiles ou affichage vitrine.
                </p>
            </section>

            <CTA
                title="Besoin d’une identité visuelle ?"
                desc="Créons ensemble une identité visuelle qui marquera les esprits. Un logo professionnel, moderne et adapté à votre image."
                route="/contact"
                cta="Discutons-en"
            />
        </>
    );
};

export default CreationLogo;
