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
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
        </head>
        <body
          className={clsx(
            plusJakartaSans.className,
            libreBaskerville.className
          )}
        >
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  );
}
