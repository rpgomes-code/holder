import type { Metadata } from "next";
import fonts from "./fonts";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/navbar/sidebar";
import { cookies } from "next/headers";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Holder - Manage your Networth",
  description: "Holder is a simple app to manage your networth.",
};

export async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <html lang="en">
      <body className={`${fonts.jetbrains_mono.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <main className="h-screen w-full">{children}</main>
            <Toaster />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
