import H1 from "@/components/H1.jsx";
import CTA from "@/components/CTA.jsx";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Création de site web • Gagnez en visibilité",
    description: "Votre entreprise mérite mieux qu'une simple présence en ligne. Offrez-vous un site moderne, rapide et conçu pour convertir.",
};

const CreationSite = () => {
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
                <Image src="/img/creation-site-web.svg" alt="Illustration création de site web" width={400} height={300} loading="lazy"/>
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

                <div className="max-w-4xl mx-auto text-left flex flex-col items-center">
                    <p className="normal-text mb-8">
                        Saviez-vous qu’il existe des <strong>aides</strong> pour financer la création de votre site web ?
                        Vous pouvez bénéficier d’aides régionales, de crédits d’impôt ou encore de dispositifs publics
                        pour soutenir votre présence en ligne.
                    </p>

                    <Link href="/aides/" className="inline-block normal-text text-center text-balance rounded-full border-2 border-paletteColor1 bg-white px-6 py-3 text-paletteColor1 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-paletteColor1 hover:text-paletteColor3">
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
