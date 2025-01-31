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
  "#f5f1f9",
  "#e6e0ec",
  "#ccbdd9",
  "#b197c7",
  "#9b78b8",
  "#8c64ae",
  "#865aab",
  "#734a96",
  "#674186",
  "#593776",
];

const theme = createTheme({
  colors: {
    myColor,
  },
  primaryColor: "myColor", // Define como cor primária do site
  fontFamily: "Sora, sans-serif", // Define fonte padrão
  defaultRadius: "sm", // Borda arredondada padrão
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" >
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
