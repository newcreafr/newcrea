import H1 from "@/components/H1.jsx";
import CTA from "@/components/CTA.jsx";

const CreationSite = () => {
    return (
        <>
            <section>
                <H1>Création de site web</H1>
                <p className="text-center">Description création de site web ...</p>
            </section>
            <section>
                <div className="text-center">
                    <h2>Les avantages d'avoir un site web</h2>
                    <p>Section vide pour le moment</p>
                </div>
            </section>
            <section>
                <div className="text-center">
                    <h2>Obtenez des subventions pour la création de votre site</h2>
                    <p>Section vide pour le moment</p>
                </div>
            </section>
            <CTA
                title="Intéressé(e) par un site web ?"
                desc="Description ..."
                route="/contact"
                cta="Faites une demande"
                note=""
            />
        </>
    );
};

export default CreationSite;