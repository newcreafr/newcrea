import ContactForm from "../components/ContactForm.jsx";
import H1 from "../components/H1.jsx";

const Contact = () => {
  return (
    <div className="mx-auto mt-16 flex w-[90%] flex-col items-center text-center">
      <H1>Formulaire de contact</H1>
      <ContactForm />
    </div>
  );
};

export default Contact;