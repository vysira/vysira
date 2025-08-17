import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Vysira",
  description: "Find space that works.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 border-b">
          <h1 className="text-xl font-bold">Vysira</h1>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
