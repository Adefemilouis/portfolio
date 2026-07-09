"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full border-b border-line/60 bg-background/80 backdrop-blur"
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-sm font-semibold tracking-wide">
          A.Adefemi<span className="text-accent">/</span>DEV
        </a>
        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm">
          <a href="#contact">Get in touch</a>
        </Button>
      </div>
    </motion.header>
  );
}
