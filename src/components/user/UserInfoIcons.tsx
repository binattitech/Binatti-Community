"use client";

import { ActionIcon, Avatar, Card, Group, Text } from "@mantine/core";
import classes from "./UserInfoIcons.module.css";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

interface UserInfoProps {
  avatarUrl?: string;
  role?: string;
  name?: string;
}

export function UserInfoIcons({
  avatarUrl = "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
  role = "Software Engineer",
  name = "Mimi",
}: UserInfoProps) {
  return (
    <Card  radius="md" className={classes.card} padding="xl">
      <div className={classes.userCard}>
        <Avatar src={avatarUrl} size={94} radius="md" />

        <div className={classes.userInfo}>
          <Text size="xs" tt="uppercase" fw={700} c="dimmed" mb={4}>
            {role}
          </Text>

          <Text size="md" fw={500} className={classes.name} mb={4}>
            {name}
          </Text>

          <Group gap="sm" justify="flex-start" wrap="nowrap" mt={2}>
            <ActionIcon size="lg" variant="transparent">
              <Linkedin size={18} strokeWidth={2} className={classes.icon} />
            </ActionIcon>
            <ActionIcon size="lg" variant="transparent">
              <Github size={18} strokeWidth={2} className={classes.icon} />
            </ActionIcon>
            <ActionIcon size="lg" variant="transparent">
              <Instagram size={18} strokeWidth={2} className={classes.icon} />
            </ActionIcon>
            <ActionIcon size="lg" variant="transparent">
              <Mail size={18} strokeWidth={2} className={classes.icon} />
            </ActionIcon>
          </Group>
        </div>
      </div>
    </Card>
  );
}
