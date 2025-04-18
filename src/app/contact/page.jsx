import ContactForm from "@/components/ContactForm";
import H1 from "@/components/H1";

export const metadata = {
    title: "Contactez NewCrea",
    description: "Un projet ? Une question ? L’équipe NewCrea vous répond rapidement. Par mail ou formulaire.",
};

const Contact = () => {
    return (
        <section className="mx-auto max-w-4xl text-center">
            <H1>Contactez-nous</H1>

            <div className="bg-paletteColor1  p-5 rounded-xl flex flex-col gap-4">
                <p className="mt-6 normal-text font-medium leading-relaxed text-paletteColor3">
                    Une idée, une question ou un projet à concrétiser ?
                </p>
                <p className="normal-text font-normal text-smTextDrkColor">
                    Remplissez le formulaire ci-dessous ou écrivez-nous directement :<br/>
                    <a
                        href="mailto:contact@newcrea.fr"
                        className="underline hover:text-paletteColor2 transition normal-text"
                    >contact@newcrea.fr
                    </a>
                </p>
                <p className="mt-2 small-text text-smTextDrkColor mb-4">Réponse sous 24h garantie, sans engagement.</p>
            </div>
            <div className="mt-16">
                <ContactForm/>
            </div>
        </section>
    );
};

export default Contact;
