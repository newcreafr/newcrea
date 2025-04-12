import H1 from "@/components/H1.jsx";
import CTA from "@/components/CTA.jsx";

const CreationSite = () => {
    return (
        <>
            <section className="text-center">
                <H1>Création de site web sur-mesure</H1>
                <p className="mt-6 normal-text max-w-3xl mx-auto">
                    Un site web bien conçu, c’est plus qu’une vitrine. C’est un véritable levier de croissance pour
                    attirer de
                    nouveaux clients, rassurer vos prospects, et vous démarquer sur internet.
                </p>
            </section>

            <div className="w-[90%] mx-auto max-w-[400px] my-24">
                <img
                    src="/img/creation-site-web.svg"
                    alt="Illustration création de site web"
                    className="w-full h-auto"
                    loading="lazy"
                />
            </div>

            <section className="text-center py-16">
                <h2>Pourquoi avoir un site web ?</h2>
                <p className="max-w-2xl mx-auto normal-text">
                    Être trouvé facilement sur Google, présenter clairement vos services, renforcer votre crédibilité,
                    automatiser vos rendez-vous, être accessible depuis tous les supports (mobile, tablette,
                    ordinateur)...
                </p>
            </section>

            <section className="text-center py-16">
                <h2>Des aides pour réduire vos coûts</h2>
                <p className="max-w-xl mx-auto mb-4 normal-text">
                    Saviez-vous que des subventions peuvent couvrir une partie de votre projet web ? Vous pouvez
                    bénéficier
                    d’aides régionales, de crédits d’impôt ou de dispositifs publics pour financer votre présence en
                    ligne.
                </p>
                <p className="max-w-xl mx-auto normal-text">
                    Testez votre éligibilité gratuitement grâce à notre formulaire rapide et sans engagement.
                </p>
                <p className="max-w-xl mx-auto normal-text"><br/>Le formulaire n'est pas encore disponible.</p>
            </section>

            <CTA
                title="Intéressé(e) par un site web ?"
                desc="Discutons de votre projet et transformons votre présence en ligne."
                route="/contact"
                cta="Faites une demande"
            />
        </>
    );
};

export default CreationSite;
