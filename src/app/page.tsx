import { FaqSimple } from "@/components/faq/FaqSimple";
import { FeaturesCards } from "@/components/features/FeaturesCards";
import { FeaturesTitle } from "@/components/features/FeaturesTitle";
import { FooterCentered } from "@/components/footer/FooterCentered";
import { HeaderMegaMenu } from "@/components/header/HeaderMegaMenu";
import { HeroImageBackground } from "@/components/hero/HeroImageBackground";
import { Blog } from "@/components/sessoes/Blog";
import { YouTubeEmbed } from "@/components/video/YoutubeEmbed";

import { 
  Book, Rocket, Code 
} from "lucide-react";
import { Container, Stack } from "@mantine/core";

export default function Home() {
  const features = [
    {
      title: "Para aprender do zero",
      description:
        "Conceitos fundamentais de Inteligência Artificial, Cibersegurança e UX/UI Design, com cursos gratuitos e conteúdos didáticos.",
      icon: <Book size={32} strokeWidth={2} color="#552cb7" />,
    },
    {
      title: "Para se especializar",
      description:
        "Aprofunde-se em áreas estratégicas com trilhas de aprendizado, ferramentas e práticas alinhadas com o mercado.",
      icon: <Rocket size={32} strokeWidth={2} color="#552cb7" />,
    },
    {
      title: "Para se manter atualizada",
      description:
        "Masterclasses, fóruns interativos e newsletters com as últimas tendências do setor.",
      icon: <Code size={32} strokeWidth={2} color="#552cb7" />,
    },
  ];
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
            <FeaturesCards 
              title="Para quem é?"
              description="Independente do seu nível, a nossa comunidade é para você!"
              features={features}
            />
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
