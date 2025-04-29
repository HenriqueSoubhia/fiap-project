
import type { Metadata } from "next";
import GlobalStyleWrapper from "./components/GlobalStyle/GlobalStyleWrapper";
import { GothamHTF, Roboto } from "./styles/fonts";

export const metadata: Metadata = {
  title: "FIAP",
  description: "Maior Faculdade de Tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${GothamHTF.className} ${Roboto.className}`}>
      <body>
        <GlobalStyleWrapper>
          {children}
        </GlobalStyleWrapper>
      </body>
    </html>
  );
}
