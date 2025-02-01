"use client";

import { IconAt, IconPhoneCall } from "@tabler/icons-react";
import { Avatar, Group, Text } from "@mantine/core";
import classes from "./UserInfoIcons.module.css";

interface UserInfoProps {
  avatarUrl?: string;
  role?: string;
  name?: string;
  email?: string;
  phone?: string;
}

export function UserInfoIcons({
  avatarUrl = "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
  role = "Software Engineer",
  name = "Robert Glassbreaker",
  email = "robert@glassbreaker.io",
  phone = "+11 (876) 890 56 23",
}: UserInfoProps) {
  return (
    <div>
      <Group wrap="nowrap">
        <Avatar src={avatarUrl} size={80} radius="md" />
        <div>
          <Text size="xs" tt="uppercase" fw={700} c="dimmed">
            {role}
          </Text>

          <Text size="md" fw={500} className={classes.name}>
            {name}
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size={12} className={classes.icon} />
            <Text size="xs" c="dimmed">
              {email}
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size={12} className={classes.icon} />
            <Text size="xs" c="dimmed">
              {phone}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}
