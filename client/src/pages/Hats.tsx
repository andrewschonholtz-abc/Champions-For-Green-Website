import { Link } from 'wouter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

/*
 * DESIGN: Editorial Warmth — Hats product page
 * 6 silhouettes, 6 bottles each, rubber tag, 4 customization zones
 */

const HAT_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/hat-silhouettes_9420f6c3.png';
const HAT_BRAND_STORY = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/hat-brand-story-full_4438e596.png';
const CAP_FULL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/cap-full-page_d0352ad6.png';
const BRANDED_HATS = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/branded-hats-collection_821b0738.png';

function RevealDiv({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div ref={ref} className={className} style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>{children}</div>
  );
}

const HATS = [
  { name: '5 Panel Perforated Performance', style: 'Pointed crown, perforated shell, athletic — most popular', msrp: '$45', popular: true },
  { name: 'Two-Toned 5 Panel Performance', style: 'Contrast brim, modern corporate', msrp: '$45' },
  { name: '5 Panel Rope Performance Hat', style: 'Rope accent, premium casual', msrp: '$45' },
  { name: 'Trucker', style: 'Mesh back, casual everyday', msrp: '$45' },
  { name: 'Bucket Hat', style: 'Full brim, outdoor lifestyle', msrp: '$45' },
  { name: 'Visor', style: 'Open top, athletic performance', msrp: '$30' },
];

const ZONES = [
  { name: 'Front Panel', desc: 'Primary branding zone. Logo, wordmark, or graphic.' },
  { name: 'Back Panel', desc: 'Secondary branding. URL, tagline, or icon.' },
  { name: 'Interior Lining', desc: 'Circular economy imagery. Visible only to the wearer.' },
  { name: 'Bottle Tag', desc: 'Rubber "6 Bottles" tag at back strap. Permanent, tactile.' },
];

export default function Hats() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <img src={HAT_IMG} alt="Champions for GREEN performance hat on golf course" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-near-black/40" />
        <div className="absolute inset-0 container flex items-end pb-12 lg:pb-16">
          <div>
            <p className="section-label mb-3">6 Bottles. One Statement.</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-linen leading-tight max-w-2xl">
              6 silhouettes. Every surface working for your brand.
            </h1>
          </div>
        </div>
      </section>

      {/* Key Facts Strip */}
      <section className="bg-forest py-6">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {[
              '6 Recycled PET Bottles',
              '95% rPET',
              'Rubber Bottle Tag',
              '4 Customization Zones',
            ].map((fact, i) => (
              <span key={i} className="text-sand text-xs font-bold uppercase tracking-wider">{fact}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Hat Silhouettes Grid */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="container">
          <RevealDiv className="mb-12">
            <p className="section-label mb-3">The Silhouettes</p>
            <h2 className="text-2xl md:text-3xl font-bold text-near-black mb-4">6 Hat Styles</h2>
            <p className="text-charcoal text-base prose-narrow">
              Every CFG hat diverts 6 recycled PET bottles from landfill. 95% rPET construction. Rubber bottle tag permanently at back strap. Circular economy imagery in interior lining — visible only to the wearer.
            </p>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HATS.map((hat, i) => (
              <RevealDiv key={i} delay={i * 80}>
                <div className={`bg-parchment rounded-md overflow-hidden h-full hover-lift ${hat.popular ? 'ring-2 ring-forest/20' : ''}`}>
                  <div className="aspect-[4/3] bg-near-black/5 relative flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-mono text-6xl font-bold text-forest">6</p>
                      <p className="text-tan text-xs uppercase tracking-wider">Bottles</p>
                    </div>
                    {hat.popular && (
                      <div className="absolute top-3 left-3 bg-forest text-linen text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                        Most Popular
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-gold/20 text-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                      Rubber Tag
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-near-black mb-1">{hat.name}</h3>
                    <p className="text-charcoal text-sm mb-4">{hat.style}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-khaki/30">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-lg font-bold text-near-black">{hat.msrp}</span>
                        <span className="text-tan text-xs">MSRP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Hat Brand Story - Catalog Page */}
      <section className="bg-linen py-12">
        <div className="container">
          <RevealDiv>
            <div className="rounded-md overflow-hidden">
              <img src={HAT_BRAND_STORY} alt="Your Brand, Your Story — Navy 5-panel hat with PVC patch showing front, back, interior, and tag customization zones" className="w-full h-auto" loading="lazy" />
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Eco Cool-Tech Cap Colors */}
      <section className="bg-parchment py-12">
        <div className="container">
          <RevealDiv>
            <div className="rounded-md overflow-hidden">
              <img src={CAP_FULL} alt="Eco Cool-Tech Cap — 9 colors available with lifestyle shot at run club" className="w-full h-auto" loading="lazy" />
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Customization Zones */}
      <section className="bg-near-black py-20 lg:py-24">
        <div className="container">
          <RevealDiv>
            <p className="section-label mb-3">4 Customization Zones</p>
            <h2 className="text-2xl md:text-3xl font-bold text-linen mb-10">Every surface working for your brand.</h2>
          </RevealDiv>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {ZONES.map((zone, i) => (
              <RevealDiv key={i} delay={i * 100}>
                <div className="bg-charcoal/50 rounded-md p-6 h-full border border-sand/10">
                  <p className="font-mono text-2xl font-bold text-gold mb-3">0{i + 1}</p>
                  <h4 className="text-linen text-sm font-bold mb-2">{zone.name}</h4>
                  <p className="text-sand/70 text-xs leading-relaxed">{zone.desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>

          {/* Branded Hats Collection */}
          <RevealDiv delay={400}>
            <div className="rounded-md overflow-hidden">
              <img src={BRANDED_HATS} alt="Custom branded hats — 8 different client hat designs with patches, embroidery, and PVC treatments" className="w-full h-auto rounded-md" loading="lazy" />
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* In-Stock Colors */}
      <section className="bg-linen py-16">
        <div className="container">
          <RevealDiv>
            <p className="section-label mb-3">In-Stock Colors</p>
            <div className="flex flex-wrap gap-4 mb-4">
              {[
                { name: 'Black', color: '#1A1A1A' },
                { name: 'Navy', color: '#1B2A4A' },
                { name: 'White', color: '#F5F5F0' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-2 bg-parchment rounded-md px-4 py-3">
                  <div className="w-5 h-5 rounded-full border border-khaki" style={{ backgroundColor: c.color }} />
                  <span className="text-near-black text-sm font-medium">{c.name}</span>
                  <span className="text-forest text-[10px] font-bold uppercase tracking-wider">In Stock</span>
                </div>
              ))}
            </div>
            <p className="text-tan text-sm">Additional colors available by special order — matched to Pantone/HEX specifications.</p>
          </RevealDiv>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-parchment py-20 text-center">
        <div className="container">
          <RevealDiv className="flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-near-black mb-4">Ready to brand your hats?</h2>
            <p className="text-charcoal text-base mb-8 max-w-lg">
              MSRP displayed for reference. Wholesale corporate pricing available on request for volume orders.
            </p>
            <Link href="/#pricing" className="cta-button">
              Request B2B Pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealDiv>
        </div>
      </section>
    </div>
  );
}
