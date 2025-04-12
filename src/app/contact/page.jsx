import ContactForm from "@/components/ContactForm";
import H1 from "@/components/H1";

const Contact = () => {
    return (
        <section className="w-[90%] mx-auto max-w-4xl py-12 text-center">
            <H1>Contactez-nous</H1>

            <div className="bg-paletteColor1 text-smTextDrkColor p-5 rounded-xl flex flex-col gap-4">
                <p className="mt-6 text-lg md:text-xl font-medium leading-relaxed text-paletteColor3">
                    Une idée, une question ou un projet à concrétiser ?
                </p>
                <p className="text-base md:text-lg font-normal text-smTextDrkColor">
                    Remplissez le formulaire ci-dessous ou écrivez-nous directement : {" "}
                    <a
                        href="mailto:contact@newcrea.fr"
                        className="text-primary underline hover:text-paletteColor2 transition md:text-lg"
                    >contact@newcrea.fr
                    </a>.
                </p>
                <p className="mt-2 text-sm text-smTextDrkColor mb-4">Réponse sous 24h garantie, sans engagement.</p>
            </div>
            <div className="mt-16">
                <ContactForm/>
            </div>
        </section>
    );
};

export default Contact;
