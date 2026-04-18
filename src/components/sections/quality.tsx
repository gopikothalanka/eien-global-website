import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const highlights = [
  "Structured quality checkpoints before shipment",
  "Transparent pricing and commercial documentation",
  "Dedicated account support for recurring orders",
  "Scalable capacity for multi-market expansion",
];

export function Quality() {
  return (
    <section className="bg-[#F1F5F9] py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <SectionHeading
            eyebrow="Why Eien Global"
            title="Operational clarity, commercial confidence"
            description="We combine sourcing intelligence with export execution discipline so your procurement team can make faster, lower-risk decisions."
          />

          <div className="rounded-xl border border-[#E2E8F0] bg-white p-8">
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#3B82F6]" />
                  <p className="text-sm leading-7 text-[#334155]">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
