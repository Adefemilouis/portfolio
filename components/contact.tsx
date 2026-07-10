"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line/60 bg-blueprint-grid py-28">
      <div className="container flex flex-col items-start gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-2 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Fig. 07 — Contact
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
        >
          Have a project worth building well? Let's talk it through.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Button asChild size="lg">
            <a href="adefemilouis@gmail.com">
              <Mail className="h-4 w-4" /> adefemilouis@gmail.com
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#" download>
              Download résumé <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
