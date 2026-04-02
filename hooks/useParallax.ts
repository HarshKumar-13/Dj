"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

/**
 * Returns a parallax Y-offset MotionValue for an element.
 * @param ref - React ref to the container element
 * @param speed - Parallax speed factor (default 0.15). Higher = more movement.
 */
export function useParallax(
  ref: RefObject<HTMLElement | null>,
  speed: number = 0.15
): MotionValue<string> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${speed * -100}%`, `${speed * 100}%`]
  );

  return y;
}

/**
 * Returns a scale MotionValue that goes from startScale to 1 as element enters viewport.
 */
export function useScrollScale(
  ref: RefObject<HTMLElement | null>,
  startScale: number = 1.08
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [startScale, 1]);
  return scale;
}
