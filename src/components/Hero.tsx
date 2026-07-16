import { motion } from "motion/react";
import { ArrowDown, Database, Cpu, Terminal, Sparkles } from "lucide-react";
import { HERO_DATA } from "../data";

interface HeroProps {
  onScrollToContact: () => void;
  onScrollToPortfolio: () => void;
}

export default function Hero({ onScrollToContact, onScrollToPortfolio }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 md:px-8 py-16 overflow-hidden bg-[#FAFAFA] border-b-4 border-main-navy">
      {/* Soft Brutalist Background Decor */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-pastel-mint brutalist-border rounded-lg brutalist-shadow-sm -rotate-6 hidden lg:flex flex-col p-2 justify-between">
        <div className="flex justify-between items-center">
          <Database className="w-5 h-5 text-main-navy" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
        </div>
        <span className="font-mono text-[10px] text-main-navy font-bold">SQL_ACTIVE</span>
      </div>

      <div className="absolute bottom-20 right-12 w-28 h-28 bg-pastel-lilac brutalist-border rounded-lg brutalist-shadow-sm rotate-12 hidden lg:flex flex-col p-2 justify-between">
        <div className="flex justify-between items-center">
          <Cpu className="w-5 h-5 text-main-navy" />
          <span className="font-mono text-[9px] bg-main-navy text-white px-1 py-0.5 rounded font-bold">98.4%</span>
        </div>
        <span className="font-mono text-[10px] text-main-navy font-bold">ML_READY_DATA</span>
      </div>



      <div className="max-w-5xl w-full text-center relative z-10 flex flex-col items-center">
        {/* Soft Brutalist Role Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-warm-lime text-main-navy brutalist-border px-4 py-1.5 rounded-full brutalist-shadow-sm font-mono text-sm font-bold mb-8"
        >
          <Terminal className="w-4 h-4" />
          <span>JUNIOR DATA ENGINEER PORTFOLIO</span>
        </motion.div>

        {/* 56px-72px Mega-Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display font-black text-main-navy text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8 max-w-4xl"
        >
          {HERO_DATA.tagline}
        </motion.h1>

        {/* Subtitle with refined typography */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-600 font-sans font-medium max-w-3xl mb-12 leading-relaxed"
        >
          {HERO_DATA.subtitle}
        </motion.p>

        {/* Pill CTA Buttons with beautiful feedback */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <button
            onClick={onScrollToPortfolio}
            className="group relative inline-flex items-center justify-center bg-action-blue text-white font-bold px-8 py-4 rounded-full brutalist-border brutalist-shadow-lime hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-200 cursor-pointer text-base md:text-lg"
          >
            <span>{HERO_DATA.ctaText}</span>
            <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
          </button>
          
          <button
            onClick={onScrollToContact}
            className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-main-navy font-bold px-8 py-4 rounded-full brutalist-border brutalist-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-200 cursor-pointer text-base md:text-lg"
          >
            제안 및 협업 문의하기
          </button>
        </motion.div>

        {/* Bottom Interactive Dashboard Status strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl p-4 bg-white brutalist-border brutalist-shadow rounded-xl"
        >
          <div className="flex flex-col items-center justify-center p-2 border-r-0 md:border-r-2 last:border-none border-dashed border-main-navy/20">
            <span className="font-mono text-xs text-slate-500 font-bold">UNIVERSITY STATUS</span>
            <span className="font-sans text-sm md:text-base font-bold text-main-navy mt-1">용인대 AI학부 휴학</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 border-r-0 md:border-r-2 last:border-none border-dashed border-main-navy/20">
            <span className="font-mono text-xs text-slate-500 font-bold">CORE CAPABILITY</span>
            <span className="font-sans text-sm md:text-base font-bold text-main-navy mt-1">Python 전처리 / ETL</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 border-r-0 md:border-r-2 last:border-none border-dashed border-main-navy/20">
            <span className="font-mono text-xs text-slate-500 font-bold">CERTIFICATIONS</span>
            <span className="font-sans text-sm md:text-base font-bold text-main-navy mt-1">AICE / 컴활 필기</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <span className="font-mono text-xs text-slate-500 font-bold">CURRENT FOCUS</span>
            <span className="font-sans text-sm md:text-base font-bold text-action-blue mt-1 flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse"></span>
              KDT AI Human
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
