import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
      title: "NewCrea • Agence Web",
      description: "Agence web à Nancy — création de sites sur mesure, logos et plus.",
      robots: "noindex, nofollow",
};

export default function RootLayout({ children }) {
      return (
          <html lang="fr" className="scroll-smooth bg-paletteColor3">
          <head>
              <link rel="icon" href="/img/newcrea-logo.svg" type="image/svg+xml"/>
          </head>
          <body className="min-w-[300px] font-poppins text-paletteColor1">
          <Header/>
          {/*<p className="text-paletteColor2 text-center font-bold text-xl">-- Ce site est actuellement en phase de*/}
          {/*    développement --</p>*/}
          {children}
          <Footer/>
          </body>
          </html>
      );
}
