"use client";

import { Card, Container, SimpleGrid, Text, Title } from "@mantine/core";
import { ReactNode } from "react";
import classes from "./FeaturesCards.module.css";

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

interface FeaturesCardsProps {
  title: string;
  description: string;
  features: Feature[];
}

export function FeaturesCards({ title, description, features }: FeaturesCardsProps) {
  return (
    <Container size="lg">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        {title}
      </Title>

      <Text c="dimmed" className={classes.description} ta="left" mt="md">
        {description}
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md" mt={50}>
        {features.map((feature: Feature) => (
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
