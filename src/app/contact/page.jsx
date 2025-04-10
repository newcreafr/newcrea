import ContactForm from "@/components/ContactForm";
import H1 from "@/components/H1";

const Contact = () => {
    return (
        <section className="flex w-[90%] flex-col items-center text-center mb-16">
            <H1>Formulaire de contact</H1>
            <ContactForm />
        </section>
    );
};

export default Contact;