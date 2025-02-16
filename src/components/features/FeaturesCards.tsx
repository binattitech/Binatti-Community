"use client";

import { IconUser } from "@tabler/icons-react";
import { GraduationCap, Clover } from "lucide-react";
import { Card, Container, SimpleGrid, Text, Title } from "@mantine/core";
import classes from "./FeaturesCards.module.css";

const mockdata = [
  {
    title: "Educação Acessível",
    description:
      "Criamos conteúdos educativos gratuitos sobre Inteligência Artificial, Cibersegurança e Experiência do Usuário (UX) para que qualquer pessoa possa aprender e se desenvolver na área.",
    icon: <GraduationCap size={32} strokeWidth={2} color="#552cb7" />,
  },
  {
    title: "Mais Mulheres na Tecnologia",
    description:
      "Construímos um espaço onde mulheres podem se apoiar, compartilhar conhecimento e contribuir voluntariamente, incentivando a representatividade e diversidade no setor.",
    icon: <IconUser size={32} strokeWidth={2} color="#552cb7" />,
  },
  {
    title: "Oportunidades de Crescimento",
    description:
      "Através do nosso blog, fórum e mini cursos com certificado, buscamos capacitar e conectar pessoas interessadas no mundo da tecnologia.",
    icon: <Clover size={32} strokeWidth={2} color="#552cb7" />,
  },
];

export function FeaturesCards() {
  return (
    <Container size="lg">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        O que é a Binatti Community?
      </Title>

      <Text c="dimmed" className={classes.description} ta="left" mt="md">
        Tudo começou com a iniciativa das meninas do curso de{" "}
        <strong>Engenharia de Software do iCEV</strong>, que, com o apoio da
        coordenação da faculdade, decidiram se unir para se apoiar e crescer
        juntas na área de tecnologia. A partir dessa união, surgiu a ideia de{" "}
        <strong>propagar educação gratuita e acessível</strong>, incentivando
        mais mulheres a explorarem o universo da inovação. Somos uma comunidade
        aberta, onde{" "}
        <strong>mulheres podem participar e contribuir voluntariamente</strong>,
        compartilhando conhecimento e inspirando outras pessoas. Criamos
        conteúdos de <strong>mulheres para todos</strong>, acreditando que a
        tecnologia deve ser acessível e inclusiva para qualquer pessoa
        interessada em aprender. Atuamos em três áreas principais:{" "}
        <strong>
          Inteligência Artificial, Cibersegurança e Experiência do Usuário (UX)
        </strong>
        . Acreditamos que o acesso à informação e o aprendizado colaborativo são
        essenciais para transformar o mercado de tecnologia. Nosso site oferece
        conteúdos educativos por meio de um <strong>blog</strong> com artigos
        informativos, um <strong>fórum aberto</strong> para dúvidas e discussões
        e uma área de <strong>mini cursos gratuitos com certificado</strong>,
        para quem deseja aprender e se especializar.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md" mt={50}>
        {mockdata.map((feature) => (
          <Card
            key={feature.title}
            shadow="md"
            radius="md"
            className={classes.card}
            padding="xl"
          >
            {feature.icon}
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
              {feature.title}
            </Text>
            <Text fz="md" c="dimmed" mt="sm">
              {feature.description}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
