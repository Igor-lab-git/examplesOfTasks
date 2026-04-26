import type { Metadata } from "next";
import StoreProvider from "@/app/storeProvider/StoreProvider";
import "./styles/globals.scss";

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
