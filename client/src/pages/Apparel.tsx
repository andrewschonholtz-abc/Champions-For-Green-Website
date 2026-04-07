import { Link } from 'wouter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight, Droplets, Wind, Shield, Sun, Zap } from 'lucide-react';
import { useEffect } from 'react';

/*
 * DESIGN: Editorial Warmth — Apparel product page
 * Hero banner + product grid with MSRP + performance specs + CTA
 */

const APPAREL_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/page05-05_d9964db0.png';
const QZ_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/qz-full-page_836c8023.png';
const VEST_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/vest-full-page_2e61df2c.png';
const PERF_TECH_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/performance-tech_129784be.png';
const LIFESTYLE_POLO = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/lifestyle-polo-club_04535502.png';
const LIFESTYLE_QZ = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/lifestyle-qz-beach_67177109.png';
const LIFESTYLE_VEST = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/lifestyle-vest-jet_6fab3b01.png';

// Map product names to their catalog images
const PRODUCT_IMAGES: Record<string, string> = {
  'Eco Cool-Tech Polo': LIFESTYLE_POLO,
  'Quarter-Zip Performance Pullover': LIFESTYLE_QZ,
  'Full Zip Vest': LIFESTYLE_VEST,
};

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

const PRODUCTS = [
  { name: 'Eco Cool-Tech Polo', subtitle: 'New Styles — Flagship', bottles: 12, tag: 'Fabric', msrp: '$90', sale: false, desc: '85% rPET performance fabric. 4-way stretch, moisture-wicking, Cool-Tech temperature regulation, antimicrobial, UPF 50.', featured: true },
  { name: 'Quarter-Zip Performance Pullover', subtitle: 'Layering Essential', bottles: 14, tag: 'Fabric', msrp: '$105', sale: false, desc: 'Fourteen recycled bottles transformed into a pullover built for every environment. Performance stretch, contrast zip guard, mock neck collar.' },
  { name: "Women's Top", subtitle: 'Tailored Fit', bottles: 7, tag: 'Fabric', msrp: '$85', sale: false, desc: 'Tailored fit designed for the full collection. Premium rPET fabric with feminine silhouette.' },
  { name: 'Performance T-Shirt', subtitle: 'Everyday Wear', bottles: 10, tag: 'Fabric', msrp: '$50', sale: false, desc: 'Performance tee for everyday wear. Lightweight, breathable, and built to last.' },
  { name: 'Performance Long Sleeve', subtitle: 'Extended Coverage', bottles: 17, tag: 'Fabric', msrp: '$60', sale: false, desc: 'Long sleeve performance top. 17 recycled bottles. Maximum coverage with premium comfort.' },
  { name: 'Long Sleeve Hoodie', subtitle: 'Casual Premium', bottles: 17, tag: 'Fabric', msrp: '$70', sale: false, desc: 'Hooded long sleeve in premium recycled fabric. 17 bottles diverted from landfill.' },
  { name: 'Full Zip Vest', subtitle: 'Layering Piece', bottles: 10, tag: 'Fabric', msrp: '$150', sale: false, desc: 'Full-zip vest for versatile layering. Premium construction, recycled performance fabric.' },
  { name: 'Jacket', subtitle: 'Outerwear', bottles: null, tag: 'Fabric', msrp: '$190', sale: false, desc: 'Premium outerwear jacket. Full recycled fabric construction with professional finish.' },
  { name: 'Classic Polos', subtitle: 'Legacy — On Sale', bottles: 9, tag: 'Fabric', msrp: '$50', originalPrice: '$75', sale: true, desc: 'Original classic polo design. On sale while supplies last. 9 recycled bottles per polo.' },
];

const COLORWAYS = [
  'Forest Green', 'Slate Blue', 'Khaki', 'Navy', 'Grey', 'White', 'Yellow', 'Black', 'Light Blue', 'Terracotta', 'Light Violet', 'Rosewood', 'Mint Green', 'Lime Green'
];

const COLOR_MAP: Record<string, string> = {
  'Forest Green': '#243D32', 'Slate Blue': '#5B7B93', 'Khaki': '#C4B49A', 'Navy': '#1B2A4A',
  'Grey': '#808080', 'White': '#F5F5F0', 'Yellow': '#D4A843', 'Black': '#1A1A1A',
  'Light Blue': '#87CEEB', 'Terracotta': '#CC6B49', 'Light Violet': '#B39DDB', 'Rosewood': '#8B4557',
  'Mint Green': '#98D4A0', 'Lime Green': '#7CB342'
};

const SPECS = [
  { icon: Droplets, label: 'Moisture Wicking' },
  { icon: Wind, label: '4-Way Stretch' },
  { icon: Zap, label: 'Cool Tech' },
  { icon: Shield, label: 'Antimicrobial' },
  { icon: Sun, label: 'UPF 50' },
];

export default function Apparel() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <img src={APPAREL_IMG} alt="Champions for GREEN apparel lifestyle" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-near-black/50" />
        <div className="absolute inset-0 container flex items-end pb-12 lg:pb-16">
          <div>
            <p className="section-label mb-3">12 Bottles. One Polo.</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-linen leading-tight max-w-2xl">
              Premium enough to wear everywhere. Purposeful enough to mean something.
            </h1>
          </div>
        </div>
      </section>

      {/* Performance Specs Strip */}
      <section className="bg-forest py-6">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {SPECS.map((spec, i) => (
              <div key={i} className="flex items-center gap-2">
                <spec.icon className="w-4 h-4 text-forest-light" />
                <span className="text-sand text-xs font-bold uppercase tracking-wider">{spec.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sale Banner */}
      <section className="bg-gold/10 border-b border-gold/20 py-4">
        <div className="container text-center">
          <p className="text-bark text-sm font-bold">
            Classic Polos — Originally $75, Now $50. While supplies last.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="container">
          <RevealDiv className="mb-12">
            <p className="section-label mb-3">The Collection</p>
            <h2 className="text-2xl md:text-3xl font-bold text-near-black mb-4">Full Apparel Line</h2>
            <p className="text-charcoal text-base prose-narrow">
              Every piece made from recycled PET plastic bottles. Fabric hem tags on all apparel products — clean, integrated, always present.
            </p>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product, i) => (
              <RevealDiv key={i} delay={i * 80}>
                <div className={`bg-parchment rounded-md overflow-hidden h-full flex flex-col hover-lift ${product.featured ? 'ring-2 ring-forest/20' : ''}`}>
                  {/* Product Image */}
                  <div className="aspect-[4/3] bg-near-black/5 relative flex items-center justify-center overflow-hidden">
                    {PRODUCT_IMAGES[product.name] ? (
                      <img
                        src={PRODUCT_IMAGES[product.name]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="text-center p-6">
                        {product.bottles && (
                          <p className="font-mono text-5xl font-bold text-forest mb-1">{product.bottles}</p>
                        )}
                        <p className="text-tan text-xs uppercase tracking-wider">{product.bottles ? 'Bottles' : 'Premium'}</p>
                      </div>
                    )}
                    {product.sale && (
                      <div className="absolute top-3 right-3 bg-gold text-near-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                        Sale
                      </div>
                    )}
                    {product.featured && (
                      <div className="absolute top-3 left-3 bg-forest text-linen text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                        Flagship
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-base font-bold text-near-black">{product.name}</h3>
                        <p className="text-tan text-xs">{product.subtitle}</p>
                      </div>
                      <span className={`shrink-0 text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm font-bold ${
                        product.tag === 'Rubber' ? 'bg-gold/20 text-gold' : 'bg-forest/10 text-forest'
                      }`}>
                        {product.tag} Tag
                      </span>
                    </div>

                    <p className="text-charcoal text-sm leading-relaxed mb-4 flex-1">{product.desc}</p>

                    <div className="flex items-center justify-between pt-3 border-t border-khaki/30">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-lg font-bold text-near-black">{product.msrp}</span>
                        {product.originalPrice && (
                          <span className="font-mono text-sm text-tan line-through">{product.originalPrice}</span>
                        )}
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

      {/* Catalog Product Pages */}
      <section className="bg-linen py-12">
        <div className="container space-y-8">
          <RevealDiv>
            <div className="rounded-md overflow-hidden">
              <img src={APPAREL_IMG} alt="12 Bottles. One Polo. — Eco Cool-Tech Polo in 5 colors with hem tag detail" className="w-full h-auto" loading="lazy" />
            </div>
          </RevealDiv>
          <RevealDiv delay={100}>
            <div className="rounded-md overflow-hidden">
              <img src={QZ_IMG} alt="14 Bottles. One Quarter-Zip. — Performance pullover in 4 colors with hem tag detail" className="w-full h-auto" loading="lazy" />
            </div>
          </RevealDiv>
          <RevealDiv delay={200}>
            <div className="rounded-md overflow-hidden">
              <img src={VEST_IMG} alt="10 Bottles. One Vest. — Performance vest in 3 colors with hem tag detail" className="w-full h-auto" loading="lazy" />
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Performance Tech */}
      <section className="bg-parchment py-12">
        <div className="container">
          <RevealDiv>
            <div className="rounded-md overflow-hidden">
              <img src={PERF_TECH_IMG} alt="Performance Without Compromise — Five Technologies: Moisture Wicking, 4-Way Stretch, Cool Tech, Antimicrobial, UPF 50" className="w-full h-auto" loading="lazy" />
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Colorways */}
      <section className="bg-near-black py-16 lg:py-20">
        <div className="container">
          <RevealDiv>
            <p className="section-label mb-3">Jolie Shirt Concepts</p>
            <h2 className="text-2xl md:text-3xl font-bold text-linen mb-8">Available Colorways</h2>
            <div className="flex flex-wrap gap-3">
              {COLORWAYS.map((color, i) => (
                <div key={i} className="flex items-center gap-2 bg-charcoal/50 rounded-md px-3 py-2">
                  <div
                    className="w-4 h-4 rounded-full border border-sand/30"
                    style={{ backgroundColor: COLOR_MAP[color] || '#888' }}
                  />
                  <span className="text-sand text-xs">{color}</span>
                </div>
              ))}
            </div>
            <p className="text-sand/50 text-xs mt-4">PFP custom color technology available for Pantone-matched corporate branding.</p>
          </RevealDiv>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linen py-20 text-center">
        <div className="container">
          <RevealDiv className="flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-near-black mb-4">Ready to elevate your brand?</h2>
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
