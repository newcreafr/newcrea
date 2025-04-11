"use client";

import dynamic from "next/dynamic";
import Spinner from "@/components/Spinner";
import PourquoiNousSection from "@/components/PourquoiNousSection";
import H1 from "@/components/H1";
import Link from "next/link";
import Offre from "@/components/Offre";
import LazyVideo from "@/components/LazyVideo";

// Chargement dynamique des composants lourds
const Processus = dynamic(() => import("@/components/Processus"), {
    loading: () => <Spinner />,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
    loading: () => <Spinner />,
});
const CTA = dynamic(() => import("@/components/CTA"), {
    loading: () => <Spinner />,
});

export default function HomeClient() {
    return (
        <>
            <section className="w-[90%]">
                <div className="flex flex-col items-center text-center">
                    <H1>Votre Agence Web à Nancy</H1>
                    <p className="my-7">
                        Développez une présence digitale qui vous ressemble, grâce à nos
                        solutions modernes et sur mesure.
                    </p>
                    <div className="flex gap-2 text-sm xs:gap-4 xs:text-base">
                        <Link
                            className="transform rounded-full border-2 border-paletteColor1 bg-white px-4 py-2 text-paletteColor1 transition-all duration-300 ease-in-out hover:origin-center hover:scale-105 hover:bg-paletteColor1 hover:text-paletteColor3"
                            href="#offers"
                        >
                            Découvrir nos offres
                        </Link>
                    </div>
                </div>
                <LazyVideo className="m-16 mx-auto w-[90%] xs:w-[60%]" link="/videos/presentation.mp4" />
            </section>

            <section className="w-[90%]">
                <div className="text-center">
                    <h2 id="offers">Ce que nous proposons</h2>
                </div>
                <div className="flex h-auto flex-col items-center justify-between gap-4 lg:flex-row lg:items-stretch">
                    <Offre
                        imageSrc="/img/design-logo.svg"
                        altText="Web development logo"
                        title="Création de votre site"
                        description="Présentez votre activité, attirez de nouveaux clients ou démarquez-vous en ligne grâce à un site qui reflète parfaitement votre image. Nous concevons pour vous un outil unique et performant qui fera la différence."
                        price={900}
                        route={"services/creation-site-web"}
                    />
                    <Offre
                        imageSrc="/img/design-logo.svg"
                        altText="Web redesign logo"
                        title="Refonte de votre site"
                        description="Votre site ne reflète plus vos ambitions ? Nous le transformons pour qu’il devienne un atout : un design percutant, une expérience utilisateur fluide et des performances optimisées pour marquer les esprits."
                        price={500}
                        route={"services/refonte-site-web"}
                    />
                    <Offre
                        imageSrc="/img/design-logo.svg"
                        altText="Logo logo"
                        title="Création de votre logo"
                        description="Offrez une identité forte à votre entreprise avec un logo unique et mémorable. Nous créons un design sur-mesure qui reflète vos valeurs et capte l’attention dès le premier regard."
                        price={50}
                        route={"/"}
                    />
                </div>
            </section>

            <section className="w-[90%] mx-auto py-16">
                <div className="text-center mb-12">
                    <h2>
                        Pourquoi choisir <span className="text-primary">NewCrea</span> ?
                    </h2>
                    <p className="text-gray-600">
                        Une approche humaine, stratégique et adaptée à votre réalité.
                    </p>
                </div>
                <div className="flex h-auto flex-col lg:items-stretch items-center justify-between gap-4 lg:flex-row">
                    <PourquoiNousSection
                        img="🔍"
                        title="Analyse personnalisée"
                        desc="Avant toute proposition, nous étudions votre activité, vos enjeux et vos objectifs pour vous apporter une solution vraiment pertinente."
                    />
                    <PourquoiNousSection
                        img="🤝"
                        title="Accompagnement humain"
                        desc="Nous échangeons avec vous sans jargon technique, en toute transparence, pour bâtir un projet digital à votre image."
                    />
                    <PourquoiNousSection
                        img="💸"
                        title="Des prix justes"
                        desc="Nos offres sont pensées pour les TPE/PME : efficacité, visibilité et rentabilité sans vous ruiner. Nous vous aidons même à obtenir des subventions."
                    />
                </div>
            </section>

            <Processus />
            <FAQ />
            <CTA
                title="Envie de booster votre présence en ligne ?"
                desc="Un site web bien pensé peut transformé votre activité."
                route="contact"
                cta="Discutons de votre projet"
                note="(réponse sous 24h)"
            />
        </>
    );
}
