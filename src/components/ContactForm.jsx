"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    objet: "Je suis interessé(e) par vos services",
    service: "Création de site web",
    message: "",
  });

  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult("");

    if (!validateEmail(formData.email)) {
      setError("Adresse email invalide.");
      return;
    }

    if (formData.objet === "Je voudrais un renseignement" && !formData.message.trim()) {
      setError("Merci de préciser votre message.");
      return;
    }

    if (formData.objet === "Je suis interessé(e) par vos services" && !formData.service) {
      setError("Veuillez sélectionner un service.");
      return;
    }

    const fullMessage =
      formData.objet === "Je suis intéressé(e) par vos services"
        ? `Service choisi : ${formData.service}\n${formData.message}`
        : formData.message;

    const formDataToSend = new FormData();
    formDataToSend.append("email", formData.email);
    formDataToSend.append("objet", formData.objet);
    formDataToSend.append("message", fullMessage);
    formDataToSend.append("service", formData.service);

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        body: formDataToSend,
      });

      const resText = await response.text();
      setResult(resText);
      setFormData({
        email: "",
        objet: "Je suis interessé(e) par vos services",
        service: "",
        message: "",
      });
    } catch (error) {
      setError("Une erreur est survenue.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto my-5">
      <label className="block">
        <span className="text-md md:text-lg font-semibold">Adresse e-mail (obligatoire)</span>
        <input
          type="email"
          name="email"
          placeholder="jean.dupont@exemple.fr"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-paletteColor4 border border-paletteColor1 text-sm xs:text-md md:text-lg"
        />
      </label>

      <label className="block">
        <span className="text-md md:text-lg font-semibold">Objet du message</span>
        <select
          name="objet"
          value={formData.objet}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-paletteColor4 border border-paletteColor1 text-sm xs:text-md md:text-lg"
        >
          <option>Je suis interessé(e) par vos services</option>
          <option>Je voudrais un renseignement</option>
        </select>
      </label>

      {formData.objet === "Je suis interessé(e) par vos services" && (
        <label className="block">
          <span className="text-md md:text-lg font-semibold">Service concerné</span>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-paletteColor4 border border-paletteColor1 text-sm xs:text-md md:text-lg"
            required
          >
            <option value="Création de site web">Création d'un site web</option>
            <option value="Refonte de site">Refonte d'un site web</option>
            <option value="Création de logo">Création d'un logo</option>
          </select>
        </label>
      )}

      <label className="block">
        <span className="text-md md:text-lg font-semibold">
          {formData.objet === "Je suis interessé(e) par vos services"
            ? "Message (facultatif)"
            : "Message (obligatoire)"}
        </span>
        <textarea
          name="message"
          placeholder={
            formData.objet === "Je suis interessé(e) par vos services"
              ? "Faites nous part d'informations supplémentaires si vous le désirez"
              : "Merci de préciser votre message"
          }
          value={formData.message}
          onChange={handleChange}
          rows="6"
          className="w-full p-3 rounded-lg bg-paletteColor4 resize-none border border-paletteColor1 text-sm xs:text-md md:text-lg"
          maxLength={1500}
        />
        <p className="text-right text-md md:text-lg text-smTextWhtColor">
          {formData.message.length} / 1500 caractères
        </p>
      </label>

      <button
        type="submit"
        className="text-md transform rounded-full border-2 border-paletteColor1 bg-white px-4 py-2 text-paletteColor1 transition-all duration-300 ease-in-out hover:origin-center hover:scale-105 hover:bg-paletteColor1 hover:text-paletteColor3"
      >
        Envoyer mon message
      </button>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      {result && <p className="mt-4 text-sm text-green-600">{result}</p>}
    </form>
  );
};

export default ContactForm;
