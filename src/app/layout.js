import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Meta Blog",
  description: "Generate Your Blog Here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar></Navbar>
        <div
          style={{
            minHeight: "100vh",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
