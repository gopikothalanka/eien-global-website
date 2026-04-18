import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function Cta() {
  return (
    <section id="contact" className="bg-[#0B1220] py-16 md:py-20">
      <Container>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#93C5FD]">
            Let&apos;s Build Your Supply Chain Advantage
          </p>
          <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Start with a focused sourcing discussion tailored to your market and product goals.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
            Share your product requirement, expected volume, and delivery window. Our
            team will return with a practical export plan and next-step timeline.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="mailto:info@eienglobal.com" className="bg-[#3B82F6] text-white hover:bg-[#2563EB]">
              info@eienglobal.com
            </ButtonLink>
            <ButtonLink
              href="tel:+919494638430"
              variant="secondary"
              className="border-white/30 text-white hover:bg-white/10"
            >
              +91 94946 38430
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
