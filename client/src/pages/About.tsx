import { Link } from 'wouter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

/*
 * DESIGN: Editorial Warmth — About / Our Story page
 * GFG origin, mission, brand values, team
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

const TIMELINE = [
  { year: '1985', event: 'Geared for GREEN founded in Miami, Florida. Begins commercial recycling operations.' },
  { year: '2000s', event: 'GFG expands to recover over 1.6 billion pounds of recyclable materials across all streams.' },
  { year: '2020', event: 'Champions for GREEN launches as the apparel division — turning recovered PET bottles into premium performance wear.' },
  { year: '2024', event: 'Full product line: polos, hats, kits, quarter-zips, vests, jackets. Serving corporate brands nationwide.' },
  { year: '2025', event: 'New Eco Cool-Tech Polo launches with 12-bottle count, 85% rPET, and Cool-Tech temperature regulation.' },
];

const VALUES = [
  { title: 'Circular by Nature', desc: 'We do not source recycled material from a third party. We collect, process, and transform the material ourselves. The circular economy is not a marketing claim — it is our business model.' },
  { title: 'Premium by Design', desc: 'Sustainability is not an excuse for lower quality. Every CFG product is designed to compete with — and exceed — the best conventional performance apparel on the market.' },
  { title: 'Transparent by Default', desc: 'Every product carries its bottle count. No vague claims. No greenwashing. The number is the proof. The number starts the conversation.' },
  { title: 'Custom by Commitment', desc: 'We do not sell generic branded merch. We build custom brand design systems for every client. Your brand deserves more than a logo slapped on a blank.' },
];

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-near-black py-20 lg:py-28">
        <div className="container">
          <RevealDiv>
            <p className="section-label mb-4">Our Story</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-linen leading-tight max-w-3xl mb-6">
              A Geared for GREEN company. For the industry. By the industry.
            </h1>
            <p className="text-sand/80 text-base leading-relaxed prose-narrow mb-8">
              Champions for GREEN is the apparel division of Geared for GREEN — a Miami-based recycling and sustainability company operating since 1985. GFG has recovered over 1.6 billion pounds of recyclable materials across all streams. This is not a brand that sources recycled material from a third party. This is a brand that collects, processes, and transforms the material itself.
            </p>
            <div className="flex flex-wrap gap-6 py-6 border-t border-b border-sand/20">
              {[
                { num: '35+', label: 'Years in Operation' },
                { num: '1.6B', label: 'Lbs Recovered' },
                { num: 'Miami', label: 'Florida' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="font-mono text-2xl font-bold text-linen">{stat.num}</p>
                  <p className="text-sand/60 text-xs uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Team Photo */}
      <section className="bg-linen py-12">
        <div className="container">
          <RevealDiv>
            <div className="rounded-md overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/team-golden-hour_a76c84a5.png"
                alt="Wearing Your Values at Scale — Champions for GREEN team in branded apparel at golden hour"
                className="w-full h-auto rounded-md"
                loading="lazy"
              />
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="container">
          <RevealDiv className="mb-14">
            <p className="section-label mb-3">The Journey</p>
            <h2 className="text-2xl md:text-3xl font-bold text-near-black">From recycling to retail.</h2>
          </RevealDiv>

          <div className="max-w-3xl space-y-0">
            {TIMELINE.map((item, i) => (
              <RevealDiv key={i} delay={i * 100}>
                <div className="flex gap-6 pb-8 last:pb-0">
                  <div className="shrink-0 w-20">
                    <p className="font-mono text-sm font-bold text-forest">{item.year}</p>
                  </div>
                  <div className="flex-1 pb-8 border-b border-khaki/30 last:border-0">
                    <p className="text-near-black text-base leading-relaxed">{item.event}</p>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* From Work to Weekend - Lifestyle */}
      <section className="bg-parchment py-12">
        <div className="container">
          <RevealDiv>
            <div className="rounded-md overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/brand-lifestyle-full_bce6acfe.png"
                alt="From Work to Weekend — Champions for GREEN apparel at the club, beach, and private jet"
                className="w-full h-auto rounded-md"
                loading="lazy"
              />
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Values */}
      <section className="bg-forest py-20 lg:py-28">
        <div className="container">
          <RevealDiv className="mb-14">
            <p className="section-label mb-3">What We Stand For</p>
            <h2 className="text-2xl md:text-3xl font-bold text-linen">Our principles.</h2>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((value, i) => (
              <RevealDiv key={i} delay={i * 100}>
                <div className="bg-near-black/20 rounded-md p-6 lg:p-8 h-full">
                  <h3 className="text-lg font-bold text-linen mb-3">{value.title}</h3>
                  <p className="text-sand/80 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Taglines */}
      <section className="bg-linen py-20 lg:py-24">
        <div className="container text-center">
          <RevealDiv className="flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-near-black mb-4">
              Look Good. Feel Good. Do Good.
            </h2>
            <p className="text-forest text-sm uppercase tracking-[0.15em] font-bold mb-4">
              Circular by Nature. Custom by Design.
            </p>
            <p className="text-charcoal text-base max-w-xl mb-10">
              Premium sustainable apparel, hats, and kits — made from recycled plastic bottles, fully customizable with your brand, and built to be worn everywhere your team goes.
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
