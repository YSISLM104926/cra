'use client'
import "@/styles/globals.css";
import clsx from "clsx";
import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html suppressHydrationWarning lang="en">
        <head />
        <body
          className={clsx(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <SignedIn>
            <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
              <div className="relative flex flex-col h-screen">
                <Navbar />
                <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                  {children}
                </main>
              </div>
            </Providers>
          </SignedIn>
          <SignedOut>
            <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
              <div className="flex justify-center items-center h-screen">
                <SignIn routing="hash" />
              </div>
            </Providers>
          </SignedOut>

        </body>
      </html>
    </ClerkProvider>
  );
}
