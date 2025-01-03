import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";

export const fontSans = {
  variable: "quranfont",
  url: "/fonts/HafsSmart_08.ttf",
};

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
