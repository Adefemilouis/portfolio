"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-blueprint-grid pt-32 pb-24">
      {/* ambient corner coordinates, part of the blueprint motif */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-6 top-24 font-mono text-[11px] tracking-widest text-muted-foreground/60">
          N 51.9225° / E 4.4792°
        </span>
        <span className="absolute right-6 top-24 font-mono text-[11px] tracking-widest text-muted-foreground/60">
          REV. 2026.07
        </span>
      </div>

      <div className="container grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Fig. 01 — Portrait
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Adekunle Adefemi builds
            <br />
            software that
            <br />
            <span className="text-accent">holds up</span> under load.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md font-body text-lg text-muted-foreground"
          >
            Full-stack engineer specializing in resilient backend systems and
            interfaces people actually enjoy using. Currently shipping at the
            intersection of product and infrastructure.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <a href="#work">
                View the work <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Start a project</a>
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <Badge variant="accent" className="ml-2">
              <span className="mr-1.5 h-1.5 w-1.5 animate-blink rounded-full bg-accent" />
              Available for work
            </Badge>
          </motion.div>
        </motion.div>

        {/* Signature element: schematic-frame portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <span className="absolute -top-7 left-0 font-mono text-[11px] tracking-widest text-muted-foreground">
            0.00
          </span>
          <span className="absolute -top-7 right-0 font-mono text-[11px] tracking-widest text-muted-foreground">
            640.00
          </span>
          <div className="absolute -top-3 left-0 right-0 flex items-center">
            <span className="h-1.5 w-px bg-line" />
            <span className="h-px flex-1 bg-line" />
            <span className="h-1.5 w-px bg-line" />
          </div>

          <div className="relative border border-line/80 bg-panel p-3">
            <span className="corner-tick left-0 top-0 border-l-2 border-t-2" />
            <span className="corner-tick right-0 top-0 border-r-2 border-t-2" />
            <span className="corner-tick bottom-0 left-0 border-b-2 border-l-2" />
            <span className="corner-tick bottom-0 right-0 border-b-2 border-r-2" />

            <div className="relative aspect-[4/5] w-full overflow-hidden bg-blueprint-grid-fine">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/avatar.jfif"
                alt="Portrait of Adekunle Adefemi, software engineer"
                className="h-full w-full object-cover grayscale contrast-125"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/avatar.svg";
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-panel/80 via-transparent to-transparent" />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between font-mono text-[11px] tracking-widest text-muted-foreground">
            <span>ID — A.Adefemi</span>
            <span>SCALE 1:1</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
