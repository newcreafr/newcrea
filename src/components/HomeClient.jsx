"use client";

import dynamic from "next/dynamic";
import Spinner from "@/components/Spinner";
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
                        Boostez votre visibilité en ligne grâce à nos solutions <strong>modernes</strong>, <strong>sur-mesure</strong> et à nos tarifs <strong>flexibles</strong> pour petits budgets.
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
                    className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
                    <Offre
                        imageSrc="/img/creation-site-web.webp"
                        altText="Image représentation la création"
                        title="Création de site web"
                        description="Présentez votre activité, attirez de nouveaux clients et affirmez votre présence en ligne grâce à un site web conçu pour vous. Moderne, clair et fidèle à votre image, il renforce votre visibilité et inspire confiance dès les premières secondes."
                        price={0}
                        route={"/services/creation-site-web"}
                    />
                    <Offre
                        imageSrc="/img/refonte-site-web.webp"
                        altText="Image représentation la création"
                        title="Refonte de site web"
                        description="Votre site ne reflète plus vos ambitions ? Nous le transformons pour qu’il devienne un atout : un design percutant, une expérience utilisateur fluide et des performances optimisées pour marquer les esprits."
                        price={0}
                        route={"/services/refonte-site-web"}
                    />
                    <Offre
                        imageSrc="/img/creation-identite-visuelle.webp"
                        altText="Image représentation la création"
                        title="Création d'identité visuelle"
                        description="Offrez une identité forte à votre entreprise avec une identité visuelle unique et mémorable. Nous créons un design sur-mesure qui reflète vos valeurs et capte l’attention dès le premier regard."
                        price={0}
                        route={"/services/creation-identite-visuelle"}
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

            <section className="px-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2>Contribuez à notre développement</h2>
                    <p className="normal-text text-left max-w-xl mx-auto">
                        Donnez-nous votre avis pour que nos services vous correspondent. Deux questionnaires, une
                        minute, un vrai impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                    <div
                        className="flex flex-col justify-between rounded-lg hover:rounded-3xl p-6 border border-borderColor hover:border-paletteColor2 transition-all duration-300 h-full">
                        <div>
                            <p className="normal-text font-bold mb-4">
                                Site web ou pas ? Ce qui influence vos choix
                            </p>
                            <p className="small-text text-smTextWhtColor">
                                Ce formulaire a pour objectif de comprendre si (et comment) un site internet influence
                                la décision de se rendre dans un lieu physique.
                            </p>
                        </div>
                        <div className="mt-6">
                            <Link
                                href="/questionnaire-1"
                                className="inline-block small-text text-paletteColor2 underline-animation"
                            >
                                Accéder au questionnaire
                            </Link>
                        </div>
                    </div>

                    <div
                        className="flex flex-col justify-between rounded-lg hover:rounded-3xl p-6 border border-borderColor hover:border-paletteColor2 transition-all duration-300 h-full">
                        <div>
                            <p className="normal-text font-bold mb-4">
                                Quel site pour votre entreprise ? Vos besoins, votre budget
                            </p>
                            <p className="small-text text-smTextWhtColor">
                                Ce formulaire vise à mieux comprendre les besoins des petites entreprises et des entrepreneurs en matière de site internet : création, refonte, budget, fonctionnalités, etc.
                            </p>
                        </div>
                        <div className="mt-6">
                            <Link
                                href="/questionnaire-2"
                                className="inline-block small-text text-paletteColor2 underline-animation"
                            >
                                Accéder au questionnaire
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            <CTA
                title="Envie de booster votre présence en ligne ?"
                route="contact"
                cta="Discutons de votre projet"
            />
        </>
    );
}
