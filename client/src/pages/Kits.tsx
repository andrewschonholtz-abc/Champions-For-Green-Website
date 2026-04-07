import { Link } from 'wouter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

/*
 * DESIGN: Editorial Warmth — Kits page
 * Premium flatlay photography, kit configurations, total bottle counts
 */

const KIT_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/kit-flatlay_fb73579d.png';
const KIT_FULL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/kit-full-page_1dd606d0.png';

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

const KITS = [
  {
    name: 'Executive Kit',
    desc: 'The premium corporate gift. Designed for C-suite, board members, and VIP clients. Every item tells the sustainability story.',
    components: ['Eco Cool-Tech Polo (12)', 'Performance Hat (6)', 'Duffel Bag (8)', 'Water Bottle', 'Towel (2)', 'Notebook'],
    bottles: 28,
    useCase: 'Executive gifting, board retreats, VIP client appreciation',
  },
  {
    name: 'VIP Kit',
    desc: 'The event standout. Premium enough for keynote speakers and headline sponsors. Makes it home from every conference.',
    components: ['Performance Polo (9)', 'Performance Hat (6)', 'Duffel Bag (8)', 'Towel (2)', 'Socks'],
    bottles: 25,
    useCase: 'Trade show VIPs, sponsor packages, speaker gifts',
  },
  {
    name: 'New Hire Kit',
    desc: 'The welcome package that sets the tone. Day one, your new team member wears the values your brand stands for.',
    components: ['Performance Tee (10)', 'Performance Hat (6)', 'Water Bottle', 'Notebook'],
    bottles: 16,
    useCase: 'Onboarding, new hire welcome, company retreats',
  },
  {
    name: 'Event Kit',
    desc: 'The trade show kit that outlasts the convention floor. Premium quality means your event brand lives far beyond the booth.',
    components: ['Performance Tee (10)', 'Performance Hat (6)', 'Towel (2)'],
    bottles: 18,
    useCase: 'Trade shows, corporate events, team outings',
  },
];

const COMPONENTS = [
  { name: 'Polo', bottles: '9-12', tag: 'Fabric Tag' },
  { name: 'Hat', bottles: '6', tag: 'Rubber Tag' },
  { name: 'Duffel Bag', bottles: '8', tag: 'Fabric Tag' },
  { name: 'Water Bottle', bottles: '—', tag: '—' },
  { name: 'Towel', bottles: '2', tag: 'Fabric Tag' },
  { name: 'Socks', bottles: '—', tag: '—' },
  { name: 'Notebook', bottles: '—', tag: '—' },
];

export default function Kits() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <img src={KIT_IMG} alt="Champions for GREEN sustainability kit flatlay" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-near-black/40" />
        <div className="absolute inset-0 container flex items-end pb-12 lg:pb-16">
          <div>
            <p className="section-label mb-3">The Kit. Not the Gift Bag.</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-linen leading-tight max-w-2xl">
              Premium curated sustainability kits for every occasion.
            </h1>
          </div>
        </div>
      </section>

      {/* Kit Configurations */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="container">
          <RevealDiv className="mb-14">
            <p className="section-label mb-3">Kit Configurations</p>
            <h2 className="text-2xl md:text-3xl font-bold text-near-black mb-4">Four ways to tell your story.</h2>
            <p className="text-charcoal text-base prose-narrow">
              CFG Sustainability Kits combine apparel, headwear, and accessories into branded packages. Each kit tells a complete sustainability story. Mix and match to create custom configurations.
            </p>
          </RevealDiv>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {KITS.map((kit, i) => (
              <RevealDiv key={i} delay={i * 100}>
                <div className="bg-parchment rounded-md p-6 lg:p-8 h-full hover-lift">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-near-black mb-1">{kit.name}</h3>
                      <p className="text-tan text-xs">{kit.useCase}</p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <p className="font-mono text-3xl font-bold text-forest">{kit.bottles}</p>
                      <p className="text-tan text-[10px] uppercase tracking-wider">Bottles Diverted</p>
                    </div>
                  </div>
                  <p className="text-charcoal text-sm leading-relaxed mb-5">{kit.desc}</p>
                  <div className="border-t border-khaki/30 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-charcoal mb-2">Includes:</p>
                    <div className="flex flex-wrap gap-2">
                      {kit.components.map((comp, j) => (
                        <span key={j} className="bg-linen text-charcoal text-xs px-2.5 py-1 rounded-sm border border-khaki/30">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Components Reference */}
      <section className="bg-near-black py-20 lg:py-24">
        <div className="container">
          <RevealDiv>
            <p className="section-label mb-3">Kit Components</p>
            <h2 className="text-2xl md:text-3xl font-bold text-linen mb-10">Every piece counts.</h2>
          </RevealDiv>

          <RevealDiv delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full max-w-3xl">
                <thead>
                  <tr className="border-b border-sand/20">
                    <th className="text-left text-xs font-bold uppercase tracking-wider text-sand/60 pb-3 pr-8">Component</th>
                    <th className="text-left text-xs font-bold uppercase tracking-wider text-sand/60 pb-3 pr-8">Bottles</th>
                    <th className="text-left text-xs font-bold uppercase tracking-wider text-sand/60 pb-3">Tag Type</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPONENTS.map((comp, i) => (
                    <tr key={i} className="border-b border-sand/10">
                      <td className="py-3 pr-8 text-linen text-sm font-medium">{comp.name}</td>
                      <td className="py-3 pr-8 font-mono text-sm text-forest-light">{comp.bottles}</td>
                      <td className="py-3 text-sand/70 text-sm">{comp.tag}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Kit Catalog Page */}
      <section className="bg-parchment py-12">
        <div className="container">
          <RevealDiv>
            <div className="rounded-md overflow-hidden">
              <img src={KIT_FULL} alt="The Kit. Not the Gift Bag. — Curated collections with green polo, duffel, white hat, and towel" className="w-full h-auto" loading="lazy" />
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linen py-20 text-center">
        <div className="container">
          <RevealDiv className="flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-near-black mb-4">Build your custom kit.</h2>
            <p className="text-charcoal text-base mb-8 max-w-lg">
              Kit pricing varies by configuration. All items fully customizable with corporate branding. Contact us for a custom kit proposal.
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
