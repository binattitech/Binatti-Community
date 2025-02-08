"use client";

import { IconCookie, IconGauge, IconUser } from "@tabler/icons-react";
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import classes from "./UserCard.module.css";

const mockdata = [
  {
    title: "Educação Acessível",
    description:
      "Criamos conteúdos educativos gratuitos sobre Inteligência Artificial, Cibersegurança e Experiência do Usuário (UX) para que qualquer pessoa possa aprender e se desenvolver na área.",
    icon: IconGauge,
  },
  {
    title: "Mais Mulheres na Tecnologia",
    description:
      "Construímos um espaço onde mulheres podem se apoiar, compartilhar conhecimento e contribuir voluntariamente, incentivando a representatividade e diversidade no setor.",
    icon: IconUser,
  },
  {
    title: "Oportunidades de Crescimento",
    description:
      "Através do nosso blog, fórum e mini cursos com certificado, buscamos capacitar e conectar pessoas interessadas no mundo da tecnologia.",
    icon: IconCookie,
  },
];

export function UserCard() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon size={32} stroke={2} color={theme.colors.blue[6]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="md" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="xl" py="xl">

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Equipe
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Tudo começou com a iniciativa das meninas do curso de Engenharia de
        Software do iCEV, que, com o apoio da coordenação da faculdade,
        decidiram se unir para se apoiar e crescer juntas na área de tecnologia.
        A partir dessa união, surgiu a ideia de propagar educação gratuita e
        acessível, incentivando mais mulheres a explorarem o universo da
        inovação. Somos uma comunidade aberta, onde mulheres podem participar e
        contribuir voluntariamente, compartilhando conhecimento e inspirando
        outras pessoas. Criamos conteúdos de mulheres para todos, acreditando
        que a tecnologia deve ser acessível e inclusiva para qualquer pessoa
        interessada em aprender. Atuamos em três áreas principais: Inteligência
        Artificial, Cibersegurança e Experiência do Usuário (UX). Acreditamos
        que o acesso à informação e o aprendizado colaborativo são essenciais
        para transformar o mercado de tecnologia. Nosso site oferece conteúdos
        educativos por meio de um blog com artigos informativos, um fórum aberto
        para dúvidas e discussões e uma área de mini cursos gratuitos com
        certificado, para quem deseja aprender e se especializar.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
