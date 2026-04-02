import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Danny & Jones | Bespoke Handcrafted Shoes & Tailored Apparel",
  description:
    "Experience the pinnacle of bespoke craftsmanship. Handcrafted shoes and tailored apparel for the discerning gentleman.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
