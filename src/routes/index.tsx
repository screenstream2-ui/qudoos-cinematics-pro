import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Play,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Film,
  Wand2,
  Palette,
  Rocket,
  Instagram as InstagramIcon,
  Youtube,
  Music2,
  Layers,
  Clapperboard,
  Camera,
  CheckCircle2,
  Quote,
  Menu,
  X,
  ChevronDown,
  Shield,
  ClipboardCheck,
  Ban,
  Clock,
} from "lucide-react";


import { useReveal } from "@/hooks/use-reveal";
import profileHero from "@/assets/profile-hero.jpeg";
import profileAbout from "@/assets/profile-about.jpeg";
import heroBg from "@/assets/hero-bg.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const WHATSAPP = "https://wa.me/923144760044";

function Portfolio() {
  useReveal();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    ["Work", "#work"],
    ["Services", "#services"],
    ["About", "#about"],
    ["Process", "#process"],
    ["Contact", "#contact"],
  ] as const;

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-foreground">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#7C3AED]/20 blur-[140px]" />
        <div className="absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full bg-[#A855F7]/15 blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[#7C3AED]/10 blur-[120px]" />
      </div>

      {/* Nav */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div
            className={`glass flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${scrolled ? "shadow-[0_10px_40px_-10px_rgba(124,58,237,0.35)]" : ""}`}
          >
            <a href="#top" className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#A855F7] text-white font-bold">
                AQ
              </span>
              <span className="font-display font-semibold tracking-tight">Abdul Qudoos</span>
            </a>
            <nav className="hidden items-center gap-8 md:flex">
              {nav.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </nav>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-xl btn-glow px-4 py-2 text-sm font-medium hover:[transform:translateY(-2px)]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <button
              onClick={() => setNavOpen((v) => !v)}
              className="md:hidden text-foreground"
              aria-label="Toggle menu"
            >
              {navOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {navOpen && (
            <div className="glass mt-2 rounded-2xl p-4 md:hidden animate-fade-up">
              <div className="flex flex-col gap-3">
                {nav.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setNavOpen(false)}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {label}
                  </a>
                ))}
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl btn-glow px-4 py-2 text-sm font-medium"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <Hero />
      <Intro />
      <FeaturedWork />
      <Skills />
      <PortfolioSection />
      <About />
      <ExperienceTimeline />
      <Services />
      <Workflow />
      <Testimonials />
      <RecentProjects />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

/* ---------- Sections ---------- */

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="reveal mx-auto mb-14 max-w-2xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[#C4B5FD]">
        <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
      </div>
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {title.split("|").map((part, i) =>
          i === 0 ? (
            <span key={i}>{part}</span>
          ) : (
            <span key={i} className="text-gradient">
              {part}
            </span>
          ),
        )}
      </h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#0B0B0B]/40 to-[#0B0B0B]" />

      <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 md:grid-cols-[minmax(0,340px)_minmax(0,1fr)] md:items-center">
        {/* Profile photo */}
        <div className="reveal mx-auto md:mx-0">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#A855F7] opacity-40 blur-3xl animate-pulse-glow" />
            <div className="relative h-72 w-72 overflow-hidden rounded-full border border-white/10 glass p-1.5">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <img
                  src={profileHero}
                  alt="Abdul Qudoos — Professional video editor"
                  data-editable="profile-photo"
                  className="h-full w-full object-cover"
                  width={1024}
                  height={1280}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="reveal mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[#C4B5FD]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7] animate-pulse-glow" />
            Available for new projects
          </div>
          <h1 className="reveal font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Abdul Qudoos<span className="text-[#A855F7]">.</span>
          </h1>
          <p className="reveal mt-4 text-xl font-medium text-foreground/90 sm:text-2xl">
            Professional Video Editor <span className="text-[#A855F7]">|</span> Short-Form Content
            Specialist
          </p>
          <p className="reveal mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I craft cinematic Instagram Reels, TikTok videos, YouTube Shorts and long-form YouTube
            edits — engaging, high-retention content that helps creators and brands grow.
          </p>

          <div className="reveal mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl btn-glow px-6 py-3.5 text-sm font-semibold transition-all hover:[transform:translateY(-2px)]"
            >
              <Play className="h-4 w-4" /> View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:[transform:translateY(-2px)]"
            >
              <MessageCircle className="h-4 w-4" /> Contact on WhatsApp
            </a>
          </div>

          <div className="reveal mt-10 grid max-w-lg grid-cols-3 gap-4">
            {[
              { n: "1Y+", l: "Experience" },
              { n: "100+", l: "Edits Delivered" },
              {
                n: "4400+",
                l: "TikTok Followers",
                href: "https://www.tiktok.com/@qudoosedits?is_from_webapp=1&sender_device=pc",
              },
            ].map(({ n, l, href }) =>
              href ? (
                <a
                  key={l}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass rounded-2xl p-4 text-center transition hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
                >
                  <div className="text-2xl font-bold text-gradient">{n}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                    {l}
                  </div>
                </a>
              ) : (
                <div key={l} className="glass rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-gradient">{n}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                    {l}
                  </div>
                </div>
              ),
            )}
          </div>

        </div>
      </div>

      <a
        href="#intro"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}

function Intro() {
  return (
    <section id="intro" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C4B5FD]">Introduction</p>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
            Cinematic edits that <span className="text-gradient">stop the scroll</span> and hold the
            view.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            I blend storytelling, pacing and motion design to turn raw footage into premium content
            built for retention — whether it's a 15-second reel or a 20-minute YouTube video.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeaturedWork() {
  const items = [
    {
      id: "f2ml5npNBuM",
      tag: "Trending Reel",
      title: "Modern Motion Graphics",
      desc: "Modern Instagram-style edits utilizing slick typography, dynamic motion graphics, and highly engaging visual pacing.",
    },
    {
      id: "-EGJjOOI5hQ",
      tag: "Cinematic Story",
      title: "Motivational Narrative",
      desc: "High-impact storytelling and seamless pacing crafted to deliver inspiring, high-retention cinematic experiences.",
    },
    {
      id: "IHDWnKDeSUw",
      tag: "AI Voice & Motion",
      title: "Dynamic Voiceover Edit",
      desc: "Trendy, fast-paced edits incorporating advanced motion graphics matched seamlessly with clean AI-voiceover narration.",
    },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Featured"
          title="Signature | Work"
          subtitle="A snapshot of recent projects across short-form and long-form."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.id}
              className="reveal hover-lift group relative overflow-hidden rounded-3xl glass"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[9/16] w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${it.id}?rel=0&modestbranding=1`}
                  title={it.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
              <div className="p-5">
                <div className="text-[10px] uppercase tracking-widest text-[#C4B5FD]">{it.tag}</div>
                <div className="mt-1 text-lg font-semibold">{it.title}</div>
                <p className="mt-2 text-sm text-white/70">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Skills() {
  const tools = [
    { name: "Adobe Premiere Pro", short: "Pr", color: "from-[#9999FF] to-[#5C5CFF]" },
    { name: "Adobe After Effects", short: "Ae", color: "from-[#D291FF] to-[#9999FF]" },
    { name: "Alight Motion", short: "AM", color: "from-[#A855F7] to-[#7C3AED]" },
  ];
  const skills = [
    "Storytelling & Pacing",
    "Cinematic Transitions",
    "Motion Graphics",
    "Color Grading",
    "Sound Design",
    "Retention Editing",
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Toolkit"
          title="Software & | Skills"
          subtitle="Started with Alight Motion on mobile — now editing daily in Premiere Pro and After Effects for professional workflows."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {tools.map((t, i) => (
            <div
              key={t.name}
              className="reveal glass hover-lift rounded-3xl p-8 text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className={`mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br ${t.color} font-display text-3xl font-bold text-white shadow-[0_0_40px_rgba(124,58,237,0.4)]`}
              >
                {t.short}
              </div>
              <div className="mt-5 text-lg font-semibold">{t.name}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                Daily driver
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-8 glass-strong rounded-3xl p-6 text-center text-sm text-muted-foreground sm:text-base">
          I started my editing journey on{" "}
          <span className="text-[#C4B5FD] font-medium">Alight Motion</span> — learning motion,
          timing and creativity on mobile — then transitioned to{" "}
          <span className="text-[#C4B5FD] font-medium">Premiere Pro</span> and{" "}
          <span className="text-[#C4B5FD] font-medium">After Effects</span> for professional,
          high-end results.
        </div>

        <div className="reveal mt-10 flex flex-wrap justify-center gap-3">
          {skills.map((s) => (
            <span key={s} className="glass rounded-full px-4 py-2 text-sm text-foreground/90">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const cards = [
    { id: "f2ml5npNBuM", cat: "Reel", title: "Modern Motion Graphics", meta: "Trending Style • 24s" },
    { id: "-EGJjOOI5hQ", cat: "Cinematic", title: "Motivational Narrative", meta: "Storytelling • 22s" },
    { id: "IHDWnKDeSUw", cat: "YouTube", title: "Dynamic Voiceover Edit", meta: "AI Voice & Graphics • 16s" },
    { id: "2V5ZZ54Ja6c", cat: "Promo", title: "Trading Group Commercial", meta: "Promo Motion GFX • 28s" },
    { id: "3tYOEj6ia1s", cat: "Motion", title: "High-End Concept Recreation", meta: "Stunning Visual GFX • 14s" },
    { id: "9Nyy8cAcGYk", cat: "YouTube", title: "Creator Raw Footage Enhancement", meta: "Vlog Edit & Motion GFX • 24s" },
  ];
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Client | Showcases"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={i}
              className="reveal hover-lift group overflow-hidden rounded-3xl glass"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${c.id}`}
                  title={c.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
                <div
                  className="pointer-events-none absolute right-3 top-3 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                  }}
                >
                  {c.cat}
                </div>
              </div>
              <div className="p-5">
                <div className="text-base font-semibold">{c.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{c.meta}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="reveal relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[#7C3AED]/30 to-[#A855F7]/20 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl glass">
            <img
              src={profileAbout}
              alt="Abdul Qudoos — Professional Video Editor"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <div className="reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C4B5FD]">About Me</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              A passionate editor obsessed with{" "}
              <span className="text-gradient">cinematic storytelling</span>.
            </h2>
          </div>
          <p className="reveal mt-5 text-muted-foreground">
            I focus on audience retention, clean motion graphics, creative transitions and
            professional content creation. Every cut is intentional — every frame earns its place.
            From short-form hooks that stop the scroll to long-form edits that keep viewers
            watching, I bring cinematic craft to every project.
          </p>
          <ul className="reveal mt-6 space-y-3">
            {[
              "Cinematic storytelling & pacing",
              "Retention-first short-form edits",
              "Clean, modern motion graphics",
              "Professional color grading",
            ].map((x) => (
              <li key={x} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="h-4 w-4 text-[#A855F7]" /> {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  const nodes = [
    {
      year: "2025",
      title: "Mobile Beginnings",
      body: "Started editing on Alight Motion — learning timing, keyframes, and creative visual language directly on a phone.",
    },
    {
      year: "Mid 2025",
      title: "Deep Dive into Design",
      body: "Shifted focus toward mastering visual aesthetics. Dedicated time to studying composition, typography, and color theory to understand what truly makes a design stand out.",
    },
    {
      year: "2026",
      title: "The Desktop Leap & Cinematic Craft",
      body: "Transitioned fully to PC using Premiere Pro and After Effects. Combined advanced software power with refined design principles to deliver premium motion graphics, complex transitions, and cinematic color grading for brands.",
    },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="1 Year of | Craft"
          subtitle="A focused year of growth — from mobile editing to professional desktop workflows."
        />
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#7C3AED] to-transparent md:left-1/2" />
          <div className="space-y-10">
            {nodes.map((n, i) => (
              <div
                key={i}
                className={`reveal relative grid gap-4 md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}
              >
                <div
                  className={`glass hover-lift rounded-3xl p-6 md:p-8 ${i % 2 ? "md:text-left" : "md:text-right"}`}
                >
                  <div className="text-xs uppercase tracking-widest text-[#C4B5FD]">{n.year}</div>
                  <div className="mt-2 text-xl font-semibold">{n.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{n.body}</p>
                </div>
                <div className="absolute left-4 top-6 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-[#A855F7] shadow-[0_0_20px_rgba(168,85,247,0.8)] md:left-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: InstagramIcon,
      title: "Instagram Reels",
      body: "Snappy, trend-aware reels engineered for reach and retention.",
    },
    {
      icon: Music2,
      title: "TikTok Videos",
      body: "Hook-first TikTok edits that ride the algorithm.",
    },
    {
      icon: Youtube,
      title: "YouTube Shorts",
      body: "High-retention vertical edits — clean, punchy, on-brand.",
    },
    {
      icon: Clapperboard,
      title: "Long-form YouTube",
      body: "Story-driven long-form edits with pacing that keeps viewers watching.",
    },
    {
      icon: Wand2,
      title: "Motion Graphics",
      body: "Custom lower-thirds, titles, transitions and logo animations.",
    },
    {
      icon: Palette,
      title: "Color Correction & Grading",
      body: "Filmic looks — corrected, matched and cinematically graded.",
    },
    {
      icon: Film,
      title: "Cinematic Editing",
      body: "Premium storytelling with rhythm, tension and payoff.",
    },
    {
      icon: Rocket,
      title: "Content Optimization",
      body: "Hooks, captions and format tuning for maximum platform performance.",
    },
  ];
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="What I | Do"
          subtitle="A full editing stack for creators, brands and businesses."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal hover-lift glass rounded-3xl p-6"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#A855F7] shadow-[0_0_30px_rgba(124,58,237,0.4)]">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <div className="mt-5 text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  const steps = [
    { n: "01", title: "Brief", body: "Share your footage, references and goals over WhatsApp." },
    { n: "02", title: "Concept", body: "I plan structure, pacing and visual direction." },
    { n: "03", title: "Edit", body: "Cinematic cut with motion, transitions and color." },
    { n: "04", title: "Revisions", body: "Two free rounds — dialed in until it's perfect." },
    { n: "05", title: "Delivery", body: "Final export in every format you need." },
  ];
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Workflow"
          title="A Simple, | Premium Process"
          subtitle="Clear communication. Fast turnaround. Cinematic results."
        />
        <div className="grid gap-5 md:grid-cols-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal glass hover-lift rounded-3xl p-6"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-4xl font-display font-bold text-gradient">{s.n}</div>
              <div className="mt-3 text-base font-semibold">{s.title}</div>
              <p className="mt-2 text-xs text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      name: "Hamza Ahmed",
      initials: "HA",
      role: "YouTube Creator",
      body: "The pacing and viewer retention on my videos improved drastically after working with Abdul. He knows exactly when to cut, how to hold attention, and always delivers on time. Highly recommended!",
    },
    {
      name: "Zainab Malik",
      initials: "ZM",
      role: "Brand Manager",
      body: "Abdul completely elevated our brand's social media presence. His cinematic style and smooth transitions turned a standard product video into an engaging, high-converting masterpiece. Absolute professional!",
    },
    {
      name: "Bilal Siddiqui",
      initials: "BS",
      role: "Content Creator",
      body: "The way he integrates clean motion graphics and seamless story flows is incredible. My raw footage always comes back looking like a high-budget production. He is my go-to editor.",
    },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Clients | Say"
          subtitle="What it's like to build something memorable together."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <div
              key={i}
              className="reveal glass hover-lift rounded-3xl p-6"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <Quote className="h-6 w-6 text-[#A855F7]" />
              <p className="mt-4 text-sm text-foreground/90">{t.body}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A855F7] font-semibold text-white">
                  {t.initials}

                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentProjects() {
  // Placeholders — replace src with real YouTube embed URLs any time.
  const videos = [
    { id: "dQw4w9WgXcQ", title: "Recent Project 01 — replace with your YouTube link" },
    { id: "dQw4w9WgXcQ", title: "Recent Project 02 — replace with your YouTube link" },
    { id: "dQw4w9WgXcQ", title: "Recent Project 03 — replace with your YouTube link" },
    { id: "dQw4w9WgXcQ", title: "Recent Project 04 — replace with your YouTube link" },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Recent Projects"
          title="Latest | Work"
          subtitle="Embedded YouTube previews — paste your real video IDs when ready."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((v, i) => (
            <div
              key={i}
              className="reveal hover-lift glass overflow-hidden rounded-3xl"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  data-editable={`youtube-embed-${i + 1}`}
                />
              </div>
              <div className="p-4 text-sm text-muted-foreground">{v.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "What's your typical turnaround?",
      a: "Most short-form edits are delivered within 24–48 hours. Long-form projects vary based on length and complexity.",
    },
    {
      q: "Do you provide revisions?",
      a: "Yes — every project includes two rounds of free revisions to make sure it's exactly right.",
    },
    {
      q: "What software do you use?",
      a: "Adobe Premiere Pro and After Effects for professional work. I started my journey on Alight Motion.",
    },
    {
      q: "How do we get started?",
      a: "Message me on WhatsApp with your project details, references and footage — I'll take it from there.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="FAQ" title="Answered | Clearly" />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="reveal glass rounded-2xl">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-sm font-medium sm:text-base">{f.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform ${open === i ? "rotate-180 text-[#A855F7]" : "text-muted-foreground"}`}
                />
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-500 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="min-h-0">
                  <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="reveal relative overflow-hidden rounded-[2rem] glass-strong p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#7C3AED]/40 blur-3xl" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C4B5FD]">Contact</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Let's create something <span className="text-gradient">cinematic</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              For project discussions and collaborations, reach me exclusively on WhatsApp. No
              emails, no socials — one direct line.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl btn-glow px-8 py-4 text-base font-semibold transition-all hover:[transform:translateY(-3px)] animate-pulse-glow"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="mt-4 text-sm text-muted-foreground">+92 314 4760044</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#A855F7] font-bold text-white">
            AQ
          </span>
          <span className="font-display text-lg font-semibold">Abdul Qudoos</span>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          Professional Video Editor · Short-Form Content Specialist
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl btn-glow px-5 py-3 text-sm font-semibold transition-all hover:[transform:translateY(-2px)]"
        >
          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
        </a>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Abdul Qudoos. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
