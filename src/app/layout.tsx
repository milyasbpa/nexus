import type { Metadata } from "next";
import clsx from "clsx";
import "./globals.css";
import { libreBaskerville, plusJakartaSans } from "@/core/fonts";
import { ReactQueryProvider } from "@/core/config/react_query";

export const metadata: Metadata = {
  title: "NEXUS",
  description: "NEXUS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html
        lang="en"
        className={`${plusJakartaSans.variable} ${libreBaskerville.variable}`}
      >
        <link rel="icon" href="/favicon/favicon.svg" sizes="any" />
        <body>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
