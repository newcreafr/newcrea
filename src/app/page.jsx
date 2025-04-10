import Hero from "@/components/Hero";
import Offres from "@/components/Offres";
import Processus from "@/components/Processus";
import PourquoiNous from "@/components/PourquoiNous";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const Home = () => {
    return (
        <>
            <Hero />
            <Offres />
            <PourquoiNous />
            <Processus />
            <FAQ />
            <CTA
                title="Envie de booster votre présence en ligne ?"
                desc="Un site web bien pensé peut transformé votre activité."
                route="contact"
                cta="Discutons de votre projet"
                note="(réponse sous 24h)"
            />
        </>
    );
};

export default Home;