import {
  ArrowRight,
  Brain,
  Briefcase,
  Compass,
  MessageSquare,
  Mic2,
  PhoneCall,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dock } from "@/components/ui/dock";
import { Globe } from "@/components/ui/globe";
import { Label } from "@/components/ui/label";
import { Marquee } from "@/components/ui/marquee";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#home", icon: <Sparkles className="h-5 w-5" /> },
  { label: "About", href: "#about", icon: <Compass className="h-5 w-5" /> },
  { label: "Team", href: "#team", icon: <Users className="h-5 w-5" /> },
  { label: "Products", href: "#products", icon: <Rocket className="h-5 w-5" /> },
  { label: "Why C2Z", href: "#why", icon: <Brain className="h-5 w-5" /> },
  { label: "Contact", href: "#contact", icon: <PhoneCall className="h-5 w-5" /> },
  { label: "Careers", href: "/careers", icon: <Briefcase className="h-5 w-5" /> },
];

const highlightLogos = ["OpenAI Partner", "Azure AI", "Anthropic", "AWS Innovate", "Hugging Face", "LangChain Experts"];

const teamMembers = [
  {
    name: "Jithendra Chowdary",
    role: "Founder & Chief Architect",
    bio: "Leading the vision for enterprise-ready AI platforms that are secure, scalable, and humane.",
  },
  {
    name: "Mira Patel",
    role: "Head of Product",
    bio: "Translating ambitious business goals into lovable AI experiences across industries.",
  },
  {
    name: "Leon Vargas",
    role: "Lead ML Engineer",
    bio: "Grounding cutting-edge research into production systems with measurable impact.",
  },
];

const productHighlights = [
  "Adaptive speech intelligence that understands sentiment, tone, and context.",
  "Real-time coaching for sales, customer support, and operations teams in 40+ languages.",
  "Privacy-first architecture with enterprise grade governance and compliance tooling.",
];

const whyChooseReasons = [
  {
    title: "Strategy to Scale",
    description:
      "We partner from discovery workshops to production deployments, ensuring AI initiatives land value fast.",
  },
  {
    title: "Trusted AI Guardrails",
    description:
      "Robust governance, testing harnesses, and human-in-the-loop approvals keep your brand safe and compliant.",
  },
  {
    title: "Composable Tooling",
    description:
      "Shadcn and Magic UI backed components give your teams reusable building blocks for rapid experimentation.",
  },
  {
    title: "Obsessed with Adoption",
    description:
      "Training, playbooks, and embedded success squads help your people fall in love with their AI copilot.",
  },
];

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-4 pb-24 pt-12 sm:px-8">
      <Dock items={navItems} />

      <section id="home" className="mt-20 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary">
            <Sparkles className="h-4 w-4" />
            <span>AI Services Crafted for Trust & Speed</span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            C2Z Labs helps ambitious teams ship AI products that customers adore.
          </h1>
          <p className="max-w-xl text-lg text-foreground/80">Harness the Power of AI to Drive Innovation and Growth.</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button className="gap-2 text-base">
              Talk to an AI specialist
              <ArrowRight />
            </Button>
            <Button variant="outline" className="text-base">
              Explore our playbooks
            </Button>
          </div>
          <div className="rounded-3xl border border-white/40 bg-white/60 p-5 shadow-[0_25px_80px_-60px_rgba(255,90,76,0.75)] backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              We deliver outcomes like
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-foreground/80 sm:grid-cols-2">
              <li>• 35% faster feature delivery with AI-augmented squads</li>
              <li>• 4.8/5 end-user CSAT on enterprise AI rollouts</li>
              <li>• 60% reduction in manual reporting cycles</li>
              <li>• Zero critical incidents via our AI governance suite</li>
            </ul>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -translate-y-10 animate-[pulse_7s_ease-in-out_infinite] rounded-full bg-primary/20 blur-3xl" />
          <Globe className="relative" />
        </div>
      </section>

      <section aria-label="partners marquee">
        <div className="rounded-3xl border border-border/60 bg-white/60 px-4 py-6 shadow-[0_20px_70px_-60px_rgba(255,90,76,0.75)] backdrop-blur">
          <Marquee pauseOnHover className="text-sm font-medium text-foreground/70">
            {highlightLogos.map((label) => (
              <span key={label} className="mx-6 flex items-center gap-2 uppercase tracking-[0.28em]">
                <span className="h-2 w-2 rounded-full bg-primary/80" />
                {label}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      <section id="about" className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.36em] text-primary/80">About Us</p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Building AI systems that feel personal, perform at scale, and respect your brand.
          </h2>
          <p className="text-lg text-foreground/80">
            C2Z Labs is an AI services studio partnering with growth-stage and enterprise teams to invent
            transformational experiences. We orchestrate product strategists, designers, ML engineers, and domain
            experts to turn friction into delight—all while upholding the guardrails your customers expect.
          </p>
          <p className="text-lg text-foreground/70">
            Whether you are modernizing legacy processes, crafting net-new copilots, or scaling data pipelines, we bring
            opinionated playbooks, reusable components, and a bias for action that keeps momentum high.
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border border-border/50 bg-white/70 p-8 shadow-[0_20px_80px_-70px_rgba(255,90,76,0.8)] backdrop-blur">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40">
              <MessageSquare className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Engagement Model</p>
              <h3 className="text-xl font-semibold text-foreground">Vision workshops to launch squads</h3>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-foreground/80">
            Every engagement starts with alignment: mapping customer moments, identifying automation leverage, and
            designing the first lovable release. From there we embed pods of strategists, product designers, and
            engineers to deliver measurable wins in 6-week increments.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/40 bg-white/80 p-4 text-sm text-foreground/80">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Industries</p>
              <p>Fintech, Healthcare, HR Tech, Consumer, and B2B SaaS</p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-white/80 p-4 text-sm text-foreground/80">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Capabilities</p>
              <p>GenAI strategy, product discovery, ML ops, prompt engineering</p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="space-y-12">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.36em] text-primary/80">Meet the Team</p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Specialists obsessed with launching lovable AI products.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.name} className="h-full bg-white/85">
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription className="text-primary/80">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/75">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="products" className="space-y-12">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.36em] text-primary/80">Products</p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Voisely AI</h2>
          <p className="max-w-3xl text-lg text-foreground/80">
            Voisely is the conversational intelligence platform built by C2Z Labs. It answers every call in natural,
            multilingual voices, books orders and reservations, and routes complex requests to your team. Keep your data
            private and set your own rules.
          </p>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <AnimatedBeam className="flex-1" fromLabel="Live Calls" toLabel="Insight Hub" />
          <div className="flex-1 space-y-6 rounded-3xl border border-border/50 bg-white/70 p-8 shadow-[0_25px_80px_-65px_rgba(255,90,76,0.85)] backdrop-blur">
            <h3 className="text-2xl font-semibold text-foreground">Why Voisely wins</h3>
            <ul className="space-y-3 text-sm text-foreground/75">
              {productHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary/70" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <Button className="gap-2">
              See Voisely in action
              <Mic2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section id="why" className="space-y-12">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.36em] text-primary/80">Why choose C2Z Labs</p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            We blend consulting rigor with product studio momentum.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {whyChooseReasons.map((reason) => (
            <Card key={reason.title} className="h-full bg-white/85">
              <CardHeader>
                <CardTitle>{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/75">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="space-y-12 rounded-3xl border border-border/40 bg-white/70 p-8 shadow-[0_25px_90px_-70px_rgba(255,90,76,0.85)] backdrop-blur"
      >
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.36em] text-primary/80">Contact</p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Let&apos;s co-create your next AI breakthrough.
          </h2>
          <p className="max-w-2xl text-lg text-foreground/80">
            Tell us about your team&apos;s goals, the customer moments you want to reimagine, or the data workflows you
            need to unlock. We&apos;ll respond within two business days.
          </p>
        </div>
        <form className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Your name</Label>
            <Input id="name" name="name" placeholder="Alex Morgan" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Work email</Label>
            <Input id="email" name="email" type="email" placeholder="alex@company.com" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" placeholder="C2Z Labs" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="message">How can we help?</Label>
            <Textarea id="message" name="message" placeholder="Share your use case, success metrics, or timeline…" />
          </div>
          <div className="md:col-span-2">
            <Button type="submit" className="w-full sm:w-auto">
              Send message
            </Button>
          </div>
        </form>
      </section>

      <footer className="space-y-6 border-t border-border/40 pt-10 text-sm text-foreground/70">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold flex gap-2 items-center text-2xl">
              <Image src="/profile.png" width={40} height={40} alt="Picture of the author" />
              {/* Labs */}
            </p>
            <p>AI services studio headquartered in San Francisco. Located in Bengaluru & Hyderabad.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-primary">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <p>© {new Date().getFullYear()} C2Z Labs. All rights reserved.</p>
      </footer>
    </main>
  );
}
