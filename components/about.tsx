"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "6+", label: "Years shipping" },
  { value: "40+", label: "Products launched" },
  { value: "6", label: "Teams scaled" },
];

export function About() {
  return (
    <section id="about" className="border-t border-line/60 py-24">
      <div className="container grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Fig. 02 — Profile
            </span>
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            About the engineer
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a software engineer who likes systems that are boring in the
            best way: predictable under pressure, easy to reason about, and
            simple to hand off. Over the some years I've moved between
            early-stage startups and larger platform teams, usually landing
            wherever backend architecture meets product decisions.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Lately that means designing APIs, tightening feedback loops for
            other engineers, and occasionally still shipping the UI myself
            when a feature needs a steady hand end to end.
          </p>

          <div className="grid grid-cols-3 gap-6 border-t border-line/60 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-semibold text-accent">
                  {stat.value}
                </div>
                <div className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
