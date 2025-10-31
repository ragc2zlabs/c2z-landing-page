"use client";

import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

export interface DockItemConfig {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface DockProps extends React.HTMLAttributes<HTMLDivElement> {
  items: DockItemConfig[];
}

export function Dock({ items, className, ...props }: DockProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <div className={cn("mx-auto flex w-full max-w-4xl justify-center", "sticky top-6 z-50", className)} {...props}>
      <nav
        className={cn(
          "flex items-center gap-4 rounded-full border border-border/60 bg-white/70 px-5 py-3 text-sm shadow-[0_20px_60px_-25px_rgba(255,90,76,0.5)] backdrop-blur-xl"
        )}
      >
        {items.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative flex flex-col items-center text-xs font-medium text-foreground/70 transition-transform duration-200 ease-out"
            )}
            aria-label={item.label}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              transform:
                hoveredIndex === index
                  ? "translateY(-6px) scale(1.1)"
                  : hoveredIndex !== null
                  ? "scale(0.92)"
                  : "scale(1)",
            }}
            scroll={true}
          >
            <span
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border border-transparent transition-colors",
                hoveredIndex === index
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-white/90 text-foreground/70"
              )}
            >
              {item.icon}
            </span>
            <span
              className={cn(
                "mt-1 transition-opacity duration-200",
                hoveredIndex === index ? "opacity-100" : "opacity-60"
              )}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
