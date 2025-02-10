'use client'

import { Button, Image, Text, Title } from "@mantine/core";

import classes from "./EmailBanner.module.css";

export function EmailBanner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>
          Seja Voluntária e Faça a Diferença!
        </Title>
        <Text fw={500} fz="lg" mb={5}>
          Cresça junto com a comunidade
        </Text>
        <Text fz="sm" c="dimmed">
          Você acredita no poder do conhecimento e quer ajudar a tornar a
          tecnologia mais acessível? 🚀
        </Text>

        <div>
          <Button
            variant="gradient"
            gradient={{ deg: 133, from: "blue", to: "cyan" }}
            size="lg"
            radius="sm"
            mt="xl"
          >
            Inscreva-se
          </Button>
        </div>
      </div>
      <Image src="/imagens/equipe.jpg" width={50} alt="Imagem da equipe" />
    </div>
  );
}