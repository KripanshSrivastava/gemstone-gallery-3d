import { useScrollY } from "@/hooks/useReveal";
import { Reveal } from "./Reveal";
import { Cursor } from "./Cursor";

import logoImage from "@/assets/logo.jpeg";
import heroBannerImage from "@/assets/hero-banner.jpeg";
import emeraldRingImage from "@/assets/emerald-ring.jpeg";
import rubyGemsImage from "@/assets/ruby-gems.jpeg";
import sapphireSetImage from "@/assets/sapphire-set.jpeg";
import pinkStoneImage from "@/assets/pink-stone.jpeg";
import topazBlueImage from "@/assets/topaz-blue.jpeg";

const COLLECTION = [
  {
    name: "Emerald Halo Ring",
    image: emeraldRingImage,
    detail: "Emerald-cut Colombian emerald · brilliant halo",
  },
  {
    name: "Royal Blue Sapphire Suite",
    image: rubyGemsImage,
    detail: "20 pcs · calibrated emerald cut",
  },
  {
    name: "London Blue Topaz Ovals",
    image: pinkStoneImage,
    detail: "14 pcs · matched oval brilliants",
  },
  {
    name: "Padparadscha Pink Spinel",
    image: sapphireSetImage,
    detail: "5.10 ct · single unheated stone",
  },
  {
    name: "Burmese Ruby Hexagons",
    image: topazBlueImage,
    detail: "11 pcs · hexagon step cut",
  },
  {
    name: "Signature Bridal Edit",
    image: heroBannerImage,
    detail: "Curated set · gemstones only",
  },
];

const PILLARS = [
  { title: "Exquisite Designs", copy: "Drawn, carved and finished in our own atelier." },
  { title: "Certified Gemstones", copy: "Every stone ships with independent lab certification." },
  { title: "Finest Craftsmanship", copy: "Hand-cut by master lapidaries, never mass produced." },
  { title: "Customer Trust", copy: "Four generations of families who came back to us." },
];

const STATS = [
  { value: "1,200+", label: "Certified gemstones" },
  { value: "38", label: "Countries of origin" },
  { value: "27 yrs", label: "Of lapidary craft" },
];

const MARQUEE = [
  "Emerald",
  "Ruby",
  "Blue Sapphire",
  "London Topaz",
  "Pink Spinel",
  "Aquamarine",
  "Citrine",
  "Tanzanite",
];

// --- Update these placeholders when you're ready ---
const CONTACT = {
  instagram: "https://instagram.com/rashmigems",
  maps: "https://maps.app.goo.gl/M6ae9sds1UafUsRe9?g_st=ac",
  phone: "+91-98281-67321",
  phoneDisplay: "+91 98281 67321",
};

export function StorePage() {
  const scrollY = useScrollY();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Cursor />
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="Rashmi Gems logo"
              className="h-11 w-11 rounded-full object-cover shadow-[0_0_18px_-4px_var(--gold)] animate-float-slow"
            />
            <span className="font-display text-xl tracking-[0.18em] uppercase">
              Rashmi <span className="text-gradient-gold">Gems</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#collection" className="link-underline">Collection</a>
            <a href="#craft" className="link-underline">Craft</a>
            <a href="#visit" className="link-underline">Visit</a>
          </div>
          <a
            href="#collection"
            className="glow-gold rounded-full border border-primary/50 px-5 py-2 text-sm transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground"
          >
            Enquire
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
        <div
          className="absolute inset-0 scale-110"
          style={{ transform: `translateY(${scrollY * 0.25}px) scale(1.12)` }}
        >
          <img
            src={heroBannerImage}
            alt="Assorted emerald, sapphire and ruby gemstones with gold jewellery"
            className="h-full w-full animate-slow-zoom object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
        </div>

        {/* drifting light motes */}
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="animate-mote absolute block rounded-full bg-primary/70"
              style={{
                left: `${(i * 37) % 100}%`,
                bottom: `-${10 + (i % 5) * 8}%`,
                width: `${3 + (i % 4)}px`,
                height: `${3 + (i % 4)}px`,
                animationDelay: `${i * 1.4}s`,
                animationDuration: `${14 + (i % 6) * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28">
          <img
            src={logoImage}
            alt="Rashmi Gems"
            className="fade-up mb-8 h-24 w-24 rounded-full object-cover shadow-[0_0_50px_-8px_var(--gold)]"
          />
          <p className="fade-up-delay-1 text-xs font-semibold tracking-[0.45em] text-primary uppercase">
            Fine Gemstones
          </p>
          <h1 className="fade-up-delay-2 mt-6 max-w-3xl text-5xl leading-[1.05] font-medium md:text-8xl">
            Timeless elegance,
            <br />
            <span className="text-gradient-gold shimmer italic">trusted since generations</span>
          </h1>
          <p className="fade-up-delay-3 mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Rare coloured stones, hand-selected at the source and cut for one
            thing above all — light.
          </p>
          <div className="fade-up-delay-3 mt-10 flex flex-wrap gap-4">
            <a
              href="#collection"
              className="glow-gold rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              View the Collection
            </a>
            <a
              href="#craft"
              className="rounded-full border border-border px-8 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Our Craft
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs tracking-[0.3em] text-muted-foreground uppercase">
          <span className="animate-bounce-soft block">Scroll</span>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border bg-velvet py-4">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((word, i) => (
            <span
              key={i}
              className="font-display text-xl tracking-[0.3em] text-muted-foreground uppercase"
            >
              {word} <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Pillars */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} from="up">
              <div className="glass-panel h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50">
                <div className="text-2xl text-primary">✦</div>
                <h3 className="mt-4 font-display text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal className="mb-14 text-center">
          <p className="text-xs font-semibold tracking-[0.4em] text-primary uppercase">The Vault</p>
          <h2 className="mt-4 text-4xl font-medium md:text-6xl">
            Signature <span className="text-gradient-gold italic">Collection</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Parcels and single stones from our current inventory — each certified,
            photographed in-house, and available for private viewing.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COLLECTION.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 140} from="scale">
              <article className="group glass-panel h-full overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_24px_60px_-30px_var(--gold)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="sheen pointer-events-none absolute inset-0" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                  <button className="mt-5 w-full rounded-full border border-border py-2.5 text-sm font-medium transition-all group-hover:border-primary group-hover:text-primary">
                    Enquire
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 150}>
              <div className="px-6 py-12 text-center">
                <div className="font-display text-4xl text-primary">{s.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Craft */}
      <section id="craft" className="bg-velvet text-velvet-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <Reveal from="left">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={emeraldRingImage}
                alt="Emerald-cut emerald ring framed by a brilliant halo in yellow gold"
                loading="lazy"
                className="w-full animate-slow-zoom object-cover"
              />
              <div className="sheen pointer-events-none absolute inset-0" />
            </div>
          </Reveal>
          <Reveal from="right" delay={120}>
            <p className="text-xs font-semibold tracking-[0.4em] text-primary uppercase">
              The Atelier
            </p>
            <h2 className="mt-4 text-4xl font-medium md:text-5xl">
              Cut by hand,
              <br />
              <span className="text-gradient-gold italic">graded by heart</span>
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>
                Every Rashmi stone passes through a single master's hands — from rough
                crystal to finished brilliant. We cut for light, not weight, sacrificing
                carats where symmetry demands it.
              </p>
              <p>
                Each gem ships with certification, its full origin story, and a lifetime
                re-polishing promise.
              </p>
            </div>
            <a
              href="#visit"
              className="glow-gold mt-8 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Book a Private Viewing
            </a>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer id="visit" className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
          <img
            src={logoImage}
            alt="Rashmi Gems"
            className="h-20 w-20 animate-float-slow rounded-full object-cover"
          />

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              Instagram
            </a>
            <span className="text-border">·</span>
            <a
              href={CONTACT.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              Find us on Maps
            </a>
            <span className="text-border">·</span>
            <a href={`tel:${CONTACT.phone}`} className="link-underline">
              {CONTACT.phoneDisplay}
            </a>
          </div>

          <p className="max-w-sm text-sm text-muted-foreground">
            Fine Gemstones · By appointment only · hello@rashmigems.com
          </p>
          <p className="text-xs text-muted-foreground">
            © 2026 Rashmi Gems. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
