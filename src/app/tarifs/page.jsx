import H1 from "@/components/H1";
import CTA from "@/components/CTA";

const Tarifs = () => {
    return (
        <section className="px-4 text-center">
            <div className="max-w-4xl mx-auto">
                <H1>Nos tarifs</H1>

                <p className="normal-text">
                    Chez NewCrea, nous pensons que la clarté est essentielle.<br/>
                    Voici nos tarifs indicatifs pour la création ou la refonte de site web, ainsi que nos prestations en
                    identité visuelle.
                </p>
                <br/>
                <p className="normal-text">
                    Chaque projet étant unique, ces tarifs sont adaptables selon vos besoins spécifiques.<br/>
                    Un devis personnalisé vous sera systématiquement proposé après un échange sur vos besoins.
                </p>

                <h2 className="mt-16">Création de site</h2>
                <table className="w-full text-left border-collapse">
                    <tbody>
                    <tr className="border-b">
                        <td className="py-2 font-medium small-text">Audit personnalisé de l’environnement</td>
                        <td className="py-2 text-right small-text">150€ TTC</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 font-medium small-text">Maquettes personnalisées</td>
                        <td className="py-2 text-right small-text">450€ TTC</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 font-medium small-text">Site de 1 à 5 pages</td>
                        <td className="py-2 text-right small-text">750€ TTC</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 font-medium small-text">Site de 6 à 10 pages</td>
                        <td className="py-2 text-right small-text">1 200€ TTC / 1 000€ HT</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 font-medium small-text">Site de 11 pages et plus</td>
                        <td className="py-2 text-right small-text">à partir de 2 100€ TTC</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 font-medium small-text">Création d’identité visuelle</td>
                        <td className="py-2 text-right small-text">voir section dédiée</td>
                    </tr>
                    <tr>
                        <td className="py-2 font-medium small-text">Hébergement, mise en ligne et configuration</td>
                        <td className="py-2 text-right small-text">150€ TTC</td>
                    </tr>
                    </tbody>
                </table>

                <h2 className="mt-16">Refonte de site</h2>
                <table className="w-full text-left border-collapse">
                    <tbody>
                    <tr className="border-b">
                        <td className="py-2 font-medium small-text">Audit personnalisé de l’environnement</td>
                        <td className="py-2 text-right small-text">150€ TTC</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 font-medium small-text">Maquettes personnalisées</td>
                        <td className="py-2 text-right small-text">450€ TTC</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 font-medium small-text">Création d’identité visuelle</td>
                        <td className="py-2 text-right small-text">voir section dédiée</td>
                    </tr>
                    <tr>
                        <td className="py-2 font-medium small-text">Refonte</td>
                        <td className="py-2 text-right small-text">Sur devis</td>
                    </tr>
                    </tbody>
                </table>

                <h2 className="mt-16">Création d’identité visuelle</h2>
                <table className="w-full text-left border-collapse">
                    <tbody>
                    <tr className="border-b">
                        <td className="py-2 font-medium small-text">Création de logo (3 choix possibles)</td>
                        <td className="py-2 text-right small-text">100€ TTC</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 font-medium small-text">Palette de couleurs adaptée</td>
                        <td className="py-2 text-right small-text">100€ TTC</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 font-medium small-text">Style typographique personnalisé</td>
                        <td className="py-2 text-right small-text">100€ TTC</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 font-medium small-text">Signature numérique sur-mesure</td>
                        <td className="py-2 text-right small-text">50€ TTC</td>
                    </tr>
                    <tr>
                        <td className="py-2 font-medium small-text">Pack identité visuelle complet</td>
                        <td className="py-2 text-right small-text">250€ TTC</td>
                    </tr>
                    </tbody>
                </table>


                <h2 className="mt-16">Bon à savoir</h2>

                <div className="grid gap-4 text-left  md:grid-cols-2">
                    <div className="border border-borderColor rounded-lg p-4">
                        <p className="font-semibold normal-text">Tous nos tarifs sont affichés TTC</p>
                        <p className="mt-1 small-text">(TVA non applicable, art. 293 B du CGI –
                            auto-entreprise).</p>
                    </div>

                    <div className="border border-borderColor rounded-lg p-4 ">
                        <p className="font-semibold normal-text">Devis personnalisé</p>
                        <p className="small-text mt-1">Proposé après échange selon vos besoins spécifiques
                            ou complexes.</p>
                    </div>

                    <div className="border border-borderColor rounded-lg p-4">
                        <p className="font-semibold normal-text">Réduction possible</p>
                        <p className="small-text mt-1">Pour les associations ou entreprises en création.</p>
                    </div>

                    <div className="border border-borderColor rounded-lg p-4">
                        <p className="font-semibold normal-text">Vous avez déjà un audit ou des maquettes ?</p>
                        <p className="small-text mt-1">Contactez-nous, nous ajusterons le tarif en
                            conséquence.</p>
                    </div>
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

export default Tarifs;
