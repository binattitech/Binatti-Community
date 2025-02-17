import { FaqSimple } from "@/components/faq/FaqSimple";
import { FeaturesTitle } from "@/components/features/FeaturesTitle";
import { FooterCentered } from "@/components/footer/FooterCentered";
import { HeaderMegaMenu } from "@/components/header/HeaderMegaMenu";
import { HeroImageBackground } from "@/components/hero/HeroImageBackground";
import { ForWho } from "@/components/paraquem/ForWho";
import { Blog } from "@/components/sessoes/Blog";
import { YouTubeEmbed } from "@/components/video/YoutubeEmbed";

import { Container, Image, Stack } from "@mantine/core";

export default function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header>
        <HeaderMegaMenu />
      </header>

      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <HeroImageBackground />

        <Container size="lg" style={{ flexGrow: 1 }}>
          <Stack gap="12vh">
            <FeaturesTitle />
            <YouTubeEmbed videoId="44KeIIbhjCU?si=k1vUUqE-ML3mJnya" />
            <ForWho />
            <Blog />
            <FaqSimple />
          </Stack>
        </Container>
      </main>

      <footer style={{ marginTop: "auto" }}>
        <FooterCentered />
      </footer>
    </div>
  );
}
