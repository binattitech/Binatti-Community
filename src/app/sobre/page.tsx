import { FeaturesGrid } from "@/components/features/FeaturesGrid";
import { FooterCentered } from "@/components/footer/FooterCentered";
import { HeaderMegaMenu } from "@/components/header/HeaderMegaMenu";
import { HeroImageBackground } from "@/components/hero/HeroImageBackground";
import { UserInfoIcons } from "@/components/user/UserInfoIcons";
import { Grid } from '@mantine/core';

export default function Home() {
  return (
    <div>
      <header>
        <HeaderMegaMenu />
      </header>
      <main>
        <HeroImageBackground />
        <FeaturesGrid />
      </main>
      <footer>
        <FooterCentered />
      </footer>
    </div>
  );
}
