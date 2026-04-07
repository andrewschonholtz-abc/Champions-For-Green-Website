import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';

/*
 * DESIGN: Editorial Warmth — Vuori-meets-magazine
 * Nav: Linen bg, Near Black text, Forest Green CTA, sticky on scroll
 * Mobile: hamburger with persistent CTA button exposed
 */

const NAV_LINKS = [
  { href: '/apparel', label: 'Apparel' },
  { href: '/hats', label: 'Hats' },
  { href: '/kits', label: 'Kits' },
  { href: '/customization', label: 'Customization' },
];

const EDUCATION_LINKS = [
  { href: '/about', label: 'Our Story' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/events', label: 'Events' },
  { href: '/sustainability', label: 'Sustainability Education' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [eduOpen, setEduOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setEduOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-linen/95 backdrop-blur-md shadow-sm'
          : 'bg-linen'
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-forest font-bold text-lg tracking-tight">CHAMPIONS</span>
          <span className="text-near-black font-bold text-lg tracking-tight">FOR</span>
          <span className="text-forest font-bold text-lg tracking-tight">GREEN</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-forest ${
                location === link.href ? 'text-forest' : 'text-near-black'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Education Dropdown */}
          <div className="relative">
            <button
              onClick={() => setEduOpen(!eduOpen)}
              onBlur={() => setTimeout(() => setEduOpen(false), 200)}
              className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-forest ${
                EDUCATION_LINKS.some(l => l.href === location) ? 'text-forest' : 'text-near-black'
              }`}
            >
              Education
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${eduOpen ? 'rotate-180' : ''}`} />
            </button>
            {eduOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-linen border border-khaki rounded-md shadow-lg py-2">
                {EDUCATION_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-near-black hover:bg-parchment hover:text-forest transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop CTA + Mobile CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link href="/#pricing" className="cta-button text-xs lg:text-[13px]">
            Request B2B Pricing
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-near-black"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-linen border-t border-khaki/30 animate-slide-down">
          <div className="container py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-base font-medium text-near-black hover:text-forest border-b border-khaki/20"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <span className="section-label text-xs">Education</span>
            </div>
            {EDUCATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 pl-3 text-base text-charcoal hover:text-forest border-b border-khaki/20"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-near-black text-linen">
      {/* Final CTA Section */}
      <div className="py-20 text-center border-b border-sand/20">
        <p className="section-label mb-4">Get Started</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-linen">
          Look Good. Feel Good. Do Good.
        </h2>
        <p className="text-sand text-sm uppercase tracking-[0.15em] font-bold mb-8">
          Circular by Nature. Custom by Design.
        </p>
        <p className="text-sand/80 max-w-xl mx-auto mb-10 text-base leading-relaxed px-4">
          Premium sustainable apparel, hats, and kits — made from recycled plastic bottles, fully customizable with your brand, and built to be worn everywhere your team goes.
        </p>
        <Link href="/#pricing" className="cta-button bg-forest hover:bg-forest-mid text-linen">
          Request B2B Pricing
        </Link>
        <p className="mt-6 font-mono text-xs text-sand/60 tracking-wide">
          Champions for GREEN · By Geared for GREEN · Est. 1985 · Miami, Florida
        </p>
      </div>

      {/* Footer Links */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-forest-light font-bold text-base">CHAMPIONS</span>
              <span className="text-linen font-bold text-base">FOR</span>
              <span className="text-forest-light font-bold text-base">GREEN</span>
            </div>
            <p className="text-sand/70 text-sm leading-relaxed mb-4">
              Sustainable Apparel · Hats · Kits — Created Through the Circular Economy
            </p>
            <p className="text-sand/50 text-xs">
              @champions4green
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-gold mb-4">Products</h4>
            <div className="space-y-2.5">
              <Link href="/apparel" className="block text-sm text-sand/70 hover:text-linen transition-colors">Apparel</Link>
              <Link href="/hats" className="block text-sm text-sand/70 hover:text-linen transition-colors">Hats</Link>
              <Link href="/kits" className="block text-sm text-sand/70 hover:text-linen transition-colors">Kits</Link>
              <Link href="/customization" className="block text-sm text-sand/70 hover:text-linen transition-colors">Customization</Link>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-gold mb-4">Learn</h4>
            <div className="space-y-2.5">
              <Link href="/about" className="block text-sm text-sand/70 hover:text-linen transition-colors">Our Story</Link>
              <Link href="/how-it-works" className="block text-sm text-sand/70 hover:text-linen transition-colors">How It Works</Link>
              <Link href="/events" className="block text-sm text-sand/70 hover:text-linen transition-colors">Events</Link>
              <Link href="/sustainability" className="block text-sm text-sand/70 hover:text-linen transition-colors">Sustainability Education</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-gold mb-4">Contact</h4>
            <div className="space-y-2.5 text-sm text-sand/70">
              <a href="mailto:hello@championsforgreen.com" className="block hover:text-linen transition-colors">
                hello@championsforgreen.com
              </a>
              <a href="tel:888-358-5478" className="block hover:text-linen transition-colors">
                888-358-5478
              </a>
              <p>848 Brickell Ave, Suite 410<br />Miami, FL 33131</p>
            </div>
            <div className="mt-4 space-y-1.5 text-xs text-sand/50">
              <a href="https://championsforgreenevents.com" target="_blank" rel="noopener" className="block hover:text-sand transition-colors">
                championsforgreenevents.com
              </a>
              <a href="https://gearedforgreen.com" target="_blank" rel="noopener" className="block hover:text-sand transition-colors">
                gearedforgreen.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-sand/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sand/50">
            &copy; 2026 Champions for GREEN / Geared for GREEN, Inc. · All Rights Reserved
          </p>
          <Link href="/#pricing" className="cta-button text-xs py-2.5 px-5">
            Request B2B Pricing
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-[72px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
