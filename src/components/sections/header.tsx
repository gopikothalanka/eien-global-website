import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import burgerIcon from "@/assets/icons/burger.svg";
import closeIcon from "@/assets/icons/close.svg";

const navItems = [
  // { label: "About", href: "#about" },
  // { label: "Products", href: "#products" },
  // { label: "Process", href: "#process" },
  { label: "Contact", href: "/contact-us" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Eien Global home">
          <Image
            src="/EIEN%20LOGO-1.png"
            alt="Eien Global"
            width={180}
            height={62}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#475569] transition-colors hover:text-[#020617]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/contact-us">Request Quote</ButtonLink>
        </div>

        <details className="group relative md:hidden">
          <summary
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-[#E2E8F0] text-[#0B1220] marker:content-none"
            aria-label="Toggle navigation menu"
          >
            <Image
              src={burgerIcon}
              alt=""
              width={20}
              height={20}
              className="group-open:hidden"
              aria-hidden
            />
            <Image
              src={closeIcon}
              alt=""
              width={20}
              height={20}
              className="hidden group-open:inline"
              aria-hidden
            />
          </summary>

          <div className="absolute right-0 top-12 w-72 rounded-lg border border-[#E2E8F0] bg-white p-4 shadow-lg">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#475569] transition-colors hover:bg-[#F1F5F9] hover:text-[#020617]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4">
              <ButtonLink href="/contact-us" className="w-full">
                Request Quote
              </ButtonLink>
            </div>
          </div>
        </details>
      </Container>
    </header>
  );
}
