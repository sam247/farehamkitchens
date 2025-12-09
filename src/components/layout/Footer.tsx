/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Instagram, Facebook, Linkedin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/logo.webp"
                alt="Fareham Kitchens"
                className="h-10 w-auto"
              />
            </Link>
            <p className="body-elegant text-muted-foreground max-w-xs">
              Crafting bespoke luxury kitchens for discerning homeowners across Hampshire and beyond.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="label-uppercase text-foreground mb-6">Explore</h4>
            <ul className="space-y-4">
              {['About', 'Projects', 'Services', 'Process', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="body-elegant text-muted-foreground hover:text-foreground transition-colors duration-300 link-elegant"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-uppercase text-foreground mb-6">Contact</h4>
            <ul className="space-y-4 body-elegant text-muted-foreground">
              <li>
                <a
                  href="tel:+441329123456"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  +44 (0) 1329 123 456
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@farehamkitchens.co.uk"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  hello@farehamkitchens.co.uk
                </a>
              </li>
              <li className="pt-4">
                <address className="not-italic">
                  Design Studio<br />
                  123 High Street<br />
                  Fareham, Hampshire<br />
                  PO16 7AZ
                </address>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="label-uppercase text-foreground mb-6">Visit Our Showroom</h4>
            <p className="body-elegant text-muted-foreground mb-6">
              Experience our craftsmanship firsthand. Book a private consultation at our Fareham showroom.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 label-uppercase text-foreground hover:gap-4 transition-all duration-300"
            >
              Book Consultation
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mt-16 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Fareham Kitchens. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Legal */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors duration-300">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors duration-300">
              Terms
            </Link>
            <a
              href="tel:+441329123456"
              className="hover:text-foreground transition-colors duration-300"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
