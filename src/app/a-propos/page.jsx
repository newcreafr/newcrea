import H1 from "@/components/H1";
import CTA from "@/components/CTA";
import Image from "next/image";

export const metadata = {
    title: "À propos de NewCrea",
    description: "Découvrez qui se cache derrière NewCrea : une agence web fondée par Jules & Emilien, au service des petites entreprises locales.",
};

const APropos = () => {
    return (
        <>
            <section className="px-4">
                <H1>Qui sommes-nous ?</H1>
            </section>
            <section className="px-4 mx-auto">
                <div className="text-center">
                    <h2>Notre mission</h2>
                </div>
                <div className="space-y-6 max-w-4xl mx-auto">
                    <p className="normal-text">
                        Chez <strong>NewCrea</strong>, nous croyons que chaque petite entreprise mérite une
                        <strong> présence en ligne professionnelle, efficace et à son image</strong>. Nous révélons le
                        potentiel digital des TPE et PME avec des solutions web sur mesure, accessibles et impactantes.
                    </p>

                    <Image
                        src="/img/desktop.webp"
                        alt="Image de desktop"
                        width={576}
                        height={384}
                        loading="lazy"
                        className="w-full max-w-xl mx-auto rounded-xl border border-paletteColor2 object-cover"
                    />

                    <p className="normal-text">
                        <strong>Nous ne sommes pas une agence web parmi tant d’autres.</strong> Notre écoute, notre
                        engagement sur-mesure et notre volonté de bâtir une vraie relation de confiance nous démarquent.
                        Chaque projet commence par une <strong>compréhension fine</strong> des enjeux, traduite en
                        solutions <strong>concrètes, esthétiques et efficaces</strong>.
                    </p>

                    <p className="mt-6 normal-text">
                        <strong>Notre ambition ?</strong> Un web plus humain, accessible à ceux qui n’ont ni le temps
                        ni les compétences pour s’y plonger seuls. Nous valorisons les savoir-faire locaux, soutenons
                        les indépendants et bâtissons des ponts entre tradition et innovation.
                    </p>
                </div>
            </section>

            <section className="px-4 text-left mx-auto bg-paletteColor1 text-paletteColor3 w-full">
                <div className="px-4 sm:px-6">
                    <div className="text-center">
                        <h2>Notre équipe</h2>
                    </div>

                    <p className="mb-6 normal-text text-center max-w-4xl mx-auto">
                        <strong>NewCrea</strong>, c’est une équipe jeune, passionnée, et complémentaire. Fondée
                        par <strong>Jules Flautat</strong> et <strong>Emilien Marotta</strong>, diplômés en informatique,
                        notre agence repose
                        sur la <strong>créativité</strong>, l’<strong>exigence</strong> et la <strong>proximité</strong>.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-6 max-w-4xl mx-auto">
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

                    <Image
                        src="/img/emilien-jules.webp"
                        alt="Photo d'Emilien & Jules - Co-fondateurs et co-dirigeants de NewCrea"
                        width={576}
                        height={384}
                        className="w-full max-w-xl mx-auto rounded-xl border border-paletteColor2 object-cover"
                        loading="lazy"
                    />

                    <p className="py-10 normal-text text-center max-w-4xl mx-auto">
                        Nous assurons nous-mêmes la relation client, la communication et le suivi de projet pour
                        une <strong>vision claire</strong> et une <strong>proximité authentique</strong>.
                    </p>
                </div>
            </section>


            <section className="px-4 text-left">
                <div className="text-center max-w-4xl mx-auto">
                    <h2>Pourquoi nous choisir</h2>
                </div>
                <p className="mb-6 normal-text max-w-4xl mx-auto">
                    Nous ne faisons pas que créer des sites. Nous construisons des <strong>outils de
                    développement</strong>, des <strong>leviers d’image</strong> et des <strong>moteurs de
                    croissance</strong>.
                </p>
                <ul className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    <li className=" overflow-hidden border border-borderColor hover:border-paletteColor2 hover:rounded-3xl rounded-lg transition-all duration-300">
                        <Image src="/img/audit-personnalise.webp" alt="Image représentant un audit personnalisé"
                               className="w-full" width={200} height={100} loading="lazy"></Image>
                        <div className="p-4 ">
                            <span className="font-semibold block mb-1 normal-text">Audit personnalisé</span>
                            <span className="small-text text-smTextWhtColor">Nous analysons vos besoins en profondeur pour concevoir une présence en ligne qui vous ressemble vraiment — un site pensé comme un véritable levier de visibilité, pas juste une vitrine.</span>
                        </div>
                    </li>
                    <li className="overflow-hidden border border-borderColor hover:border-paletteColor2 hover:rounded-3xl rounded-lg transition-all duration-300">
                        <Image src="/img/accompagnement-humain.webp" alt="Image représentant un accompagnement humain"
                               className="w-full" width={200} height={100} loading="lazy"></Image>
                        <div className="p-4 ">
                            <span className="font-semibold block mb-1 normal-text">Accompagnement humain</span>
                            <span className="small-text text-smTextWhtColor">Nous plaçons la transparence, l'écoute et la confiance au cœur de chaque projet, pour construire avec vous des solutions numériques sur mesure, portées par une véritable relation humaine.</span>
                        </div>
                    </li>
                    <li className="overflow-hidden border border-borderColor hover:border-paletteColor2 hover:rounded-3xl rounded-lg transition-all duration-300">
                        <Image src="/img/tarification-modulaire.webp"
                               alt="Image représentant une tarification modulaire" className="w-full" width={200}
                               height={100} loading="lazy"></Image>
                        <div className="p-4 ">
                            <span className="font-semibold block mb-1 normal-text">Tarification modulaire</span>
                            <span className="small-text text-smTextWhtColor"> Nos offres sont flexibles et pensées pour s'adapter précisément à vos besoins réels — vous ne payez que pour ce qui est utile et réellement pertinent pour votre projet.</span>
                        </div>
                    </li>
                </ul>
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