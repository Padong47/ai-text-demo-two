/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, RefObject } from "react";
import Hero from "./components/Hero";
import Positioning from "./components/Positioning";
import Skills from "./components/Skills";
import Outcomes from "./components/Outcomes";
import Method from "./components/Method";
import Proof from "./components/Proof";
import Contact from "./components/Contact";
import { Database, Terminal, ShieldAlert } from "lucide-react";

export default function App() {
  const positioningRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const outcomesRef = useRef<HTMLDivElement>(null);
  const methodRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col selection:bg-warm-lime selection:text-main-navy">
      {/* Sleek Editorial Header Nav Bar */}
      <header className="sticky top-0 z-50 bg-[#FAFAFA]/95 backdrop-blur border-b-2 border-main-navy px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-action-blue" />
          <span className="font-display font-black text-main-navy tracking-tight text-sm md:text-base">
            DATA_WORKSHOP.log
          </span>
        </div>
        
        {/* Simple Anchor Jump Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-bold text-main-navy">
          <button onClick={() => scrollToRef(positioningRef)} className="hover:text-action-blue transition-colors cursor-pointer">
            02_POSITIONING
          </button>
          <button onClick={() => scrollToRef(skillsRef)} className="hover:text-action-blue transition-colors cursor-pointer">
            03_SKILLS
          </button>
          <button onClick={() => scrollToRef(outcomesRef)} className="hover:text-action-blue transition-colors cursor-pointer">
            04_OUTCOMES
          </button>
          <button onClick={() => scrollToRef(methodRef)} className="hover:text-action-blue transition-colors cursor-pointer">
            05_METHOD
          </button>
          <button onClick={() => scrollToRef(proofRef)} className="hover:text-action-blue transition-colors cursor-pointer">
            06_PROOF
          </button>
        </nav>

        {/* Floating current telemetry badge */}
        <div className="flex items-center gap-2 font-mono text-[10px] bg-white border border-main-navy px-2.5 py-1 rounded-full brutalist-shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping"></span>
          <span className="text-main-navy font-bold">PORTFOLIO ONLINE</span>
        </div>
      </header>

      {/* Main Content Layout Blocks */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero 
          onScrollToContact={() => scrollToRef(contactRef)} 
          onScrollToPortfolio={() => scrollToRef(positioningRef)} 
        />

        {/* 2. Positioning Section */}
        <div ref={positioningRef} id="positioning-section">
          <Positioning />
        </div>

        {/* 3. Skills Section */}
        <div ref={skillsRef} id="skills-section">
          <Skills />
        </div>

        {/* 4. Outcomes Section */}
        <div ref={outcomesRef} id="outcomes-section">
          <Outcomes />
        </div>

        {/* 5. Method Section */}
        <div ref={methodRef} id="method-section">
          <Method />
        </div>

        {/* 6. Proof Section */}
        <div ref={proofRef} id="proof-section">
          <Proof />
        </div>

        {/* 7. Contact Section */}
        <div ref={contactRef} id="contact-section">
          <Contact />
        </div>
      </main>
    </div>
  );
}

