import { Link } from 'wouter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight, Droplets, Wind, Shield, Sun, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

/*
 * DESIGN: Editorial Warmth — Vuori-meets-magazine
 * Homepage: 8 sections alternating Linen/Dark, asymmetric editorial layouts
 * Typography-led hierarchy, generous whitespace, warm golden-hour imagery
 */

const HERO_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/hero-lifestyle-crop_fc008c30.png';
const CLOSING_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/team-golden-hour_a76c84a5.png';
const APPAREL_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/polo-lifestyle-crop_851fcfc2.png';
const HAT_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/hats-tight_e80b68ae.png';
const KIT_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/kit-products-final2_f149d33e.png';

function Section({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  return <section id={id} className={className}>{children}</section>;
}

function RevealDiv({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollReveal(0.3);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 1200;
      const steps = 30;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
    }
  }, [isVisible, target]);

  return <span ref={ref as any}>{count}{suffix}</span>;
}

const BOTTLE_COUNTS = [
  { bottles: 17, product: 'Performance Long Sleeve & Hoodie', tag: 'Fabric Tag', desc: 'Long-sleeve & hoodie version' },
  { bottles: 12, product: 'Eco Cool-Tech Polo', tag: 'Fabric Tag', desc: 'Flagship polo — retail quality', featured: true },
  { bottles: 10, product: 'Performance Tee', tag: 'Fabric Tag', desc: 'Performance tee — everyday wear' },
  { bottles: 10, product: 'Performance Vest', tag: 'Fabric Tag', desc: 'Full-zip vest — layering piece' },
  { bottles: 9, product: 'Standard Polo / Quarter-Zip', tag: 'Fabric Tag', desc: 'Versatile base — kit staple' },
  { bottles: 8, product: 'Duffel Bag', tag: 'Fabric Tag', desc: 'Premium kit bag — brand carrier' },
  { bottles: 7, product: "Women's Shirt", tag: 'Fabric Tag', desc: 'Tailored fit — full collection' },
  { bottles: 6, product: 'Eco Performance Hat', tag: 'Rubber Tag', desc: '6 bottles — worn daily', featured: true },
  { bottles: 2, product: 'Small Towel', tag: 'Fabric Tag', desc: 'Kit add-on — brandable' },
];

const COMPARISON = [
  { bad: 'Low-cost materials', good: 'Premium sustainable materials — 85% rPET polo, 95% rPET hat' },
  { bad: 'Designed for single use', good: 'Designed for repeated wear — 4-way stretch, antimicrobial, UPF 50' },
  { bad: 'Minimal brand storytelling', good: 'Every piece tells a sustainability story through the bottle count tag' },
  { bad: 'No sustainability alignment', good: 'Circular economy built into every garment' },
  { bad: 'Short lifecycle — closet, then landfill', good: 'Long lifecycle — office, golf, gym, travel, networking events' },
  { bad: 'High volume, low impact', good: 'Lower volume, exponential impact' },
];

const DECORATION_METHODS = [
  { name: 'Plain Embroidery', desc: 'Standard thread stitched directly into fabric. Clean, durable, professional.' },
  { name: 'Patch Embroidery', desc: 'Separate embroidered patch sewn onto garment. Adds texture and depth.' },
  { name: 'Puff Embroidery (3D)', desc: 'Foam under stitching creates raised, bold 3D appearance. Premium feel.' },
  { name: 'PVC / Rubber Patch', desc: 'Soft molded rubber patch. Detailed designs, vibrant colors, weatherproof.' },
  { name: 'Screen Print', desc: 'Designs printed directly onto fabric. Ideal for complex graphics and gradients.' },
];

const INDUSTRIES = [
  'Recycling & Sustainability',
  'Plastics Industry',
  'Trade Show Organizers',
  'Corporate Sustainability',
  'Golf & Hospitality',
];

export default function Home() {
  return (
    <div>
      {/* ============ SECTION 1: HERO ============ */}
      <Section className="relative min-h-[90vh] lg:min-h-screen bg-near-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Professional wearing Champions for GREEN polo in modern office"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-near-black/90 via-near-black/60 to-transparent" />
        </div>

        {/* Content — left-aligned 60/40 split */}
        <div className="relative container flex items-center min-h-[90vh] lg:min-h-screen py-20">
          <div className="max-w-2xl">
            <p className="section-label mb-5">Sustainable Apparel · Hats · Kits</p>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-linen leading-[1.08] mb-6">
              Is your merchandise creating value — or just filling closets?
            </h1>
            <p className="text-sand text-sm uppercase tracking-[0.15em] font-bold mb-6">
              Sustainable Apparel · Hats · Kits — Created Through the Circular Economy
            </p>
            <p className="text-sand/90 text-lg leading-relaxed prose-narrow mb-10">
              Premium apparel made from recycled plastic bottles. Every piece carries a number — the exact count of bottles diverted from landfill to make it. Not merch. A mission made wearable.
            </p>
            <Link href="/#pricing" className="cta-button text-sm py-4 px-8">
              Request B2B Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* ============ SECTION 2: VALUE PROPOSITION ============ */}
      <Section className="bg-linen py-24 lg:py-32">
        <div className="container">
          <RevealDiv>
            <p className="section-label mb-4">The Difference</p>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-near-black leading-tight mb-12 prose-narrow">
              Cheap merch gets thrown away. This gets worn for years.
            </h2>
          </RevealDiv>

          {/* Comparison Table */}
          <RevealDiv delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-5xl">
              {/* Header */}
              <div className="bg-charcoal px-6 py-4">
                <p className="text-sand text-xs font-bold uppercase tracking-[0.15em]">Low-Cost Promotional Merch</p>
              </div>
              <div className="bg-forest px-6 py-4">
                <p className="text-linen text-xs font-bold uppercase tracking-[0.15em]">Premium Sustainable Brand Assets</p>
              </div>
              {/* Rows */}
              {COMPARISON.map((row, i) => (
                <div key={i} className="contents">
                  <div className={`px-6 py-4 border-b border-khaki/30 ${i % 2 === 0 ? 'bg-parchment/50' : 'bg-linen'}`}>
                    <p className="text-charcoal text-sm leading-relaxed">{row.bad}</p>
                  </div>
                  <div className={`px-6 py-4 border-b border-forest-light/20 ${i % 2 === 0 ? 'bg-forest/5' : 'bg-linen'}`}>
                    <p className="text-near-black text-sm leading-relaxed font-medium">{row.good}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealDiv>

          <RevealDiv delay={400} className="mt-12">
            <p className="text-charcoal text-lg italic max-w-2xl leading-relaxed">
              "Your team will not wear this once and forget it. They will wear it everywhere — and your brand goes with them."
            </p>
          </RevealDiv>
        </div>
      </Section>

      {/* ============ SECTION 3: WHAT'S YOUR NUMBER? ============ */}
      <Section className="bg-near-black py-24 lg:py-32">
        <div className="container">
          <RevealDiv>
            <p className="section-label mb-4">The Currency</p>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-linen leading-tight mb-6">
              Not a claim — a currency.
            </h2>
            <p className="text-sand/80 text-base leading-relaxed prose-narrow mb-16">
              Every Champions for GREEN product carries a number. The exact count of recycled plastic bottles diverted from landfill to make what you are holding. A polo. A hat. A kit. Real material. Real count. The inside story that sparks the outside conversation.
            </p>
          </RevealDiv>

          {/* Bottle Count Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4 mb-16">
            {BOTTLE_COUNTS.map((item, i) => (
              <RevealDiv
                key={i}
                delay={i * 80}
                className={`rounded-md p-4 lg:p-5 border ${
                  item.featured
                    ? 'bg-forest border-forest-light/30'
                    : 'bg-charcoal/50 border-sand/10'
                } ${i >= 7 ? 'col-span-1' : ''}`}
              >
                <p className="font-mono text-4xl lg:text-5xl font-bold text-linen mb-1">
                  {item.bottles}
                </p>
                <p className="text-sand/60 text-xs uppercase tracking-wider mb-3">Bottles</p>
                <span className={`inline-block text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm mb-3 font-bold ${
                  item.tag === 'Rubber Tag'
                    ? 'bg-gold/20 text-gold'
                    : 'bg-forest/30 text-forest-light'
                }`}>
                  {item.tag}
                </span>
                <p className="text-linen text-xs font-bold leading-snug mb-1">{item.product}</p>
                <p className="text-sand/50 text-[11px] leading-snug">{item.desc}</p>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="prose-narrow">
                <p className="text-sand/70 text-sm leading-relaxed">
                  When your organization chooses recycled-content apparel, you are not just reducing waste. You are creating demand for recovered material. Demand that makes collection more viable. Demand that signals to manufacturers that recycled supply is worth securing over virgin. The number is the proof. The number is the story. The number starts the conversation.
                </p>
              </div>
              <div className="rounded-md overflow-hidden">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/whats-your-number_2f6f8da7.png"
                  alt="What's Your Number — rubber bottle tag and fabric hem tags showing recycled bottle counts"
                  className="w-full h-auto rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          </RevealDiv>
        </div>
      </Section>

      {/* ============ SECTION 4: PRODUCT CATEGORIES ============ */}
      <Section className="bg-linen py-24 lg:py-32">
        <div className="container">
          <RevealDiv>
            <p className="section-label mb-4">The Collection</p>
            <h2 className="text-3xl md:text-4xl font-bold text-near-black mb-14">
              Premium performance. Purpose built.
            </h2>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {[
              {
                title: 'Apparel',
                tagline: 'Polos, quarter-zips, tees, vests, and more — all made from recycled PET.',
                price: 'Starting at $50 MSRP',
                href: '/apparel',
                img: APPAREL_IMG,
              },
              {
                title: 'Hats',
                tagline: '6 silhouettes. 6 recycled bottles each. Every surface working for your brand.',
                price: 'Starting at $30 MSRP',
                href: '/hats',
                img: HAT_IMG,
              },
              {
                title: 'Kits',
                tagline: 'Premium curated sustainability kits for every occasion.',
                price: 'Custom configurations available',
                href: '/kits',
                img: KIT_IMG,
              },
            ].map((cat, i) => (
              <RevealDiv key={i} delay={i * 150}>
                <Link href={cat.href} className="group block hover-lift">
                  <div className="relative overflow-hidden rounded-md aspect-[3/4] mb-5">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-near-black/20 group-hover:bg-near-black/10 transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-near-black mb-2">{cat.title}</h3>
                  <p className="text-charcoal text-sm leading-relaxed mb-3">{cat.tagline}</p>
                  <p className="font-mono text-xs text-tan mb-3">{cat.price}</p>
                  <span className="text-forest text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore Collection <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </RevealDiv>
            ))}
          </div>
        </div>
      </Section>

      {/* ============ SECTION 5: FOR THE INDUSTRY ============ */}
      <Section className="bg-forest py-24 lg:py-32">
        <div className="container">
          <RevealDiv>
            <p className="section-label mb-4">For the Industry. By the Industry.</p>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-linen leading-tight mb-6 prose-narrow">
              A Geared for GREEN company. For the industry. By the industry.
            </h2>
            <p className="text-sand/80 text-base leading-relaxed prose-narrow mb-16">
              Champions for GREEN is the apparel division of Geared for GREEN — a Miami-based recycling and sustainability company operating since 1985. GFG has recovered over 1.6 billion pounds of recyclable materials across all streams. This is not a brand that sources recycled material from a third party. This is a brand that collects, processes, and transforms the material itself.
            </p>
          </RevealDiv>

          {/* Stats Strip */}
          <RevealDiv delay={200}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 py-8 border-t border-b border-sand/20">
              {[
                { num: '35+', label: 'Years' },
                { num: '1.6B', label: 'Lbs Recovered' },
                { num: 'Miami', label: 'Florida' },
                { num: '1985', label: 'Established' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="font-mono text-2xl lg:text-3xl font-bold text-linen mb-1">{stat.num}</p>
                  <p className="text-sand/60 text-xs uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealDiv>

          {/* Industry Tags */}
          <RevealDiv delay={400}>
            <div className="flex flex-wrap gap-3 mb-16">
              {INDUSTRIES.map((ind, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 border border-sand/30 rounded-sm text-sand text-sm font-medium"
                >
                  {ind}
                </span>
              ))}
            </div>
          </RevealDiv>

          {/* Bottle to Brand Image */}
          <RevealDiv delay={500}>
            <div className="rounded-md overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/bottle-to-brand_e290a5f4.png"
                alt="From bottle to brand — recycled PET bottles, raw fiber, thread spools, and finished hat"
                className="w-full h-auto rounded-md"
                loading="lazy"
              />
            </div>
          </RevealDiv>
        </div>
      </Section>

      {/* ============ SECTION 6: CUSTOMIZATION PREVIEW ============ */}
      <Section className="bg-linen py-24 lg:py-32">
        <div className="container">
          <RevealDiv>
            <p className="section-label mb-4">Your Brand Re-Imagined</p>
            <h2 className="text-3xl md:text-4xl font-bold text-near-black leading-tight mb-6 prose-narrow">
              We don't just put your logo on apparel. We turn your brand into a lifestyle.
            </h2>
          </RevealDiv>

          {/* Decoration Methods - Catalog Image */}
          <RevealDiv className="mb-16">
            <div className="rounded-md overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/decoration-methods-full_e8b2b35c.png"
                alt="The Tactile Upgrade — plain embroidery, patch embroidery, puff 3D, PVC patch, and screen print decoration methods"
                className="w-full h-auto rounded-md"
                loading="lazy"
              />
            </div>
          </RevealDiv>

          {/* Three Steps */}
          <RevealDiv delay={200}>
            <div className="bg-near-black rounded-md p-8 lg:p-12">
              <p className="section-label mb-6">Three Steps to Wearing Your Brand</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { step: '01', title: 'Share Your Brand Assets', desc: 'Email your logo, brand colors, slogans, and secondary marks to hello@championsforgreen.com.' },
                  { step: '02', title: 'We Build Your Design System', desc: 'Concepts delivered in 5-7 business days. Multiple decoration options per product. Full mockup presentation.' },
                  { step: '03', title: 'Select. Approve. Produce.', desc: 'Choose your favorites. Approve final designs. We produce and deliver. Your brand, elevated.' },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="font-mono text-3xl font-bold text-gold mb-3">{s.step}</p>
                    <h4 className="text-linen text-base font-bold mb-2">{s.title}</h4>
                    <p className="text-sand/70 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealDiv>

          <RevealDiv delay={300} className="mt-8">
            <Link href="/customization" className="text-forest text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
              See Full Customization Options <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </RevealDiv>
        </div>
      </Section>

      {/* ============ SECTION 7: SOCIAL PROOF ============ */}
      <Section className="bg-parchment py-24 lg:py-32">
        <div className="container">
          <RevealDiv>
            <p className="section-label mb-4">The Proof</p>
            <h2 className="text-3xl md:text-4xl font-bold text-near-black mb-14">
              Built by Geared for GREEN. 35+ years. 1.6 billion pounds recovered.
            </h2>
          </RevealDiv>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                quote: "I showed my 12 bottles hem tag to 20 people yesterday and everyone kept touching my shirt. They couldn't believe it was made from recycled plastic bottles.",
                author: 'Daniel S.',
              },
              {
                quote: "I bought the hat because of the GREEN sentiment but was delighted to discover its quality. This does not feel like what you would expect a hat made from recycled plastic to feel like. It wears and feels like cotton cloth.",
                author: 'Jeff S.',
              },
            ].map((t, i) => (
              <RevealDiv key={i} delay={i * 150}>
                <div className="bg-linen rounded-md p-8 lg:p-10 h-full">
                  <div className="w-8 h-0.5 bg-gold mb-6" />
                  <p className="text-near-black text-base lg:text-lg leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                  <p className="text-tan text-sm font-bold">— {t.author}</p>
                </div>
              </RevealDiv>
            ))}
          </div>

          {/* Stats */}
          <RevealDiv delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { num: '290MM+', label: 'Lbs plastic bottles recovered' },
                { num: '410MM+', label: 'Lbs plastic film recovered' },
                { num: '120MM+', label: 'Lbs aluminum recovered' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-6 bg-linen rounded-md">
                  <p className="font-mono text-2xl font-bold text-forest mb-1">{stat.num}</p>
                  <p className="text-charcoal text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealDiv>

          {/* Client Logos */}
          <RevealDiv delay={400} className="mt-12 flex flex-wrap items-center justify-center gap-8 text-tan/60">
            {['TJ Maxx', 'Allied Beverage', 'Informa Markets'].map((name, i) => (
              <span key={i} className="font-mono text-sm tracking-wider uppercase">{name}</span>
            ))}
          </RevealDiv>
        </div>
      </Section>

      {/* ============ SECTION 8: CLOSING HERO ============ */}
      <Section className="relative min-h-[70vh] lg:min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={CLOSING_IMG}
            alt="Professional walking on golf course at golden hour"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-near-black/65" />
        </div>
        <div className="relative container flex flex-col items-center justify-center text-center min-h-[70vh] lg:min-h-[80vh] py-20">
          <RevealDiv className="flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-linen mb-4">
              Look Good. Feel Good. Do Good.
            </h2>
            <p className="text-forest-light text-sm uppercase tracking-[0.15em] font-bold mb-10">
              Circular by Nature. Custom by Design.
            </p>
            <Link href="/#pricing" className="cta-button text-sm py-4 px-8 mb-6">
              Request B2B Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="font-mono text-xs text-sand/60 tracking-wide">
              Champions for GREEN · By Geared for GREEN · Est. 1985 · Miami, Florida
            </p>
          </RevealDiv>
        </div>
      </Section>

      {/* ============ B2B PRICING FORM ============ */}
      <Section id="pricing" className="bg-linen py-24 lg:py-32">
        <div className="container max-w-3xl mx-auto">
          <RevealDiv className="text-center mb-12">
            <p className="section-label mb-4">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-near-black mb-4">
              Request B2B Pricing
            </h2>
            <p className="text-charcoal text-base max-w-lg mx-auto">
              Tell us about your project and we will prepare a custom pricing proposal for your team.
            </p>
          </RevealDiv>

          <RevealDiv delay={200}>
            <PricingForm />
          </RevealDiv>
        </div>
      </Section>
    </div>
  );
}

function PricingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    products: [] as string[],
    quantity: '',
    message: '',
  });

  const handleCheckbox = (product: string) => {
    setFormData(prev => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter(p => p !== product)
        : [...prev.products, product],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-parchment rounded-md p-12 text-center">
        <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-6">
          <svg className="w-6 h-6 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-near-black mb-3">Thank You</h3>
        <p className="text-charcoal text-base mb-2">
          Your request has been received. Our team will prepare a custom pricing proposal and reach out within 1-2 business days.
        </p>
        <p className="text-tan text-sm">hello@championsforgreen.com · 888-358-5478</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-parchment rounded-md p-8 lg:p-10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">Company Name *</label>
          <input
            type="text"
            required
            value={formData.company}
            onChange={e => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 bg-linen border border-khaki/50 rounded-md text-sm text-near-black focus:outline-none focus:border-forest transition-colors"
            placeholder="Your company"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">Contact Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-linen border border-khaki/50 rounded-md text-sm text-near-black focus:outline-none focus:border-forest transition-colors"
            placeholder="Your name"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-linen border border-khaki/50 rounded-md text-sm text-near-black focus:outline-none focus:border-forest transition-colors"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-linen border border-khaki/50 rounded-md text-sm text-near-black focus:outline-none focus:border-forest transition-colors"
            placeholder="(555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-3">Products of Interest</label>
        <div className="flex flex-wrap gap-3">
          {['Apparel', 'Hats', 'Kits', 'Custom'].map(product => (
            <label
              key={product}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-md border text-sm cursor-pointer transition-all ${
                formData.products.includes(product)
                  ? 'bg-forest text-linen border-forest'
                  : 'bg-linen text-charcoal border-khaki/50 hover:border-forest/50'
              }`}
            >
              <input
                type="checkbox"
                checked={formData.products.includes(product)}
                onChange={() => handleCheckbox(product)}
                className="sr-only"
              />
              {product}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">Estimated Quantity Range</label>
        <select
          value={formData.quantity}
          onChange={e => setFormData({ ...formData, quantity: e.target.value })}
          className="w-full px-4 py-3 bg-linen border border-khaki/50 rounded-md text-sm text-near-black focus:outline-none focus:border-forest transition-colors"
        >
          <option value="">Select a range</option>
          <option value="25-99">25 – 99 units</option>
          <option value="100-499">100 – 499 units</option>
          <option value="500-999">500 – 999 units</option>
          <option value="1000+">1,000+ units</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">Message</label>
        <textarea
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 bg-linen border border-khaki/50 rounded-md text-sm text-near-black focus:outline-none focus:border-forest transition-colors resize-none"
          placeholder="Tell us about your project, timeline, or any specific requirements..."
        />
      </div>

      <button type="submit" className="cta-button w-full justify-center py-4 text-sm">
        Submit Request
        <ArrowRight className="w-4 h-4" />
      </button>

      <p className="text-center text-xs text-tan">
        We will respond within 1-2 business days. For immediate inquiries, contact hello@championsforgreen.com
      </p>
    </form>
  );
}
