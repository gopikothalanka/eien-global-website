"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import burgerIcon from "@/assets/icons/burger.svg";
import closeIcon from "@/assets/icons/close.svg";
import { products } from "@/assets/data/products-content";
import { cn } from "@/lib/cn";

const navItems = [{ label: "Contact", href: "/contact-us" }];

export function Header() {
  const pathname = usePathname();

  // const normalizePath = (path: string) => {
  //   const cleanPath = path.split(/[?#]/)[0] || "/";

  //   if (cleanPath === "/") {
  //     return "/";
  //   }

  //   return cleanPath.replace(/\/+$/, "");
  // };

  // const currentPath = normalizePath(pathname ?? "/");
  const isActivePath = (href: string) => {
    if (!pathname) return false;

    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Eien Global home"
        >
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
          <div className="group relative">
            <span
              className={cn(
                "inline-flex cursor-default items-center gap-1 border-b-2 pb-1 text-sm font-medium transition-colors",
                isActivePath("/products")
                  ? "border-[#3B82F6] font-semibold text-[#121314]"
                  : "border-transparent text-[#475569] hover:text-[#020617]",
              )}
            >
              Products
              <span
                className="text-xs text-[#64748B] transition-transform group-hover:rotate-180"
                aria-hidden
              >
                ▾
              </span>
            </span>

            <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-72 rounded-lg border border-[#E2E8F0] bg-white p-2 shadow-lg">
                {products.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    aria-current={
                      isActivePath(`/products/${product.slug}`)
                        ? "page"
                        : undefined
                    }
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm font-medium text-[#475569] transition-colors hover:bg-[#F1F5F9] hover:text-[#020617]",
                      isActivePath(`/products/${product.slug}`) &&
                        "bg-[#DBEAFE] text-[#1D4ED8]",
                    )}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActivePath(item.href) ? "page" : undefined}
              className={cn(
                "inline-flex items-center border-b-2 pb-1 text-sm font-medium transition-colors",
                isActivePath(item.href)
                  ? "border-[#3B82F6] font-semibold text-[#121314]"
                  : "border-transparent text-[#475569] hover:text-[#020617]",
              )}
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
              <details className="group/products rounded-md border border-[#E2E8F0]">
                <summary
                  className={cn(
                    "cursor-pointer list-none rounded-md px-3 py-2 text-sm font-medium text-[#475569] hover:bg-[#F1F5F9] hover:text-[#020617]",
                    isActivePath("/products") && "bg-[#DBEAFE] text-[#1D4ED8]",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span>Products</span>
                    <span
                      className="text-xs text-[#64748B] transition-transform group-open/products:rotate-180"
                      aria-hidden
                    >
                      ▾
                    </span>
                  </div>
                </summary>

                <div className="mt-1 flex flex-col gap-1 border-t border-[#E2E8F0] p-2">
                  {products.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      aria-current={
                        isActivePath(`/products/${product.slug}`)
                          ? "page"
                          : undefined
                      }
                      className={cn(
                        "rounded-md px-3 py-2 text-sm text-[#475569] transition-colors hover:bg-[#F1F5F9] hover:text-[#020617]",
                        isActivePath(`/products/${product.slug}`) &&
                          "bg-[#DBEAFE] font-medium text-[#1D4ED8]",
                      )}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </details>

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActivePath(item.href) ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-[#475569] transition-colors hover:bg-[#F1F5F9] hover:text-[#020617]",
                    isActivePath(item.href) && "bg-[#DBEAFE] text-[#1D4ED8]",
                  )}
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
