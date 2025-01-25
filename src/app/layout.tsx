import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "./global.css";
import TopBar from "@/components/TopBar/Topbar";
import "bootstrap/dist/css/bootstrap.min.css";
import BackToTop from "@/components/BackToTop/BackToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="./favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="google-site-verification"
          content="DGQW3A2CHUU1gNIoW7c9WRGDwy-bVrV_1ELTnUfDfjA"
        />
      </head>
      <body>
        <TopBar />
        <Navbar />
        <main className="main-container"> {children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
