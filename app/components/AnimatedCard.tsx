"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function AnimatedCard({ 
  children, 
  className = "",
  index = 0,
}: { 
  children: React.ReactNode
  className?: string
  index?: number
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
