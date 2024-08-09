import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "swiper/swiper-bundle.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clínica Odontológica Odonto Prime - Sua Saúde Bucal em Primeiro Lugar",
  description: "Cuide do seu sorriso com a Clínica Odontológica Odonto Prime. Oferecemos tratamentos dentários de qualidade, desde limpeza dental até implantes, com profissionais experientes. Agende sua consulta hoje!",
  keywords: "Clínica odontológica, dentista, tratamento dental, limpeza dental, implantes dentários, saúde bucal, ortodontia, odontopediatria, clareamento dental",
  authors: [
    {
      name: "Clínica Odontológica Odonto Prime",
      url: "https://odonto-prime.vercel.app/"
    },
    {
      name: "Shinoda Labs - Web Designer",
      url: "https://shinodalabs.com.br/"
    },
  ],
  robots: "index, follow",
  openGraph: {
    title: "Clínica Odontológica Odonto Prime - Sua Saúde Bucal em Primeiro Lugar",
    description: "Cuide do seu sorriso com a Clínica Odontológica Odonto Prime. Oferecemos tratamentos dentários de qualidade, desde limpeza dental até implantes, com profissionais experientes. Agende sua consulta hoje!",
    images: [
      {
        url: "./seo.png",
        width: 1200,
        height: 630,
        alt: "Imagem da Clínica Odontológica Odonto Prime"
      }
    ],
    url: "./seo.png",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Odontológica Odonto Prime - Sua Saúde Bucal em Primeiro Lugar",
    description: "Cuide do seu sorriso com a Clínica Odontológica Odonto Prime. Oferecemos tratamentos dentários de qualidade, desde limpeza dental até implantes, com profissionais experientes. Agende sua consulta hoje!",
    images: [
      {
        url: "./seo.png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="flex w-full max-w-full">
          <div className="flex flex-col max-w-7xl w-full mx-auto px-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
