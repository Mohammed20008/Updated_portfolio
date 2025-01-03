import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
// import { Toaster } from "react-hot-toast";
import ActiveSectionProvider from "@/components/ActiveSectionProvider";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
// import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammed | Personal portfolio",
  description: "Software Developer and Logo Designer",
  keywords: "Software Developer, Logo Designer, Mohammed, Portfolio",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" w-screen scroll-smooth">
      <body
        className={`${inter.className} bg-gray-300 dark:bg-black relative flex flex-col h-full noise overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          <ActiveSectionProvider>
            <div className="absolute top-80 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-indigo-600  bg-opacitye-40 blur-[10rem] rounded-full bg-repeat-y overflow-x-hidden right-0" />
            <main className="h-full z-10 flex flex-col items-center justify-center">
              <Header />

              {children}

              <Footer />
            </main>
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
