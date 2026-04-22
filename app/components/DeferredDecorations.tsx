"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const RippleEffect = dynamic(
  () => import("./InteractiveEffects").then((mod) => ({ default: mod.RippleEffect })),
  { ssr: false, loading: () => null }
);

const CursorGlow = dynamic(
  () => import("./InteractiveEffects").then((mod) => ({ default: mod.CursorGlow })),
  { ssr: false, loading: () => null }
);

const BackgroundGISAnimation = dynamic(
  () => import("./GISVisualizations").then((mod) => ({ default: mod.BackgroundGISAnimation })),
  { ssr: false, loading: () => null }
);

export default function DeferredDecorations() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const firstFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setReady(true));
    });

    return () => window.cancelAnimationFrame(firstFrame);
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <>
      <RippleEffect />
      <CursorGlow />
      <BackgroundGISAnimation />
    </>
  );
}