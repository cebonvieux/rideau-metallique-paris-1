"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import { siteConfig } from "@/config/site";

const WEBHOOK_URL = "https://lioai.app.n8n.cloud/webhook/drm-contact";

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);

  // Scroll vers le message de confirmation/erreur quand il apparaît
  useEffect(() => {
    if ((submitStatus === "success" || submitStatus === "error") && statusRef.current) {
      statusRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [submitStatus]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Préparer les données selon le format attendu par le webhook
      const payload = {
        nom: formData.name,
        telephone: formData.phone,
        email: formData.email || "",
        adresse: formData.address || "",
        prestation: formData.service,
        message: formData.message || "",
        source: `${siteConfig.domain}-contact-form`,
        formulaire: `Demande de devis gratuit ${siteConfig.city}`,
        brand: siteConfig.fullName,
        city: siteConfig.city,
        sitePhone: siteConfig.phone,
        siteEmail: siteConfig.email,
        submittedAt: new Date().toISOString(),
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
        userAgent: typeof window !== "undefined" ? window.navigator.userAgent : "",
      };

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      setSubmitStatus("success");
      // Réinitialiser le formulaire
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue. Veuillez réessayer ou nous appeler directement."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
            Nom *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
            Téléphone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
            placeholder="06 00 00 00 00"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
          placeholder="votre@email.com"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-2">
          Adresse du local
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
          placeholder="Adresse de votre commerce"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
          Type d&apos;intervention *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
        >
          <option value="">Sélectionnez...</option>
          <option value="depannage">Dépannage urgence</option>
          <option value="installation">Installation</option>
          <option value="motorisation">Motorisation</option>
          <option value="entretien">Entretien / Contrat</option>
          <option value="devis">Demande de devis</option>
          <option value="autre">Autre demande</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
          Décrivez votre besoin
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-white border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors resize-none"
          placeholder="Décrivez votre problème ou votre projet..."
        />
      </div>

      {/* Messages de statut */}
      {submitStatus === "success" && (
        <div ref={statusRef} className="p-6 bg-emerald-50 border-2 border-emerald-500 rounded-lg text-emerald-900">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-lg mb-2">✅ Votre demande a bien été envoyée !</p>
              <p className="text-sm">
                Nous avons bien reçu votre demande et nous vous répondrons dans les plus brefs délais.
              </p>
              <p className="text-sm mt-2">
                Pour une urgence, n&apos;hésitez pas à nous appeler directement au{" "}
                <a href={siteConfig.phoneLink} className="font-semibold underline text-emerald-700 hover:text-emerald-900">
                  {siteConfig.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div ref={statusRef} className="p-4 bg-red-50 border border-red-200 text-red-800">
          <p className="font-medium">❌ Erreur lors de l&apos;envoi</p>
          <p className="text-sm mt-1">
            {errorMessage || "Une erreur est survenue. Veuillez réessayer ou nous appeler directement au "}
            {!errorMessage && (
              <a href={siteConfig.phoneLink} className="font-semibold underline">
                {siteConfig.phone}
              </a>
            )}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-dark py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>

      <p className="text-xs text-neutral-500 text-center">
        Pour une urgence, appelez directement le{" "}
        <a href={siteConfig.phoneLink} className="text-neutral-900 font-semibold">
          {siteConfig.phone}
        </a>
      </p>
    </form>
  );
}
