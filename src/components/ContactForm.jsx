"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    projet: "Site internet",
    delai: "Le plus tôt possible",
    budget: "500€ - 1200€",
    message: "",
    consent: false,
  });

  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateEmail = (email) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult("");

    if (!validateEmail(formData.email)) {
      setError("Adresse e-mail invalide.");
      return;
    }

    if (!formData.consent) {
      setError("Veuillez accepter les conditions.");
      return;
    }

    const fullMessage = `
      Projet : ${formData.projet}
      Délais : ${formData.delai}
      Budget : ${formData.budget}
      Message : ${formData.message}
    `;

    const dataToSend = new FormData();
    dataToSend.append("email", formData.email);
    dataToSend.append("objet", `Demande de devis - ${formData.projet}`);
    dataToSend.append("message", fullMessage);

    try {
      const res = await fetch("https://newcrea.fr/contact.php", {
        method: "POST",
        body: dataToSend,
      });
      const resText = await res.text();
      setResult(resText);
      setFormData({
        email: "",
        projet: "Site internet",
        delai: "Le plus tôt possible",
        budget: "500€ - 1200€",
        message: "",
        consent: false,
      });
    } catch {
      setError("Erreur lors de l'envoi. Veuillez réessayer.");
    }
  };

  return (
      <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6 p-4 text-left"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">E-mail</label>
            <input
                type="email"
                name="email"
                placeholder="exemple@entreprise.fr"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 mt-1 rounded border border-borderColor focus:outline-none focus:ring-2 focus:ring-paletteColor2"
            />
          </div>
          <div>
            <label className="font-semibold">Quel est votre projet ?</label>
            <select
                name="projet"
                value={formData.projet}
                onChange={handleChange}
                className="w-full p-3 mt-1 rounded border border-borderColor bg-paletteColor3 focus:outline-none focus:ring-2 focus:ring-paletteColor2"
            >
              <option>Création d'un site web</option>
              <option>Refonte d'un site web</option>
              <option>Création d'un logo</option>
            </select>
          </div>
          <div>
            <label className="font-semibold">Quand souhaitez-vous commencer ?</label>
            <select
                name="delai"
                value={formData.delai}
                onChange={handleChange}
                className="w-full p-3 mt-1 rounded border border-borderColor bg-paletteColor3 focus:outline-none focus:ring-2 focus:ring-paletteColor2"
            >
              <option>Le plus tôt possible</option>
              <option>Dans 1 mois</option>
              <option>Dans 3 mois</option>
              <option>Je ne sais pas encore</option>
            </select>
          </div>
          <div>
            <label className="font-semibold">Quel est votre budget ?</label>
            <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-3 mt-1 rounded border border-borderColor bg-paletteColor3 focus:outline-none focus:ring-2 focus:ring-paletteColor2"
            >
              <option>Entre 500€ et 1200€</option>
              <option>Entre 1200€ et 2000€</option>
              <option>Plus de 2000€</option>
              <option>Je ne sais pas encore</option>
            </select>
          </div>
        </div>

        <div>
          <label className="font-semibold">Des précisions à ajouter ?</label>
          <textarea
              name="message"
              placeholder="(optionnel)"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-1 rounded border border-borderColor resize-none focus:outline-none focus:ring-2 focus:ring-paletteColor2"
              rows="8"
              maxLength={1500}
          />
          <p className="text-right text-sm mt-1">
            {formData.message.length} / 1500 caractères
          </p>
        </div>

        <label className="flex items-start gap-2 text-sm">
          <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 accent-paletteColor2"
          />
          En cochant cette case, j'accepte que les informations saisies soient utilisées dans le cadre de la prise de
          contact.
        </label>

        {error && <p className="text-red-600">{error}</p>}
        {result && <p className="text-green-600">{result}</p>}

        <div className="flex justify-end">
          <button
              type="submit"
              className="transform rounded-full border-2 border-paletteColor1 bg-white px-4 py-2 text-paletteColor1 transition-all duration-300 ease-in-out hover:origin-center hover:scale-105 hover:bg-paletteColor1 hover:text-paletteColor3"
          >
            Envoyer
          </button>
        </div>
      </form>
  );
}
