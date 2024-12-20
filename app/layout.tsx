// app/layout.tsx
import type { Metadata } from "next";
import { inter, jetbrain_mono } from "@/app/fonts";
import "./globals.css";
import { ThemeProvider } from "@/app/ThemeProvider";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaUser, FaBriefcase, FaCode } from "react-icons/fa";
import StickyIcons from "@/components/sections/StickyIcons";
import Footer from "@/components/sections/Footer";
import { Analytics } from "@vercel/analytics/react"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { AnimationProvider } from "@/app/AnimationProvider";
import { AnimationToggle } from "@/components/ui/AnimationToggle";

export const metadata = {
  title: "Aymen",
  description: "Personal portfolio of Aymen Rhihil",
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
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />
        <meta property="og:title" content="Aymen's Portfolio" />
        <meta
          property="og:description"
          content="Data analyst with a passion for web development and machine learning. Transforming complex data into actionable insights and building innovative web solutions."
        />
        <meta property="og:url" content="https://www.rhihil.com/" />
        <meta
          property="og:image"
          content="https://www.rhihil.com/"
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            if (window.location.href === "https://www.rhihil.com/") {
              window.location.replace("https://www.rhihil.com/");
            }
          `
        }} />
        <meta property="og:type" content="website" />
      </head>
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
            <Analytics />
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
