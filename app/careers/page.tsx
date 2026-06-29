import { ArrowRight, Briefcase, Globe2, HeartHandshake, Lightbulb, Sparkles, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dock } from "@/components/ui/dock";

const dockItems = [
  { label: "Home", href: "/", icon: <Sparkles className="h-5 w-5" /> },
  { label: "Open Roles", href: "#roles", icon: <Briefcase className="h-5 w-5" /> },
  { label: "Life @ C2Z", href: "#culture", icon: <Users className="h-5 w-5" /> },
  { label: "Apply", href: "#apply", icon: <ArrowRight className="h-5 w-5" /> },
];

const jobOpenings = [
  {
    title: "Full Stack Developer",
    location: "Remote · Global",
    type: "Full-time",
    about:
      "Own the end-to-end delivery of AI-powered web applications, partnering closely with product, design, and ML engineers.",
    responsibilities: [
      "Architect and ship modular Next.js applications that leverage GenAI services and data pipelines.",
      "Design resilient APIs in Node.js/TypeScript with strong observability and security practices.",
      "Collaborate with MLOps to productionize AI features, instrumentation, and experimentation frameworks.",
    ],
    qualities: ["Next.js", "TypeScript", "Node.js", "Edge Functions", "RAG Workflows"],
    applyHref: "mailto:careers@c2zlabs.com?subject=Application%20-%20Full%20Stack%20Developer",
  },
  {
    title: "UI/UX Designer",
    location: "Remote · Global",
    type: "Full-time",
    about: "Craft intuitive AI experiences that are beautiful, trustworthy, and centered around human outcomes.",
    responsibilities: [
      "Lead discovery workshops to map user journeys and prioritize high-impact AI moments.",
      "Prototype interactive flows using Magic UI + shadcn building blocks for rapid stakeholder feedback.",
      "Deliver polished design systems that translate seamlessly to engineering execution.",
    ],
    qualities: ["Product Discovery", "Design Systems", "Prototyping", "Storytelling"],
    applyHref: "mailto:careers@c2zlabs.com?subject=Application%20-%20UI%2FUX%20Designer",
  },
  {
    title: "Backend/AI Engineer",
    location: "Remote · Global",
    type: "Full-time",
    about: "Build scalable backend systems that integrate cutting-edge AI models into reliable, secure services.",
    responsibilities: [
      "Develop and maintain microservices in Python/TypeScript that interface with LLMs and vector databases.",
      "Implement robust data pipelines for training, evaluating, and monitoring AI model performance.",
      "Collaborate with frontend and MLOps teams to deliver end-to-end AI solutions.",
    ],
    qualities: ["Python", "TypeScript", "Microservices", "LLM Integration", "Data Pipelines"],
    applyHref: "mailto:careers@c2zlabs.com?subject=Application%20-%20Backend%20and%20AI%20Engineer",
  },
];

const cultureHighlights = [
  {
    title: "Operate like owners",
    description:
      "You will shape roadmap, process, and outcomes. We celebrate experiments, retrospectives, and shared wins.",
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
  },
  {
    title: "Global collaboration",
    description: "Teams in Bengaluru and Pleasanton, CA sync daily, pairing design, product, ML, and engineering craft.",
    icon: <Globe2 className="h-6 w-6 text-primary" />,
  },
  {
    title: "Human-first AI",
    description: "We build responsible systems with structured guardrails, accessibility, and measurable customer joy.",
    icon: <HeartHandshake className="h-6 w-6 text-primary" />,
  },
];

export default function CareersPage() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-5xl flex-col gap-20 px-4 pb-24 pt-16 sm:px-8">
      <Dock items={dockItems} />

      <section className="mt-16 space-y-6 text-center">
        <p className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-xs uppercase tracking-[0.36em] text-primary">
          We are hiring
        </p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
          Shape the future of human-centered AI at C2Z Labs.
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-foreground/80">
          Join a multidisciplinary crew of builders, designers, and strategists helping ambitious companies ship AI that
          customers trust. We work in focused squads, pair often, and celebrate thoughtful craft.
        </p>
        <Button asChild className="mx-auto gap-2 text-base">
          <a href="mailto:careers@c2zlabs.com">
            Introduce yourself
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </section>

      <section id="roles" className="space-y-12">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.36em] text-primary/80">Open Roles</p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Current opportunities to join the team.
          </h2>
        </div>

        <div className="grid gap-8">
          {jobOpenings.map((job) => (
            <Card
              key={job.title}
              className="border-border/60 bg-white/80 shadow-[0_30px_80px_-65px_rgba(255,90,76,0.8)] backdrop-blur"
            >
              <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <CardTitle className="text-2xl">{job.title}</CardTitle>
                  <CardDescription className="mt-2 text-foreground/70">{job.about}</CardDescription>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  <span className="rounded-full border border-border/70 bg-white/70 px-3 py-1">{job.location}</span>
                  <span className="rounded-full border border-border/70 bg-white/70 px-3 py-1">{job.type}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3 text-sm text-foreground/80">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">You will</p>
                  <ul className="space-y-2">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 text-sm text-foreground/80">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">We are excited if</p>
                  <div className="flex flex-wrap gap-2">
                    {job.qualities.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/60 bg-white/70 px-3 py-1 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full gap-2 text-base sm:w-auto">
                  <a href={job.applyHref}>
                    Apply for this role
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="culture" className="space-y-12">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.36em] text-primary/80">Life at C2Z Labs</p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">How we work together.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cultureHighlights.map((highlight) => (
            <Card key={highlight.title} className="border-border/60 bg-white/70 backdrop-blur">
              <CardHeader className="space-y-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-primary/10">
                  {highlight.icon}
                </div>
                <CardTitle className="text-lg">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/75">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="apply"
        className="space-y-6 rounded-3xl border border-border/50 bg-white/75 p-8 text-center shadow-[0_35px_100px_-70px_rgba(255,90,76,0.85)] backdrop-blur"
      >
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Don&apos;t see the perfect fit yet?</h2>
        <p className="mx-auto max-w-2xl text-lg text-foreground/80">
          We are always eager to meet curious builders who care about crafting responsible, lovable AI. Reach out with
          your portfolio, repos, or a note about what you want to learn next.
        </p>
        <Button asChild className="mx-auto gap-2 text-base">
          <a href="mailto:careers@c2zlabs.com">
            Send us your profile
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </section>
    </main>
  );
}
