"use client";

import { ActionIcon, Avatar, Group, Text } from "@mantine/core";
import classes from "./UserInfoIcons.module.css";
import { Github, Instagram, Link, Linkedin, Mail } from "lucide-react";

interface UserInfoProps {
  avatarUrl?: string;
  role?: string;
  name?: string;
}

export function UserInfoIcons({
  avatarUrl = "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
  role = "Software Engineer",
  name = "Robert Glassbreaker",
}: UserInfoProps) {
  return (
    <div className={classes.userCard}>
      <Group wrap="nowrap">
        <Avatar src={avatarUrl} size={94} radius="md" />
        <div>
          <Text size="xs" tt="uppercase" fw={700} c="dimmed" mb="sm">
            {role}
          </Text>

          <Text size="md" fw={500} className={classes.name} mb="md">
            {name}
          </Text>

          <Group gap="lg" justify="flex-start" wrap="nowrap">
            <ActionIcon size="auto" variant="transparent">
              <Linkedin size={16} strokeWidth={2} className={classes.icon} />
            </ActionIcon>
            <ActionIcon size="auto" variant="transparent">
              <Github size={16} strokeWidth={2} className={classes.icon} />
            </ActionIcon>
            <ActionIcon size="auto" variant="transparent">
              <Instagram size={16} strokeWidth={2} className={classes.icon} />
            </ActionIcon>
            <ActionIcon size="auto" variant="transparent">
              <Mail size={16} strokeWidth={2} className={classes.icon} />
            </ActionIcon>
          </Group>
        </div>
      </Group>
    </div>
  );
}
