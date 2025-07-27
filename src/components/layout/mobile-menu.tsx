// @/components/layout/mobile-menu.tsx
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader } from '@/components/ui/sheet';
import XIcon from './x-icon';
import { Home } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-0">
        <SheetHeader className="p-4 border-b border-border">
          <div className="flex justify-between items-center">
             <Link href="/" className="mr-6 flex items-center space-x-2" onClick={onClose}>
                <Home className="h-6 w-6 text-primary" />
                 <div>
                    <span className="font-bold sm:inline-block">
                    Property Deconstructed
                    </span>
                    <p className="text-xs text-muted-foreground">Educating Tomorrow's Agents Today</p>
                </div>
            </Link>
            <button onClick={onClose} aria-label="Close menu" className="focus:outline-none">
              <XIcon />
            </button>
          </div>
        </SheetHeader>
        <div className="p-4">
          <nav className="flex flex-col gap-6 text-lg">
            <Link
              href="/economist-chart"
              className="font-medium text-foreground transition-colors hover:text-primary"
              onClick={onClose}
            >
              Economist Chart
            </Link>
            <Link
              href="/audit"
              className="font-medium text-foreground transition-colors hover:text-primary"
              onClick={onClose}
            >
              Exploitation Audit
            </Link>
            <Link
              href="/truths"
              className="font-medium text-foreground transition-colors hover:text-primary"
              onClick={onClose}
            >
              Agent Truths
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
