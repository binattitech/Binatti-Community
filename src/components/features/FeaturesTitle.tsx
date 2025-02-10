"use client";

import {
  IconCircleDotted,
  IconFileCode,
  IconFlame,
  IconReceiptOff,
} from "@tabler/icons-react";
import {
  Button,
  Grid,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import classes from "./FeaturesTitle.module.css";

const features = [
  {
    icon: IconReceiptOff,
    title: "Compartilhe seu conhecimento",
    description:
      "Escreva artigos, crie materiais educativos ou desenvolva mini cursos para ajudar outras pessoas a aprenderem mais sobre tecnologia.",
  },
  {
    icon: IconFileCode,
    title: "Apoie e inspire outras mulheres",
    description:
      "Participe do nosso fórum, tire dúvidas e incentive mais mulheres a entrarem e crescerem na área tech.",
  },
  {
    icon: IconCircleDotted,
    title: "Contribua com projetos da comunidade",
    description:
      "Ajude na organização de eventos, produção de conteúdo ou suporte técnico para fortalecer nossa iniciativa.",
  },
  {
    icon: IconFlame,
    title: "Cresça junto com a comunidade",
    description:
      "Aprenda, conecte-se com outras mulheres da tecnologia e amplie seu networking enquanto faz a diferença.",
  },
];

export function FeaturesTitle() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="sm"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
            Seja Voluntária e Faça a Diferença!
          </Title>
          <Text c="dimmed">
            Você acredita no poder do conhecimento e quer ajudar a tornar a
            tecnologia mais acessível?
          </Text>

          <Button
            variant="gradient"
            gradient={{ deg: 133, from: "blue", to: "cyan" }}
            size="lg"
            radius="sm"
            mt="xl"
          >
            Inscreva-se
          </Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
