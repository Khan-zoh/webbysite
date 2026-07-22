"use client";

import { MotionConfig } from "framer-motion";

/**
 * Makes ALL Framer Motion animations honor the user's
 * "prefers-reduced-motion" setting (disables transform/layout motion).
 */
export default function Providers({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
