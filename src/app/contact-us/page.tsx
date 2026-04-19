"use client";
import Image from "next/image";
import contactPageImage from "@/assets/contact-page.png";
import { Container } from "@/components/ui/container";
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
  enquiry: "",
  country: "",
};
const contactDetails = {
	office: [
		"Do.No. 102-6-27, Dwaraka nagar, ",
		"Bommuru, Rajahmundry,",
		"East Godavari, Andhra Pradesh 533124 India.",
	],
	// factoryAddress: [
	// 	"Survey No 132/A/3, 131/B/1/2, 132/A, 133/A/1/1/2, 132/B, 132,",
	// 	"Thodellagudem (V), Dornakal Mandal,",
	// 	"Mahabubabad District, Telangana 506381 India.",
	// ],
	phone: "+91 94946 38430",
	emails: ["info@eienglobal.com",],
};

const formFields = [
	{ label: "Name*", type: "text", name: "name" },
	{ label: "Email*", type: "email", name: "email" },
	{ label: "Phone*", type: "tel", name: "phone" },
	{ label: "City*", type: "text", name: "city" },
	{ label: "Country*", type: "text", name: "country" },
] as const;

export default function ContactUsPage() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (
	  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

	const validate = () => {
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
				headers: {
					"Content-Type": "application/json",
				},
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
		<div className="bg-white">
			<section className="relative h-[290px] overflow-hidden md:h-[360px]">
				<Image
					src={contactPageImage}
					alt="Eien Global contact page hero"
					fill
					priority
					className="object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15" />

				<Container className="relative z-10 flex h-full items-center">
					<h1 className="font-[family-name:var(--font-sora)] text-4xl font-semibold tracking-tight text-white md:text-5xl">
						Contact Us
					</h1>
				</Container>
			</section>

			<section className="py-16 md:py-20">
				<Container>
					<div className="grid gap-10 lg:grid-cols-[1fr_420px]">
						<div className="space-y-5">
							<div className="border-b border-[#E2E8F0] pb-7">
								<h2 className="font-[family-name:var(--font-sora)] text-lg font-semibold text-[#0B1220]">
									Office:
								</h2>
								<div className="mt-3 space-y-1 text-sm leading-7 text-[#475569]">
									{contactDetails.office.map((line) => (
										<p key={line}>{line}</p>
									))}
								</div>

								{/*<h3 className="mt-6 font-[family-name:var(--font-sora)] text-base font-semibold text-[#0B1220]">
									Factory Address:
								</h3>
								 <div className="mt-3 space-y-1 text-sm leading-7 text-[#475569]">
									{contactDetails.factoryAddress.map((line) => (
										<p key={line}>{line}</p>
									))}
								</div> */}
							</div>

							<div className="border-b border-[#E2E8F0] pb-7">
								<h3 className="font-[family-name:var(--font-sora)] text-lg font-semibold text-[#0B1220]">
									Talk to us:
								</h3>
								<a
									href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
									className="mt-3 inline-block text-sm font-medium text-[#475569] transition-colors hover:text-[#3B82F6]"
								>
									{contactDetails.phone}
								</a>
							</div>

							<div>
								<h3 className="font-[family-name:var(--font-sora)] text-lg font-semibold text-[#0B1220]">
									Email to us:
								</h3>
								<div className="mt-3 flex flex-col gap-1">
									{contactDetails.emails.map((email) => (
										<a
											key={email}
											href={`mailto:${email}`}
											className="text-sm font-medium text-[#475569] transition-colors hover:text-[#3B82F6]"
										>
											{email}
										</a>
									))}
								</div>
							</div>
						</div>

						<aside className="rounded-xl border border-[#E2E8F0] bg-[#F1F5F9] p-6 sm:p-8">
							<h2 className="text-center font-[family-name:var(--font-sora)] text-2xl font-semibold text-[#0B1220]">
								Have a query on our products?
							</h2>

							<form onSubmit={handleSubmit} className="mt-7 space-y-4">
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
											className="w-full rounded-md border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0B1220] placeholder:text-[#64748B] focus:border-[#3B82F6] focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500"
										/>

										{errors[field.name] && (
											<p className="mt-1 text-xs text-red-500">{errors[field.name]}</p>
										)}
									</label>
								))}

								<label className="block">
									<span className="sr-only">Enquiry</span>
									<textarea
										name="enquiry"
										rows={4}
										value={formData.enquiry}
										onChange={handleChange}
										placeholder="Enquiry"
										disabled={isSubmitting}
										className="w-full resize-none rounded-md border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0B1220] placeholder:text-[#64748B] focus:border-[#3B82F6] focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500"
									/>

									{errors.enquiry && (
										<p className="mt-1 text-xs text-red-500">{errors.enquiry}</p>
									)}
								</label>

								{submitMessage ? (
									<p
										className={`text-sm ${
											submitMessage.type === "success"
												? "text-emerald-600"
												: "text-red-500"
										}`}
									>
										{submitMessage.text}
									</p>
								) : null}

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full rounded-md bg-[#3B82F6] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2563EB] disabled:cursor-not-allowed disabled:bg-[#93C5FD] disabled:hover:bg-[#93C5FD]"
							>
								{isSubmitting ? "Sending..." : "Submit"}
							</button>
							</form>
						</aside>
					</div>
				</Container>
			</section>
		</div>
	);
}
