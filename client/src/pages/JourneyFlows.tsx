/**
 * Portfodia visual system: light editorial infrastructure, logo-led purple and orange accents,
 * mono metadata, asymmetric rails, progressive disclosure, and one meaningful action at a time.
 */
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronRight,
  CircleAlert,
  Compass,
  FileCheck2,
  Filter,
  Globe2,
  HeartHandshake,
  LockKeyhole,
  MapPin,
  Network,
  Search,
  Sparkles,
  UsersRound,
} from "lucide-react";

const assetMark = "/manus-storage/portfodia-user-logo_5bb4fd07.jpg";

type JourneyId = "opportunity" | "community" | "portfolio";

type Journey = {
  id: JourneyId;
  code: string;
  title: string;
  eyebrow: string;
  description: string;
  entry: string;
  color: string;
  icon: typeof Compass;
  steps: string[];
};

const journeys: Journey[] = [
  {
    id: "opportunity",
    code: "JOURNEY C",
    title: "Discover and participate in an opportunity.",
    eyebrow: "OPPORTUNITY LOOP",
    description: "Find the next meaningful move, participate with confidence, and carry the experience back into your Career Identity.",
    entry: "Personal Workspace / Opportunities",
    color: "#F59E0B",
    icon: Compass,
    steps: ["Browse", "Understand", "Participate", "Track", "Record"],
  },
  {
    id: "community",
    code: "JOURNEY D",
    title: "Participate in a community.",
    eyebrow: "COMMUNITY LOOP",
    description: "Join a structured space built around shared progress, then choose one useful action to take next.",
    entry: "Personal Workspace / Communities",
    color: "#8B5CF6",
    icon: UsersRound,
    steps: ["Discover", "Understand", "Join", "Act", "Reflect"],
  },
  {
    id: "portfolio",
    code: "JOURNEY E",
    title: "Create a Career Portfolio.",
    eyebrow: "PORTFOLIO LOOP",
    description: "Turn the latest trusted parts of your Career Identity into a focused, generated view for the opportunity ahead.",
    entry: "Career Identity / Portfolios",
    color: "#C2410C",
    icon: BriefcaseBusiness,
    steps: ["Purpose", "Select", "Generate", "Preview", "Share"],
  },
];

const stepsByJourney: Record<JourneyId, Array<{ label: string; goal: string; title: string; body: string; action: string; icon: typeof Compass; status: string }>> = {
  opportunity: [
    { label: "01", goal: "Orient", title: "Start from your workspace.", body: "Portfodia brings relevant opportunities forward using your Career Identity, skills, communities, and saved interests.", action: "Open Opportunities", icon: Network, status: "READY / PERSONALIZED" },
    { label: "02", goal: "Explore", title: "Browse with useful signals.", body: "Search by type, location, Career Segment, organization, Community, date, and status — then let PortAI explain why a result may fit.", action: "Browse opportunities", icon: Search, status: "FILTERS / 06 AVAILABLE" },
    { label: "03", goal: "Decide", title: "Understand before you act.", body: "See the publisher, requirements, timeline, related Communities, and how participation can strengthen your Career Identity.", action: "Review details", icon: BadgeCheck, status: "TRUST / PUBLISHER VERIFIED" },
    { label: "04", goal: "Participate", title: "Take one meaningful action.", body: "Apply, express interest, or participate with a guided flow. Attach a relevant Career Portfolio when it helps — never because a form demands it.", action: "Apply / participate", icon: ArrowUpRight, status: "ACTION / LOW FRICTION" },
    { label: "05", goal: "Carry forward", title: "Turn participation into proof.", body: "After completion, review the Workforce Experience and accept a transparent Workforce Record that can strengthen your Career Identity.", action: "Create Workforce Record", icon: FileCheck2, status: "LOOP / RECORD READY" },
  ],
  community: [
    { label: "01", goal: "Orient", title: "Find a space with purpose.", body: "Recommendations use your Career Segment, interests, records, location, and organization affiliation — not popularity alone.", action: "Discover communities", icon: Network, status: "MATCH / CONTEXTUAL" },
    { label: "02", goal: "Understand", title: "See how the community works.", body: "Review purpose, administrators, member preview, related Opportunities, Activities, Programmes, and join requirements.", action: "View community details", icon: HeartHandshake, status: "TRUST / ROLE-AWARE" },
    { label: "03", goal: "Join", title: "Know your status.", body: "Join open spaces immediately or send a clear request. Invitations and pending states stay visible so there is no ambiguity.", action: "Join community", icon: UsersRound, status: "STATUS / JOINED OR PENDING" },
    { label: "04", goal: "Act", title: "Know what to do next.", body: "The Community Home prioritizes announcements, upcoming activities, shared opportunities, and related records — not an endless social feed.", action: "Choose an activity", icon: CalendarDays, status: "NEXT / ONE ACTION" },
    { label: "05", goal: "Reflect", title: "Keep ownership clear.", body: "Participation can surface a Workforce Record, while your Career Identity remains yours — the community supports progress, it does not own it.", action: "Review my record", icon: LockKeyhole, status: "OWNERSHIP / YOUR IDENTITY" },
  ],
  portfolio: [
    { label: "01", goal: "Focus", title: "Start from the source of truth.", body: "Your Career Identity is the single starting point. Portfodia generates a focused view; it never creates a second identity beside it.", action: "Generate a portfolio", icon: BadgeCheck, status: "SOURCE / CAREER IDENTITY" },
    { label: "02", goal: "Purpose", title: "Choose who this is for.", body: "Select a Career Segment or specific purpose such as a job application, internship, scholarship, or consulting opportunity.", action: "Choose purpose", icon: Compass, status: "CONTEXT / 06 SEGMENTS" },
    { label: "03", goal: "Select", title: "Let the right proof rise.", body: "PortAI pre-selects relevant records, skills, projects, and achievements. You stay in control with clear Created by and Supported by indicators.", action: "Review selected records", icon: FileCheck2, status: "CONTROL / YOU DECIDE" },
    { label: "04", goal: "Generate", title: "Create without designing.", body: "One action turns trusted identity data into a professional portfolio layout, with progress visible and no manual page-building required.", action: "Generate preview", icon: Sparkles, status: "GENERATING / PORTAI ASSISTS" },
    { label: "05", goal: "Share", title: "Publish the latest view.", body: "Preview, apply light customization where available, then publish or copy a link. The portfolio always reflects the latest Career Identity.", action: "Preview and share", icon: Globe2, status: "PRIVACY / LATEST VERSION" },
  ],
};

function Mark() {
  return <span className="journey-brand"><img src={assetMark} alt="" aria-hidden="true" /><b>Portfodia</b></span>;
}

function StatusPill({ children, color }: { children: React.ReactNode; color: string }) {
  return <span className="journey-status" style={{ "--journey-accent": color } as React.CSSProperties}><i />{children}</span>;
}

export default function JourneyFlows() {
  const [activeJourney, setActiveJourney] = useState<JourneyId>("opportunity");
  const [activeStep, setActiveStep] = useState(0);
  const journey = journeys.find((item) => item.id === activeJourney) ?? journeys[0];
  const steps = stepsByJourney[activeJourney];
  const step = steps[activeStep];
  const Icon = step.icon;
  const JourneyIcon = journey.icon;
  const progress = useMemo(() => `${Math.round(((activeStep + 1) / steps.length) * 100)}%`, [activeStep, steps.length]);

  function selectJourney(id: JourneyId) {
    setActiveJourney(id);
    setActiveStep(0);
  }

  return (
    <div className="journey-shell" style={{ "--journey-accent": journey.color } as React.CSSProperties}>
      <header className="journey-header">
        <a href="/" aria-label="Return to Portfodia home"><Mark /></a>
        <nav><a href="/">Home</a><a className="is-current" href="/journeys">Journeys</a><a href="/#solutions">The system</a><a href="/#why">Why Portfodia</a></nav>
        <a className="journey-header-cta" href="/#start">Get started free <ArrowUpRight size={15} /></a>
      </header>

      <main>
        <section className="journey-hero">
          <div className="journey-hero-copy">
            <a className="journey-back" href="/"><ArrowLeft size={14} /> Back to Portfodia</a>
            <p className="journey-eyebrow"><span /> WORKFLOW LIBRARY / VERSION 1.0 FOUNDATION</p>
            <h1>Make the next step<br /><em>feel possible.</em></h1>
            <p className="journey-lede">Three guided journeys for the moments that move a workforce story forward — discover, participate, generate, and carry trusted progress with you.</p>
            <div className="journey-hero-meta"><span><b>03</b> guided flows</span><span><b>01</b> meaningful action at a time</span><span><b>∞</b> progress returns to identity</span></div>
          </div>
          <div className="journey-map-card">
            <div className="journey-map-top"><span>PORTFODIA / JOURNEY MAP</span><span>LIVE / 003</span></div>
            <div className="journey-map-line journey-map-line--one" /><div className="journey-map-line journey-map-line--two" /><div className="journey-map-line journey-map-line--three" />
            <div className="journey-map-node journey-map-node--source"><BadgeCheck size={16} /><span>Career Identity</span></div>
            <div className="journey-map-node journey-map-node--focus"><JourneyIcon size={18} /><span>{journey.eyebrow}</span></div>
            <div className="journey-map-node journey-map-node--outcome"><FileCheck2 size={16} /><span>Workforce Record</span></div>
            <div className="journey-map-coords">50°51′ N<br />1°17′ W</div>
            <StatusPill color={journey.color}>PORTAI ASSISTS / PEOPLE DECIDE</StatusPill>
          </div>
        </section>

        <section className="journey-selector-section">
          <div className="journey-section-heading"><div><p className="journey-eyebrow"><span /> 01 / SELECT A FLOW</p><h2>Start with the moment<br /><em>that matters now.</em></h2></div><p>Every flow is designed to answer one question: <strong>what should I do next?</strong></p></div>
          <div className="journey-selector-grid">{journeys.map((item) => { const ItemIcon = item.icon; const selected = activeJourney === item.id; return <button key={item.id} className={`journey-selector ${selected ? "is-active" : ""}`} onClick={() => selectJourney(item.id)} style={{ "--item-accent": item.color } as React.CSSProperties}><span className="journey-selector-code">{item.code}</span><ItemIcon size={22} /><strong>{item.title}</strong><small>{item.description}</small><span className="journey-selector-link">Open flow <ArrowRight size={14} /></span></button>; })}</div>
        </section>

        <section className="journey-workspace">
          <div className="journey-workspace-top"><div><p className="journey-eyebrow"><span /> 02 / GUIDED EXPERIENCE</p><h2>{journey.title}</h2><p className="journey-entry"><span>ENTRY POINT</span> {journey.entry}</p></div><StatusPill color={journey.color}>{journey.code} / {progress} COMPLETE</StatusPill></div>
          <div className="journey-progress"><div className="journey-progress-track"><span style={{ width: progress }} /></div><div className="journey-progress-steps">{journey.steps.map((label, index) => <button key={label} className={index === activeStep ? "is-active" : index < activeStep ? "is-done" : ""} onClick={() => setActiveStep(index)}><span>{index < activeStep ? <Check size={12} /> : `0${index + 1}`}</span>{label}</button>)}</div></div>
          <div className="journey-screen-grid">
            <aside className="journey-step-list"><div className="journey-step-list-label">FLOW / {journey.code.replace("JOURNEY ", "")}</div>{steps.map((item, index) => { const StepIcon = item.icon; return <button key={item.label} className={index === activeStep ? "is-active" : index < activeStep ? "is-done" : ""} onClick={() => setActiveStep(index)}><span>{index < activeStep ? <Check size={13} /> : item.label}</span><div><b>{item.goal}</b><small>{item.title}</small></div><ChevronRight size={15} /></button>; })}</aside>
            <article className="journey-screen"><div className="journey-screen-chrome"><span>PERSONAL WORKSPACE / {step.goal.toUpperCase()}</span><span><LockKeyhole size={12} /> PRIVATE BY DEFAULT</span></div><div className="journey-screen-content"><div className="journey-screen-icon"><Icon size={27} /></div><p className="journey-eyebrow"><span /> {step.label} / {step.goal}</p><h3>{step.title}</h3><p className="journey-screen-body">{step.body}</p><div className="journey-screen-actions"><button className="journey-primary" onClick={() => setActiveStep((current) => Math.min(current + 1, steps.length - 1))}>{step.action} <ArrowUpRight size={16} /></button><button className="journey-secondary" onClick={() => setActiveStep((current) => Math.max(current - 1, 0))} disabled={activeStep === 0}><ArrowLeft size={15} /> Previous</button></div></div><div className="journey-screen-footer"><StatusPill color={journey.color}>{step.status}</StatusPill><span><Sparkles size={14} /> PortAI can explain this step</span></div></article>
          </div>
        </section>

        <section className="journey-principles"><div className="journey-section-heading"><div><p className="journey-eyebrow"><span /> 03 / DESIGN GUARDRAILS</p><h2>Trust is part of<br /><em>the interface.</em></h2></div><p>Progressive disclosure keeps each page calm, while ownership, privacy, and record history stay visible when they matter.</p></div><div className="journey-principle-grid"><article><span>01</span><LockKeyhole size={18} /><h3>People decide.</h3><p>PortAI recommends, explains, and guides. It never takes control of the journey.</p></article><article><span>02</span><BadgeCheck size={18} /><h3>Proof stays legible.</h3><p>Created by, supported by, and accepted by indicators keep trust transparent.</p></article><article><span>03</span><CircleAlert size={18} /><h3>States stay honest.</h3><p>Empty, pending, success, and error moments always say what happened and what comes next.</p></article><article><span>04</span><MapPin size={18} /><h3>Progress travels.</h3><p>Participation can strengthen Career Identity, while the individual keeps ownership of their story.</p></article></div></section>

        <section className="journey-endcap"><p className="journey-eyebrow"><span /> 04 / THE LOOP CLOSES</p><h2>One meaningful action<br /><em>becomes trusted momentum.</em></h2><p>Choose a flow above, move through the next step, and return to the part of Portfodia that grows with you.</p><a className="journey-primary" href="/#start">Start with Portfodia <ArrowUpRight size={16} /></a></section>
      </main>
      <footer className="journey-footer"><a href="/"><Mark /></a><span>© 2026 Portfodia / Trusted workforce journeys</span><a href="/">Return home <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}
