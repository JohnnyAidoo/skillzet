import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  preload: true,
  weight: "300",
  subsets: ["latin"],
});

export const metadata = {
  title: "skillZet",
  description: "Learn For Free",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
