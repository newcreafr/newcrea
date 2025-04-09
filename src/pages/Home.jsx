import Hero from "../components/Hero";
import Offres from "../components/Offres.jsx";
import Processus from "../components/Processus";
import PourquoiNous from "../components/PourquoiNous";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Offres />
      <PourquoiNous />
      <Processus />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;