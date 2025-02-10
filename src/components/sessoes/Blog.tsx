"use client";

import { Container, SimpleGrid } from "@mantine/core";
import { Titles } from "../title/Title";
import { ArticleCard } from "../articleCards/ArticleCard";

export function Blog() {
  return (
    <Container size="100%" >
      <Titles name="Artigos Recentes" />

      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing="md"
        mt={20}
        style={{ flexGrow: 1, width: "100%" }}
      >
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </SimpleGrid>
    </Container>
  );
}
