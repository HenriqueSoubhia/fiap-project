
import type { Metadata } from "next";
import GlobalStyleWrapper from "./components/GlobalStyle/GlobalStyleWrapper";

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
    <html lang="pt-br">
      <body className={``}>
        <GlobalStyleWrapper>
          {children}
        </GlobalStyleWrapper>
      </body>
    </html>
  );
}
