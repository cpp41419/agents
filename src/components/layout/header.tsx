import { Home } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <a href="/" className="mr-2 flex items-center space-x-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              Property Deconstructed
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
