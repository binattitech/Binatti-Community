'use client'

import { Button, Card, Overlay, Text } from "@mantine/core";
import classes from "./ImageActionBanner.module.css";

export function ImageActionBanner() {
  return (
    <Card radius="md" className={classes.card}>
      <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

      <div className={classes.content}>
        <Text size="xl" fw={700} className={classes.title}>
          Seja Voluntária e Faça a Diferença!
        </Text>

        <Text size="md" className={classes.description}>
          Você acredita no poder do conhecimento e quer ajudar a tornar a
          tecnologia mais acessível?
        </Text>

        <Button
          className={classes.action}
          variant="white"
          color="dark"
          size="md"
        >
          Inscreva-se
        </Button>
      </div>
    </Card>
  );
}
