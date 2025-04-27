"use client";

import { useState } from "react";
import H1 from "@/components/H1";
import CTA from "@/components/CTA";



const Tarifs = () => {
    const [selectedService, setSelectedService] = useState("creation");
    const [selectedType, setSelectedType] = useState("onepage");

    const services = {
        creation: {
            title: "Création de site web",
            offres: {
                onepage: [
                    ["Audit de l'environnement (déductible)*", "100€ TTC", "Analyse et recueil de vos besoins"],
                    ["Réalisation des maquettes (déductible)*", "100€ TTC", "Organisation du contenu, wireframes, design responsive adapté à votre activité."],
                    ["Développement", "300€ TTC", "Construction du site, SEO et optimisation"],
                    ["Hébergement la première année (optionnel)", "150€ TTC", "Nom de domaine, serveur, configuration"],
                    ["Identité visuelle (optionnel)", "Voir section dédiée", "Logo, charte graphique, signature mail",],
                    ["Pack complet", "600€ TTC", "Audit + Maquettes + Développement + Hébergement + Pack identité visuelle"]
                ],
                vitrine: [
                    ["Audit de l'environnement (déductible)*", "150€ TTC", "Analyse et recueil de vos besoins"],
                    ["Réalisation des maquettes (déductible)*", "400€ TTC", "Organisation du contenu et design du site",],
                    ["Développement", "750€ TTC", "Construction du site, SEO et optimisation"],
                    ["Hébergement la première année (optionnel)", "150€ TTC", "Nom de domaine, serveur, configuration"],
                    ["Identité visuelle (optionnel)", "Voir section dédiée", "Logo, charte graphique, signature mail"],
                    ["Pack complet", "1300€ TTC", "Audit + Maquettes + Développement + Hébergement + Pack identité visuelle"]
                ],
                standard: [
                    ["Audit de l'environnement (déductible)*", "200€ TTC", "Analyse et recueil de vos besoins"],
                    ["Réalisation des maquettes (déductible)*", "500€ TTC", "Organisation du contenu et design du site"],
                    ["Développement", "1300€ TTC", "Construction du site, SEO et optimisation"],
                    ["Hébergement la première année (optionnel)", "150€ TTC", "Nom de domaine, serveur, configuration"],
                    ["Identité visuelle (optionnel)", "Voir section dédiée", "Logo, charte graphique, signature mail"],
                    ["Pack complet", "2000€ TTC", "Audit + Maquettes + Développement + Hébergement + Pack identité visuelle"]
                ],
                complexe: [
                    ["Pack complet", "À partir de 2500€ TTC", "Fonctionnalités spécifiques, sur devis"],
                ]
            },
            description: "Vous partez de zéro ? On vous accompagne de la définition de vos besoins à la mise en ligne, avec un accompagnement complet et personnalisé."
        },
        refonte: {
            title: "Refonte de site web",
            offres: {
                onepage: [
                    ["Refonte", "150€ TTC", "Redéveloppement et optimisation"],
                    ["Création d'identité visuelle (optionnel)", "Voir section dédiée", "Logo, charte graphique, signature mail"],
                    ["Pack complet", "250€ TTC", "Refonte + Pack identité visuelle"],
                ],
                vitrine: [
                    ["Audit du site actuel (déductible)*", "100€ TTC", "Évaluation de l'UX/UI et des performances"],
                    ["Réalisation des maquettes (déductible)*", "200€ TTC", "Nouveau design + réorganisation"],
                    ["Refonte", "400€ TTC", "Redéveloppement et optimisation"],
                    ["Création d'identité visuelle (optionnel)", "Voir section dédiée", "Logo, charte graphique, signature mail"],
                    ["Pack complet", "700€ TTC", "Audit + Maquettes + Refonte + Pack identité visuelle"],
                ],
                standard: [
                    ["Audit technique complet", "150€ TTC", "Performance, responsive, UX, sécurité."],
                    ["Refonte des maquettes", "250€ TTC", "Design repensé, navigation fluide sur 6 à 10 pages."],
                    ["Refonte technique avancée", "700€ TTC", "Refactorisation, référencement, accessibilité optimisée."],
                    ["Identité visuelle (optionnel)", "Voir section dédiée", "Création graphique complète."],
                    ["Pack refonte standard", "1100€ TTC", "Comprend toutes les étapes avec identité visuelle à la carte."]
                ],
                complexe: [
                    ["Pack complet", "À partir de 1800€ TTC", "Sur devis selon le besoin"],
                ]
            },
            description: "Un site existant ? Nous le transformons pour le remettre au goût du jour, améliorer ses performances et son attractivité."
        },
        identite: {
            title: "Création d’identité visuelle",
            offres: {
                unique: [
                    ["Création d'un logo (optionnel)", "100€ TTC", "Format SVG, JPEG, PNG"],
                    ["Signature d'email sur mesure (optionnel)", "50€ TTC", "Signature HTML/CSS personnalisée"],
                    ["Charte graphique (optionnel)", "100€ TTC", "Cahier des normes graphiques (couleurs, typos, etc.)"],
                    ["Pack création d'identité visuelle", "200€ TTC", "Comprend tous les éléments précédents"],
                ]
            },
            description: "Logo, couleurs, typographies : nous façonnons une image de marque forte, cohérente et mémorable."
        }
    };

    const types = Object.keys(services[selectedService].offres);
    const currentDetails = services[selectedService].offres[selectedService === "identite" ? "unique" : selectedType];

    return (
        <>
            <section className="text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <H1>Nos tarifs</H1>

                    <p className="normal-text text-left">
                        Chez <strong>NewCrea</strong>, nous pensons que la clarté est essentielle. Voici nos <strong>tarifs indicatifs</strong> pour la création ou la refonte de site web, ainsi que nos prestations en identité visuelle.
                    </p>
                    <br />
                    <p className="normal-text text-left">
                        Chaque projet étant unique, <strong>ces tarifs sont ajustables selon vos besoins spécifiques.</strong><br />
                        Un devis personnalisé vous sera systématiquement proposé après un échange sur vos besoins.
                    </p>

                    <h2>Choisissez un service</h2>
                    <div className="mt-10 flex flex-col justify-center gap-10">
                        <div>
                            <p className="normal-text font-medium">Type de service :</p>
                            <select
                                className="p-3 mt-2 mb-6 rounded border border-paletteColor2 bg-paletteColor3 focus:outline-none"
                                value={selectedService}
                                onChange={(e) => {
                                    setSelectedService(e.target.value);
                                    setSelectedType("onepage");
                                }}
                            >
                                <option value="creation">Création de site web</option>
                                <option value="refonte">Refonte de site web</option>
                                <option value="identite">Identité visuelle</option>
                            </select>
                        </div>
                        {selectedService !== "identite" && (
                            <div>
                                <p className="normal-text font-medium">Type de site :</p>
                                <select
                                    className="p-3 mt-2 mb-6 rounded border border-paletteColor2 bg-paletteColor3 focus:outline-none"
                                    value={selectedType}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                >
                                    <option value="onepage">Site carte de visite (one page)</option>
                                    <option value="vitrine">Site vitrine (2 à 5 pages)</option>
                                    <option value="standard">Site standard (6 à 10 pages)</option>
                                    <option value="complexe">Site complexe</option>
                                </select>
                            </div>
                        )}
                    </div>

                    <div className="text-left mt-8">
                        <div className="text-center">
                            <h2>{services[selectedService].title}</h2>
                            <p className="mb-10 normal-text">{services[selectedService].description}</p>
                        </div>
                        <div className="space-y-4">
                            {currentDetails.map(([label, price, desc], idx) => (
                                <div key={idx} className="border-b border-paletteColor2 pb-2">
                                    <div className="flex justify-between items-center font-medium small-text">
                                        <span>{label}</span>
                                        <span className="font-bold text-right pl-10">{price}</span>
                                    </div>
                                    <p className="text-sm text-smTextWhtColor mt-1">{desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <p className="small-text text-smTextWhtColor font-semibold">(*) À noter :</p>
                            <p className="small-text text-smTextWhtColor mt-1">
                                Certains éléments marqués <strong>(déductibles)</strong> peuvent être retirés du montant final si vous les avez déjà réalisés vous-même ou avec un prestataire externe.
                            </p>
                            <ul className="list-disc pl-5 mt-2 small-text text-smTextWhtColor">
                                <li><strong>Audit de votre environnement/site :</strong> si vos besoins sont déjà formalisés, structurés et clairs.</li>
                                <li><strong>Réalisation des maquettes :</strong> si vous disposez déjà de maquettes prêtes (desktop et mobile).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <CTA title="Prêt(e) à passer à l'action ?" route="/services/" cta="Découvrir nos services" />
        </>
    );
};

export default Tarifs;