"use client";

import dynamic from "next/dynamic";
import Spinner from "@/components/Spinner";
import PourquoiNousSection from "@/components/PourquoiNousSection";
import H1 from "@/components/H1";
import Link from "next/link";
import Offre from "@/components/Offre";
import LazyVideo from "@/components/LazyVideo";
import Image from "next/image";

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
            <section className="px-4">
                <div className="flex flex-col items-center text-center">
                    <H1>Votre Agence Web à Nancy</H1>
                    <p className="mb-7 normal-text max-w-4xl">
                        Développez une présence digitale qui <strong>vous ressemble</strong>, grâce à nos
                        solutions <strong>modernes</strong> et <strong>sur mesure</strong>.
                    </p>
                    <Link
                        className="normal-text transform rounded-full border-2 border-paletteColor1 bg-white px-4 py-2 text-paletteColor1 transition-all duration-300 ease-in-out hover:origin-center hover:scale-105 hover:bg-paletteColor1 hover:text-paletteColor3"
                        href="/services"
                    >
                        Découvrir nos services
                    </Link>
                </div>
                <LazyVideo className="m-16 mx-auto lg:w-[70%] max-w-4xl" link="/videos/presentation.mp4"/>
            </section>

            <section className="px-4">
                <div className="text-center">
                    <h2 id="offers">Ce que nous proposons</h2>
                </div>
                <div
                    className="flex h-auto flex-col items-center justify-between gap-4 lg:flex-row lg:items-stretch max-w-[1500px] mx-auto">
                    <Offre
                        imageSrc="/img/design-logo.svg"
                        altText="Image représentation la création"
                        title="Création de site web"
                        description="Présentez votre activité, attirez de nouveaux clients et affirmez votre présence en ligne grâce à un site web conçu pour vous. Moderne, clair et fidèle à votre image, il renforce votre visibilité et inspire confiance dès les premières secondes."
                        price={0}
                        route={"/services/creation-site-web"}
                    />
                    <Offre
                        imageSrc="/img/design-logo.svg"
                        altText="Image représentation la création"
                        title="Refonte de site web"
                        description="Votre site ne reflète plus vos ambitions ? Nous le transformons pour qu’il devienne un atout : un design percutant, une expérience utilisateur fluide et des performances optimisées pour marquer les esprits."
                        price={0}
                        route={"/services/refonte-site-web"}
                    />
                    <Offre
                        imageSrc="/img/design-logo.svg"
                        altText="Image représentation la création"
                        title="Création de votre logo"
                        description="Offrez une identité forte à votre entreprise avec un logo unique et mémorable. Nous créons un design sur-mesure qui reflète vos valeurs et capte l’attention dès le premier regard."
                        price={0}
                        route={"/services/creation-logo"}
                    />
                </div>
            </section>

            <section className="px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2>Pourquoi choisir NewCrea ?</h2>
                        <p className="normal-text max-w-2xl mx-auto mt-2">
                            Une approche humaine, stratégique et adaptée à votre réalité.
                        </p>
                    </div>

                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-8 items-center">
                        <div className="lg:col-span-1 space-y-4">
                            <p className="normal-text">
                                Avant toute proposition, nous étudions votre activité, vos enjeux et vos objectifs pour
                                vous proposer une solution vraiment pertinente.
                            </p>
                            <p className="normal-text">
                                Nous échangeons avec vous de manière claire et transparente pour bâtir un projet qui
                                vous ressemble, dans le respect de vos moyens.
                            </p>
                            <p className="normal-text">
                                Nos offres sont pensées pour les petites structures : efficacité, visibilité, budget
                                maîtrisé. Vous ne payez que pour ce dont vous avez réellement besoin.
                            </p>
                        </div>

                        <div className="lg:col-span-2 flex justify-center">
                            <Image
                                src="/img/work.webp"
                                alt="Image représentant un travail collaboratif"
                                width={800}
                                height={500}
                                loading="lazy"
                                className="w-[85%] max-w-[700px] rounded-xl border border-paletteColor2 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>


            <Processus/>
            <FAQ/>
            <CTA
                title="Envie de booster votre présence en ligne ?"
                route="contact"
                cta="Discutons de votre projet"
            />
        </>
    );
}
