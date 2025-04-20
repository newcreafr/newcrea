import H1 from "@/components/H1";
import CTA from "@/components/CTA";
import React from "react";

export const metadata = {
    title: "Nos tarifs • Prix ajustables TPE & PME",
    description:
        "Nos prix sont clairs et adaptés aux petites entreprises. Découvrez nos tarifs pour un site professionnel sans surprise.",
};

const Tarifs = () => {
    const renderSection = (title, offers) => (
        <div className="text-left">
            <div className="text-center">
                <h2>{title}</h2>
            </div>
            <div className="space-y-6">
                {offers.map(({ type, details }, i) => (
                    <div key={i}>
                        <div className="text-center">
                            <h3>{type}</h3>
                        </div>
                        <div className="space-y-4">
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
        </div>
    );

    return (
        <>
            <section className="text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <H1>Nos tarifs</H1>

                    <p className="normal-text text-left">
                        Chez <strong>NewCrea</strong>, nous pensons que la clarté est essentielle.
                        Voici nos <strong>tarifs indicatifs</strong> pour la création ou la refonte de site web, ainsi que nos prestations en identité visuelle.
                    </p>
                    <br />
                    <p className="normal-text text-left">
                        Chaque projet étant unique, <strong>ces tarifs sont ajustables selon vos besoins spécifiques.</strong>
                        <br />
                        Un devis personnalisé vous sera systématiquement proposé après un échange sur vos besoins.
                    </p>

                    <h2>Bon à savoir</h2>
                    <p className="normal-text text-left">
                        Certains éléments peuvent être <strong>déduits du montant total</strong> si vous les avez déjà
                        préparés en amont (vous-même ou un expert) :
                    </p>

                    <ul className="list-disc pl-5 mt-4 text-left space-y-2 small-text">
                        <li>
                            <strong>Audit de votre environnement</strong> : vos besoins en matière de design et de
                            contenu sont déjà formalisés, clairs et structurés.
                        </li>
                        <li>
                            <strong>Audit de votre site actuel</strong> : les points faibles de votre site sont
                            identifiés, et vos attentes en termes de refonte sont bien précises.
                        </li>
                        <li>
                            <strong>Réalisation des maquettes</strong> : vous disposez de maquettes détaillées de chaque page, adaptées aux écrans ordinateur et mobile.
                        </li>
                    </ul>


                    {/* Création de site */}
                    {renderSection("Création de site web", [
                        {
                            type: "Site carte de visite (one page)",
                            details: [
                                ["Audit de l'environnement", "100€ TTC", "Analyse et recueil de vos besoins"],
                                ["Réalisation des maquettes", "100€ TTC", "Organisation du contenu et design du site"],
                                ["Développement", "300€ TTC", "Construction du site, choix des technologies, SEO et optimisation"],
                                ["Hébergement pour la première année (option)", "150€ TTC", "Nom de domaine, serveur, configuration"],
                                ["Création d'identité visuelle (option)", "Voir section dédiée", "Logo, charte graphique, signature d'email sur mesure"],
                                ["Pack création de site one page", "600€ TTC", "Comprend tous les éléments précédents"],
                            ],
                        },
                        {
                            type: "Site vitrine (2 à 5 pages)",
                            details: [
                                ["Audit de l'environnement", "150€ TTC", "Analyse et recueil de vos besoins"],
                                ["Réalisation des maquettes", "400€ TTC", "Organisation du contenu et design du site"],
                                ["Développement", "750€ TTC", "Construction du site, choix des technologies, SEO et optimisation"],
                                ["Hébergement pour la première année (option)", "150€ TTC", "Nom de domaine, serveur, configuration"],
                                ["Création d'identité visuelle (option)", "Voir section dédiée", "Logo, charte graphique, signature d'email sur mesure"],
                                ["Pack création de site vitrine", "1300€ TTC", "Comprend tous les éléments précédents"],
                            ],
                        },
                        {
                            type: "Site standard (6 à 10 pages)",
                            details: [
                                ["Audit de l'environnement", "200€ TTC", "Analyse et recueil de vos besoins"],
                                ["Réalisation des maquettes", "500€ TTC", "Organisation du contenu et design du site"],
                                ["Développement", "1300€ TTC", "Construction du site, choix des technologies, SEO et optimisation"],
                                ["Hébergement pour la première année (option)", "150€ TTC", "Nom de domaine, serveur, configuration"],
                                ["Création d'identité visuelle (option)", "Voir section dédiée", "Logo, charte graphique, signature d'email sur mesure"],
                                ["Pack création de site standard", "2000€ TTC", "Comprend tous les éléments précédents"],
                            ],
                        },
                        {
                            type: "Site complexe",
                            details: [["Pack création de site complexe", "À partir de 2500€ TTC", "Sur devis selon le besoin"]],
                        },
                    ])}

                    {/* Refonte de site */}
                    {renderSection("Refonte de site web", [
                        {
                            type: "Site carte de visite (one page)",
                            details: [
                                ["Refonte", "150€ TTC", "Redéveloppement et optimisation"],
                                ["Création d'identité visuelle (option)", "Voir section dédiée", "Logo, charte, signature (optionnel)"],
                                ["Pack refonte de site one page", "250€ TTC", "Comprend tous les éléments précédents"],
                            ],
                        },
                        {
                            type: "Site vitrine (2 à 5 pages)",
                            details: [
                                ["Audit du site actuel", "100€ TTC", "Évaluation de l'UX/UI et des performances"],
                                ["Réalisation des maquettes", "200€ TTC", "Nouveau design + réorganisation"],
                                ["Refonte", "400€ TTC", "Redéveloppement et optimisation"],
                                ["Création d'identité visuelle (option)", "Voir section dédiée", "Logo, charte, signature (optionnel)"],
                                ["Pack refonte de site vitrine", "700€ TTC", "Comprend tous les éléments précédents"],
                            ],
                        },
                        {
                            type: "Site standard (6 à 10 pages)",
                            details: [
                                ["Audit du site actuel", "150€ TTC", "Évaluation de l'UX/UI et des performances"],
                                ["Réalisation des maquettes", "250€ TTC", "Nouveau design + réorganisation"],
                                ["Refonte", "700€ TTC", "Redéveloppement et optimisation"],
                                ["Création d'identité visuelle (option)", "Voir section dédiée", "Logo, charte, signature (optionnel)"],
                                ["Pack refonte de site standard", "1100€ TTC", "Comprend tous les éléments précédents"],
                            ],
                        },
                        {
                            type: "Site complexe",
                            details: [["Pack refonte de site complexe", "À partir de 1800€ TTC", "Sur devis selon le besoin"]],
                        },
                    ])}

                    {/* Identité visuelle */}
                    {renderSection("Création d’identité visuelle", [
                        {
                            type: "",
                            details: [
                                ["Création d'un logo (option)", "100€ TTC", "Format SVG, JPEG, PNG"],
                                ["Signature d'email sur mesure (option)", "50€ TTC", "Signature HTML/CSS personnalisée"],
                                ["Charte graphique (option)", "100€ TTC", "Cahier des normes graphiques (couleurs, typos, etc.)"],
                                ["Pack création d'identité visuelle", "200€ TTC", "Comprend tous les éléments précédents"],
                            ],
                        },
                    ])}
                </div>
            </section>

            <CTA title="Prêt(e) à passer à l'action ?" route="/services/" cta="Découvrir nos services" />
        </>
    );
};

export default Tarifs;
