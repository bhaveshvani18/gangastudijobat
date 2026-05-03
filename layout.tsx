import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/app/components/SmoothScrollProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ganga Studio by Kuldeep Vani | Luxury Cinematic Wedding Photography",
  description: "Premium wedding photography & cinematic films in Jobat, India. Pre-wedding shoots, traditional coverage, drone cinematography & fashion photography by award-winning photographer Kuldeep Vani.",
  keywords: [
    "wedding photographer Jobat",
    "cinematic wedding films India",
    "pre wedding shoot",
    "luxury wedding photography",
    "drone photography wedding",
    "fashion photographer Jobat",
    "Kuldeep Vani photographer",
    "Ganga Studio",
    "Indian wedding photography",
    "baby shoot photographer",
  ],
  authors: [{ name: "Kuldeep Vani" }],
  creator: "Ganga Studio",
  publisher: "Ganga Studio",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gangastudiojobat.com",
    siteName: "Ganga Studio by Kuldeep Vani",
    title: "Ganga Studio | Luxury Cinematic Wedding Photography",
    description: "Where every wedding becomes a cinematic masterpiece. Premium photography & films by Kuldeep Vani.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ganga Studio - Luxury Wedding Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganga Studio | Luxury Cinematic Wedding Photography",
    description: "Premium wedding photography & films by Kuldeep Vani",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://gangastudiojobat.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Ganga Studio by Kuldeep Vani",
              image: "https://gangastudiojobat.com/logo.png",
              url: "https://gangastudiojobat.com",
              telephone: "+91-XXXXXXXXXX",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jobat",
                addressLocality: "Jobat",
                addressRegion: "Madhya Pradesh",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "22.4167",
                longitude: "74.5667",
              },
              priceRange: "₹₹₹",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "20:00",
                },
              ],
              sameAs: [
                "https://www.instagram.com/gangastudiojobat/",
                "https://www.facebook.com/gangastudiojobat",
              ],
              serviceType: [
                "Wedding Photography",
                "Cinematic Wedding Films",
                "Pre-Wedding Photography",
                "Fashion Photography",
                "Baby Photography",
                "Drone Photography",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-matte-black text-white font-body antialiased overflow-x-hidden">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
