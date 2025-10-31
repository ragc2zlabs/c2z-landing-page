import * as React from "react"

import { cn } from "@/lib/utils"

type GlobeProps = React.HTMLAttributes<HTMLDivElement>

export function Globe({ className, ...props }: GlobeProps) {
  return (
    <div
      className={cn(
        "relative aspect-square w-full max-w-[22rem] rounded-full bg-gradient-to-br from-primary/70 via-primary/40 to-transparent",
        "shadow-[0_25px_120px_-50px_rgba(255,90,76,0.75)]",
        "border border-white/30 backdrop-blur-3xl",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-[12%] rounded-full border border-white/40" />
      <div className="absolute inset-[26%] rounded-full border border-white/25" />
      <div className="absolute inset-[40%] rounded-full border border-white/15" />

      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,140,130,0.45),transparent_60%)]" />
      </div>

      <div className="absolute inset-0 animate-[spin_24s_linear_infinite]">
        <GlobeLines />
      </div>

      <div
        className="absolute inset-2 animate-[spin_28s_linear_infinite]"
        style={{ animationDirection: "reverse" }}
      >
        <GlobeLines className="opacity-60" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-24 w-24 animate-[pulse_4s_ease-in-out_infinite] rounded-full bg-white/20 blur-2xl" />
      </div>
    </div>
  )
}

function GlobeLines({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={cn("h-full w-full text-white/35", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
    >
      {Array.from({ length: 9 }).map((_, index) => {
        const offset = 20 + index * 20
        return (
          <ellipse
            key={`ellipse-${offset}`}
            cx="200"
            cy="200"
            rx={offset + 50}
            ry={180}
            transform={`rotate(${index * 12} 200 200)`}
          />
        )
      })}
    </svg>
  )
}
