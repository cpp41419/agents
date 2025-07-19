import { Home } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 md:py-12 bg-secondary text-secondary-foreground">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="font-bold">
              Property Deconstructed
            </span>
        </div>
        <p className="text-balance text-center text-sm text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Property Deconstructed. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
