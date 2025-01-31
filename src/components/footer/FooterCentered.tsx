'use client';

import { Instagram, Github, Linkedin } from 'lucide-react';

import { ActionIcon, Anchor, Group } from "@mantine/core";
import classes from "./FooterCentered.module.css";
import Image from "next/image";

const links = [
  { link: "#", label: "Contato" },
  { link: "#", label: "Privacidade" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Cursos" },
  { link: "#", label: "Voluntariado" },
];

export function FooterCentered() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Image
          src="/logos/logoroxa.svg"
          alt="Binatti Logo"
          width={120}
          height={40}
        />

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <Linkedin size={18} strokeWidth={1.5} color="#3e9392" />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <Github size={18} strokeWidth={1.5} color="#3e9392" />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <Instagram size={18} strokeWidth={1.5} color="#3e9392" />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
