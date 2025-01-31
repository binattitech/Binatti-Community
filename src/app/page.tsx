import { ArticleCard } from "@/components/articleCards/ArticleCard";
import { FaqSimple } from "@/components/faq/FaqSimple";
import { FooterCentered } from "@/components/footer/FooterCentered";
import { HeaderMegaMenu } from "@/components/header/HeaderMegaMenu";
import { HeroImageBackground } from "@/components/hero/HeroImageBackground";
import { SimpleGrid } from "@mantine/core";
import { Container } from "@mantine/core";
import { Children } from "react";

export default function Home() {
  return (
    <div>
      <header>
        <HeaderMegaMenu />
      </header>

      <main>
        <HeroImageBackground />
        <Container>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </SimpleGrid>

          <FaqSimple />
        </Container>
      </main>

      <footer>
        <FooterCentered />
      </footer>
    </div>
  );
}
