import { Link } from 'wouter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

/*
 * DESIGN: Editorial Warmth — How It Works page
 * Bottle-to-brand circular economy process, material science, sustainability mechanics
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

const PROCESS_STEPS = [
  { step: '01', title: 'Collection', desc: 'Geared for GREEN collects post-consumer PET plastic bottles through commercial recycling programs. Over 290 million pounds of plastic bottles recovered to date.', detail: 'Bottles are sorted by color and type at GFG facilities in Miami, Florida.' },
  { step: '02', title: 'Processing', desc: 'Collected bottles are cleaned, shredded into flakes, and processed into raw recycled PET (rPET) pellets.', detail: 'Quality control ensures consistent material properties for textile manufacturing.' },
  { step: '03', title: 'Fiber Extrusion', desc: 'rPET pellets are melted and extruded into fine polyester fibers — the same process used for virgin polyester, but with recycled input.', detail: 'The resulting fiber is indistinguishable from virgin polyester in performance.' },
  { step: '04', title: 'Fabric Manufacturing', desc: 'Recycled polyester fibers are woven or knitted into premium performance fabrics with moisture-wicking, antimicrobial, and UPF 50 properties.', detail: 'Fabrics undergo rigorous testing for durability, colorfastness, and hand feel.' },
  { step: '05', title: 'Garment Production', desc: 'Fabrics are cut, sewn, and assembled into finished apparel and accessories. Each piece receives its bottle count tag.', detail: 'Quality control at every stage ensures retail-grade finish and construction.' },
  { step: '06', title: 'Custom Branding', desc: 'Your brand is applied through embroidery, patches, PVC, or screen print. The finished product ships to your door.', detail: 'Every piece carries the bottle count — the proof of its recycled origin.' },
];

const MATERIAL_SPECS = [
  { product: 'Eco Cool-Tech Polo', composition: '85% rPET / 15% Spandex', bottles: 12 },
  { product: 'Performance Hat', composition: '95% rPET / 5% Spandex', bottles: 6 },
  { product: 'Performance Tee', composition: '85% rPET / 15% Spandex', bottles: 10 },
  { product: 'Duffel Bag', composition: 'rPET Shell', bottles: 8 },
  { product: 'Long Sleeve Hoodie', composition: '85% rPET / 15% Spandex', bottles: 17 },
  { product: 'Full Zip Vest', composition: '85% rPET / 15% Spandex', bottles: 10 },
];

const PERFORMANCE = [
  { feature: 'Moisture Wicking', desc: 'Draws sweat away from skin to fabric surface for rapid evaporation.' },
  { feature: '4-Way Stretch', desc: 'Spandex blend provides full range of motion in every direction.' },
  { feature: 'Cool-Tech', desc: 'Temperature regulation technology keeps the wearer cool in warm conditions.' },
  { feature: 'Antimicrobial', desc: 'Built-in antimicrobial treatment prevents odor-causing bacteria.' },
  { feature: 'UPF 50', desc: 'Ultraviolet Protection Factor of 50 blocks 98% of UV radiation.' },
  { feature: 'Quick Dry', desc: 'Rapid moisture evaporation for comfort during activity.' },
];

export default function HowItWorks() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-near-black py-20 lg:py-28">
        <div className="container">
          <RevealDiv>
            <p className="section-label mb-4">How It Works</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-linen leading-tight max-w-3xl mb-6">
              From bottle to brand. The circular economy in action.
            </h1>
            <p className="text-sand/80 text-base leading-relaxed prose-narrow">
              Every Champions for GREEN product begins as a post-consumer plastic bottle. Through collection, processing, and advanced textile manufacturing, those bottles become premium performance apparel. The bottle count on every product is not a marketing claim — it is a material fact.
            </p>
          </RevealDiv>
        </div>
      </section>

      {/* Bottle to Brand - Catalog Image */}
      <section className="bg-linen py-12">
        <div className="container">
          <RevealDiv>
            <div className="rounded-md overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/bottle-to-brand_e290a5f4.png"
                alt="From Bottle to Brand — recycled PET bottles, raw fiber, thread spools, and finished eco cool-tech hat"
                className="w-full h-auto rounded-md"
                loading="lazy"
              />
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="container">
          <RevealDiv className="mb-14">
            <p className="section-label mb-3">The Process</p>
            <h2 className="text-2xl md:text-3xl font-bold text-near-black">Six steps. Zero waste.</h2>
          </RevealDiv>

          <div className="max-w-4xl space-y-8">
            {PROCESS_STEPS.map((step, i) => (
              <RevealDiv key={i} delay={i * 80}>
                <div className="flex gap-6 lg:gap-10">
                  <div className="shrink-0">
                    <p className="font-mono text-4xl font-bold text-forest">{step.step}</p>
                  </div>
                  <div className="flex-1 pb-8 border-b border-khaki/30">
                    <h3 className="text-lg font-bold text-near-black mb-2">{step.title}</h3>
                    <p className="text-charcoal text-base leading-relaxed mb-2">{step.desc}</p>
                    <p className="text-tan text-sm italic">{step.detail}</p>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Material Composition */}
      <section className="bg-near-black py-20 lg:py-24">
        <div className="container">
          <RevealDiv className="mb-10">
            <p className="section-label mb-3">Material Composition</p>
            <h2 className="text-2xl md:text-3xl font-bold text-linen mb-4">The numbers behind the products.</h2>
          </RevealDiv>

          <RevealDiv delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full max-w-3xl">
                <thead>
                  <tr className="border-b border-sand/20">
                    <th className="text-left text-xs font-bold uppercase tracking-wider text-sand/60 pb-3 pr-8">Product</th>
                    <th className="text-left text-xs font-bold uppercase tracking-wider text-sand/60 pb-3 pr-8">Composition</th>
                    <th className="text-right text-xs font-bold uppercase tracking-wider text-sand/60 pb-3">Bottles</th>
                  </tr>
                </thead>
                <tbody>
                  {MATERIAL_SPECS.map((spec, i) => (
                    <tr key={i} className="border-b border-sand/10">
                      <td className="py-3.5 pr-8 text-linen text-sm font-medium">{spec.product}</td>
                      <td className="py-3.5 pr-8 text-sand/70 text-sm">{spec.composition}</td>
                      <td className="py-3.5 text-right font-mono text-lg font-bold text-forest-light">{spec.bottles}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Performance Features */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="container">
          <RevealDiv className="mb-14">
            <p className="section-label mb-3">Performance Features</p>
            <h2 className="text-2xl md:text-3xl font-bold text-near-black mb-4">Recycled does not mean reduced.</h2>
            <p className="text-charcoal text-base prose-narrow">
              Every performance feature found in premium conventional apparel is present in CFG products. The recycled origin of the material does not compromise any aspect of the finished product.
            </p>
          </RevealDiv>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PERFORMANCE.map((perf, i) => (
              <RevealDiv key={i} delay={i * 80}>
                <div className="bg-parchment rounded-md p-5 h-full">
                  <h3 className="text-sm font-bold text-near-black mb-2">{perf.feature}</h3>
                  <p className="text-charcoal text-sm leading-relaxed">{perf.desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 text-center">
        <div className="container">
          <RevealDiv className="flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-linen mb-4">See the products.</h2>
            <p className="text-sand/80 text-base mb-8 max-w-lg">
              Now that you know how it is made, explore the full collection.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/apparel" className="cta-button bg-linen text-forest hover:bg-parchment">
                Explore Apparel <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/#pricing" className="cta-button border border-sand/30 bg-transparent hover:bg-near-black/20">
                Request B2B Pricing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </RevealDiv>
        </div>
      </section>
    </div>
  );
}
