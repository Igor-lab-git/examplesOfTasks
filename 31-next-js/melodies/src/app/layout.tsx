import type { Metadata } from "next";
import "../styles/globals.scss"
import StoreProvider from "@/storeProvider/StoreProvider";

export const metadata: Metadata = {
  title: "Melodies",
  description: "App Melodies music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body>
      <StoreProvider>
        {children}
      </StoreProvider>
      </body>
    </html>
  );
}
