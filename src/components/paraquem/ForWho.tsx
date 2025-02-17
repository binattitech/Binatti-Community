"use client";

import { 
  Book, Rocket, Code, Target, Briefcase, Globe, Home 
} from "lucide-react";
import { 
  Box, Container, Grid, Group, Paper, SimpleGrid, Text, ThemeIcon, Title 
} from "@mantine/core";
import Image from "next/image";
import classes from "./ForWho.module.css";

const learningPaths = [
  {
    icon: <Book size={30} />,
    title: "Para aprender do zero",
    description: "Conceitos fundamentais de Inteligência Artificial, Cibersegurança e UX/UI Design, com cursos gratuitos e conteúdos didáticos.",
  },
  {
    icon: <Rocket size={30} />,
    title: "Para se especializar",
    description: "Aprofunde-se em áreas estratégicas com trilhas de aprendizado, ferramentas e práticas alinhadas com o mercado.",
  },
  {
    icon: <Code size={30} />,
    title: "Para se manter atualizado",
    description: "Masterclasses, fóruns interativos e newsletters com as últimas tendências do setor.",
  },
];

const forWhoItems = [
  {
    icon: <Target size={20} />,
    text: "Quer fazer transição de carreira para tecnologia",
  },
  {
    icon: <Briefcase size={20} />,
    text: "Busca melhores oportunidades e crescimento profissional",
  },
  {
    icon: <Globe size={20} />,
    text: "Deseja uma carreira internacional e maiores salários",
  },
  {
    icon: <Home size={20} />,
    text: "Quer trabalhar de forma remota e ter mais liberdade",
  },
];

export function ForWho() {
  return (
    <>
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center">
        Para quem é?
      </Title>
      <Text ta="center" c="dimmed" size="lg" mt="sm">
        Independente do seu nível, a nossa comunidade é para você!
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl" mt="xl">
        {learningPaths.map((item) => (
          <Paper key={item.title} shadow="md" p="md" radius="md" className={classes.card}>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              {item.icon}
            </ThemeIcon>
            <Text fw={600} size="lg" mt="md">
              {item.title}
            </Text>
            <Text size="sm" c="dimmed" mt="xs">
              {item.description}
            </Text>
          </Paper>
        ))}
      </SimpleGrid>

      <Grid mt="xl" align="center">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Title order={3} className={classes.subtitle}>
            Também é para quem:
          </Title>
          <Box mt="md">
            {forWhoItems.map((item, index) => (
              <Group key={index} gap="sm" mt="xs">
                <ThemeIcon size={30} radius="xl" color="blue">
                  {item.icon}
                </ThemeIcon>
                <Text size="md">{item.text}</Text>
              </Group>
            ))}
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Image
            src="/images/learning-paths.png"
            alt="Ilustração aprendizado"
            width={500}
            height={350}
            className={classes.image}
            priority
          />
        </Grid.Col>
      </Grid>
    </Container>
    
    </>
    
  );
}
