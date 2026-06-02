"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Tag to render. Defaults to a <div>. */
  as?: ElementType;
  /** Any extra DOM props (e.g. data-badge, style) are forwarded to the tag. */
  [key: `data-${string}`]: unknown;
  style?: React.CSSProperties;
}

/**
 * Fades + slides its content in when it scrolls into view (mirrors the
 * IntersectionObserver behaviour of the original landing.js). Honours
 * prefers-reduced-motion via the CSS in globals.css.
 */
export function Reveal({ children, className, as: Tag = "div", ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal${shown ? " in" : ""}${className ? ` ${className}` : ""}`} {...rest}>
      {children}
    </Tag>
  );
}
