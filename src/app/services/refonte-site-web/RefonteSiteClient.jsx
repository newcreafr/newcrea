"use client";

import { useState } from "react";
import H1 from "@/components/H1.jsx";
import CTA from "@/components/CTA.jsx";
import Image from "next/image";
import Link from "next/link";

const RefonteSiteClient = () => {
    const [selectedType, setSelectedType] = useState("onepage");

    const tarifs = {
        onepage: {
            label: "Site carte de visite (one page)",
            desc: "Une page unique qui présente l’essentiel : qui vous êtes, ce que vous proposez, et comment vous contacter.",
            details: [
                ["Refonte", "150€ TTC", "Redéveloppement et optimisation"],
                ["Création d'identité visuelle (optionnel)", "Voir section dédiée", "Logo, charte graphique, signature mail"],
                ["Pack complet", "250€ TTC", "Refonte + Pack identité visuelle"],
            ],
        },
        vitrine: {
            label: "Site vitrine (2 à 5 pages)",
            desc: "Une structure simple pour présenter vos services, votre entreprise, vos réalisations, et faciliter les prises de contact.",
            details: [
                ["Audit du site actuel (déductible)*", "100€ TTC", "Évaluation de l'UX/UI et des performances"],
                ["Réalisation des maquettes (déductible)*", "200€ TTC", "Nouveau design + réorganisation"],
                ["Refonte", "400€ TTC", "Redéveloppement et optimisation"],
                ["Création d'identité visuelle (optionnel)", "Voir section dédiée", "Logo, charte graphique, signature mail"],
                ["Pack complet", "700€ TTC", "Audit + Maquettes + Refonte + Pack identité visuelle"],
            ],
        },
        standard: {
            label: "Site standard (6 à 10 pages)",
            desc: "Un site plus complet pour détailler vos services, intégrer des pages dédiées, et améliorer le référencement.",
            details: [
                ["Audit du site actuel (déductible)*", "150€ TTC", "Évaluation de l'UX/UI et des performances"],
                ["Réalisation des maquettes (déductible)*", "250€ TTC", "Nouveau design + réorganisation"],
                ["Refonte", "700€ TTC", "Redéveloppement et optimisation"],
                ["Création d'identité visuelle (optionnel)", "Voir section dédiée", "Logo, charte graphique, signature mail"],
                ["Pack complet", "1100€ TTC", "Audit + Maquettes + Refonte + Pack identité visuelle"],
            ],
        },
        complexe: {
            label: "Site complexe",
            desc: "Pour des besoins spécifiques : e-commerce, fonctionnalités avancées, ou architecture sur mesure.",
            details: [
                ["Pack complet", "À partir de 1800€ TTC", "Sur devis selon le besoin"],
            ],
        },
    };

    const current = tarifs[selectedType];

    return (
        <>
            <section className="text-left px-4">
                <H1>Refonte de site web</H1>
                <p className="normal-text max-w-4xl mx-auto">
                    Ce que vos visiteurs voient en ligne, c’est ce qu’ils pensent de vous.
                    Un site mal conçu peut nuire à votre <strong>crédibilité</strong>, même si votre travail est excellent.<br /><br />
                    Chez <strong>NewCrea</strong>, on reconstruit votre site avec un design moderne, une navigation claire et un message qui inspire confiance.
                </p>
            </section>

            <div className="px-4 w-[90%] mx-auto max-w-2xl mt-16">
                <Image src="/img/refonte-site-web.webp" alt="Illustration refonte de site web" width={400} height={300} loading="lazy" className="w-full mx-auto rounded-xl border border-paletteColor2 object-cover" />
            </div>

            <section className="text-center px-4">
                <h2>Pourquoi envisager une refonte ?</h2>
                <p className="max-w-4xl mx-auto mb-12 normal-text text-left">
                    Si votre site donne une <strong>mauvaise impression</strong>, c’est votre entreprise que l’on juge.
                    Un design daté, une navigation confuse ou une mauvaise adaptation mobile peuvent vous faire <strong>perdre des opportunités</strong>.<br />
                    Une refonte permet de repartir sur des bases solides, alignées avec vos objectifs.
                </p>
            </section>

            <section className="px-4 max-w-4xl mx-auto text-center">
                <h2>Tarifs pour la refonte de site web</h2>

                <p className="mb-6 normal-text">Sélectionnez le type de site que vous souhaitez refaire </p>

                <select
                    className="p-3 mt-1 rounded border border-paletteColor2 bg-paletteColor3 focus:outline-none focus:ring-2 focus:ring-paletteColor2 hover:ring-paletteColor2 hover:ring-2 small-text mb-6"
                    value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                    <option value="onepage">Site carte de visite (one page)</option>
                    <option value="vitrine">Site vitrine (2 à 5 pages)</option>
                    <option value="standard">Site standard (6 à 10 pages)</option>
                    <option value="complexe">Site complexe</option>
                </select>

                <div className="text-left">
                    <p className="small-text mb-8">{current.desc}</p>
                    <div className="space-y-4">
                        {current.details.map(([label, price, desc], i) => (
                            <div key={i} className="border-b border-paletteColor2 pb-2">
                                <div className="flex justify-between items-center font-medium small-text">
                                    <span>{label}</span>
                                    <span className="font-bold text-right pl-10">{price}</span>
                                </div>
                                {desc && <p className="text-sm text-smTextWhtColor mt-1">{desc}</p>}
                            </div>
                        ))}
                    </div>
                </div>

                {(selectedType === "vitrine" || selectedType === "standard") && (
                    <div className="mt-10 max-w-4xl mx-auto bg-paletteColor3 text-left small-text text-smTextWhtColor">
                        <h4 className="normal-text font-semibold mb-2">(*)À noter :</h4>
                        <p className="mb-2 small-text">
                            Certains éléments marqués <strong>(déductible)</strong> peuvent être retirés du montant total si vous les avez
                            déjà préparés vous-même ou via un prestataire externe.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 small-text">
                            <li>
                                <strong>Audit de votre site actuel</strong> : vos besoins sont clairs et les défauts du site sont déjà identifiés.
                            </li>
                            <li>
                                <strong>Réalisation des maquettes</strong> : vous avez des maquettes prêtes (desktop + mobile).
                            </li>
                        </ul>
                    </div>
                )}

            </section>


            <section className="text-center px-4 mt-16">
                <h2>Votre site est-il dépassé ?</h2>
                <p className="normal-text max-w-4xl mx-auto mb-8 text-left">
                    Vous vous demandez si votre site est toujours à la hauteur ?
                    Vérifiez en quelques secondes les performances de votre site grâce à un <strong>outil
                    gratuit</strong> comme PageSpeed Insights.
                </p>
                <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer"
                   className="inline-block normal-text text-center text-balance rounded-full border-2 border-paletteColor1 bg-white px-6 py-3 text-paletteColor1 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-paletteColor1 hover:text-paletteColor3">
                    Tester mon site
                </a>
            </section>

            <CTA title="Besoin de moderniser votre site web ?" route="/contact" cta="Discutons-en" />
        </>
    );
};

export default RefonteSiteClient;