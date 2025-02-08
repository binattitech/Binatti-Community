import { Libre_Baskerville, Lato } from "next/font/google";
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

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-lato",
});

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
  fontFamily: "var(--font-lato), sans-serif",
  headings: {
    fontFamily: "var(--font-libre-baskerville), serif",
  },
  defaultRadius: "sm",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${libreBaskerville.variable} ${lato.variable}`}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <main>{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}
