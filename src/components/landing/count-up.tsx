"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Final numeric value to land on. */
  target: number;
  /** Fixed decimal places shown throughout the animation. */
  decimals?: number;
  /** Prefix shown throughout, e.g. "+". */
  prefix?: string;
  /** Suffix shown throughout, e.g. "%". */
  suffix?: string;
  /** Thousands-grouping character, e.g. " " for "1 742". */
  grouping?: string;
  /** Animation length in ms. */
  duration?: number;
  className?: string;
}

function formatNumber(value: number, decimals: number, grouping: string): string {
  const fixed = value.toFixed(decimals);
  const [intPart, decPart] = fixed.split(".");
  const negative = intPart.startsWith("-");
  const digits = negative ? intPart.slice(1) : intPart;
  const groupedDigits = grouping
    ? digits.replace(/\B(?=(\d{3})+(?!\d))/g, grouping)
    : digits;
  const intStr = (negative ? "-" : "") + groupedDigits;
  return decPart !== undefined ? `${intStr}.${decPart}` : intStr;
}

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

/**
 * Animates a number counting up from 0 to `target` once, when it scrolls
 * into view. Formatting (decimals/prefix/suffix/grouping) is preserved on
 * every intermediate frame so the layout never jumps.
 */
export function CountUp({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  grouping = "",
  duration = 1200,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);
  const [display, setDisplay] = useState(() => formatNumber(0, decimals, grouping));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplay(formatNumber(target, decimals, grouping));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            io.disconnect();

            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = easeOutCubic(progress);
              setDisplay(formatNumber(target * eased, decimals, grouping));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, decimals, grouping, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
