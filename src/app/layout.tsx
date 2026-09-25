import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Álvaro Ballarini | Full Stack Engineer", template: "%s | Álvaro Ballarini" },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  applicationName: "Portfolio de Álvaro Ballarini",
  authors: [{ name: "Álvaro Ballarini", url: "https://www.linkedin.com/in/alvaro-ballarini/" }],
  creator: "Álvaro Ballarini",
  category: "technology",
  keywords: ["Álvaro Ballarini", "Full Stack Engineer", "Node.js", "TypeScript", "React", "Next.js", "PostgreSQL", "desarrollador Rosario", "productos B2B"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    title: SITE_NAME,
    description: "Productos B2B claros, rápidos y estables con Node.js, TypeScript, React, Next.js y SQL.",
    siteName: "Álvaro Ballarini",
    images: [{ url: "/og.png", width: 1732, height: 908, alt: "Álvaro Ballarini, Full Stack Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "Productos B2B claros, rápidos y estables con Node.js, TypeScript, React, Next.js y SQL.",
    images: ["/og.png"],
  },
  icons: { icon: "/user.ico" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Álvaro Ballarini",
  jobTitle: "Full Stack Engineer",
  email: "mailto:alvaroballarini03@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Rosario", addressCountry: "AR" },
  sameAs: ["https://github.com/alvaroballarini", "https://www.linkedin.com/in/alvaro-ballarini/"],
  knowsAbout: ["Node.js", "TypeScript", "React", "Next.js", "PostgreSQL", "Software B2B"],
  url: SITE_URL,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
