import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in seconds — pass i * 0.06 when revealing a list */
  delay?: number;
  className?: string;
}

/**
 * Wraps content that should fade and lift into place as it enters the
 * viewport. This is the one scroll-motion pattern used across the whole
 * site — reach for this rather than inventing a new animation per section,
 * the same way every page reaches for the same Stamp component rather than
 * a new badge design. Respects prefers-reduced-motion automatically.
 */
export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
