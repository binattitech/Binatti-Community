'use client';

import { Button, Container, Overlay, Text, Title } from "@mantine/core";
import classes from "./HeroImageBackground.module.css";

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
        Tecnologia por Elas, para {" "}
          <Text component="span" inherit className={classes.highlight}>
          Todos
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
          Uma comunidade de meninas voluntárias explorando IA, Cibersegurança e UX. Aprenda, compartilhe e cresça conosco!
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
          Junte-se a nós
          </Button>
        </div>
      </div>
    </div>
  );
}
