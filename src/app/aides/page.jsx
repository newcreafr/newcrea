import { ExternalLink } from "lucide-react";
import H1 from "@/components/H1";
import CTA from "@/components/CTA";

const Aides = () => {
    return (
        <section className="text-center">
            <div className="max-w-2xl mx-auto">
                <H1>Obtenez des aides</H1>
                <p className="normal-text ">
                    Découvrez ici les aides financières disponibles pour accompagner la transformation numérique de votre entreprise.
                </p>

                <div className="mt-10 flex flex-col items-center">
                    <ul className="space-y-4 text-left text-smTextWhtColor">
                        <li className="flex items-center gap-2">
                            <ExternalLink size={16} className="text-primary shrink-0" />
                            <a
                                href="https://www.bpifrance.fr/catalogue-offres/pret-transformation-numerique"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-paletteColor2 normal-text"
                            >
                                Prêt transformation numérique
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <ExternalLink size={16} className="text-primary shrink-0" />
                            <a
                                href="https://www.francenum.gouv.fr/aides-financieres/aide-la-transformation-numerique-des-tpe"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-paletteColor2 normal-text"
                            >
                                Aide à la transformation numérique des TPE
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <ExternalLink size={16} className="text-primary shrink-0" />
                            <a
                                href="https://www.francenum.gouv.fr/aides-financieres/grand-est-competitivite"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-paletteColor2 normal-text"
                            >
                                Grand Est Compétitivité
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <ExternalLink size={16} className="text-primary shrink-0" />
                            <a
                                href="https://www.grandest.fr/vos-aides-regionales/pret-rebond-grand-est/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-paletteColor2 normal-text"
                            >
                                Prêt Rebond Grand Est
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <CTA
                title="Prêt(e) à passer à l'action ?"
                route="/services/"
                cta="Découvrir nos services"
            />
        </section>
    );
};

export default Aides;
