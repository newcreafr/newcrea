import H1 from "@/components/H1";
import ServiceSection from "@/components/ServiceSection";
import CTA from "@/components/CTA";

export default function Services() {
    return (
        <>
            <section className="mx-auto">
                <H1>Nos services</H1>
                <p className="text-center normal-text">Découvrez sans plus attendre les services que nous proposons !</p>
            </section>
            <section className="mx-auto">
                <ServiceSection
                    title="Création de site web"
                    desc="Nous concevons des sites web sur mesure, modernes, optimisés, pensés pour répondre à vos besoins et objectifs. Que ce soit pour présenter vos services, vendre vos produits ou gagner en visibilité locale, on s'adapte à vos besoins."
                    img="/img/creation-site-web.svg"
                    route="/services/creation-site-web"
                    reverse={false}
                />
                <ServiceSection
                    title="Refonte de site web"
                    desc="Votre site actuel ne vous ressemble plus ? Il est lent, non adapté au mobile, ou mal référencé ? Nous le refondons intégralement pour en faire un outil performant, esthétique, responsive et aligné avec votre image de marque."
                    img="/img/refonte-site-web.svg"
                    route="/services/refonte-site-web"
                    reverse={true}
                />
                <ServiceSection
                    title="Création de logo"
                    desc="Un bon logo, c’est l’essence de votre identité visuelle. Nous créons des logos percutants, simples et modernes, qui s’intègrent parfaitement à votre communication (site, carte de visite, réseaux sociaux...)."
                    img="/img/creation-logo.svg"
                    route="/services/creation-logo"
                    reverse={false}
                />
            </section>
            <CTA
                title="Besoin d’un site web ou d’un logo ?"
                desc="Parlons ensemble de vos besoins ! Chez NewCrea, chaque projet commence par une écoute attentive et des conseils concrets."
                route="/contact"
                cta="Discutons de votre projet"
            />
        </>
    );
}