export function Footer() {
  return (
    <footer className="border-t border-line/60 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} Adekunle Adefemi</span>
        <span>Built with Next.js &amp; Framer Motion</span>
      </div>
    </footer>
  );
}
