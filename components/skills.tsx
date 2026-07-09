"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const groups = [
  {
    label: "Languages",
    items: ["TypeScript", "Go", "Python", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend & infra",
    items: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
  },
  {
    label: "Practice",
    items: ["System design", "API design", "CI/CD", "Mentoring"],
  },
];

export function Skills() {
  return (
    <section id="stack" className="border-t border-line/60 bg-panel/40 py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Fig. 03 — Legend
            </span>
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Tools of the trade
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-l border-line/60 pl-5"
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
