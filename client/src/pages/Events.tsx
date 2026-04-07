import { Link } from 'wouter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { useEffect } from 'react';

/*
 * DESIGN: Editorial Warmth — Events page
 * Trade show strategy, event kits, sponsorship, upcoming events
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

const EVENT_TYPES = [
  { title: 'Trade Shows & Conferences', desc: 'Premium branded apparel and kits for your booth team, VIP guests, and attendee giveaways. Stand out on the convention floor with sustainable brand assets that outlast the event.', items: ['Booth team uniforms', 'VIP speaker kits', 'Attendee giveaway tees', 'Sponsor appreciation packages'] },
  { title: 'Corporate Retreats & Outings', desc: 'Team-building events, golf outings, and company retreats. Branded apparel that your team actually wants to wear — during the event and long after.', items: ['Golf tournament kits', 'Team retreat packages', 'Company outing uniforms', 'Executive appreciation gifts'] },
  { title: 'Product Launches & Sponsorships', desc: 'Branded merchandise for product launches, sponsorship activations, and marketing campaigns. Every piece carries the sustainability story.', items: ['Launch event kits', 'Sponsorship packages', 'Brand activation apparel', 'Influencer gift boxes'] },
];

const UPCOMING_EVENTS = [
  { name: 'WasteExpo 2026', date: 'May 2026', location: 'Las Vegas, NV', desc: 'The largest solid waste, recycling, and organics event in North America.' },
  { name: 'Plastics Recycling Conference', date: 'March 2026', location: 'National Harbor, MD', desc: 'The premier event for the plastics recycling industry.' },
  { name: 'GreenBiz 26', date: 'February 2026', location: 'Phoenix, AZ', desc: 'Where business leaders accelerate the clean economy.' },
  { name: 'ISRI Convention', date: 'April 2026', location: 'Las Vegas, NV', desc: 'The recycling industry\'s largest annual convention and exposition.' },
];

export default function Events() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-near-black py-20 lg:py-28">
        <div className="container">
          <RevealDiv>
            <p className="section-label mb-4">Events</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-linen leading-tight max-w-3xl mb-6">
              Your brand on every stage. At every event. In every room.
            </h1>
            <p className="text-sand/80 text-base leading-relaxed prose-narrow">
              Champions for GREEN apparel is designed for the events where your brand matters most. Trade shows, conferences, golf outings, corporate retreats — premium sustainable branded apparel that makes your team look unified and your brand unforgettable.
            </p>
          </RevealDiv>
        </div>
      </section>

      {/* Day in the Life - Lifestyle */}
      <section className="bg-linen py-12">
        <div className="container">
          <RevealDiv>
            <div className="rounded-md overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663361270787/TZo49bciEt2cxMbGhPgHmm/page07-07_32c15cbc.png"
                alt="A Day in the Life — Champions for GREEN apparel at the gym, boardroom, and client lunch"
                className="w-full h-auto rounded-md"
                loading="lazy"
              />
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Event Types */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="container">
          <RevealDiv className="mb-14">
            <p className="section-label mb-3">Event Solutions</p>
            <h2 className="text-2xl md:text-3xl font-bold text-near-black">Branded for every occasion.</h2>
          </RevealDiv>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {EVENT_TYPES.map((type, i) => (
              <RevealDiv key={i} delay={i * 100}>
                <div className="bg-parchment rounded-md p-6 lg:p-8 h-full">
                  <h3 className="text-lg font-bold text-near-black mb-3">{type.title}</h3>
                  <p className="text-charcoal text-sm leading-relaxed mb-5">{type.desc}</p>
                  <div className="border-t border-khaki/30 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-tan mb-3">Common Uses:</p>
                    <ul className="space-y-2">
                      {type.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-charcoal">
                          <span className="text-forest mt-1 text-xs">&#9679;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-forest py-20 lg:py-24">
        <div className="container">
          <RevealDiv className="mb-12">
            <p className="section-label mb-3">Where to Find Us</p>
            <h2 className="text-2xl md:text-3xl font-bold text-linen mb-4">Upcoming events.</h2>
            <p className="text-sand/80 text-sm">
              Visit championsforgreenevents.com for the full event calendar and registration details.
            </p>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {UPCOMING_EVENTS.map((event, i) => (
              <RevealDiv key={i} delay={i * 100}>
                <div className="bg-near-black/30 rounded-md p-6 h-full border border-sand/10">
                  <h3 className="text-base font-bold text-linen mb-2">{event.name}</h3>
                  <div className="flex flex-wrap gap-4 mb-3">
                    <span className="flex items-center gap-1.5 text-sand/70 text-xs">
                      <Calendar className="w-3 h-3" /> {event.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-sand/70 text-xs">
                      <MapPin className="w-3 h-3" /> {event.location}
                    </span>
                  </div>
                  <p className="text-sand/60 text-sm">{event.desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Event Kit Highlight */}
      <section className="bg-linen py-20 lg:py-24">
        <div className="container">
          <RevealDiv>
            <div className="bg-near-black rounded-md p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="section-label mb-3">Event Kit Spotlight</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-linen mb-4">The VIP Event Kit</h2>
                  <p className="text-sand/80 text-base leading-relaxed mb-6">
                    Our most popular event configuration. Premium enough for keynote speakers and headline sponsors. Makes it home from every conference. 25 recycled bottles diverted per kit.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Polo (9)', 'Hat (6)', 'Duffel (8)', 'Towel (2)', 'Socks'].map((item, i) => (
                      <span key={i} className="bg-forest/30 text-forest-light text-xs px-3 py-1.5 rounded-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link href="/kits" className="text-gold text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                    See All Kit Configurations <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-mono text-7xl lg:text-8xl font-bold text-forest-light">25</p>
                    <p className="text-sand/60 text-sm uppercase tracking-wider mt-2">Bottles Per Kit</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-parchment py-20 text-center">
        <div className="container">
          <RevealDiv className="flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-near-black mb-4">Planning an event?</h2>
            <p className="text-charcoal text-base mb-8 max-w-lg">
              Let us build a custom event package for your team. From trade show kits to golf outing uniforms — we handle everything.
            </p>
            <Link href="/#pricing" className="cta-button">
              Request Event Pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealDiv>
        </div>
      </section>
    </div>
  );
}
