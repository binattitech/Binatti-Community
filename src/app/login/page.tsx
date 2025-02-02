import { AuthenticationForm } from "@/components/autenticacao/AuthenticationForm";
import { FooterCentered } from "@/components/footer/FooterCentered";
import { HeaderMegaMenu } from "@/components/header/HeaderMegaMenu";
import { Container } from "lucide-react";

export default function Home() {
  return (
    <div>
      <header>
        <HeaderMegaMenu />
      </header>

      <main>
        <AuthenticationForm />
      </main>

      <footer>
        <FooterCentered />
      </footer>
    </div>
  );
}
