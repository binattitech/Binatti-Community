"use client";

import { Title } from "@mantine/core";
import classes from "./Title.module.css";

interface TitleProps {
  name?: string;
}

export function Titles({
  name = "Título",
}: TitleProps) {
  return (
    <>
      <Title order={2} className={classes.title} ta="center" mt="sm">
        {name}
      </Title>
    </>
  );
}
