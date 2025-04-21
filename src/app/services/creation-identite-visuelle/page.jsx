import H1 from "@/components/H1.jsx";
import CTA from "@/components/CTA.jsx";
import Image from "next/image";

export const metadata = {
    title: "Création d’identité visuelle • Logo & charte graphique pro",
    description: "Logo, couleurs, typographies : nous façonnons une image de marque forte, cohérente et mémorable pour votre activité.",
};

const CreationIdentiteVisuelle = () => {
    const tarifs = [
        {
            type: "",
            details: [
                ["Création d'un logo (optionnel)", "100€ TTC", "Format SVG, JPEG, PNG"],
                ["Signature d'email sur mesure (optionnel)", "50€ TTC", "Signature HTML/CSS personnalisée"],
                ["Charte graphique (optionnel)", "100€ TTC", "Cahier des normes graphiques (couleurs, typos, etc.)"],
                ["Pack création d'identité visuelle", "200€ TTC", "Comprend tous les éléments précédents"],
            ]
        }
    ];

    return (
        <>
            <section className="text-center px-4">
                <H1>Création d'identité visuelle</H1>
                <p className="normal-text max-w-4xl mx-auto text-left">
                    Un style <strong>simple</strong>, <strong>clair</strong>, et <strong>reconnaissable</strong> en un
                    clin d’œil.<br/><br/>
                    Chez <strong>NewCrea</strong>, nous concevons des identités visuelles modernes, épurées, et adaptées
                    à tous les supports : site web, réseaux sociaux, cartes de visite, enseignes...
                </p>
            </section>

            <div className="px-4 w-[90%] mx-auto max-w-2xl mt-16">
                <Image src="/img/creation-identite-visuelle.webp" alt="Illustration création d'identité visuelle" width={400} height={300}
                       loading="lazy"
                       className="w-full mx-auto rounded-xl border border-paletteColor2 object-cover"
                />
            </div>

            <section className="text-center px-4">
                <h2>Des logos polyvalents, pensés pour durer</h2>
                <p className="max-w-4xl mx-auto normal-text text-left">
                    Nos créations sont optimisées pour être <strong>lisibles</strong> et <strong>impactantes</strong>,
                    même en petit format.
                    Elles s’adaptent à <strong>tous les contextes</strong> : impression, web, écrans mobiles ou
                    affichage vitrine.
                </p>
            </section>

            <section className="px-4 mt-16">
                <div className="text-center max-w-4xl mx-auto">
                    <h2>Tarifs pour la création d'identité visuelle</h2>
                </div>
                <div className="space-y-6 max-w-4xl mx-auto">
                    {tarifs.map(({type, details}, i) => (
                        <div key={i}>
                            {type && (
                                <div className="text-center">
                                    <h3>{type}</h3>
                                </div>
                            )}
                            <div className="space-y-4">
                                {details.map(([label, price, desc], idx) => (
                                    <div
                                        key={`${i}-${idx}`}
                                        className="flex justify-between border-b border-paletteColor2 pb-2"
                                    >
                                        <div className="w-full">
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium small-text">{label}</span>
                                                <span className="font-bold small-text text-right">{price}</span>
                                            </div>
                                            <p className="text-sm text-smTextWhtColor mt-1">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CTA
                title="Besoin d’une identité visuelle ?"
                desc="Créons ensemble une identité visuelle qui marquera les esprits. Un logo professionnel, moderne et adapté à votre image."
                route="/contact"
                cta="Discutons-en"
            />
        </>
    );
};

export default CreationIdentiteVisuelle;