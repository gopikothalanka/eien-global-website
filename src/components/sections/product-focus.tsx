import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const sectors = [
  "Agro Commodities",
  "Processed Foods",
  "Hospitality Supplies",
  "Consumer Goods",
  "Industrial Inputs",
  "Custom Procurement",
];

export function ProductFocus() {
  return (
    <section id="products" className="bg-[#F1F5F9] py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Product Focus"
          title="Category expertise aligned with your import strategy"
          description="Our portfolio is shaped around repeatable quality, scalable supply, and market relevance for buyers."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <div
              key={sector}
              className="rounded-lg border border-[#E2E8F0] bg-white p-5"
            >
              <p className="text-base font-semibold text-[#0B1220]">{sector}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
