import { Link } from 'wouter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

/*
 * DESIGN: Editorial Warmth — Customization page
 * Decoration methods, process, brand design system
 */

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

const DECORATION_METHODS = [
  { name: 'Plain Embroidery', desc: 'Standard thread stitched directly into fabric. Clean, durable, professional. Ideal for logos and wordmarks.', best: 'Polos, Quarter-Zips, Vests' },
  { name: 'Patch Embroidery', desc: 'Separate embroidered patch sewn onto garment. Adds texture, dimension, and a premium feel.', best: 'Hats, Polos, Jackets' },
  { name: 'Puff Embroidery (3D)', desc: 'Foam under stitching creates raised, bold 3D appearance. Maximum visual impact.', best: 'Hats — Front Panel' },
  { name: 'PVC / Rubber Patch', desc: 'Soft molded rubber patch. Detailed designs, vibrant colors, weatherproof. Premium tactile feel.', best: 'Hats, Bags, Accessories' },
  { name: 'Screen Print', desc: 'Designs printed directly onto fabric. Ideal for complex graphics, gradients, and large-area decoration.', best: 'Tees, Long Sleeves, Bags' },
  { name: 'Woven Label', desc: 'Custom woven labels with brand details. Professional finishing touch for interior branding.', best: 'All Apparel — Interior' },
];

const PROCESS_STEPS = [
  { step: '01', title: 'Share Your Brand Assets', desc: 'Email your logo (vector preferred), brand colors (Pantone/HEX), slogans, and any secondary marks to hello@championsforgreen.com. The more assets, the more creative options we can explore.', duration: 'Day 1' },
  { step: '02', title: 'We Build Your Design System', desc: 'Our design team creates multiple decoration concepts across your selected products. Full mockup presentation with decoration method recommendations for each placement.', duration: '5-7 Business Days' },
  { step: '03', title: 'Review & Refine', desc: 'You review the concepts, provide feedback, and we refine. Multiple revision rounds included. We do not stop until it is right.', duration: '2-3 Business Days' },
  { step: '04', title: 'Approve & Produce', desc: 'Final approval. Production begins. Quality control at every stage. Delivery to your door or event venue.', duration: '3-4 Weeks Production' },
];

const BRAND_ZONES_APPAREL = [
  { zone: 'Left Chest', placement: 'Primary logo placement', method: 'Embroidery, Patch' },
  { zone: 'Right Chest', placement: 'Secondary mark or icon', method: 'Embroidery' },
  { zone: 'Back Yoke', placement: 'Wordmark or URL', method: 'Embroidery, Screen Print' },
  { zone: 'Sleeve', placement: 'Icon or small mark', method: 'Embroidery' },
  { zone: 'Hem Tag', placement: 'Bottle count — always present', method: 'Fabric Tag (Included)' },
];

const BRAND_ZONES_HATS = [
  { zone: 'Front Panel', placement: 'Primary branding — logo, wordmark', method: 'Embroidery, 3D Puff, PVC Patch' },
  { zone: 'Back Panel', placement: 'Secondary — URL, tagline, icon', method: 'Embroidery, Screen Print' },
  { zone: 'Interior Lining', placement: 'Circular economy imagery', method: 'Sublimation Print' },
  { zone: 'Bottle Tag', placement: '"6 Bottles" — always present', method: 'Rubber Tag (Included)' },
];

export default function Customization() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-near-black py-20 lg:py-28">
        <div className="container">
          <RevealDiv>
            <p className="section-label mb-4">Your Brand Re-Imagined</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-linen leading-tight max-w-3xl mb-6">
              We don't just put your logo on apparel. We turn your brand into a lifestyle.
            </h1>
            <p className="text-sand/80 text-base leading-relaxed prose-narrow">
              Every Champions for GREEN product is a canvas for your brand. Multiple decoration methods, strategic placement zones, and a design team that understands how to make your brand look its best on premium sustainable materials.
            </p>
          </RevealDiv>
        </div>
      </section>

      {/* Decoration Methods - Catalog Image */}
      <section className="bg-linen py-12 lg:py-16">
        <div className="container">
          <RevealDiv className="mb-10">
            <p className="section-label mb-3">Decoration Methods</p>
            <h2 className="text-2xl md:text-3xl font-bold text-near-black mb-4">The Tactile Upgrade.</h2>
          </RevealDiv>
          <RevealDiv>
            <div className="rounded-md overflow-hidden mb-12">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/decoration-methods-full_e8b2b35c.png"
                alt="The Tactile Upgrade — 5 decoration methods: plain embroidery, patch embroidery, puff 3D, PVC patch, screen print"
                className="w-full h-auto rounded-md"
                loading="lazy"
              />
            </div>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DECORATION_METHODS.map((method, i) => (
              <RevealDiv key={i} delay={i * 80}>
                <div className="bg-parchment rounded-md p-6 h-full">
                  <div className="w-10 h-10 rounded-sm bg-forest/10 flex items-center justify-center mb-4">
                    <span className="font-mono text-forest text-sm font-bold">0{i + 1}</span>
                  </div>
                  <h3 className="text-base font-bold text-near-black mb-2">{method.name}</h3>
                  <p className="text-charcoal text-sm leading-relaxed mb-4">{method.desc}</p>
                  <div className="pt-3 border-t border-khaki/30">
                    <p className="text-xs text-tan"><span className="font-bold">Best for:</span> {method.best}</p>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Placement Zones */}
      <section className="bg-forest py-20 lg:py-24">
        <div className="container">
          <RevealDiv className="mb-14">
            <p className="section-label mb-3">Brand Placement Zones</p>
            <h2 className="text-2xl md:text-3xl font-bold text-linen mb-4">Strategic placement. Maximum impact.</h2>
          </RevealDiv>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Apparel Zones */}
            <RevealDiv>
              <div className="bg-near-black/30 rounded-md p-6 lg:p-8">
                <h3 className="text-lg font-bold text-linen mb-6">Apparel Zones</h3>
                <div className="space-y-4">
                  {BRAND_ZONES_APPAREL.map((zone, i) => (
                    <div key={i} className="flex items-start gap-4 pb-4 border-b border-sand/10 last:border-0 last:pb-0">
                      <span className="font-mono text-xs text-gold shrink-0 w-16">{zone.zone}</span>
                      <div className="flex-1">
                        <p className="text-linen text-sm mb-0.5">{zone.placement}</p>
                        <p className="text-sand/60 text-xs">{zone.method}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealDiv>

            {/* Hat Zones */}
            <RevealDiv delay={150}>
              <div className="bg-near-black/30 rounded-md p-6 lg:p-8">
                <h3 className="text-lg font-bold text-linen mb-6">Hat Zones</h3>
                <div className="space-y-4">
                  {BRAND_ZONES_HATS.map((zone, i) => (
                    <div key={i} className="flex items-start gap-4 pb-4 border-b border-sand/10 last:border-0 last:pb-0">
                      <span className="font-mono text-xs text-gold shrink-0 w-20">{zone.zone}</span>
                      <div className="flex-1">
                        <p className="text-linen text-sm mb-0.5">{zone.placement}</p>
                        <p className="text-sand/60 text-xs">{zone.method}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* Build Your Polo - Catalog Image */}
      <section className="bg-parchment py-12">
        <div className="container">
          <RevealDiv>
            <div className="rounded-md overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/build-your-polo_6b50b315.png"
                alt="Build Your Perfect Polo — collar, cuff, buttons, fabric, stitching, trim details with 8 color options"
                className="w-full h-auto rounded-md"
                loading="lazy"
              />
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Brand Into Lifestyle - Catalog Image */}
      <section className="bg-linen py-12">
        <div className="container">
          <RevealDiv>
            <div className="rounded-md overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/branded-hats-collection_821b0738.png"
                alt="We turn your brand into a lifestyle — 8 custom branded hats with heritage badges, 3D puff embroidery, and PVC patches"
                className="w-full h-auto rounded-md"
                loading="lazy"
              />
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Process */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="container">
          <RevealDiv className="mb-14">
            <p className="section-label mb-3">The Process</p>
            <h2 className="text-2xl md:text-3xl font-bold text-near-black mb-4">From brand assets to branded apparel.</h2>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <RevealDiv key={i} delay={i * 100}>
                <div className="h-full">
                  <p className="font-mono text-4xl font-bold text-forest mb-3">{step.step}</p>
                  <p className="text-gold text-xs font-bold uppercase tracking-wider mb-3">{step.duration}</p>
                  <h3 className="text-base font-bold text-near-black mb-2">{step.title}</h3>
                  <p className="text-charcoal text-sm leading-relaxed">{step.desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-near-black py-20 text-center">
        <div className="container">
          <RevealDiv className="flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-linen mb-4">Ready to start your design?</h2>
            <p className="text-sand/80 text-base mb-8 max-w-lg">
              Send your brand assets to hello@championsforgreen.com or request pricing below. Concepts delivered in 5-7 business days.
            </p>
            <Link href="/#pricing" className="cta-button bg-forest hover:bg-forest-mid">
              Request B2B Pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealDiv>
        </div>
      </section>
    </div>
  );
}
