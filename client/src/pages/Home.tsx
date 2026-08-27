/**
 * Portfodia visual system: dark neo-editorial systems design with Chartreuse Signal accents,
 * IBM Plex Mono metadata, Space Grotesk headlines, asymmetric rails, and restrained motion.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  CircleDot,
  Compass,
  FileCheck2,
  GraduationCap,
  Handshake,
  Landmark,
  Menu,
  Network,
  Plus,
  Radar,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";

const assetHero = "/manus-storage/portfodia-hero-ecosystem_8120b0f4.png";
const assetCollage = "/manus-storage/portfodia-editorial-collage_4b6e21c5.png";
const assetMark = "/manus-storage/portfodia-mark_028f8e8b.png";

const outcomes = [
  { label: "Build my Career Identity", group: "FOR INDIVIDUALS", icon: BadgeCheck, tint: "signal" },
  { label: "Record my Workforce Experiences", group: "FOR INDIVIDUALS", icon: FileCheck2, tint: "blue" },
  { label: "Generate my Career Portfolio", group: "FOR INDIVIDUALS", icon: BriefcaseBusiness, tint: "amber" },
  { label: "Join a Community", group: "FOR INDIVIDUALS", icon: UsersRound, tint: "violet" },
  { label: "Create Workforce Records", group: "FOR ORGANIZATIONS", icon: Building2, tint: "rose" },
  { label: "Publish Opportunities", group: "FOR ORGANIZATIONS", icon: Compass, tint: "cyan" },
];

const systemTabs = [
  {
    id: "identity",
    eyebrow: "01 / THE FOUNDATION",
    title: "Career Identity",
    short: "One identity that compounds.",
    description: "Create a trusted Career Identity that grows with every experience, achievement, and meaningful step in your workforce journey.",
    action: "Explore Career Identity",
    icon: BadgeCheck,
    accent: "#B9F227",
  },
  {
    id: "records",
    eyebrow: "02 / THE PROOF",
    title: "Workforce Records",
    short: "Make experience count.",
    description: "Capture the work that matters as trusted Workforce Records — created by individuals, supported by organizations, and built to strengthen credibility over time.",
    action: "Explore Workforce Records",
    icon: FileCheck2,
    accent: "#7DD3FC",
  },
  {
    id: "portfolios",
    eyebrow: "03 / THE STORY",
    title: "Career Portfolios",
    short: "Present your full potential.",
    description: "Generate focused Career Portfolios from your identity and records, ready for the opportunity in front of you.",
    action: "Explore Career Portfolios",
    icon: BriefcaseBusiness,
    accent: "#FBBF24",
  },
  {
    id: "communities",
    eyebrow: "04 / THE NETWORK",
    title: "Communities",
    short: "Build around shared progress.",
    description: "Bring people and organizations together to collaborate, support workforce programmes, and create better routes into opportunity.",
    action: "Explore Communities",
    icon: UsersRound,
    accent: "#F0ABFC",
  },
  {
    id: "opportunities",
    eyebrow: "05 / THE MOMENT",
    title: "Opportunities",
    short: "Connect the next right move.",
    description: "Publish and discover jobs, internships, apprenticeships, scholarships, projects, events, and more meaningful workforce experiences.",
    action: "Explore Opportunities",
    icon: Radar,
    accent: "#67E8F9",
  },
];

const journeys = [
  ["Secondary school graduate", "Start with a trusted record of where you are and where you want to go."],
  ["Student", "Turn learning, projects, and first experiences into momentum."],
  ["Apprentice", "Build proof around the work you are learning to do."],
  ["Recent graduate", "Make the leap from potential to a portfolio that travels."],
  ["Early career professional", "Keep every next move connected to the bigger picture."],
  ["Experienced professional", "Shape a living record of the value you bring."],
  ["Freelancer", "Make independent work easier to trust, find, and grow."],
  ["Entrepreneur", "Connect the people, opportunities, and capabilities around your mission."],
];

const organizations: Array<[string, string, React.ComponentType<{ size?: number } >]> = [
  ["Employers", "Create trusted records, discover talent, and support the people who make work happen.", Building2],
  ["Universities", "Connect learning journeys to real workforce outcomes and opportunity.", GraduationCap],
  ["Training providers", "Turn programmes into visible progress that people can carry forward.", Sparkles],
  ["Professional bodies", "Support standards, communities, and credible professional journeys.", Handshake],
  ["Government & public institutions", "Build stronger workforce intelligence for better decisions.", Landmark],
];

const pillars = [
  ["One trusted Career Identity", "Build one lifelong identity that grows with every workforce experience.", "01"],
  ["Workforce Records that build trust", "Create and support proof that strengthens credibility over time.", "02"],
  ["Career Portfolios on demand", "Present the right version of your journey for the opportunity ahead.", "03"],
  ["Communities that connect", "Bring people and organizations together around shared progress.", "04"],
  ["Opportunities that matter", "Publish, discover, and connect the work that moves people forward.", "05"],
  ["Powering workforce intelligence", "Connect trusted data to support better insights and decisions.", "06"],
];

function Mark({ large = false }: { large?: boolean }) {
  return (
    <span className={`brand-lockup ${large ? "brand-lockup--large" : ""}`}>
      <img src={assetMark} alt="" aria-hidden="true" />
      <span>Portfodia</span>
    </span>
  );
}

function Button({ children, variant = "primary", href = "#start" }: { children: React.ReactNode; variant?: "primary" | "quiet" | "outline"; href?: string }) {
  return (
    <a className={`button button--${variant}`} href={href}>
      <span>{children}</span>
      <ArrowUpRight size={16} strokeWidth={2.2} />
    </a>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeOutcome, setActiveOutcome] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("identity");
  const currentTab = systemTabs.find((tab) => tab.id === activeTab) ?? systemTabs[0];
  const CurrentIcon = currentTab.icon;

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a href="#top" aria-label="Portfodia home"><Mark /></a>
          <nav className={`main-nav ${mobileOpen ? "main-nav--open" : ""}`}>
            <a href="#explore" onClick={() => setMobileOpen(false)}>Explore</a>
            <a href="#solutions" onClick={() => setMobileOpen(false)}>Solutions</a>
            <a href="#why" onClick={() => setMobileOpen(false)}>Why Portfodia</a>
            <a href="#resources" onClick={() => setMobileOpen(false)}>Resources</a>
            <div className="mobile-nav-actions"><a href="#start">Log in</a><Button>Get started free</Button></div>
          </nav>
          <div className="header-actions"><a className="login-link" href="#start">Log in</a><Button>Get started free</Button></div>
          <button className="menu-toggle" aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen((open) => !open)}>{mobileOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-frame">
          <div className="hero-copy">
            <p className="eyebrow"><span className="signal-dot" /> Portfodia / Workforce infrastructure</p>
            <h1>Building trusted<br /><em>workforce journeys.</em></h1>
            <p className="hero-lede">The connected foundation for Career Identities, Workforce Records, Communities, and Opportunities — built to power better workforce intelligence.</p>
            <div className="hero-actions"><Button>Get started free</Button><Button variant="quiet" href="#explore">Explore Portfodia <ChevronRight size={16} /></Button></div>
            <div className="hero-meta"><span><strong>01</strong> TRUSTED BY DESIGN</span><span><strong>∞</strong> BUILT TO GROW WITH YOU</span></div>
          </div>
          <div className="hero-visual">
            <div className="visual-index">LIVE SYSTEM / 001</div>
            <img src={assetHero} alt="Abstract connected workforce ecosystem" />
            <div className="hero-node hero-node--identity"><span className="node-pulse" />Career Identity</div>
            <div className="hero-node hero-node--opportunity"><span className="node-pulse" />Opportunities</div>
            <div className="hero-callout"><span>WORKFORCE INTELLIGENCE</span><b>One view. Better moves.</b></div>
            <div className="hero-coordinates">51°30′ N<br />00°07′ W</div>
          </div>
        </section>

        <section className="outcomes section-frame" id="explore">
          <div className="section-heading section-heading--split"><div><p className="eyebrow">01 / Choose your starting point</p><h2>What would you like<br /><em>to achieve today?</em></h2></div><p className="section-note">Start with the outcome. Portfodia will help map the next move.</p></div>
          <div className="outcome-grid">{outcomes.map((outcome) => { const Icon = outcome.icon; const selected = activeOutcome === outcome.label; return <button key={outcome.label} className={`outcome-card outcome-card--${outcome.tint} ${selected ? "is-selected" : ""}`} onClick={() => setActiveOutcome(outcome.label)}><span className="card-corner" /><div className="outcome-icon"><Icon size={22} /></div><span className="outcome-group">{outcome.group}</span><strong>{outcome.label}</strong><span className="outcome-arrow">{selected ? "Selected" : "Choose path"} <ArrowUpRight size={15} /></span></button>; })}</div>
          {activeOutcome && <div className="selection-note"><CircleDot size={14} /> You chose <strong>{activeOutcome}</strong>. Create a free account to make this journey yours.</div>}
        </section>

        <section className="system-section section-frame" id="solutions">
          <div className="section-heading"><p className="eyebrow">02 / The Portfodia system</p><h2>Everything you need<br />for your <em>workforce journey.</em></h2></div>
          <div className="system-layout">
            <div className="system-tabs">{systemTabs.map((tab, index) => { const Icon = tab.icon; return <button key={tab.id} className={`system-tab ${activeTab === tab.id ? "is-active" : ""}`} onClick={() => setActiveTab(tab.id)}><span className="tab-number">0{index + 1}</span><Icon size={18} /><span><b>{tab.title}</b><small>{tab.short}</small></span><ChevronRight className="tab-chevron" size={17} /></button>; })}</div>
            <div className="system-detail" style={{ "--tab-accent": currentTab.accent } as React.CSSProperties}><div className="detail-top"><span className="eyebrow">{currentTab.eyebrow}</span><CurrentIcon size={27} /></div><h3>{currentTab.title}</h3><p>{currentTab.description}</p><a href="#start" className="text-link">{currentTab.action} <ArrowUpRight size={16} /></a><div className="detail-visual"><img src={assetCollage} alt="Portfodia system collage" /><span className="detail-tag">{activeTab.toUpperCase()} / ACTIVE</span></div></div>
          </div>
        </section>

        <section className="journeys section-frame">
          <div className="section-heading section-heading--split"><div><p className="eyebrow">03 / Made for the whole journey</p><h2>Every path<br /><em>has a next move.</em></h2></div><p className="section-note">From first proof to next opportunity, your progress stays connected.</p></div>
          <div className="rail">{journeys.map(([title, description], index) => <article className="journey-card" key={title}><span className="journey-number">0{index + 1}</span><span className="journey-line" /><h3>{title}</h3><p>{description}</p><a href="#start" className="text-link">Start my journey <ArrowUpRight size={14} /></a></article>)}</div>
        </section>

        <section className="organizations section-frame"><div className="section-heading"><p className="eyebrow">04 / Shared infrastructure</p><h2>For the systems<br /><em>that shape work.</em></h2></div><div className="org-layout"><div className="org-statement"><p>Work gets stronger when the people and organizations inside it can trust the same foundation.</p><div className="org-stat"><span>05</span><small>ORGANIZATION PATHS<br />AND COUNTING</small></div></div><div className="org-grid">{organizations.map(([title, description, Icon]) => <article className="org-card" key={title}><Icon size={20} /><h3>{title}</h3><p>{description}</p><a href="#start" className="text-link">Explore solutions <ArrowUpRight size={14} /></a></article>)}</div></div></section>

        <section className="why section-frame" id="why"><div className="section-heading section-heading--split"><div><p className="eyebrow">05 / Why Portfodia</p><h2>Identity, proof,<br /><em>in motion.</em></h2></div><p className="section-note">The right signal travels further when every part of the journey can speak to the next.</p></div><div className="pillar-grid">{pillars.map(([title, description, number]) => <article className="pillar" key={number}><span>{number}</span><Plus size={16} /><h3>{title}</h3><p>{description}</p></article>)}</div></section>

        <section className="cta-section section-frame" id="start"><div className="cta-mark"><img src={assetMark} alt="" aria-hidden="true" /></div><p className="eyebrow">06 / Your next move</p><h2>Give your next move<br /><em>a trusted foundation.</em></h2><p>Whether you are building your Career Identity, supporting Workforce Records, growing a Community, or connecting meaningful Opportunities — start with the outcome that matters to you.</p><div className="hero-actions"><Button>Get started free</Button><Button variant="outline" href="#explore">Explore Portfodia</Button></div></section>
      </main>

      <footer className="site-footer" id="resources"><div className="footer-top"><div><a href="#top"><Mark large /></a><p>The trusted infrastructure for workforce journeys.</p></div><div className="footer-columns"><div><span>PRODUCT</span><a href="#solutions">Career Identity</a><a href="#solutions">Workforce Records</a><a href="#solutions">Communities</a><a href="#solutions">Opportunities</a></div><div><span>SOLUTIONS</span><a href="#solutions">Individuals</a><a href="#solutions">Employers</a><a href="#solutions">Universities</a><a href="#solutions">Public institutions</a></div><div><span>RESOURCES</span><a href="#resources">Help Centre</a><a href="#resources">User guides</a><a href="#resources">FAQs</a><a href="#resources">Support</a></div></div></div><div className="footer-bottom"><span>© 2026 Portfodia. A YouthUp Global ecosystem.</span><span>Built for meaningful progress <ArrowDownRight size={15} /></span></div></footer>
    </div>
  );
}
