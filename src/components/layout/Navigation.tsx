/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [router.asPath]);

  const navLinks = [
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/blog", label: "Blog" },
    { path: "/services", label: "Services" },
    { path: "/process", label: "Process" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out-expo ${
          isScrolled ? "glass py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative group">
              <img
                src="/logo.webp"
                alt="Fareham Kitchens"
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`label-uppercase link-elegant text-foreground/80 hover:text-foreground transition-colors duration-300 ${
                    router.asPath === link.path ? "text-foreground" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="tel:+44189788617"
                className="label-uppercase px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-500"
              >
                Call
              </Link>
              <Link
                href="/contact"
                className="label-uppercase px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-500"
              >
                Enquire
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-700 ease-out-expo lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              href={link.path}
              className={`heading-medium text-foreground hover:text-muted-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "animate-fade-in" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`label-uppercase px-12 py-4 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-500 mt-8 ${
              isMobileMenuOpen ? "animate-fade-in" : ""
            }`}
            style={{ animationDelay: "0.5s" }}
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
