import { FeaturesGrid } from "@/components/features/FeaturesGrid";
import { FooterCentered } from "@/components/footer/FooterCentered";
import { HeaderMegaMenu } from "@/components/header/HeaderMegaMenu";
import { Image } from "@mantine/core";
import { HeroImageBackground } from "@/components/hero/HeroImageBackground";
import { UserInfoIcons } from "@/components/user/UserInfoIcons";
import { Grid } from '@mantine/core';

export default function Sobre() {
  return (
    <div>
      <header>
        <HeaderMegaMenu />
      </header>
      <main>
        <Image h={500} src="/imagens/_DSC5582.jpg"/>
        <FeaturesGrid />
      </main>
      <footer>
        <FooterCentered />
      </footer>
    </div>
  );
}
