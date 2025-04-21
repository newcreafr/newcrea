import H1 from "@/components/H1";
import ServiceSection from "@/components/ServiceSection";
import CTA from "@/components/CTA";

export const metadata = {
    title: "Nos services : création de site, refonte et identité visuelle",
    description: "Sites vitrines, refonte complète ou identité visuelle : découvrez nos services sur mesure pour booster votre présence en ligne.",
};

export default function Services() {
    return (
        <>
            <section className="mx-auto px-4">
                <H1>Nos services</H1>
                <p className="text-left normal-text max-w-4xl mx-auto">
                    Notre mission chez <strong>NewCrea</strong> : vous aider à exister pleinement en ligne, sans complexité.<br/>
                    <strong>Site internet</strong>, <strong>refonte</strong> ou <strong>identité visuelle</strong> : on vous accompagne de façon simple, claire et personnalisée.
                </p>
            </section>
            <section className="mx-auto px-4 max-w-[1500px]">
                <ServiceSection
                    title="Création de site web"
                    desc="Un vrai outil pour développer votre activité. Votre site n’est pas qu’une vitrine : il doit convaincre, rassurer et donner envie d’agir. On conçoit avec vous un site qui valorise votre offre, attire les bons visiteurs, et vous permet d’atteindre vos objectifs (visibilité, ventes, contacts…)."
                    img="/img/creation-site-web.svg"
                    route="/services/creation-site-web"
                    reverse={false}
                />
                <ServiceSection
                    title="Refonte de site web"
                    desc="Donnez un second souffle à votre site. Votre site ne reflète plus votre activité, il est lent, dépassé ou peu lisible sur mobile ? On le repense entièrement pour en faire un outil clair, moderne et performant : nouveau design, navigation simplifiée, visibilité renforcée."
                    img="/img/refonte-site-web.svg"
                    route="/services/refonte-site-web"
                    reverse={true}
                />
                <ServiceSection
                    title="Création d'identité visuelle"
                    desc="Un logo professionnel, simple et reconnaissable. Votre logo, c’est la première impression que vous laissez. On crée pour vous une identité visuelle sur mesure, adaptée à votre activité et facile à décliner sur tous vos supports (site, réseaux, cartes…)."
                    img="/img/creation-identite-visuelle.svg"
                    route="/services/creation-identite-visuelle"
                    reverse={false}
                />
            </section>
            <CTA
                title="Un projet en tête ? Parlons-en !"
                route="/contact"
                cta="Discutons de votre projet"
            />
        </>
    );
}