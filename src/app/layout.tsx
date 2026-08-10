import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nightfall Pain",
  description: "Un shooter 2D cyberpunk. Sobrevive a la noche. Juega gratis en el navegador.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
