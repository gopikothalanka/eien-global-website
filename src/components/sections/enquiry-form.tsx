"use client";

import Image from "next/image";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  enquiry: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialState: FormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  country: "",
  enquiry: "",
};

const formFields = [
  { label: "Name*", type: "text", name: "name" },
  { label: "Email*", type: "email", name: "email" },
  { label: "Phone*", type: "tel", name: "phone" },
  { label: "City*", type: "text", name: "city" },
  { label: "Country*", type: "text", name: "country" },
] as const;

type EnquiryFormProps = {
  heading?: string;
};

export function EnquiryForm({
  heading = "Have a query on our products?",
}: EnquiryFormProps) {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name as keyof FormErrors]) {
        return current;
      }
      const nextErrors = { ...current };
      delete nextErrors[name as keyof FormErrors];
      return nextErrors;
    });
    setSubmitMessage(null);
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Enter valid 10-digit phone";
    }

    if (!formData.city.trim()) newErrors.city = "City is required";

    if (!formData.enquiry.trim()) newErrors.enquiry = "Enquiry is required";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitMessage(null);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? "Failed to send your message.");
      }

      setFormData(initialState);
      setSubmitMessage({
        type: "success",
        text: "Your enquiry has been sent successfully.",
      });
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your enquiry.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* Background image */}
      <Image
        src="/contact-us-bg.png"
        alt=""
        fill
        className="object-cover"
        aria-hidden
      />

      {/* Blur + dark overlay */}
      <div className="absolute inset-0 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Form card */}
      <div className="relative z-10 mx-auto w-full max-w-2xl px-4">
        <div>
          <h2 className="text-center font-[family-name:var(--font-sora)] text-2xl font-semibold text-white">
            {heading}
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {formFields.map((field) => (
                <label key={field.name} className="block">
                  <span className="sr-only">{field.label}</span>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.label}
                    disabled={isSubmitting}
                    className="w-full rounded-lg border border-white/30 bg-white/90 px-4 py-3 text-sm text-[#0B1220] placeholder:text-[#64748B] focus:border-[#3B82F6] focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500"
                  />
                  {errors[field.name] && (
                    <p className="mt-1 text-xs text-red-300">
                      {errors[field.name]}
                    </p>
                  )}
                </label>
              ))}
            </div>

            <label className="block">
              <span className="sr-only">Enquiry</span>
              <textarea
                name="enquiry"
                rows={4}
                value={formData.enquiry}
                onChange={handleChange}
                placeholder="Enquiry Message"
                disabled={isSubmitting}
                className="w-full resize-none rounded-lg border border-white/30 bg-white/90 px-4 py-3 text-sm text-[#0B1220] placeholder:text-[#64748B] focus:border-[#3B82F6] focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500"
              />
              {errors.enquiry && (
                <p className="mt-1 text-xs text-red-300">{errors.enquiry}</p>
              )}
            </label>

            {submitMessage ? (
              <p
                className={`text-sm ${
                  submitMessage.type === "success"
                    ? "text-emerald-300"
                    : "text-red-300"
                }`}
              >
                {submitMessage.text}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-[#3B82F6] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2563EB] disabled:cursor-not-allowed disabled:bg-[#93C5FD]"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
