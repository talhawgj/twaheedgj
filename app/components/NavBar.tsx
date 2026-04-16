"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function NavBar() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Always show when near the top
      if (y < 60) {
        setVisible(true);
      } else {
        setVisible(y < lastY.current);
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed w-full z-50 top-0 left-0 nav-blur border-b border-white/5 transition-transform duration-300"
      style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center" aria-label="Home">
          <Logo size={36} />
        </Link>
        <div className="hidden sm:flex items-center space-x-8 text-sm font-medium text-slate-400">
          <a href="#about"          className="hover:text-white transition-colors duration-200">About</a>
          <a href="#skills"         className="hover:text-white transition-colors duration-200">Skills</a>
          <a href="#certifications" className="hover:text-white transition-colors duration-200">Certifications</a>
          <a href="#projects"       className="hover:text-white transition-colors duration-200">Projects</a>
          <a href="#contact"        className="hover:text-white transition-colors duration-200">Contact</a>
        </div>
      </div>
    </nav>
  );
}
