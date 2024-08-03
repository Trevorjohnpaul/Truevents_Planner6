import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Children } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full">
        <NavBar />
        {children}
        <Footer />
    </main>
  );
}
