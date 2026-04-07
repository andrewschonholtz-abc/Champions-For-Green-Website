import { Link } from 'wouter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

/*
 * DESIGN: Editorial Warmth — Sustainability Education page
 * Circular economy education, environmental impact data, industry context
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

const IMPACT_STATS = [
  { num: '290MM+', label: 'Lbs plastic bottles recovered by GFG', context: 'Equivalent to billions of individual bottles diverted from landfills and oceans.' },
  { num: '410MM+', label: 'Lbs plastic film recovered', context: 'Industrial plastic film recycled through GFG commercial programs.' },
  { num: '120MM+', label: 'Lbs aluminum recovered', context: 'Aluminum cans and materials recovered and returned to the supply chain.' },
  { num: '1.6B+', label: 'Total lbs recyclable materials recovered', context: 'Across all material streams since 1985.' },
];

const CIRCULAR_STEPS = [
  { title: 'Collect', desc: 'Post-consumer PET bottles are collected through commercial recycling programs operated by Geared for GREEN.' },
  { title: 'Process', desc: 'Bottles are sorted, cleaned, and shredded into flakes. Flakes are processed into recycled PET (rPET) pellets.' },
  { title: 'Transform', desc: 'rPET pellets are extruded into polyester fibers and woven into premium performance fabrics.' },
  { title: 'Create', desc: 'Fabrics become apparel, hats, and accessories. Each piece carries its bottle count tag.' },
  { title: 'Wear', desc: 'Premium quality ensures long product life. Your brand is worn at the office, on the course, at the gym, while traveling.' },
  { title: 'Inspire', desc: 'The bottle count starts conversations. Conversations create demand. Demand drives more collection. The circle continues.' },
];

const WHY_IT_MATTERS = [
  { title: 'Demand Drives Collection', desc: 'When organizations choose recycled-content apparel, they create demand for recovered material. Demand that makes collection more viable. Demand that signals to manufacturers that recycled supply is worth securing over virgin material.' },
  { title: 'Visibility Creates Awareness', desc: 'A polo with a "12 bottles" tag is a walking billboard for the circular economy. Every time someone asks "what does that number mean?" — a conversation about sustainability begins.' },
  { title: 'Premium Quality Proves the Point', desc: 'The biggest barrier to recycled products is the perception of lower quality. CFG products prove that recycled materials can match or exceed conventional performance apparel.' },
  { title: 'Corporate Leadership Sets the Standard', desc: 'When companies choose sustainable branded apparel, they signal to employees, clients, and competitors that sustainability is a priority — not an afterthought.' },
];

const FAQS = [
  { q: 'How many bottles are in each product?', a: 'Bottle counts range from 2 (towel) to 17 (long sleeve hoodie). The flagship Eco Cool-Tech Polo contains 12 bottles. Every hat contains 6 bottles. The exact count is on every product tag.' },
  { q: 'Is the quality comparable to conventional apparel?', a: 'Yes. CFG products feature the same performance properties as premium conventional apparel: moisture-wicking, 4-way stretch, antimicrobial, UPF 50, and Cool-Tech temperature regulation. The recycled origin does not compromise any aspect of performance.' },
  { q: 'What is rPET?', a: 'rPET stands for recycled polyethylene terephthalate — the same plastic used in water bottles and food containers. When recycled, PET can be processed into polyester fibers that are functionally identical to virgin polyester.' },
  { q: 'How does the circular economy work?', a: 'The circular economy keeps materials in use for as long as possible. Instead of a linear model (make, use, dispose), the circular model recovers materials and transforms them into new products. CFG apparel is a tangible example of this model in action.' },
  { q: 'Can I verify the sustainability claims?', a: 'Every CFG product carries its bottle count tag — a physical, verifiable marker of its recycled content. Geared for GREEN has operated as a recycling company since 1985 with documented recovery of over 1.6 billion pounds of recyclable materials.' },
];

export default function Sustainability() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-near-black py-20 lg:py-28">
        <div className="container">
          <RevealDiv>
            <p className="section-label mb-4">Sustainability Education</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-linen leading-tight max-w-3xl mb-6">
              Not a claim. A currency. Understanding the circular economy.
            </h1>
            <p className="text-sand/80 text-base leading-relaxed prose-narrow">
              Every Champions for GREEN product exists because of the circular economy — a system that keeps materials in use, reduces waste, and creates value from what would otherwise be discarded. Here is how it works, why it matters, and what the numbers mean.
            </p>
          </RevealDiv>
        </div>
      </section>

      {/* Embroidery Close-up */}
      <section className="bg-linen py-12">
        <div className="container">
          <RevealDiv>
            <div className="rounded-md overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/embroidery-closeup_5241be9d.png"
                alt="Premium green embroidery close-up — the craftsmanship behind every Champions for GREEN product"
                className="w-full h-auto rounded-md"
                loading="lazy"
              />
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-forest py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_STATS.map((stat, i) => (
              <RevealDiv key={i} delay={i * 100}>
                <div className="text-center lg:text-left">
                  <p className="font-mono text-2xl lg:text-3xl font-bold text-linen mb-1">{stat.num}</p>
                  <p className="text-sand text-xs font-bold uppercase tracking-wider mb-2">{stat.label}</p>
                  <p className="text-sand/60 text-xs leading-relaxed">{stat.context}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* What's Your Number */}
      <section className="bg-parchment py-12">
        <div className="container">
          <RevealDiv>
            <div className="rounded-md overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/whats-your-number_2f6f8da7.png"
                alt="What's Your Number — rubber bottle tag and fabric hem tags showing recycled bottle counts"
                className="w-full h-auto rounded-md"
                loading="lazy"
              />
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Circular Economy Process */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="container">
          <RevealDiv className="mb-14">
            <p className="section-label mb-3">The Circular Economy</p>
            <h2 className="text-2xl md:text-3xl font-bold text-near-black mb-4">From waste to wear. And back again.</h2>
            <p className="text-charcoal text-base prose-narrow">
              The circular economy is not a concept — it is a system. Here is how Champions for GREEN products move through that system.
            </p>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CIRCULAR_STEPS.map((step, i) => (
              <RevealDiv key={i} delay={i * 80}>
                <div className="bg-parchment rounded-md p-6 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-2xl font-bold text-forest">0{i + 1}</span>
                    <div className="flex-1 h-px bg-khaki/30" />
                  </div>
                  <h3 className="text-base font-bold text-near-black mb-2">{step.title}</h3>
                  <p className="text-charcoal text-sm leading-relaxed">{step.desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-near-black py-20 lg:py-28">
        <div className="container">
          <RevealDiv className="mb-14">
            <p className="section-label mb-3">Why It Matters</p>
            <h2 className="text-2xl md:text-3xl font-bold text-linen">The ripple effect of choosing recycled.</h2>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_IT_MATTERS.map((item, i) => (
              <RevealDiv key={i} delay={i * 100}>
                <div className="bg-charcoal/50 rounded-md p-6 lg:p-8 h-full border border-sand/10">
                  <h3 className="text-lg font-bold text-linen mb-3">{item.title}</h3>
                  <p className="text-sand/80 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="container">
          <RevealDiv className="mb-14">
            <p className="section-label mb-3">Frequently Asked Questions</p>
            <h2 className="text-2xl md:text-3xl font-bold text-near-black">Common questions, clear answers.</h2>
          </RevealDiv>

          <div className="max-w-3xl space-y-6">
            {FAQS.map((faq, i) => (
              <RevealDiv key={i} delay={i * 80}>
                <div className="bg-parchment rounded-md p-6">
                  <h3 className="text-base font-bold text-near-black mb-2">{faq.q}</h3>
                  <p className="text-charcoal text-sm leading-relaxed">{faq.a}</p>
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
            <h2 className="text-2xl md:text-3xl font-bold text-linen mb-4">Ready to join the circular economy?</h2>
            <p className="text-sand/80 text-base mb-8 max-w-lg">
              Every order creates demand for recovered materials. Every product starts a conversation. Every brand that chooses CFG moves the industry forward.
            </p>
            <Link href="/#pricing" className="cta-button bg-linen text-forest hover:bg-parchment">
              Request B2B Pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealDiv>
        </div>
      </section>
    </div>
  );
}
