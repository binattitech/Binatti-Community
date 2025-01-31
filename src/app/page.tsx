import { FaqSimple } from "@/components/faq/FaqSimple";
import { FooterCentered } from "@/components/footer/FooterCentered";
import { HeaderMegaMenu } from "@/components/header/HeaderMegaMenu";
import { HeroImageBackground } from "@/components/hero/HeroImageBackground";
import { Children } from "react";


export default function Home() {
  return (
    <div>
      <header> 
        <HeaderMegaMenu/>
      </header>
      <main>
        <HeroImageBackground />
        <FaqSimple />
      </main>
      <footer>
        <FooterCentered />
      </footer>

    </div>
  );
}
