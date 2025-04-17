import H1 from "@/components/H1.jsx";
import CTA from "@/components/CTA.jsx";

const CreationSite = () => {
    return (
        <>
            <section className="text-center px-4">
                <H1>Création de site web sur-mesure</H1>
                <p className="normal-text max-w-3xl mx-auto">
                    Un <strong>site internet</strong> bien pensé, ce n’est pas juste une vitrine.<br/>
                    C’est un <strong>véritable levier</strong> pour faire grandir votre activité : attirer de nouveaux clients, rassurer vos prospects et affirmer votre présence en ligne.<br/><br/>
                    Chez <strong>NewCrea</strong>, on conçoit des sites sur mesure, pensés pour être utiles, efficaces et vraiment alignés avec ce que vous êtes.
                </p>
            </section>

            <div className="px-4 w-[90%] mx-auto max-w-[400px] mt-16">
                <img
                    src="/img/creation-site-web.svg"
                    alt="Illustration création de site web"
                    className="w-full h-auto"
                    loading="lazy"
                />
            </div>

            <section className="text-center px-4">
                <h2>
                    Pourquoi avoir un site web ?
                </h2>

                <p className="normal-text font-semibold">
                    Être visible, gagner du temps, inspirer confiance.
                </p>

                <p className="normal-text  mt-2 mb-4">
                    Avoir un site web, c’est :
                </p>

                <ul className="max-w-xl mx-auto grid gap-3 text-left">
                    <li className="flex items-start gap-3 small-text">
                        <span className="text-green-500 text-xl">✔</span>
                        Être facilement trouvé sur les moteurs de recherche
                    </li>
                    <li className="flex items-start gap-3 small-text">
                        <span className="text-green-500 text-xl">✔</span>
                        Présenter vos services de manière claire et professionnelle
                    </li>
                    <li className="flex items-start gap-3 small-text">
                        <span className="text-green-500 text-xl">✔</span>
                        Renforcer votre crédibilité
                    </li>
                    <li className="flex items-start gap-3 small-text">
                        <span className="text-green-500 text-xl">✔</span>
                        Simplifier la prise de contact ou de rendez-vous
                    </li>
                    <li className="flex items-start gap-3 small-text">
                        <span className="text-green-500 text-xl">✔</span>
                        Être accessible partout : mobile, tablette, ordinateur
                    </li>
                </ul>
            </section>


            <section className="text-center px-4">
                <h2>
                    Des aides pour réduire vos coûts
                </h2>

                <div className="max-w-2xl mx-auto space-y-4">
                    <p className="normal-text">
                        Saviez-vous qu’il existe des subventions pour financer une partie de votre site web ?
                        Vous pouvez bénéficier d’aides régionales, de crédits d’impôt ou encore de dispositifs publics
                        pour soutenir votre présence en ligne.
                    </p>

                    <p className="normal-text">
                        Chez NewCrea, on vous aide à identifier ces aides et à en profiter facilement.
                        Un formulaire gratuit et sans engagement vous permettra bientôt de tester votre éligibilité en
                        quelques clics.
                    </p>
                    <br/>
                    <p className="normal-text">
                        Le formulaire est en cours de création et sera bientôt disponible.
                    </p>
                </div>
            </section>

            <CTA
                title="Vous avez un projet de site web ?"
                route="/contact"
                cta="Discutons-en"
            />
        </>
    );
};

export default CreationSite;
