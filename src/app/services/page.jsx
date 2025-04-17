import H1 from "@/components/H1";
import ServiceSection from "@/components/ServiceSection";
import CTA from "@/components/CTA";

export default function Services() {
    return (
        <>
            <section className="mx-auto px-4">
                <H1>Nos services</H1>
                <p className="text-center normal-text">
                    Notre mission chez <strong>NewCrea</strong> : vous aider à exister pleinement en ligne, sans complexité.<br/>
                    <strong>Site internet</strong>, <strong>refonte</strong> ou <strong>logo</strong> : on vous accompagne de façon simple, claire et personnalisée.
                </p>
            </section>
            <section className="mx-auto px-4">
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
                    title="Création de logo"
                    desc="Un logo professionnel, simple et reconnaissable. Votre logo, c’est la première impression que vous laissez. On crée pour vous une identité visuelle sur mesure, adaptée à votre activité et facile à décliner sur tous vos supports (site, réseaux, cartes…)."
                    img="/img/creation-logo.svg"
                    route="/services/creation-logo"
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