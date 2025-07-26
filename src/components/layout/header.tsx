import { Home } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              Property Deconstructed
            </span>
          </Link>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/economist-chart" className="font-medium text-muted-foreground transition-colors hover:text-foreground">
            Economist Chart
          </Link>
          <Link href="/audit" className="font-medium text-muted-foreground transition-colors hover:text-foreground">
            Exploitation Audit
          </Link>
        </nav>
      </div>
    </header>
  );
}
