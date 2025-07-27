import { Home } from "lucide-react";
import Link from "next/link";

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <li>
        <Link href={href} className="text-muted-foreground hover:text-primary-foreground transition-colors duration-200">
            {children}
        </Link>
    </li>
);

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-secondary text-secondary-foreground">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">
                Property Deconstructed
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
                Independent evaluation platform for Australian real estate education providers. Anonymous assessments, transparent comparisons, student protection.
            </p>
             <div className="flex space-x-4 text-sm font-semibold">
                <span>87 Providers</span>
                <span>8 States</span>
                <span>100% Anonymous</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-primary-foreground">Navigation Hub</h3>
            <ul className="space-y-2 text-sm">
                <FooterLink href="/quiz">Course Quiz</FooterLink>
                <FooterLink href="/compare">Compare Providers</FooterLink>
                <FooterLink href="/guides/career">Real Estate Career Guide</FooterLink>
                <FooterLink href="/faq">Frequently Asked Questions</FooterLink>
                <FooterLink href="/blog">Blog & Insights</FooterLink>
                <FooterLink href="/guides/states">State Licensing Guides</FooterLink>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-primary-foreground">Services & Solutions</h3>
            <ul className="space-y-2 text-sm">
                <FooterLink href="/rtos">For RTOs & Providers</FooterLink>
                <FooterLink href="/students">For Students</FooterLink>
                <FooterLink href="/international">🌏 International Students</FooterLink>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-primary-foreground">Platform & Policies</h3>
            <ul className="space-y-2 text-sm">
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/about/mission">Mission & Values</FooterLink>
                <FooterLink href="/about/reviews">Independent Review Process</FooterLink>
                <FooterLink href="/legal/terms">Terms & Conditions</FooterLink>
                <FooterLink href="/legal/privacy">Privacy Policy</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Property Deconstructed. All Rights Reserved. An independent education insights platform.</p>
        </div>
      </div>
    </footer>
  );
}
