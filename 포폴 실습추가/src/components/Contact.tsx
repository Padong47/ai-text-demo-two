import { useState, useEffect, FormEvent } from "react";
import { Terminal, Send, CheckCircle2, Trash2, Mail, ExternalLink, RefreshCw } from "lucide-react";

interface Inquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  message: string;
  timestamp: string;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStep, setSubmitStep] = useState(0); // 0: idle, 1: sanitizing, 2: schema validating, 3: saved
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_inquiries");
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("이름, 이메일, 그리고 메시지 항목은 필수로 채워주셔야 합니다.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStep(1); // Sanitizing dirty text

    // Simulate pipeline phases
    setTimeout(() => {
      setSubmitStep(2); // Validating schemas
      setTimeout(() => {
        setSubmitStep(3); // Success saving
        
        const newInquiry: Inquiry = {
          id: `inq-${Date.now()}`,
          name,
          company: company || "비공개 협업 기업",
          email,
          message,
          timestamp: new Date().toLocaleTimeString("ko-KR", { hour: '2-digit', minute: '2-digit' })
        };

        const updated = [newInquiry, ...inquiries];
        setInquiries(updated);
        localStorage.setItem("portfolio_inquiries", JSON.stringify(updated));

        // Reset fields
        setName("");
        setCompany("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitStep(0);
        }, 2000);
      }, 1000);
    }, 1000);
  };

  const handleDelete = (id: string) => {
    const updated = inquiries.filter(inq => inq.id !== id);
    setInquiries(updated);
    localStorage.setItem("portfolio_inquiries", JSON.stringify(updated));
  };

  return (
    <section id="contact-section" className="py-24 px-4 md:px-8 bg-main-navy text-white relative overflow-hidden">
      {/* Decorative Warm Lime accent stripes */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-warm-lime via-action-blue to-warm-lime" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bold Copy & Call-To-Action details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="font-mono text-xs font-bold text-warm-lime uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Terminal className="w-4 h-4" />
                <span>07 / CONTACT & PIPELINE ESTABLISH</span>
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-white leading-tight">
                Let's Build Together
              </h2>
            </div>

            <div className="space-y-4 font-sans text-base text-slate-300 leading-relaxed">
              <p className="text-white font-bold text-lg md:text-xl border-l-4 border-warm-lime pl-4">
                "시킨 일은 의욕을 가지고 반드시 완수해 냅니다. 함께 신뢰의 파이프라인을 구축할 팀을 찾습니다."
              </p>
              <p className="text-sm">
                지저분하고 손이 많이 가며 아무도 수동으로 정비하기 귀찮아하는 거친 데이터셋이 있으신가요? 
                어떤 기괴한 KeyError나 인코딩 에러가 발생해도 끝까지 몰입하여 안전한 전처리 스크립트를 납품하겠습니다.
              </p>
              <p className="text-sm">
                주니어 데이터 엔지니어 채용 제안, 프로젝트 실습 협업, 혹은 단순 커피챗 제안까지 가리지 않고 적극적인 열정으로 응대하겠습니다.
              </p>
            </div>

            {/* Email contact pill card */}
            <div className="p-4 bg-[#23354C] border-2 border-warm-lime/40 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-warm-lime shrink-0" />
                <div>
                  <span className="font-mono text-[9px] text-slate-400 font-bold block">DIRECT COMMUNICATE</span>
                  <a href="mailto:rsb3748419@gmail.com" className="font-mono text-xs md:text-sm text-warm-lime font-bold hover:underline">
                    rsb3748419@gmail.com
                  </a>
                </div>
              </div>
              <a href="mailto:rsb3748419@gmail.com" className="bg-warm-lime text-main-navy p-2 rounded-full hover:scale-105 transition-transform">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Live Data Proposal pipeline form */}
          <div className="lg:col-span-7 bg-[#1A2534] border-2 border-white/20 p-6 md:p-8 rounded-2xl">
            <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-2">
              <span>제안 데이터 수집 파이프라인 (Send Inquiries)</span>
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[10px] text-slate-400 font-bold block mb-1.5">SENDER_NAME *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="성함 혹은 담당자명"
                    className="w-full bg-[#233042] border border-white/10 rounded-lg p-3 text-xs md:text-sm focus:border-warm-lime focus:outline-none transition-colors placeholder:text-slate-500"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] text-slate-400 font-bold block mb-1.5">COMPANY_OR_AFFILIATION</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="회사명 또는 학부명"
                    className="w-full bg-[#233042] border border-white/10 rounded-lg p-3 text-xs md:text-sm focus:border-warm-lime focus:outline-none transition-colors placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] text-slate-400 font-bold block mb-1.5">REPLY_EMAIL *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="연락받으실 이메일 주소"
                  className="w-full bg-[#233042] border border-white/10 rounded-lg p-3 text-xs md:text-sm focus:border-warm-lime focus:outline-none transition-colors placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] text-slate-400 font-bold block mb-1.5">PROPOSAL_MESSAGE *</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="제안 내용, 모집 직군 정보 또는 응원 격려 메시지를 남겨주세요."
                  className="w-full bg-[#233042] border border-white/10 rounded-lg p-3 text-xs md:text-sm focus:border-warm-lime focus:outline-none transition-colors placeholder:text-slate-500 resize-none"
                />
              </div>

              {/* Submit button / Pipeline Loader */}
              <div className="pt-2">
                {isSubmitting ? (
                  <div className="w-full bg-[#233042] border-2 border-warm-lime rounded-full p-3.5 flex items-center justify-center gap-3">
                    <RefreshCw className="w-5 h-5 text-warm-lime animate-spin" />
                    <span className="font-mono text-xs font-bold text-warm-lime uppercase tracking-wider">
                      {submitStep === 1 && "Phase 1/2: Sanitizing Text Regex..."}
                      {submitStep === 2 && "Phase 2/2: Mapping Database Schema..."}
                      {submitStep === 3 && "PIPELINE_LOAD_SUCCESS! SAVED"}
                    </span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full bg-warm-lime text-main-navy font-bold p-3.5 rounded-full hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer font-mono text-sm flex items-center justify-center gap-2 border-2 border-main-navy"
                  >
                    <span>INGEST_INQUIRY_PROPOSAL &rarr;</span>
                    <Send className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>

            {/* Ingestion Pipeline Telemetry logs */}
            {inquiries.length > 0 && (
              <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">■ LOCAL INGESTED PIPELINES ({inquiries.length})</span>
                  <span className="text-[10px] text-warm-lime">SYSTEMS ACTIVE (LOCALSTORAGE)</span>
                </div>
                
                <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                  {inquiries.map((inq) => (
                    <div key={inq.id} className="bg-[#202E40] border border-white/5 p-3 rounded-lg flex items-start justify-between gap-3 text-xs">
                      <div className="space-y-1 font-mono">
                        <div className="flex flex-wrap gap-2 items-center">
                          <span className="text-warm-lime font-bold">{inq.name}</span>
                          <span className="text-[10px] text-slate-400 bg-main-navy px-1.5 py-0.5 rounded">
                            {inq.company}
                          </span>
                          <span className="text-[10px] text-slate-400">{inq.timestamp}</span>
                        </div>
                        <p className="font-sans text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                          {inq.message}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDelete(inq.id)}
                        className="text-slate-400 hover:text-red-400 transition-colors shrink-0 p-1"
                        title="Delete record"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Footer info brand bar */}
        <div className="mt-24 pt-8 border-t border-white/10 text-center font-mono text-[10px] text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>&copy; 2026 Junior Data Engineer Portfolio. Built with Soft Brutalism.</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
            PIPELINE STATUS: ALL PIPES HEALTHY (100% RELIABILITY)
          </span>
        </div>

      </div>
    </section>
  );
}
