import H1 from "@/components/H1.jsx";
import CTA from "@/components/CTA.jsx";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Création de site web • Gagnez en visibilité",
    description: "Votre entreprise mérite mieux qu'une simple présence en ligne. Offrez-vous un site moderne, rapide et conçu pour convertir.",
};

const CreationSite = () => {
    const descriptions = {
        "Site carte de visite (one page)": "Une page unique qui présente l’essentiel : qui vous êtes, ce que vous proposez, et comment vous contacter.",
        "Site vitrine (2 à 5 pages)": "Une structure simple pour présenter vos services, votre entreprise, vos réalisations, et faciliter les prises de contact.",
        "Site standard (6 à 10 pages)": "Un site plus complet pour détailler vos services, intégrer des pages dédiées, et améliorer le référencement.",
        "Site complexe": "Pour des besoins spécifiques : e-commerce, fonctionnalités avancées, ou architecture sur mesure."
    };

    const tarifs = [
        {
            type: "Site carte de visite (one page)",
            details: [
                ["Audit de l'environnement", "100€ TTC", "Analyse et recueil de vos besoins"],
                ["Réalisation des maquettes", "100€ TTC", "Organisation du contenu et design du site"],
                ["Développement", "300€ TTC", "Construction du site, choix des technologies, SEO et optimisation"],
                ["Hébergement pour la première année (optionnel)", "150€ TTC", "Nom de domaine, serveur, configuration"],
                ["Création d'identité visuelle (optionnel)", "Voir section dédiée", "Logo, charte graphique, signature d'email sur mesure"],
                ["Pack création de site one page", "600€ TTC", "Comprend tous les éléments précédents"],
            ],
        },
        {
            type: "Site vitrine (2 à 5 pages)",
            details: [
                ["Audit de l'environnement", "150€ TTC", "Analyse et recueil de vos besoins"],
                ["Réalisation des maquettes", "400€ TTC", "Organisation du contenu et design du site"],
                ["Développement", "750€ TTC", "Construction du site, choix des technologies, SEO et optimisation"],
                ["Hébergement pour la première année (optionnel)", "150€ TTC", "Nom de domaine, serveur, configuration"],
                ["Création d'identité visuelle (optionnel)", "Voir section dédiée", "Logo, charte graphique, signature d'email sur mesure"],
                ["Pack création de site vitrine", "1300€ TTC", "Comprend tous les éléments précédents"],
            ],
        },
        {
            type: "Site standard (6 à 10 pages)",
            details: [
                ["Audit de l'environnement", "200€ TTC", "Analyse et recueil de vos besoins"],
                ["Réalisation des maquettes", "500€ TTC", "Organisation du contenu et design du site"],
                ["Développement", "1300€ TTC", "Construction du site, choix des technologies, SEO et optimisation"],
                ["Hébergement pour la première année (optionnel)", "150€ TTC", "Nom de domaine, serveur, configuration"],
                ["Création d'identité visuelle (optionnel)", "Voir section dédiée", "Logo, charte graphique, signature d'email sur mesure"],
                ["Pack création de site standard", "2000€ TTC", "Comprend tous les éléments précédents"],
            ],
        },
        {
            type: "Site complexe",
            details: [
                ["Pack création de site complexe", "À partir de 2500€ TTC", "Sur devis selon le besoin"],
            ],
        },
    ];

    return (
        <>
            <section className="text-left px-4">
                <H1>Création de site web sur-mesure</H1>
                <p className="normal-text max-w-4xl mx-auto">
                    Un <strong>site internet</strong> bien pensé, ce n’est pas juste une vitrine.
                    C’est un <strong>véritable levier</strong> pour faire grandir votre activité : attirer de nouveaux clients, rassurer vos prospects et affirmer votre présence en ligne.<br/><br/>
                    Chez <strong>NewCrea</strong>, on conçoit des sites sur mesure, pensés pour être utiles, efficaces et vraiment alignés avec ce que vous êtes.
                </p>
            </section>

            <div className="px-4 w-[90%] mx-auto max-w-[400px] mt-16">
                <Image src="/img/creation-site-web.svg" alt="Illustration création de site web" width={400} height={300} loading="lazy" />
            </div>

            <section className="text-center px-4">
                <h2>Pourquoi avoir un site web ?</h2>

                <p className="normal-text font-semibold">
                    Être visible, gagner du temps, inspirer confiance.
                </p>

                <p className="normal-text mt-2 mb-4">
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

            <section className="px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h2>Tarifs pour la création de site web</h2>
                </div>
                <div className="text-center max-w-4xl mx-auto mb-8">
                    <h3>Bon à savoir</h3>
                    <p className="normal-text text-left">
                        Certains éléments peuvent être <strong>déduits du montant total</strong> si vous les avez déjà préparés en amont (vous-même ou un expert) :
                    </p>

                    <ul className="list-disc pl-5 mt-4 text-left space-y-2 small-text">
                        <li>
                            <strong>Audit de votre environnement</strong> : vos besoins en matière de design et de contenu sont déjà formalisés, clairs et structurés.
                        </li>
                        <li>
                            <strong>Réalisation des maquettes</strong> : vous disposez de maquettes détaillées de chaque page, adaptées aux écrans ordinateur et mobile.
                        </li>
                    </ul>
                </div>
                <div className="space-y-6 max-w-4xl mx-auto">
                    {tarifs.map(({type, details}, i) => (
                        <div key={i}>
                            <div className="text-center">
                                <h3>{type}</h3>
                                {descriptions[type] && (
                                    <p className="small-text text-smTextWhtColor mt-1 max-w-2xl mx-auto">{descriptions[type]}</p>
                                )}
                            </div>
                            <div className="space-y-4 mt-4">
                                {details.map(([label, price, desc], idx) => (
                                    <div
                                        key={`${i}-${idx}`}
                                        className="flex justify-between border-b border-paletteColor2 pb-2"
                                    >
                                        <div className="w-full">
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium small-text">{label}</span>
                                                <span className="font-bold small-text text-right">{price}</span>
                                            </div>
                                            <p className="text-sm text-smTextWhtColor mt-1">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="text-center px-4 mt-16">
                <h2>Des aides pour réduire vos coûts</h2>

                <div className="max-w-4xl mx-auto text-left flex flex-col items-center">
                    <p className="normal-text mb-8">
                        Saviez-vous qu’il existe des <strong>aides</strong> pour financer la création de votre site web ?
                        Vous pouvez bénéficier d’aides régionales, de crédits d’impôt ou encore de dispositifs publics pour soutenir votre présence en ligne.
                    </p>

                    <Link
                        href="/aides/"
                        className="inline-block normal-text text-center text-balance rounded-full border-2 border-paletteColor1 bg-white px-6 py-3 text-paletteColor1 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-paletteColor1 hover:text-paletteColor3"
                    >
                        Consulter les aides
                    </Link>
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
