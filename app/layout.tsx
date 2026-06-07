// app/layout.tsx
import type { Metadata } from "next";
import { inter, jetbrain_mono } from "@/app/fonts";
import "./globals.css";
import { ThemeProvider } from "@/app/ThemeProvider";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaUser, FaBriefcase, FaCode } from "react-icons/fa";
import StickyIcons from "@/components/sections/StickyIcons";
import Footer from "@/components/sections/Footer";
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { AnimationProvider } from "@/app/AnimationProvider";
import { AnimationToggle } from "@/components/ui/AnimationToggle";

export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
};

const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <FaHome />,
  },
  {
    name: "About",
    link: "#about",
    icon: <FaUser />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FaCode />,
  },
  {
    name: "Work",
    link: "#work",
    icon: <FaBriefcase />,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jetbrain_mono.variable} ${inter.variable} font-mono antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnimationProvider>
            <ScrollProgress />
            <FloatingNav navItems={navItems} />
            <StickyIcons />
            {children}
            <Footer />
            <ThemeToggle />
            <AnimationToggle />
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
