import H1 from "@/components/H1.jsx";
import CTA from "@/components/CTA.jsx";
import Image from "next/image";

export const metadata = {
    title: "Refonte de site web à Nancy • Modernisez votre présence en ligne",
    description: "Votre site est lent ou dépassé ? Nous le repensons entièrement pour en faire un outil clair, moderne et performant.",
};

const RefonteSite = () => {
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
                ["Refonte", "150€ TTC", "Redéveloppement et optimisation"],
                ["Création d'identité visuelle (optionnel)", "Voir section dédiée", "Logo, charte, signature (optionnelnel)"],
                ["Pack refonte de site one page", "250€ TTC", "Comprend tous les éléments précédents"],
            ],
        },
        {
            type: "Site vitrine (2 à 5 pages)",
            details: [
                ["Audit du site actuel", "100€ TTC", "Évaluation de l'UX/UI et des performances"],
                ["Réalisation des maquettes", "200€ TTC", "Nouveau design + réorganisation"],
                ["Refonte", "400€ TTC", "Redéveloppement et optimisation"],
                ["Création d'identité visuelle (optionnel)", "Voir section dédiée", "Logo, charte, signature (optionnelnel)"],
                ["Pack refonte de site vitrine", "700€ TTC", "Comprend tous les éléments précédents"],
            ],
        },
        {
            type: "Site standard (6 à 10 pages)",
            details: [
                ["Audit du site actuel", "150€ TTC", "Évaluation de l'UX/UI et des performances"],
                ["Réalisation des maquettes", "250€ TTC", "Nouveau design + réorganisation"],
                ["Refonte", "700€ TTC", "Redéveloppement et optimisation"],
                ["Création d'identité visuelle (optionnel)", "Voir section dédiée", "Logo, charte, signature (optionnelnel)"],
                ["Pack refonte de site standard", "1100€ TTC", "Comprend tous les éléments précédents"],
            ],
        },
        {
            type: "Site complexe",
            details: [
                ["Pack refonte de site complexe", "À partir de 1800€ TTC", "Sur devis selon le besoin"],
            ],
        },
    ];

    return (
        <>
            <section className="text-left px-4">
                <H1>Refonte de site web</H1>
                <p className="normal-text max-w-4xl mx-auto">
                    Ce que vos visiteurs voient en ligne, c’est ce qu’ils pensent de vous.
                    Un site mal conçu peut nuire à votre <strong>crédibilité</strong>, même si votre travail est excellent.<br/><br/>
                    Chez <strong>NewCrea</strong>, on reconstruit votre site avec un design moderne, une navigation claire et un message qui inspire confiance.
                </p>
            </section>

            <div className="w-[90%] mx-auto max-w-[400px] mt-16 px-4">
                <Image src="/img/refonte-site-web.svg" alt="Illustration refonte de site web" width={400} height={300} loading="lazy"/>
            </div>

            <section className="text-center px-4">
                <h2>Pourquoi envisager une refonte ?</h2>
                <p className="max-w-4xl mx-auto mb-12 normal-text text-left">
                    Si votre site donne une <strong>mauvaise impression</strong>, c’est votre entreprise que l’on juge.
                    Un design daté, une navigation confuse ou une mauvaise adaptation mobile peuvent vous faire <strong>perdre des opportunités</strong>.<br/>
                    Une refonte permet de repartir sur des bases solides, alignées avec vos objectifs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                    <div className="bg-white rounded-lg p-6 border border-borderColor">
                        <h3 className="normal-text font-semibold text-red-700 mb-4">Les risques d’un site obsolète</h3>
                        <ul className="space-y-3 ">
                            <li className="flex items-start gap-2 small-text">
                                <span className="text-red-500 text-xl select-none">✖</span>
                                Une perte de crédibilité auprès de vos visiteurs
                            </li>
                            <li className="flex items-start gap-2 small-text">
                                <span className="text-red-500 text-xl select-none">✖</span>
                                Une navigation difficile, notamment sur mobile
                            </li>
                            <li className="flex items-start gap-2 small-text">
                                <span className="text-red-500 text-xl select-none">✖</span>
                                Un mauvais référencement sur les moteurs de recherche
                            </li>
                            <li className="flex items-start gap-2 small-text">
                                <span className="text-red-500 text-xl select-none">✖</span>
                                Moins de prospects… et plus de place laissée à vos concurrents
                            </li>
                            <li className="flex items-start gap-2 small-text">
                                <span className="text-red-500 text-xl select-none">✖</span>
                                Un site potentiellement non sécurisé ou non conforme
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg p-6 border border-borderColor">
                        <h3 className="normal-text font-semibold text-green-700 mb-4">Ce que nous améliorons</h3>
                        <ul className="space-y-3 ">
                            <li className="flex items-start gap-2 small-text">
                                <span className="text-green-500 text-xl select-none">✔</span>
                                Une navigation fluide et agréable pour vos visiteurs
                            </li>
                            <li className="flex items-start gap-2 small-text">
                                <span className="text-green-500 text-xl select-none">✔</span>
                                Un site rapide, responsive et performant
                            </li>
                            <li className="flex items-start gap-2 small-text">
                                <span className="text-green-500 text-xl select-none">✔</span>
                                Un design clair, moderne et professionnel
                            </li>
                            <li className="flex items-start gap-2 small-text">
                                <span className="text-green-500 text-xl select-none">✔</span>
                                Une meilleure visibilité sur les moteurs de recherche (SEO)
                            </li>
                            <li className="flex items-start gap-2 small-text">
                                <span className="text-green-500 text-xl select-none">✔</span>
                                Une image cohérente avec votre entreprise actuelle
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="px-4 mt-16">
                <div className="text-center max-w-4xl mx-auto">
                    <h2>Tarifs pour la refonte de site web</h2>
                </div>

                <div className="text-center max-w-4xl mx-auto mb-8">
                    <h3>Bon à savoir</h3>
                    <p className="normal-text text-left">
                        Certains éléments peuvent être <strong>déduits du montant total</strong> si vous les avez déjà
                        préparés en amont (vous-même ou un expert) :
                    </p>
                    <ul className="list-disc pl-5 mt-4 text-left space-y-2 small-text">
                        <li>
                            <strong>Audit de votre site actuel</strong> : les défauts du site actuel sont identifiés et vos besoins sont clairs
                        </li>
                        <li>
                            <strong>Réalisation des maquettes</strong> : vous disposez d’un aperçu détaillé pour ordinateur et mobile
                        </li>
                    </ul>
                </div>

                <div className="space-y-6 max-w-4xl mx-auto">
                    {tarifs.map(({ type, details }, i) => (
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
                <h2>Votre site est-il dépassé ?</h2>
                <p className="normal-text max-w-4xl mx-auto mb-8 text-left">
                    Vous vous demandez si votre site est toujours à la hauteur ?
                    Vérifiez en quelques secondes les performances de votre site grâce à un <strong>outil gratuit</strong> comme PageSpeed Insights.
                </p>
                <a
                    href="https://pagespeed.web.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block normal-text text-center text-balance rounded-full border-2 border-paletteColor1 bg-white px-6 py-3 text-paletteColor1 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-paletteColor1 hover:text-paletteColor3"
                >
                    Tester mon site
                </a>
            </section>

            <CTA
                title="Besoin de moderniser votre site web ?"
                route="/contact"
                cta="Discutons-en"
            />
        </>
    );
};

export default RefonteSite;