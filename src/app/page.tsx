import { Capabilities } from "@/components/sections/capabilities";
import { Cta } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { ProductFocus } from "@/components/sections/product-focus";
import { Quality } from "@/components/sections/quality";
import { TrustBand } from "@/components/sections/trust-band";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <main>
        <Hero />
        <TrustBand />
        <Capabilities />
        <ProductFocus />
        <Process />
        <Quality />
        <Cta />
      </main>
    </div>
  );
}
