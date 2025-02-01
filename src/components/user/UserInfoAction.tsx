import { Avatar, Button, Paper, Text } from "@mantine/core";

// Definição de tipos para as props
interface UserInfoProps {
  avatarUrl?: string;
  name?: string;
  email?: string;
  role?: string;
  onMessageClick?: () => void;
}

export function UserInfoAction({
  avatarUrl = "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
  name = "Jane Fingerlicker",
  email = "jfingerlicker@me.io",
  role = "Art director",
  onMessageClick,
}: UserInfoProps) {
  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
      <Avatar src={avatarUrl} size={120} radius={120} mx="auto" />

      <Text ta="center" fz="lg" fw={500} mt="md">
        {name}
      </Text>

      <Text ta="center" fz="xs" tt="uppercase" fw={700} c="dimmed">
        {role}
      </Text>

      <Text ta="center" c="dimmed" fz="sm">
        {email}
      </Text>

    </Paper>
  );
}
