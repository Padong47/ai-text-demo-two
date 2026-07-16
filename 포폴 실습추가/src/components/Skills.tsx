import { useState } from "react";
import { Terminal, Shield, CheckCircle, Info, Sparkles } from "lucide-react";
import { SKILLS_DATA, SkillItem } from "../data";

export default function Skills() {
  const [activeInspector, setActiveInspector] = useState<string | null>("skill-1");

  const getColorClasses = (color: SkillItem['color']) => {
    switch (color) {
      case "lime":
        return "bg-[#A3E635] text-main-navy";
      case "lilac":
        return "bg-pastel-lilac text-main-navy";
      case "mint":
        return "bg-pastel-mint text-main-navy";
      case "cream":
        return "bg-pastel-cream text-main-navy";
      default:
        return "bg-white text-main-navy";
    }
  };

  const getShadowColorClass = (color: SkillItem['color']) => {
    switch (color) {
      case "lime":
        return "brutalist-shadow";
      case "lilac":
        return "brutalist-shadow-blue";
      case "mint":
        return "brutalist-shadow-lime";
      case "cream":
        return "brutalist-shadow";
      default:
        return "brutalist-shadow";
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-[#FAFAFA] border-b-4 border-main-navy">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-xs font-bold text-action-blue uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Terminal className="w-4 h-4" />
            <span>03 / CORE CAPABILITIES & WORKSHOP</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-main-navy tracking-tight">
            Programs & Skills
          </h2>
          <p className="text-slate-500 font-sans mt-3 text-base max-w-2xl">
            용인대 빅데이터 전공 이론부터 실습, 자격증 취득까지 탄탄히 쌓아온 핵심 데이터 정제 도구와 기본기입니다.
          </p>
        </div>

        {/* Skills Board Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block: The heavy sticky-note blocks */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SKILLS_DATA.map((skill) => {
              const isActive = activeInspector === skill.id;
              return (
                <div
                  key={skill.id}
                  onClick={() => setActiveInspector(skill.id)}
                  className={`p-6 rounded-2xl brutalist-border cursor-pointer transition-all duration-200 transform hover:-translate-y-1 ${getColorClasses(
                    skill.color
                  )} ${getShadowColorClass(skill.color)} ${
                    isActive ? "ring-4 ring-action-blue ring-offset-2 scale-[1.02]" : ""
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-xs bg-main-navy text-white font-bold px-2.5 py-1 rounded">
                      {skill.id.toUpperCase()}
                    </span>
                    {isActive && (
                      <span className="font-mono text-[10px] bg-action-blue text-white font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" /> INSPECTING
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-black text-xl mb-2 tracking-tight">
                    {skill.title}
                  </h3>
                  <p className="font-sans text-xs opacity-90 leading-relaxed font-semibold mb-4">
                    {skill.description}
                  </p>

                  <div className="text-[11px] font-mono border-t border-main-navy/25 pt-3 font-semibold flex items-center justify-between">
                    <span>전처리 역량 리포트</span>
                    <span className="underline group-hover:no-underline">상세 분석 클릭 &rarr;</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Block: Live Skill Inspector Terminal */}
          <div className="lg:col-span-5 bg-main-navy brutalist-border brutalist-shadow-lime text-white rounded-2xl overflow-hidden self-stretch flex flex-col justify-between min-h-[420px]">
            {/* Terminal Header */}
            <div className="bg-[#151E28] px-4 py-3 border-b-2 border-main-navy flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500 block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500 block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500 block"></span>
              </div>
              <span className="font-mono text-xs text-slate-400 font-bold">PIPELINE_INSPECTOR.sh</span>
              <div className="w-4 h-4 rounded-full bg-slate-700"></div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 flex-1 font-mono text-xs space-y-4 overflow-y-auto">
              {activeInspector ? (
                (() => {
                  const currentSkill = SKILLS_DATA.find((s) => s.id === activeInspector);
                  if (!currentSkill) return null;
                  return (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-warm-lime border-b border-slate-700 pb-2">
                        <Terminal className="w-4 h-4 shrink-0" />
                        <span className="font-bold text-sm">{currentSkill.title}</span>
                      </div>
                      
                      <div className="bg-[#1F2E3D] p-3 rounded border border-slate-700">
                        <span className="text-slate-400 font-semibold block mb-1">■ DESCRIPTION:</span>
                        <p className="text-slate-200 leading-relaxed font-sans text-xs">
                          {currentSkill.description}
                        </p>
                      </div>

                      <div className="space-y-2.5">
                        <span className="text-slate-400 font-semibold block">■ DETAILED IMPLEMENTATION CAPABILITIES:</span>
                        {currentSkill.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-slate-100">
                            <CheckCircle className="w-4 h-4 text-warm-lime shrink-0 mt-0.5" />
                            <span className="leading-relaxed font-sans text-xs">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 text-slate-500">
                  <Info className="w-8 h-8 mb-2" />
                  <p>왼쪽의 역량 블록을 선택하여<br />상세 전처리 실무 구현 내역을 검사하십시오.</p>
                </div>
              )}
            </div>

            {/* Terminal Footer status bar */}
            <div className="bg-[#151E28] px-4 py-3 border-t border-slate-800 text-[10px] font-mono text-slate-400 flex justify-between items-center">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-lime animate-ping"></span>
                ACTIVE MONITOR: OK
              </span>
              <span>VER 2026.07.02</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
