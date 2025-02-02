// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import {
  createTheme,
  ColorSchemeScript,
  MantineProvider,
  MantineColorsTuple,
} from "@mantine/core";

export const metadata = {
  title: "Binatti Community",
  description: "A comunidade de tecnologia feita por mulheres",
};

const myColor: MantineColorsTuple = [
  "#f3edff",
  "#e2d8f8",
  "#c1afec",
  "#9e83e0",
  "#815ed6",
  "#6f46d0",
  "#653ace",
  "#552cb7",
  "#4b27a4",
  "#402091",
];

const theme = createTheme({
  colors: {
    myColor,
  },
  primaryColor: "myColor",
  fontFamily: "Poppins, sans-serif",
  defaultRadius: "sm",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <MantineProvider theme={theme}>
        <head>
          <ColorSchemeScript />
        </head>
        <body>
          <main>{children}</main>
        </body>
      </MantineProvider>
    </html>
  );
}
