import {Inter, Josefin_Sans} from "next/font/google";
import "./globals.css";

const font = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Pass World",
  description: "Random-Password-Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={font.className}>{children}</body>
    </html>
  );
}
