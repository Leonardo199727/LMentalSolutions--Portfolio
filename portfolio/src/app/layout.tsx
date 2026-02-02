import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'LMentalSolutions | Soluciones Tecnológicas a la Medida',
  description: 'Transformo ideas en soluciones digitales a la medida. Desarrollo de páginas web, software personalizado y aplicaciones web para negocios y emprendedores',
  keywords: [
    'desarrollo web',
    'software a la medida',
    'freelance',
    'páginas web',
    'aplicaciones web',
    'consultoría tecnológica',
    'México',
    'Querétaro',
  ],
  authors: [{ name: 'Leonardo Mata', url: 'https://lmentalsolutions.com' }],
  creator: 'LMentalSolutions',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    alternateLocale: 'en_US',
    title: 'LMentalSolutions | Soluciones Tecnológicas a la Medida',
    description: 'Transformo ideas en soluciones digitales a la medida para impulsar tu negocio.',
    siteName: 'LMentalSolutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LMentalSolutions | Soluciones Tecnológicas',
    description: 'Desarrollo de software y páginas web a la medida para negocios.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/LMICON.png" type="image/png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
