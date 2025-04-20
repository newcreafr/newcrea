import H1 from "@/components/H1.jsx";
import CTA from "@/components/CTA.jsx";

export const metadata = {
    title: "Refonte de site web à Nancy • Modernisez votre présence en ligne",
    description: "Votre site est lent ou dépassé ? Nous le repensons entièrement pour en faire un outil clair, moderne et performant.",
};

const RefonteSite = () => {
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
                <img
                    src="/img/refonte-site-web.svg"
                    alt="Illustration refonte de site web"
                    className="w-full h-auto"
                    loading="lazy"
                />
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

            <section className="text-center px-4">
                <h2>Votre site est-il dépassé ?</h2>
                <p className="normal-text max-w-4xl mx-auto mb-8 text-left">
                    Vous vous demandez si votre site est toujours à la hauteur ?
                    Vérifiez en quelques secondes les performances de votre site grâce à un <strong>outil
                    gratuit</strong> comme PageSpeed Insights.
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
