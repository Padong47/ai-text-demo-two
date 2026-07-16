import { motion } from "motion/react";
import { Terminal, Database, ShieldCheck, Heart } from "lucide-react";
import { POSITIONING_DATA } from "../data";

export default function Positioning() {
  return (
    <section className="py-20 px-4 md:px-8 bg-pastel-cream border-b-4 border-main-navy">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs font-bold text-action-blue uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Terminal className="w-4 h-4" />
              <span>02 / DIFFERENTIAL POSITIONING</span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-main-navy tracking-tight">
              {POSITIONING_DATA.title}
            </h2>
          </div>
          <div className="font-sans font-semibold text-slate-500 max-w-sm text-sm md:text-base border-l-2 border-main-navy pl-4">
            {POSITIONING_DATA.subtitle}
          </div>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Copy Story Block */}
          <div className="lg:col-span-7 bg-white brutalist-border brutalist-shadow p-8 md:p-10 rounded-2xl flex flex-col justify-between">
            <div className="space-y-6 font-sans text-base md:text-lg text-slate-700 leading-relaxed">
              <p className="font-semibold text-main-navy">
                {POSITIONING_DATA.content1}
              </p>
              <p>
                {POSITIONING_DATA.content2}
              </p>
              <p className="text-slate-600">
                {POSITIONING_DATA.conclusion}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-warm-lime rounded-full flex items-center justify-center brutalist-border">
                <Heart className="w-5 h-5 text-main-navy fill-main-navy" />
              </div>
              <span className="font-mono text-xs text-main-navy font-bold tracking-tight">
                #집요한_몰입 #성취감_지향 #탄탄한_전처리 #신뢰와_의욕
              </span>
            </div>
          </div>

          {/* Interactive Motivation Visual Block */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white brutalist-border brutalist-shadow p-6 rounded-2xl flex-1 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-slate-400 font-bold block mb-2">ENGINEER PERSPECTIVE</span>
                <h3 className="font-display font-bold text-xl text-main-navy mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-action-blue" />
                  쓰레기가 들어가면 쓰레기가 나온다 (GIGO)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Garbage In, Garbage Out. 인공지능 모델링이나 시각화 도출 단계의 완벽함 이전에 데이터셋 자체가 깨끗하지 못하다면 결과의 가치는 0에 가깝습니다. 저는 전처리에 몰입하여 입력값의 신뢰도를 최고치로 유지하는 수문장 역할을 가장 중요하게 여깁니다.
                </p>
              </div>
              
              <div className="mt-4 p-4 bg-slate-50 border border-dashed border-main-navy/20 rounded-xl font-mono text-xs text-slate-500">
                <div className="flex justify-between mb-1">
                  <span>Dirty Raw Input:</span>
                  <span className="text-red-500 font-bold">Unreliable (Nulls, Outliers)</span>
                </div>
                <div className="flex justify-between text-action-blue">
                  <span>My Pipeline Output:</span>
                  <span className="font-bold">ML-Ready Clean Data (99.8%)</span>
                </div>
              </div>
            </div>

            {/* Credibility statement banner */}
            <div className="bg-main-navy text-white brutalist-border brutalist-shadow-lime p-6 rounded-2xl flex items-center gap-4">
              <div className="bg-warm-lime w-12 h-12 rounded-full brutalist-border flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-main-navy" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-warm-lime">끝까지 완수해 내는 집념</h4>
                <p className="text-xs text-slate-300 mt-1 leading-normal">
                  어려운 예외 에러가 발생해도 중도 포기하지 않고 스택오버플로우와 공식 문서를 집요하게 파헤치며 완벽히 디버깅합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
