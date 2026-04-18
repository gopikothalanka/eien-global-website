"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

const slides = [
  {
    eyebrow: "B2B Export Partner",
    title: "Reliable sourcing and export operations for growth-focused businesses",
    subtitle:
      "Work with a partner that combines supplier rigor, transparent execution, and on-time delivery performance.",
    cta: { label: "Explore Product Categories", href: "#products" },
    bgClass:
      "bg-[radial-gradient(1200px_500px_at_20%_0%,rgba(59,130,246,0.28),transparent_65%),linear-gradient(120deg,#0B1220_0%,#111C32_55%,#1A2845_100%)]",
  },
  {
    eyebrow: "Compliance and Documentation",
    title: "Clear export workflows built for predictable international trade",
    subtitle:
      "From commercial documentation to shipment milestones, every step is structured for low-friction transactions.",
    cta: { label: "View Our Process", href: "#process" },
    bgClass:
      "bg-[radial-gradient(1000px_450px_at_85%_15%,rgba(59,130,246,0.25),transparent_65%),linear-gradient(120deg,#0A1428_0%,#0E1C38_60%,#1A335D_100%)]",
  },
  {
    eyebrow: "Long-Term Supply Partnerships",
    title: "Scale market expansion with dependable procurement support",
    subtitle:
      "Get category-focused sourcing, quality checkpoints, and delivery accountability in one operating model.",
    cta: { label: "Get in Touch", href: "#contact" },
    bgClass:
      "bg-[radial-gradient(900px_430px_at_70%_0%,rgba(147,197,253,0.24),transparent_60%),linear-gradient(120deg,#0B1220_0%,#10203C_62%,#1D3A6B_100%)]",
  },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-700 ${
            activeIndex === index ? "opacity-100" : "pointer-events-none opacity-0"
          } ${slide.bgClass}`}
          aria-hidden={activeIndex !== index}
        />
      ))}

      <div className="relative min-h-[640px] py-24 md:min-h-[700px] md:py-28">
        <Container className="flex min-h-[500px] items-center">
          <div className="max-w-3xl text-white">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#93C5FD]">
              {slides[activeIndex].eyebrow}
            </p>
            <h1 className="font-[family-name:var(--font-sora)] text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.08]">
              {slides[activeIndex].title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              {slides[activeIndex].subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink
                href={slides[activeIndex].cta.href}
                className="bg-[#3B82F6] text-white hover:bg-[#2563EB]"
              >
                {slides[activeIndex].cta.label}
              </ButtonLink>
              <ButtonLink
                href="#contact"
                variant="secondary"
                className="border-white/40 text-white hover:bg-white/10 hover:text-white"
              >
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </Container>

        <button
          type="button"
          onClick={() =>
            setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-white/10 p-3 text-white backdrop-blur transition-colors hover:bg-white/20 md:left-8"
          aria-label="Previous slide"
        >
          <span aria-hidden="true">&#8249;</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveIndex((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-white/10 p-3 text-white backdrop-blur transition-colors hover:bg-white/20 md:right-8"
          aria-label="Next slide"
        >
          <span aria-hidden="true">&#8250;</span>
        </button>

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-10">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                activeIndex === index ? "w-10 bg-[#3B82F6]" : "w-6 bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
