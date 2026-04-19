import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white py-10">
      <Container>
        <div className="flex flex-col gap-4 text-sm text-[#475569] sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-semibold text-[#020617]">Eien Global</span> ·
            Export Partner
          </p>
          <p>© {new Date().getFullYear()} Eien Global. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
