import Image from "next/image";
import Link from "next/link";
import { getProductBySlug } from "@/lib/api";
import { EnquiryForm } from "@/components/sections/enquiry-form";
import { Container } from "@/components/ui/container";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="text-lg text-[#475569]">Product not found.</p>
      </div>
    );
  }

  const metaRows = [
    { label: "Type", value: product.meta.type },
    product.meta.source
      ? { label: "Source", value: product.meta.source }
      : null,
    product.meta.forms
      ? { label: "Forms", value: product.meta.forms.join(", ") }
      : null,
    product.meta.processing
      ? { label: "Processing", value: product.meta.processing }
      : null,
    { label: "Origin", value: product.meta.origin },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="bg-white">
      {/* Hero banner */}
      <div className="bg-[#0B1220] py-10">
        <Container>
          <h1 className="font-[family-name:var(--font-sora)] text-3xl font-semibold text-white md:text-4xl">
            {product.name}
          </h1>
        </Container>
      </div>

      <Container className="py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-[#64748B]">
          <Link
            href="/products"
            className="hover:text-[#3B82F6] transition-colors"
          >
            Products
          </Link>
          <span>/</span>
          <span className="text-[#0B1220]">{product.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right — details */}
          <div className="flex flex-col gap-6">
            {/* Category badge */}
            <span className="inline-flex w-fit rounded-full bg-[#DBEAFE] px-3 py-1 text-xs font-semibold text-[#1D4ED8]">
              {product.category}
            </span>

            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-2xl font-semibold text-[#0B1220]">
                {product.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#475569]">
                {product.shortDescription}
              </p>
            </div>

            {/* Meta specifications */}
            <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#3B82F6]">
                Product Specifications
              </h3>
              <dl className="divide-y divide-[#E2E8F0]">
                {metaRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline gap-4 py-2.5 text-sm"
                  >
                    <dt className="w-28 shrink-0 text-[#64748B]">
                      {row.label}
                    </dt>
                    <span className="text-[#94A3B8]">:</span>
                    <dd className="text-[#0B1220]">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Applications */}
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#0B1220]">
                Applications
              </h3>
              <ul className="flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <li
                    key={app}
                    className="rounded-md border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-medium text-[#475569]"
                  >
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Long description */}
        <div className="mt-12 border-t border-[#E2E8F0] pt-10">
          <h3 className="font-[family-name:var(--font-sora)] text-xl font-semibold text-[#0B1220]">
            About {product.name}
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-[#475569]">
            {product.longDescription}
          </p>
        </div>
      </Container>

      <EnquiryForm heading={`Enquire about ${product.name}`} />
    </div>
  );
}
