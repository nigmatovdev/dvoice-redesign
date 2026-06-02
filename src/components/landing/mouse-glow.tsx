"use client";

import { useEffect, useRef } from "react";

/**
 * Soft radial glows that follow the cursor with eased motion, sitting behind all
 * content (z-index: -1). Pure decoration — pointer-events none, aria-hidden, and
 * disabled for users who prefer reduced motion.
 */
export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    // Eased follow: current position lerps toward the pointer target each frame.
    const target = { x: 0.5, y: 0.3 };
    const cur = { x: 0.5, y: 0.3 };
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX / window.innerWidth;
      target.y = e.clientY / window.innerHeight;
    };

    const tick = () => {
      cur.x += (target.x - cur.x) * 0.06;
      cur.y += (target.y - cur.y) * 0.06;
      el.style.setProperty("--mx", `${(cur.x * 100).toFixed(2)}%`);
      el.style.setProperty("--my", `${(cur.y * 100).toFixed(2)}%`);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <div ref={ref} className="mouse-glow" aria-hidden="true" />;
}
