import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** direction of travel while hidden */
  from?: "up" | "left" | "right" | "scale";
}

const HIDDEN: Record<NonNullable<RevealProps["from"]>, string> = {
  up: "translate-y-10",
  left: "-translate-x-12",
  right: "translate-x-12",
  scale: "scale-95",
};

export function Reveal({ children, delay = 0, className = "", from = "up" }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0" : `opacity-0 blur-[6px] ${HIDDEN[from]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
