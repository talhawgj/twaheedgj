"use client";

import dynamic from "next/dynamic";

// Lazy-load the heavy SVG orbit animation so it never blocks LCP.
// Being in a Client Component allows ssr:false.
const SatelliteOrbitAnimationLazy = dynamic(
  () =>
    import("./GISVisualizations").then((m) => ({
      default: m.SatelliteOrbitAnimation,
    })),
  { ssr: false, loading: () => null }
);

const DataFlowMapAnimationLazy = dynamic(
  () =>
    import("./GISVisualizations").then((m) => ({
      default: m.DataFlowMapAnimation,
    })),
  { ssr: false, loading: () => null }
);

export function LazySatelliteOrbitAnimation() {
  return <SatelliteOrbitAnimationLazy />;
}

export function LazyDataFlowMapAnimation() {
  return <DataFlowMapAnimationLazy />;
}
