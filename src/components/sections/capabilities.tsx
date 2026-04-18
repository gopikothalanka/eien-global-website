import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const capabilities = [
  {
    title: "Product Sourcing",
    description:
      "Access vetted manufacturing partners with strict quality control and consistent production standards.",
  },
  {
    title: "Export Documentation",
    description:
      "Complete invoice, packing list, certificate, and destination-specific compliance workflows.",
  },
  {
    title: "Logistics Coordination",
    description:
      "Reliable multimodal shipment planning with proactive milestone updates at each stage.",
  },
  {
    title: "Private Label Support",
    description:
      "Custom packaging, labeling, and SKU adaptation tailored to your market requirements.",
  },
];

export function Capabilities() {
  return (
    <section id="about" className="bg-white py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Built for consistent, low-friction global trade"
          description="From supplier engagement to destination delivery, we manage the operational complexity so your team can focus on growth and distribution."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-7"
            >
              <h3 className="font-[family-name:var(--font-sora)] text-xl font-semibold text-[#0B1220]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#475569]">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
