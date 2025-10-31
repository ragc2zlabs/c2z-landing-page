import * as React from "react"

import { cn } from "@/lib/utils"

interface AnimatedBeamProps extends React.HTMLAttributes<HTMLDivElement> {
  fromLabel?: string
  toLabel?: string
}

export function AnimatedBeam({
  className,
  fromLabel = "Voice",
  toLabel = "Insight",
  ...props
}: AnimatedBeamProps) {
  return (
    <div
      className={cn(
        "relative isolate flex w-full max-w-2xl items-center justify-between overflow-hidden rounded-[2.5rem] border border-border/60 bg-white/70 px-8 py-6 shadow-[0_25px_80px_-45px_rgba(255,90,76,0.7)] backdrop-blur-xl",
        className,
      )}
      {...props}
    >
      <BeamNode label={fromLabel} />
      <div className="relative h-[6px] flex-1 overflow-hidden rounded-full bg-gradient-to-r from-transparent via-primary/20 to-transparent">
        <div className="absolute inset-0">
          <div className="absolute inset-y-[-60%] left-0 w-1/3 min-w-[120px] animate-[beam_3.5s_ease-in-out_infinite] bg-gradient-to-r from-white via-primary to-transparent opacity-90 blur-[2px]" />
          <div
            className="absolute inset-y-[-60%] left-0 w-1/4 min-w-[90px] animate-[beam_3.5s_ease-in-out_infinite] bg-gradient-to-r from-white/80 via-primary/80 to-transparent opacity-80 blur-sm"
            style={{ animationDelay: "900ms" }}
          />
        </div>
      </div>
      <BeamNode label={toLabel} align="end" />
    </div>
  )
}

function BeamNode({ label, align = "start" }: { label: string; align?: "start" | "end" }) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-gradient-to-br from-white via-white to-white/70 px-5 py-3 text-center shadow-[0_12px_40px_-28px_rgba(255,90,76,0.75)]",
        align === "end" ? "text-right" : "text-left",
      )}
    >
      <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">AI</div>
      <div className="text-base font-semibold text-foreground">{label}</div>
    </div>
  )
}
