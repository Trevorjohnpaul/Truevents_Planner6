import { Children } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        HEADER
        {children}
        FOOTER
    </main>
  );
}
