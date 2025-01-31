'use client';

import cx from "clsx";
import { Button, Container, Overlay, Text, Title } from "@mantine/core";
import classes from "./HeroImageBackground.module.css";

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Milena ainda não pensou no{" "}
          <Text component="span" inherit className={classes.highlight}>
            conteúdo
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            muito texto pra uma pessoa sem criatividade, gpt pf me ajude
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            me aperte
          </Button>
          <Button
            className={cx(classes.control, classes.secondaryControl)}
            size="lg"
          >
            me aperte
          </Button>
        </div>
      </div>
    </div>
  );
}
