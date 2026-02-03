import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DentalCare - Tu sonrisa en manos expertas",
  description: "Consultorio dental con más de 15 años de experiencia. Limpieza dental, ortodoncia, blanqueamiento e implantes. Agenda tu cita hoy.",
  keywords: "dentista, odontología, limpieza dental, ortodoncia, blanqueamiento, implantes, CDMX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
