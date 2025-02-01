import { Button, ButtonProps } from "@mantine/core";
import { Twitter } from "lucide-react";

export function TwitterButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<"button">
) {
  return (
    <Button
      leftSection={<Twitter size={18} strokeWidth={1.5} color="#552cb7" />}
      variant="default"
      {...props}
    />
  );
}
