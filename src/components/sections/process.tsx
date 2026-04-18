import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    title: "Requirement Discovery",
    description:
      "We align product specs, compliance constraints, quantity plans, and target timelines with your team.",
  },
  {
    title: "Supplier Validation",
    description:
      "Shortlisted partners are screened for quality systems, capability, lead times, and production reliability.",
  },
  {
    title: "Quality and Packaging",
    description:
      "Pre-shipment checks, labeling, and packaging controls are executed before dispatch.",
  },
  {
    title: "Export and Delivery",
    description:
      "Documentation is finalized and logistics milestones are tracked until goods reach your destination port.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-white py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="A disciplined export process that scales"
          description="A clear operating model minimizes delays, improves predictability, and supports long-term purchasing partnerships."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-xl border border-[#E2E8F0] bg-white p-7"
            >
              <p className="text-sm font-semibold text-[#3B82F6]">0{index + 1}</p>
              <h3 className="mt-3 font-[family-name:var(--font-sora)] text-xl font-semibold text-[#0B1220]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#475569]">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
