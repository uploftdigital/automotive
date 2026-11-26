import { ArrowDown, ArrowRight, ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Brand } from "@/components/brand";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";
import { Services } from "@/components/services";
import { Showcase } from "@/components/showcase";
import { directions, navigation, phone, services } from "./content";

export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="masthead">
        <picture className="hero-image">
          <source media="(max-width: 670px)" srcSet="/images/hero-mobile.webp" />
          <img
            src="/images/hero.webp"
            srcSet="/images/hero-medium.webp 1280w, /images/hero.webp 1672w"
            sizes="100vw"
            alt=""
            width={1672}
            height={941}
            fetchPriority="high"
          />
        </picture>
        <Header />
        <main id="main" tabIndex={-1}>
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-content shell">
              <p className="eyebrow hero-label"><span className="signal" /> Premium automotive care</p>
              <h1 id="hero-title"><span>Protect the</span><em>drive.</em></h1>
              <p className="hero-description">Paint protection film, ceramic coating and precision detailing in Coimbatore.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#services">Explore services <ArrowUpRight size={17} aria-hidden="true" /></a>
                <a className="button button-quiet" href="#showcase">View showcase <ArrowRight size={17} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="hero-foot shell">
              <a href="#services" className="hero-scroll"><ArrowDown size={14} aria-hidden="true" /> Scroll to explore</a>
              <span className="hero-location"><MapPin size={14} aria-hidden="true" /> Neelambur, Coimbatore</span>
            </div>
          </section>
          <div className="site-content">
            <section className="services-section shell section-space" id="services" aria-labelledby="services-title">
              <div className="section-intro" data-reveal>
                <div>
                  <p className="eyebrow"><span className="signal" /> Our services</p>
                  <h2 className="display" id="services-title">Care for<br /><em>every surface.</em></h2>
                </div>
                <p>Protect the paint, refine the finish, and care for the surfaces you see and touch on every drive.</p>
              </div>
              <Services />
            </section>

            <section className="approach" id="approach" aria-labelledby="approach-title">
              <div className="approach-photo">
                <img src="/images/approach.webp" alt="Two gloved technicians working along the front of a car in a monochrome photograph" width={1500} height={844} loading="lazy" />
              </div>
              <div className="approach-copy" data-reveal>
                <p className="eyebrow"><span className="signal" /> Our approach</p>
                <h2 className="display" id="approach-title">The finish is<br />in the <em>details.</em></h2>
                <p>Light reveals everything. The clarity of the paint, the line of a panel, the way a film sits at the edge. Those are the details worth slowing down for.</p>
                <a className="text-link" href="#contact">Talk through your options <ArrowUpRight size={17} aria-hidden="true" /></a>
              </div>
            </section>

            <section id="showcase" className="showcase-section shell section-space" aria-labelledby="showcase-title">
              <div className="section-intro" data-reveal>
                <div>
                  <p className="eyebrow"><span className="signal" /> Automotive showcase</p>
                  <h2 className="display" id="showcase-title">A closer <em>look.</em></h2>
                </div>
                <p>From a film edge to a polished panel, see what each process brings into focus.</p>
              </div>
              <Showcase />
              <p className="image-note">Illustrative imagery for the design concept.</p>
            </section>

            <section className="trust" aria-labelledby="trust-title">
              <div className="shell trust-inner">
                <div data-reveal>
                  <p className="eyebrow"><span className="signal" /> Why Luxi</p>
                  <h2 className="display" id="trust-title">Confidence<br />in the <em>care.</em></h2>
                </div>
                <dl className="trust-list" data-reveal>
                  <div><dt>Protection with a purpose</dt><dd>Choose film, coating or detailing based on the surfaces you want to protect and how you use your car.</dd></div>
                  <div><dt>Attention at every edge</dt><dd>Panel edges, reflections and the surfaces you touch deserve as much attention as the first impression.</dd></div>
                  <div><dt>A local place to talk cars</dt><dd>Visit Luxi on Avinashi Road in Neelambur to discuss your vehicle and the finish you want.</dd></div>
                </dl>
              </div>
            </section>

            <section id="contact" className="contact-section" aria-labelledby="contact-title">
              <div className="shell contact-inner">
                <div data-reveal>
                  <p className="eyebrow"><span className="signal" /> Get a quote</p>
                  <h2 className="display" id="contact-title">Let’s talk<br />about <em>your car.</em></h2>
                  <p>Tell Luxi what you drive and what you’d like to protect.</p>
                  <a className="button button-primary" href={phone.href}><Phone size={17} aria-hidden="true" /> Call for a quote <ArrowUpRight size={17} aria-hidden="true" /></a>
                </div>
                <div className="contact-details" data-reveal>
                  <p className="eyebrow"><MapPin size={16} aria-hidden="true" /> Visit Luxi</p>
                  <address>Avinashi Road, Neelambur<br />Near Sulur Pirivu, BMW Kun Exclusive Showroom line<br />Coimbatore, Tamil Nadu 641407, India</address>
                  <a className="contact-phone" href={phone.href}>{phone.display}</a>
                  <a className="text-link" href={directions} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={16} aria-hidden="true" /></a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      <footer className="site-footer">
        <div className="shell">
          <div className="footer-main">
            <div className="footer-brand"><Brand /><p>Neelambur, Coimbatore</p></div>
            <nav aria-label="Footer navigation">
              <p className="eyebrow">Explore</p>
              {navigation.map(({ href, label }) => <a key={href} href={href}>{label}</a>)}
              <a href="#contact">Contact</a>
            </nav>
            <nav aria-label="Service navigation">
              <p className="eyebrow">Services</p>
              {services.map(({ id, name }) => <a key={id} href={`#${id}`}>{name}</a>)}
            </nav>
            <div className="footer-contact">
              <p className="eyebrow">Contact</p>
              <a href={phone.href}>{phone.display}</a>
              <a href={directions} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="footer-end">
            <p>Private design proposal by Uploft Digital. All imagery is illustrative.</p>
            <a href="#top">Back to top <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
      </footer>
      <Reveal />
    </div>
  );
}
