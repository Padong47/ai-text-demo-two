import { useState } from "react";
import { Terminal, Award, BookOpen, Calendar, HelpCircle, Check, BadgeAlert } from "lucide-react";
import { PROOF_DATA } from "../data";

export default function Proof() {
  const [pledgeChecked, setPledgeChecked] = useState<boolean[]>([true, true, false, false]);

  const togglePledge = (idx: number) => {
    const updated = [...pledgeChecked];
    updated[idx] = !updated[idx];
    setPledgeChecked(updated);
  };

  const getCompletedCount = () => pledgeChecked.filter(Boolean).length;

  return (
    <section className="py-20 px-4 md:px-8 bg-white border-b-4 border-main-navy">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-xs font-bold text-action-blue uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Terminal className="w-4 h-4" />
            <span>06 / EXPERIENTIAL PROOF & EXPONENTIAL GROW PLEDGE</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-main-navy tracking-tight">
            Proof: 경험 및 다짐 데이터
          </h2>
          <p className="text-slate-500 font-sans mt-3 text-base max-w-2xl">
            전공 과목에서 다진 검증 지표와 함께, KDT AI Human 과정에서 축적할 폭발적인 성장 계획을 증명합니다.
          </p>
        </div>

        {/* Two-Column Heavy Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Bold Data Table (University, AICE, CompLit) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-main-navy" />
                <h3 className="font-display font-black text-xl text-main-navy">
                  데이터 엔지니어링 검증 리포트
                </h3>
              </div>

              {/* Thick Bordered Editorial Table */}
              <div className="brutalist-border rounded-2xl overflow-hidden brutalist-shadow bg-white">
                <div className="bg-slate-50 border-b-2 border-main-navy p-4 grid grid-cols-12 gap-2 text-xs font-mono font-black text-main-navy">
                  <div className="col-span-4">역량 구분</div>
                  <div className="col-span-4 border-l border-main-navy/20 pl-2">세부 지표</div>
                  <div className="col-span-4 border-l border-main-navy/20 pl-2">상태 / 이력</div>
                </div>

                <div className="divide-y-2 divide-main-navy">
                  {PROOF_DATA.indicators.map((indicator, idx) => (
                    <div key={idx} className="p-4 grid grid-cols-12 gap-2 text-xs font-sans hover:bg-slate-50/50 transition-colors">
                      {/* Category */}
                      <div className="col-span-4 font-mono font-black text-main-navy flex flex-col justify-center">
                        <span>{indicator.category}</span>
                      </div>
                      
                      {/* Metric & Value */}
                      <div className="col-span-4 border-l border-main-navy/10 pl-2 flex flex-col justify-center">
                        <span className="font-bold text-slate-800">{indicator.metric}</span>
                        <span className="text-[10px] text-slate-500 mt-0.5">{indicator.description}</span>
                      </div>

                      {/* Value Status badge */}
                      <div className="col-span-4 border-l border-main-navy/10 pl-2 flex items-center">
                        <span className="inline-block font-mono font-black text-[10px] bg-warm-lime border border-main-navy px-2 py-1 rounded">
                          {indicator.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick stats board */}
            <div className="mt-8 p-5 bg-pastel-mint brutalist-border brutalist-shadow-sm rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-main-navy shrink-0" />
                <div>
                  <span className="font-mono text-[9px] text-slate-500 font-bold block">CURRENT STATUS LOG</span>
                  <span className="font-sans text-xs md:text-sm font-semibold text-main-navy leading-tight">
                    용인대학교 AI학부 빅데이터전공 3학년 휴학 (학점 이수 완료)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: AI Human Growth Manifesto Pledges (Interactive) */}
          <div className="lg:col-span-6 bg-pastel-cream brutalist-border brutalist-shadow rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-action-blue" />
                  <h3 className="font-display font-black text-xl text-main-navy">
                    {PROOF_DATA.pledge.title}
                  </h3>
                </div>
                <span className="font-mono text-xs bg-main-navy text-white font-bold px-2.5 py-1 rounded">
                  PLEDGE_LOG
                </span>
              </div>

              {/* Growth Pledges interactive checklist */}
              <div className="space-y-4">
                {PROOF_DATA.pledge.points.map((point, idx) => {
                  const isChecked = pledgeChecked[idx];
                  return (
                    <div 
                      key={idx}
                      onClick={() => togglePledge(idx)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-150 ${
                        isChecked 
                          ? "border-main-navy bg-white brutalist-shadow-sm" 
                          : "border-slate-300 bg-white/40 hover:border-slate-400"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded border-2 shrink-0 mt-0.5 flex items-center justify-center ${
                          isChecked ? "bg-action-blue border-main-navy" : "border-slate-400 bg-white"
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 text-white" />}
                        </div>
                        <p className={`font-sans text-xs leading-relaxed ${
                          isChecked ? "text-slate-800 font-semibold" : "text-slate-500"
                        }`}>
                          {point}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dynamic visual indicator */}
            <div className="mt-8 pt-6 border-t border-main-navy/10">
              <div className="flex justify-between items-center text-xs font-mono font-bold mb-2">
                <span className="text-slate-500">몰입 및 다짐 실천 수락률:</span>
                <span className="text-action-blue">{getCompletedCount()} / 4 완수</span>
              </div>
              <div className="w-full bg-slate-200 h-4 rounded-full border-2 border-main-navy overflow-hidden p-0.5">
                <div 
                  className="bg-warm-lime h-full rounded-full border-r-2 border-main-navy transition-all duration-300"
                  style={{ width: `${(getCompletedCount() / 4) * 100}%` }}
                />
              </div>
              <p className="text-[10px] font-mono text-slate-500 mt-2 text-right">
                *클릭하여 앞으로의 성장 의지 각오 서약을 시뮬레이션해 보세요.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
