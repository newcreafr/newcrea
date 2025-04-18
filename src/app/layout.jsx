import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
      title: "NewCrea • Agence Web",
      description: "Agence web à Nancy — création de sites sur mesure, refonte et identité visuelle.",
};

export default function RootLayout({ children }) {
      return (
          <html lang="fr" className="scroll-smooth bg-paletteColor3">
          <head>
              <link rel="icon" href="/img/newcrea-logo.svg" type="image/svg+xml"/>
              <script type="application/ld+json" dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "name": "NewCrea",
                      "url": "https://newcrea.fr",
                      "logo": "https://newcrea.fr/img/newcrea-logo.svg"
                  })
              }}/>
          </head>

          <body className="min-w-[300px] font-poppins text-paletteColor1">
          <Header/>
          {children}
          <Footer/>
          </body>
          </html>
      );
}
