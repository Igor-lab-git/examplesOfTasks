import type { Metadata } from "next";
import StoreProvider from "@/app/storeProvider/StoreProvider";
import "./styles/globals.scss";
import style from "./page.module.scss";

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
      <body className={style.bodyMainLayout}>
      <StoreProvider>
        {children}
      </StoreProvider>
      </body>
    </html>
  );
}
