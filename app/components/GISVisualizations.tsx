"use client";

import React from "react";

// Satellite Orbit Animation - Hero Section
export function SatelliteOrbitAnimation() {
  return (
    <div className="relative w-full h-[500px] mx-auto">
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-2xl"
        style={{ filter: "drop-shadow(0 0 60px rgba(255, 215, 0, 0.4))" }}
      >
        <defs>
          <radialGradient id="earthGradient" cx="35%" cy="35%">
            <stop offset="0%" stopColor="rgba(30, 144, 255, 0.8)" />
            <stop offset="50%" stopColor="rgba(20, 100, 200, 0.6)" />
            <stop offset="100%" stopColor="rgba(10, 50, 120, 0.4)" />
          </radialGradient>
          <linearGradient id="footprintGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 215, 0, 0)" />
            <stop offset="50%" stopColor="rgba(255, 215, 0, 0.6)" />
            <stop offset="100%" stopColor="rgba(255, 215, 0, 0)" />
          </linearGradient>
        </defs>

        {/* Earth globe background */}
        <circle cx="250" cy="250" r="100" fill="url(#earthGradient)" />

        {/* Continents - North America */}
        <path d="M 180 200 Q 190 190 200 200 Q 195 210 185 210 Q 180 205 180 200" fill="rgba(34, 197, 94, 0.7)" />
        {/* South America */}
        <path d="M 185 250 Q 195 240 200 260 Q 190 270 185 265 Q 183 260 185 250" fill="rgba(34, 197, 94, 0.7)" />
        {/* Africa */}
        <path d="M 230 220 Q 250 210 260 240 Q 250 270 230 260 Q 225 240 230 220" fill="rgba(34, 197, 94, 0.7)" />
        {/* Europe */}
        <path d="M 245 190 Q 260 185 270 200 Q 260 210 245 205 Q 243 198 245 190" fill="rgba(34, 197, 94, 0.7)" />
        {/* Asia */}
        <path d="M 280 180 Q 310 170 330 190 Q 310 210 280 200 Q 278 190 280 180" fill="rgba(34, 197, 94, 0.7)" />
        {/* Australia */}
        <path d="M 300 260 Q 315 255 320 275 Q 310 285 295 280 Q 298 270 300 260" fill="rgba(34, 197, 94, 0.7)" />

        {/* Earth outline and grid */}
        <circle cx="250" cy="250" r="100" fill="none" stroke="rgba(100, 200, 255, 0.3)" strokeWidth="1.5" />
        
        {/* Latitude lines */}
        <ellipse cx="250" cy="250" rx="100" ry="40" fill="none" stroke="rgba(255, 215, 0, 0.1)" strokeWidth="0.8" opacity="0.6" />
        <ellipse cx="250" cy="250" rx="100" ry="70" fill="none" stroke="rgba(255, 215, 0, 0.1)" strokeWidth="0.8" opacity="0.6" />

        {/* Longitude lines */}
        <line x1="250" y1="150" x2="250" y2="350" stroke="rgba(255, 215, 0, 0.1)" strokeWidth="0.8" opacity="0.4" />
        <line x1="200" y1="250" x2="300" y2="250" stroke="rgba(255, 215, 0, 0.1)" strokeWidth="0.8" opacity="0.4" />

        {/* Orbit path */}
        <ellipse cx="250" cy="250" rx="160" ry="130" fill="none" stroke="rgba(255, 215, 0, 0.25)" strokeWidth="2.5" strokeDasharray="6,6" />

        {/* Animated satellite */}
        <g className="animate-satellite-orbit">
          <circle cx="410" cy="250" r="8" fill="rgba(255, 215, 0, 0.95)" />
          <circle cx="410" cy="250" r="13" fill="none" stroke="rgba(255, 215, 0, 0.6)" strokeWidth="1.5" />
          {/* Satellite antenna */}
          <line x1="410" y1="242" x2="416" y2="236" stroke="rgba(255, 215, 0, 0.85)" strokeWidth="2" />
          <line x1="410" y1="258" x2="416" y2="264" stroke="rgba(255, 215, 0, 0.85)" strokeWidth="2" />
          {/* Solar panels */}
          <rect x="400" y="245" width="8" height="10" fill="rgba(255, 215, 0, 0.7)" />
        </g>

        {/* Ground footprint path */}
        <g className="animate-footprint-path">
          <path
            d="M 350 250 Q 310 190 250 170 Q 190 190 150 250"
            fill="none"
            stroke="url(#footprintGradient)"
            strokeWidth="3.5"
            opacity="0.85"
          />
        </g>

        {/* Ground track points */}
        <g className="animate-track-points">
          <circle cx="350" cy="250" r="3.5" fill="rgba(255, 215, 0, 0.9)" opacity="0.9" />
          <circle cx="310" cy="195" r="3" fill="rgba(255, 215, 0, 0.7)" opacity="0.7" />
          <circle cx="250" cy="170" r="3" fill="rgba(255, 215, 0, 0.5)" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

// Data Flow on Map - Skills Section
export function DataFlowMapAnimation() {
  return (
    <div className="relative w-full h-80 bg-gradient-to-b from-black via-emerald-950/20 to-black rounded-lg overflow-hidden border border-yellow-500/20">
      <svg viewBox="0 0 600 300" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 215, 0, 0.8)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.6)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Route 1 - GPS Trail */}
        <g className="animate-route-1">
          <path
            d="M 50 150 Q 150 100 250 120 T 400 180"
            fill="none"
            stroke="url(#routeGradient)"
            strokeWidth="3"
            filter="url(#glow)"
          />
        </g>

        {/* Route 2 - Second data flow */}
        <g className="animate-route-2">
          <path
            d="M 80 50 Q 180 80 280 70 T 480 110"
            fill="none"
            stroke="rgba(16, 185, 129, 0.6)"
            strokeWidth="2.5"
            opacity="0.7"
          />
        </g>

        {/* Animated breadcrumb trail - Route 1 */}
        <g className="animate-breadcrumbs-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <circle
              key={`crumb-1-${i}`}
              cx={50 + i * 87.5}
              cy={150 - i * 10}
              r="2.5"
              fill="rgba(255, 215, 0, 0.9)"
              opacity={1 - i * 0.15}
            />
          ))}
        </g>

        {/* Animated breadcrumb trail - Route 2 */}
        <g className="animate-breadcrumbs-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <circle
              key={`crumb-2-${i}`}
              cx={80 + i * 100}
              cy={50 + i * 5}
              r="2"
              fill="rgba(16, 185, 129, 0.8)"
              opacity={1 - i * 0.15}
            />
          ))}
        </g>

        {/* Data points with pulsing */}
        <g className="animate-data-points">
          <circle cx="50" cy="150" r="4" fill="rgba(255, 215, 0, 0.9)" className="animate-pulse" />
          <circle cx="250" cy="120" r="4" fill="rgba(255, 215, 0, 0.9)" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
          <circle cx="400" cy="180" r="4" fill="rgba(255, 215, 0, 0.9)" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
          <circle cx="80" cy="50" r="3" fill="rgba(16, 185, 129, 0.8)" className="animate-pulse" />
          <circle cx="280" cy="70" r="3" fill="rgba(16, 185, 129, 0.8)" className="animate-pulse" style={{ animationDelay: "0.25s" }} />
          <circle cx="480" cy="110" r="3" fill="rgba(16, 185, 129, 0.8)" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
        </g>
      </svg>
    </div>
  );
}

// Subtle Background Animation
export function BackgroundGISAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="mapGrid" x="100" y="100" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="rgba(16, 185, 129, 0.05)"
              strokeWidth="1"
            />
          </pattern>
          <filter id="backgroundGlow">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Background grid */}
        <rect width="1200" height="800" fill="url(#mapGrid)" />

        {/* Animated coordinate markers */}
        <g className="animate-geo-markers">
          <circle cx="200" cy="150" r="3" fill="rgba(255, 215, 0, 0.2)" />
          <circle cx="800" cy="300" r="3" fill="rgba(16, 185, 129, 0.2)" />
          <circle cx="400" cy="600" r="3" fill="rgba(255, 215, 0, 0.15)" />
          <circle cx="950" cy="700" r="3" fill="rgba(16, 185, 129, 0.15)" />
        </g>

        {/* Subtle flowing lines */}
        <g className="animate-flow-lines" opacity="0.3">
          <path d="M 0 400 Q 300 350 600 400 T 1200 400" fill="none" stroke="rgba(255, 215, 0, 0.15)" strokeWidth="2" />
          <path d="M 0 200 Q 300 250 600 200 T 1200 200" fill="none" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}
