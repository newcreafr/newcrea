import H1 from "@/components/H1.jsx";
import CTA from "@/components/CTA.jsx";

const CreationLogo = () => {
    return (
        <>
            <section className="text-center">
                <H1>Création de logo</H1>
                <p className="normal-text mt-6 max-w-3xl mx-auto">
                    Un logo simple, clair, et reconnaissable en un clin d’œil.<br/>
                    Chez NewCrea, nous concevons des identités visuelles modernes, épurées, et adaptées à tous les supports : site web, réseaux sociaux, cartes de visite, enseignes...
                </p>
            </section>

            <div className="w-[90%] mx-auto max-w-[400px] my-20">
                <img
                    src="/img/creation-logo.svg"
                    alt="Illustration création de logo"
                    className="w-full h-auto"
                    loading="lazy"
                />
            </div>

            <section className="text-center py-16">
                <h2>Des logos polyvalents, pensés pour durer</h2>
                <p className="max-w-2xl mx-auto normal-text">
                    Nos créations sont optimisées pour être lisibles et impactantes, même en petit format.
                    Elles s’adaptent à tous les contextes : impression, web, écrans mobiles ou affichage vitrine.
                </p>
            </section>

            <section className="text-center py-16">
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
