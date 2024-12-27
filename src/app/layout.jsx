
import Navbar from "@/components/Navbar";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import { getSession } from "next-auth/react";


export const metadata = {
  title: "Sibolga Web",
  description: "Kunjungi Kota Sibolga",
};

export default async function RootLayout({ children }) {
  const session = await getSession()
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <SessionProvider session={session}>
        <Navbar />
        <div className="w-full min-h-screen">
          {children}
        </div>
        </SessionProvider>
      </body>
    </html>
  );
}
