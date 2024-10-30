import "./styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Bookshop",
  description: "An online bookshop application",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
