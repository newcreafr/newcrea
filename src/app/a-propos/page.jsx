import H1 from "@/components/H1";
import CTA from "@/components/CTA";

const APropos = () => {
    return (
        <>
            <section>
                <H1>Qui sommes-nous ?</H1>
            </section>
            <section className="max-w-4xl mx-auto">
                <div className="text-center">
                    <h2>Notre mission</h2>
                </div>
                <div className="space-y-6">
                    <p className="normal-text">
                        Chez <strong>NewCrea</strong>, nous croyons que chaque petite entreprise mérite une
                        <strong> présence en ligne professionnelle, efficace et à son image</strong>. Nous révélons le
                        potentiel digital des TPE et PME avec des solutions web sur mesure, accessibles et impactantes.
                    </p>

                    <p className="normal-text">
                        <strong>Nous ne sommes pas une agence web parmi tant d’autres.</strong> Notre écoute, notre
                        engagement sur-mesure et notre volonté de bâtir une vraie relation de confiance nous démarquent.
                        Chaque projet commence par une <strong>compréhension fine</strong> des enjeux, traduite en
                        solutions <strong>concrètes, esthétiques et efficaces</strong>.
                    </p>

                    <ul className="grid md:grid-cols-3 gap-4">
                        <li className="p-4 rounded-lg border border-borderColor">
                            <span className="font-semibold block mb-1 normal-text">Audit personnalisé</span>
                            <span className="small-text text-smTextWhtColor">Pour identifier vos leviers digitaux</span>
                        </li>
                        <li className="p-4 rounded-lg border border-borderColor">
                            <span className="font-semibold block mb-1 normal-text">Maquettes sur mesure</span>
                            <span className="small-text text-smTextWhtColor">Même avant signature, pour se projeter concrètement</span>
                        </li>
                        <li className="p-4 rounded-lg border border-borderColor">
                            <span className="font-semibold block mb-1 normal-text">Accompagnement humain</span>
                            <span className="small-text text-smTextWhtColor">Pédagogie, écoute et transparence à chaque étape</span>
                        </li>
                    </ul>

                    <p className="mt-6 normal-text">
                        <strong>Notre ambition ?</strong> Un web plus humain, accessible à ceux qui n’ont ni le temps
                        ni les compétences pour s’y plonger seuls. Nous valorisons les savoir-faire locaux, soutenons
                        les indépendants et bâtissons des ponts entre tradition et innovation.
                    </p>
                </div>
            </section>

            <section className="text-left mx-auto bg-paletteColor1 text-paletteColor3 w-full">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="text-center">
                        <h2>Notre équipe</h2>
                    </div>

                    <p className="mb-6 normal-text text-center">
                        <strong>NewCrea</strong>, c’est une équipe jeune, passionnée, et complémentaire. Fondée
                        par <strong>Jules Flautat</strong> et <strong>Emilien Marotta</strong>, diplômés en MIASHS,
                        notre agence repose
                        sur la <strong>créativité</strong>, l’<strong>exigence</strong> et la <strong>proximité</strong>.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                        <div className="p-6 rounded-xl border-paletteColor2 border">
                            <p className="font-semibold normal-text mb-1">Emilien Marotta</p>
                            <p className="text-smTextDrkColor small-text">
                                Développeur & Stratège digital. Code les sites, gère l’intégration technique et optimise
                                le référencement pour une visibilité durable.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl border-paletteColor2 border">
                            <p className="font-semibold normal-text mb-1">Jules Flautat</p>
                            <p className="text-smTextDrkColor small-text">
                                Designer UX/UI & Chef de projet. Conçoit des interfaces élégantes, des maquettes
                                percutantes
                                et garantit la cohérence esthétique de chaque site.
                            </p>
                        </div>
                    </div>

                    <img
                        className="w-full max-w-xl mx-auto rounded-xl border border-paletteColor2 object-cover"
                        src="/img/emilien-jules.jpg"
                        alt="Emilien & Jules"
                    />

                    <p className="py-10 normal-text text-center">
                        Nous assurons nous-mêmes la relation client, la communication et le suivi de projet pour
                        une <strong>vision claire</strong> et une <strong>proximité authentique</strong>.
                    </p>
                </div>
            </section>


            <section className="text-left max-w-4xl mx-auto">
                <div className="text-center">
                    <h2>Pourquoi nous choisir</h2>
                </div>
                <p className="mb-6 normal-text">
                    Nous ne faisons pas que créer des sites. Nous construisons des <strong>outils de
                    développement</strong>, des <strong>leviers d’image</strong> et des <strong>moteurs de
                    croissance</strong>.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-borderColor rounded-xl p-6">
                        <h3 className="font-semibold normal-text mb-3">Une approche personnalisée</h3>
                        <ul className="list-disc list-inside small-text text-smTextWhtColor space-y-1">
                            <li>Étude de l’activité, des objectifs et de la clientèle</li>
                            <li>Audits et maquettes offerts avant engagement</li>
                        </ul>
                    </div>

                    <div className="border border-borderColor rounded-xl p-6">
                        <h3 className="font-semibold normal-text mb-3">Une vraie proximité</h3>
                        <ul className="list-disc list-inside small-text text-smTextWhtColor space-y-1">
                            <li>Agence à taille humaine, accessible et transparente</li>
                            <li>Rendez-vous physiques, suivi personnalisé</li>
                        </ul>
                    </div>

                    <div className="border border-borderColor rounded-xl p-6">
                        <h3 className="font-semibold normal-text mb-3">Une offre accessible</h3>
                        <ul className="list-disc list-inside small-text text-smTextWhtColor space-y-1">
                            <li>Tarifs justes, pensés pour les TPE/PME</li>
                            <li>Aide à la recherche de subventions</li>
                        </ul>
                    </div>

                    <div className="border border-borderColor rounded-xl p-6">
                        <h3 className="font-semibold normal-text mb-3">Des résultats mesurables</h3>
                        <ul className="list-disc list-inside small-text text-smTextWhtColor space-y-1">
                            <li>Sites optimisés pour convertir (SEO, rapidité, UX)</li>
                            <li>Plus de visibilité, plus de clients, plus de ventes</li>
                        </ul>
                    </div>
                </div>
            </section>

            <CTA
                title="Envie de booster votre présence en ligne ?"
                desc="Un site web bien pensé peut transformer votre activité."
                route="/services"
                cta="Découvrir nos services"
            />
        </>
    );
};

export default APropos;