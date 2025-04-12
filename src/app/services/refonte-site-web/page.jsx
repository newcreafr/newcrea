import H1 from "@/components/H1.jsx";
import CTA from "@/components/CTA.jsx";

const RefonteSite = () => {
    return (
        <>
            <section className="w-[90%] text-center">
                <H1>Refonte de site web</H1>
                <p className="mt-6 text-md md:text-lg max-w-3xl mx-auto">
                    Votre site ne reflète plus votre image ? Il est lent, peu clair, ou pas adapté au mobile ?
                    Chez NewCrea, nous modernisons votre site web pour en faire un véritable outil de communication, de
                    confiance et de conversion.
                </p>
            </section>

            <div className="w-[90%] mx-auto max-w-[500px] my-24">
                <img
                    src="/img/refonte-site-web.svg"
                    alt="Illustration refonte de site web"
                    className="w-full h-auto"
                    loading="lazy"
                />
            </div>

            <section className="w-[90%] text-center py-16">
                <h2 className="text-2xl font-bold mb-6">Pourquoi envisager une refonte ?</h2>
                <p className="max-w-2xl mx-auto mb-12">
                    Un site obsolète peut nuire à votre image, faire fuir des clients, et nuire à votre référencement.
                    Aujourd’hui, il est essentiel d’avoir une plateforme claire, rapide et à jour.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
                    <div className="bg-white rounded-lg p-6 border border-borderColor">
                        <h3 className="text-xl font-semibold text-green-700 mb-4">Ce que nous améliorons</h3>
                        <ul className="space-y-3 ">
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 text-xl select-none">✔</span>
                                Une expérience utilisateur fluide et intuitive
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 text-xl select-none">✔</span>
                                Des performances boostées (chargement rapide, responsive)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 text-xl select-none">✔</span>
                                Un design moderne, clair et professionnel
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 text-xl select-none">✔</span>
                                Un meilleur positionnement Google (SEO)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 text-xl select-none">✔</span>
                                Une image en phase avec votre entreprise actuelle
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg p-6 border border-borderColor">
                        <h3 className="text-xl font-semibold text-red-700 mb-4">Les risques d’un site obsolète</h3>
                        <ul className="space-y-3 ">
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 text-xl select-none">✖</span>
                                Perte de crédibilité auprès de vos visiteurs
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 text-xl select-none">✖</span>
                                Navigation difficile, surtout sur mobile
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 text-xl select-none">✖</span>
                                Mauvais référencement sur Google
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 text-xl select-none">✖</span>
                                Moins de prospects, plus de concurrents visibles
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 text-xl select-none">✖</span>
                                Site non conforme ou non sécurisé
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="w-[90%] text-center py-16">
                <h2 className="text-2xl font-bold mb-4">Votre site est-il dépassé ?</h2>
                <p className="max-w-xl mx-auto mb-4">
                    Vous avez des doutes ? Il existe des outils gratuits pour tester votre site comme PageSpeed Insights :
                </p>
                <a
                    href="https://pagespeed.web.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center text-balance rounded-full border-2 border-paletteColor1 bg-white px-6 py-3 text-paletteColor1 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-paletteColor1 hover:text-paletteColor3"
                >
                    Tester mon site
                </a>

            </section>

            <CTA
                title="Besoin de moderniser votre site web ?"
                desc="Discutons ensemble des améliorations possibles pour redonner à votre site tout son impact."
                route="/contact"
                cta="Faites une demande"
                note="Réponse sous 24h, sans engagement."
            />
        </>
    );
};

export default RefonteSite;
