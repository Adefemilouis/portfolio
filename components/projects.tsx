"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    tag: "04",
    title: "Ledger",
    description:
      "A real-time reconciliation engine that processes millions of transactions a day with sub-second consistency checks.",
    stack: ["Go", "PostgreSQL", "Kafka"],
    href: "#",
  },
  {
    tag: "05",
    title: "Fieldnote",
    description:
      "An offline-first notes app for research teams, syncing seamlessly across spotty connections in the field.",
    stack: ["Next.js", "SQLite", "CRDT"],
    href: "#",
  },
  {
    tag: "06",
    title: "Signal",
    description:
      "Internal observability dashboard that cut incident triage time by 60% across four product teams.",
    stack: ["React", "TypeScript", "Grafana"],
    href: "#",
  },
];

export function Projects() {
  return (
    <section id="work" className="border-t border-line/60 py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                Fig. 04–06 — Case files
              </span>
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Selected work
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Three projects, in the order I'd walk you through them on a call.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <Card className="group flex h-full flex-col justify-between transition-colors hover:border-accent/60">
                <div>
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-mono text-xs tracking-widest text-accent">
                        FIG. {project.tag}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                </div>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
