import { Container } from "@/components/ui/container";

const markets = [
  "Middle East",
  "Europe",
  "Southeast Asia",
  "Africa",
  "North America",
  "Oceania",
];

export function TrustBand() {
  return (
    <section className="border-y border-[#E2E8F0] bg-[#F1F5F9] py-8">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-medium text-[#475569]">
            Trusted by importers across high-growth markets
          </p>
          <div className="flex flex-wrap gap-3">
            {markets.map((market) => (
              <span
                key={market}
                className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#0B1220]"
              >
                {market}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
