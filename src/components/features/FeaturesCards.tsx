'use client';

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
import classes from "./FeaturesCards.module.css";

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

export function FeaturesCards() {
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
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Best company ever
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Integrate effortlessly with any technology stack
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs.
        This happens when hunger drives it to try biting a Steel-type Pokémon.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
