import { ImageActionBanner } from "@/components/banner/ImageActionBanner";
import { FeaturesCards } from "@/components/features/FeaturesCards";
import { FooterCentered } from "@/components/footer/FooterCentered";
import { HeaderMegaMenu } from "@/components/header/HeaderMegaMenu";
import { Equipe } from "@/components/sessoes/Equipe";

import { Container, Image, Stack } from "@mantine/core";

export default function Sobre() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header>
        <HeaderMegaMenu />
      </header>

      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Image
          src="/imagens/equipe.jpg"
          width="100%"
          height="auto"
          style={{ objectFit: "cover" }}
          alt="Imagem da equipe"
          mb="xl"
        />

        <Container size="90vw" style={{ flexGrow: 1 }}>
          <Stack gap="12vh">
            <FeaturesCards />
            <Equipe />
            <ImageActionBanner />
          </Stack>
        </Container>
      </main>

      <footer style={{ marginTop: "auto" }}>
        <FooterCentered />
      </footer>
    </div>
  );
}
