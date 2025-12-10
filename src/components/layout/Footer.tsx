/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
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
            <div className="mt-4">
              <a
                href="https://uk.trustpilot.com/review/aokitchens.co.uk"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Image src="/trustpilot-white.webp" alt="Trustpilot" width={90} height={22} />
              </a>
            </div>
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
              <li>
                <Link
                  href="/blog"
                  className="body-elegant text-muted-foreground hover:text-foreground transition-colors duration-300 link-elegant"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-uppercase text-foreground mb-6">Contact</h4>
            <ul className="space-y-4 body-elegant text-muted-foreground">
              <li>
                <a
                  href="tel:+441489788617"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  01489 788617
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@aokitchens.co.uk"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  info@aokitchens.co.uk
                </a>
              </li>
              <li className="pt-4">
                <address className="not-italic">
                  491-493 Bitterne Road East<br />
                  Southampton<br />
                  SO18 5EQ
                </address>
              </li>
              <li>
                <p className="not-italic">
                  Monday to Friday: 9:30am – 5:00am<br />
                  Saturday: 10:00am – 4:00am<br />
                  Sunday: Closed
                </p>
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
            <span>Copyright © 2025 | Andrew Osbourne Kitchens T/A Fareham Kitchens | Powered by Better Ranking</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
