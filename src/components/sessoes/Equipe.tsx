"use client";

import { Container, SimpleGrid } from "@mantine/core";
import { Titles } from "../title/Title";
import { UserInfoIcons } from "../user/UserInfoIcons";

export function Equipe() {
  return (
    <Container size="100%">
      <Titles name="Equipe" />

      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing="md"
        mt={20}
        style={{ flexGrow: 1, width: "100%" }}
      >
        {[
          {
            avatarUrl: "/imagens/avatar/milena.jpg",
            role: "UX Designer",
            name: "Milena Duarte",
          },
          {
            avatarUrl: "/imagens/avatar/laura.jpg",
            role: "UX Designer",
            name: "Laura",
          },
          {
            avatarUrl: "/imagens/avatar/ana.jpg",
            role: "UX Designer",
            name: "Vitória Mendes",
          },
          {
            avatarUrl: "/imagens/avatar/aline.jpg",
            role: "UX Designer",
            name: "Aline Ramos",
          },
          {
            avatarUrl: "/imagens/avatar/ingrid.jpg",
            role: "UX Designer",
            name: "Ingrid Ribeiro",
          },
          {
            avatarUrl: "/imagens/avatar/kevilla.jpg",
            role: "UX Designer",
            name: "Kévilla Aguiar",
          },
          {
            avatarUrl: "/imagens/avatar/kaielly.jpg",
            role: "UX Designer",
            name: "Kaielly",
          },
          {
            avatarUrl: "/imagens/avatar/cassy.jpg",
            role: "UX Designer",
            name: "Cassy",
          },
          {
            avatarUrl: "/imagens/avatar/bea.jpg",
            role: "UX Designer",
            name: "Beatriz Barreto",
          },
          {
            avatarUrl: "/imagens/avatar/bruna.jpg",
            role: "UX Designer",
            name: "Bruna Rocha",
          },
          {
            avatarUrl: "/imagens/avatar/laysa.jpg",
            role: "UX Designer",
            name: "Laysa Cabedo",
          },
          { avatarUrl: "", role: "UX Designer", name: "Maria Clara" },
          { avatarUrl: "", role: "UX Designer", name: "Sarah Ocy" },
        ].map((user) => (
          <UserInfoIcons
            key={user.name}
            avatarUrl={user.avatarUrl}
            role={user.role}
            name={user.name}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}
