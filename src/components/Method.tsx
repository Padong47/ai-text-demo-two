import { useState } from "react";
import { Terminal, Layers, ShieldAlert, Code2, BarChart3, CheckCircle2, ChevronRight, Activity } from "lucide-react";
import { METHOD_STEPS } from "../data";

export default function Method() {
  const [activeStep, setActiveStep] = useState<string>("01");

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return <Layers className="w-6 h-6 text-main-navy" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6 text-red-500" />;
      case "Terminal":
        return <Code2 className="w-6 h-6 text-action-blue" />;
      case "BarChart3":
        return <BarChart3 className="w-6 h-6 text-main-navy" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-6 h-6 text-emerald-500" />;
      default:
        return <Activity className="w-6 h-6 text-main-navy" />;
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-pastel-lilac border-b-4 border-main-navy">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex font-mono text-xs font-bold text-action-blue uppercase tracking-wider mb-2 items-center gap-1.5">
            <Activity className="w-4 h-4" />
            <span>05 / END-TO-END PIPELINE METHODOLOGY</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-main-navy tracking-tight mt-1">
            Method: 성장 및 문제해결 방법론
          </h2>
          <p className="text-slate-600 font-sans mt-3 text-base max-w-2xl mx-auto">
            어떤 미션과 데이터 소스가 주어져도, 5단계의 단단한 엔지니어링 절차를 바탕으로 체계적으로 무결성 결과물을 정제해 냅니다.
          </p>
        </div>

        {/* Editorial Timeline & Workspace Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: The Vertical Timeline */}
          <div className="lg:col-span-7 relative pl-4 md:pl-8 border-l-4 border-dashed border-main-navy/20 space-y-12 py-4">
            {METHOD_STEPS.map((stepItem, idx) => {
              const isActive = activeStep === stepItem.step;
              return (
                <div 
                  key={stepItem.step}
                  onMouseEnter={() => setActiveStep(stepItem.step)}
                  className="relative group cursor-pointer text-left"
                >
                  {/* Timeline Node Connector Dot */}
                  <div className={`absolute -left-[23px] md:-left-[39px] top-1.5 w-6 h-6 rounded-full brutalist-border flex items-center justify-center transition-all duration-200 z-10 ${
                    isActive ? "bg-warm-lime scale-125" : "bg-white"
                  }`}>
                    <span className="font-mono text-[9px] font-black text-main-navy">{stepItem.step}</span>
                  </div>

                  {/* Text Content */}
                  <div className={`p-6 rounded-2xl border-2 transition-all duration-200 ${
                    isActive 
                      ? "bg-white border-main-navy brutalist-shadow-lime" 
                      : "bg-white/50 border-slate-250 hover:bg-white hover:border-slate-400"
                  }`}>
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="bg-slate-100 p-2 rounded-lg brutalist-border-sm shrink-0">
                        {getIconComponent(stepItem.icon)}
                      </div>
                      <div>
                        <span className="font-mono text-[10px] bg-slate-100 px-2 py-0.5 rounded font-bold text-slate-500">
                          STAGE {stepItem.step}
                        </span>
                        <h3 className="font-display font-black text-lg text-main-navy mt-0.5">
                          {stepItem.title}
                        </h3>
                      </div>
                    </div>

                    <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                      {stepItem.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-dashed border-slate-200 pt-3">
                      <span className="font-bold text-action-blue flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-action-blue"></span>
                        핵심 액션: {stepItem.action}
                      </span>
                      <span className="text-slate-400 group-hover:text-main-navy transition-colors font-bold flex items-center">
                        Hover/탭하여 시뮬레이션 돌려보기 &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Block: Live Pipeline Data-Stream Simulator */}
          <div className="lg:col-span-5 bg-white brutalist-border brutalist-shadow rounded-2xl p-6 md:p-8 self-stretch flex flex-col justify-between sticky top-6">
            <div>
              <span className="font-mono text-[10px] text-slate-400 font-bold block mb-1">PIPELINE SIMULATOR V1</span>
              <h3 className="font-display font-bold text-xl text-main-navy mb-6">
                데이터 흐름 시각 상태국
              </h3>

              {/* Graphical State Node diagram */}
              <div className="space-y-4">
                <div className="flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-xl border border-dashed border-main-navy/20">
                  
                  {/* Step 1 Node */}
                  <div className={`w-full flex items-center justify-between p-2.5 rounded-lg border-2 ${
                    activeStep === "01" ? "border-main-navy bg-pastel-cream font-bold" : "border-slate-200 bg-white opacity-60"
                  }`}>
                    <span className="font-mono text-xs">01. RAW INTAKE</span>
                    <span className="font-sans text-[10px] bg-slate-200 px-1.5 py-0.5 rounded text-main-navy font-semibold">
                      {activeStep === "01" ? "ACTIVE_PARSING" : "WAITING"}
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="h-4 w-0.5 bg-main-navy border-r border-dashed border-main-navy/40" />

                  {/* Step 2 Node */}
                  <div className={`w-full flex items-center justify-between p-2.5 rounded-lg border-2 ${
                    activeStep === "02" ? "border-main-navy bg-red-100 text-red-950 font-bold" : "border-slate-200 bg-white opacity-60"
                  }`}>
                    <span className="font-mono text-xs">02. DEFECT DETECT</span>
                    <span className="font-sans text-[10px] bg-slate-200 px-1.5 py-0.5 rounded text-main-navy font-semibold">
                      {activeStep === "02" ? "FINDING_NULLS_86%" : "WAITING"}
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="h-4 w-0.5 bg-main-navy border-r border-dashed border-main-navy/40" />

                  {/* Step 3 Node */}
                  <div className={`w-full flex items-center justify-between p-2.5 rounded-lg border-2 ${
                    activeStep === "03" ? "border-main-navy bg-pastel-mint text-emerald-950 font-bold" : "border-slate-200 bg-white opacity-60"
                  }`}>
                    <span className="font-mono text-xs">03. PYTHON CLEAN</span>
                    <span className="font-sans text-[10px] bg-slate-200 px-1.5 py-0.5 rounded text-main-navy font-semibold">
                      {activeStep === "03" ? "REMOVING_KEY_ERR" : "WAITING"}
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="h-4 w-0.5 bg-main-navy border-r border-dashed border-main-navy/40" />

                  {/* Step 4 Node */}
                  <div className={`w-full flex items-center justify-between p-2.5 rounded-lg border-2 ${
                    activeStep === "04" ? "border-main-navy bg-[#E0F2FE] text-sky-950 font-bold" : "border-slate-200 bg-white opacity-60"
                  }`}>
                    <span className="font-mono text-xs">04. PLOT VERIFY</span>
                    <span className="font-sans text-[10px] bg-slate-200 px-1.5 py-0.5 rounded text-main-navy font-semibold">
                      {activeStep === "04" ? "RENDERING_STATS" : "WAITING"}
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="h-4 w-0.5 bg-main-navy border-r border-dashed border-main-navy/40" />

                  {/* Step 5 Node */}
                  <div className={`w-full flex items-center justify-between p-2.5 rounded-lg border-2 ${
                    activeStep === "05" ? "border-main-navy bg-warm-lime text-main-navy font-bold" : "border-slate-200 bg-white opacity-60"
                  }`}>
                    <span className="font-mono text-xs">05. DEPLOY READY</span>
                    <span className="font-sans text-[10px] bg-emerald-500 text-white px-1.5 py-0.5 rounded font-semibold animate-pulse">
                      {activeStep === "05" ? "COMPLETE_SUCCESS" : "WAITING"}
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* Dynamic details for the active step */}
            <div className="mt-6 pt-6 border-t border-slate-150">
              <span className="font-mono text-[9px] text-slate-400 font-bold uppercase">Active Step Real-Time Status</span>
              {(() => {
                const currentStepObj = METHOD_STEPS.find(s => s.step === activeStep);
                return (
                  <div className="mt-2 font-mono text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200 leading-relaxed">
                    <span className="text-action-blue font-bold">&gt; RUNNING_LOG_#{activeStep}:</span>
                    <p className="mt-1 font-sans text-xs text-slate-600 font-medium">
                      {currentStepObj?.title} 단계를 실행 중입니다. {currentStepObj?.description} 파이프라인의 안전과 데이터의 무결성을 검증합니다.
                    </p>
                  </div>
                );
              })()}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
