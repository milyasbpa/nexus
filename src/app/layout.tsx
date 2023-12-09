import type { Metadata } from "next";
import clsx from "clsx";
import "./globals.css";
import { libreBaskerville, plusJakartaSans } from "@/core/fonts";

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
    <html lang="en">
      <body
        className={clsx(plusJakartaSans.className, libreBaskerville.className)}
      >
        {children}
      </body>
    </html>
  );
}
