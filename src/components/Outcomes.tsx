import { useState } from "react";
import { 
  Terminal, Code2, AlertCircle, CheckCircle2, ChevronRight, Copy, Check,
  Settings, Upload, BookOpen, MessageSquare, Send, ChevronDown, FileText, Layout
} from "lucide-react";
import { OUTCOMES_DATA } from "../data";

export default function Outcomes() {
  const [selectedId, setSelectedId] = useState<string>("outcome-1");
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"code" | "demo">("code");

  // RAG Chatbot Mockup States
  const [embeddingProvider, setEmbeddingProvider] = useState<string>("local");
  const [llmProvider, setLlmProvider] = useState<string>("openai");
  const [accordion1Open, setAccordion1Open] = useState<boolean>(false);
  const [accordion2Open, setAccordion2Open] = useState<boolean>(false);
  const [ragFileUploaded, setRagFileUploaded] = useState<boolean>(false);
  const [ragProgress, setRagProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [ragMessages, setRagMessages] = useState<Array<{sender: 'user' | 'system', text: string, sources?: string[]}>>([
    { sender: 'system', text: 'PDF 문서를 업로드해 주시면, 해당 문서의 지식을 완벽히 학습하여 질문에 답변해 드립니다. 왼쪽 패널에서 임베딩과 LLM 모델을 자유롭게 변경해 보세요!' }
  ]);
  const [ragInput, setRagInput] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  const selectedOutcome = OUTCOMES_DATA.find(item => item.id === selectedId) || OUTCOMES_DATA[0];

  const handleSelectOutcome = (id: string) => {
    setSelectedId(id);
    if (id === "outcome-4") {
      setActiveTab("demo");
    } else {
      setActiveTab("code");
    }
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateUpload = () => {
    if (isUploading || ragFileUploaded) return;
    setIsUploading(true);
    setRagProgress(10);
    
    const interval = setInterval(() => {
      setRagProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsUploading(false);
            setRagFileUploaded(true);
            setRagMessages(prevMsgs => [
              ...prevMsgs,
              { sender: 'system', text: '📂 [성공] "AI_학부_빅데이터_전처리_가이드.pdf" 업로드 완료!\n\n문서에서 총 42개의 텍스트 청크를 파싱했고, 로컬 FAISS 벡터 스토어에 정밀 임베딩을 저장했습니다.\n\n이제 이 파일과 관련된 질문을 편하게 입력해 보세요!' }
            ]);
          }, 400);
          return 100;
        }
        return prev + 15;
      });
    }, 150);
  };

  const handleSendRagMessage = (textToSend?: string) => {
    const query = textToSend || ragInput;
    if (!query.trim() || isAnalyzing) return;

    const newMsgs = [...ragMessages, { sender: 'user', text: query }];
    setRagMessages(newMsgs);
    setRagInput("");
    setIsAnalyzing(true);

    setTimeout(() => {
      let answerText = "";
      let sources: string[] = [];

      const normalizedQuery = query.toLowerCase();
      if (normalizedQuery.includes("keyerror") || normalizedQuery.includes("에러") || normalizedQuery.includes("오류")) {
        answerText = "수집 도중 빈번히 발생하는 KeyError 및 누락 예외를 처리하기 위한 해결책을 발견했습니다.\n\n1. 안전한 조회 패턴인 `raw_data.get('key', 'default_value')` 메소드를 상시 적용하여 KeyError의 원인을 근본적으로 차단할 것을 제안합니다.\n2. 실무 수집 엔진 설계 시 `try-except-finally`와 Python `logging` 모듈을 결합하면 임의 에러 인입 시에도 중단 없이 100% 정상 작동하는 클린 데이터 파이프라인을 구축할 수 있습니다.";
        sources = ["AI_학부_빅데이터_전처리_가이드.pdf - 3 page (유사도 94.2%)", "안정적 파이썬 예외처리 기법 - 7 page"];
      } else if (normalizedQuery.includes("청킹") || normalizedQuery.includes("chunk") || normalizedQuery.includes("오버랩")) {
        answerText = "문서의 분할 전략은 임베딩 및 검색 품질에 직결되는 매우 핵심적인 요소입니다.\n\n본 RAG 시스템은 한국어 문맥 유실을 최소화하기 위해 'RecursiveCharacterTextSplitter'를 이용해 chunk_size=450, chunk_overlap=40 조합으로 분할했습니다. 이를 통해 단어가 중간에 잘려 발생하는 검색 왜곡 문제를 획득율 98.7%로 해결했습니다.";
        sources = ["RAG 최적화 가이드북 - 12 page (유사도 92.1%)"];
      } else {
        answerText = `입력하신 질문 "${query}"과(와) 정렬성이 높은 지식을 문서 데이터베이스에서 추적했습니다.\n\n현재 설계된 RAG 가공 엔진은 Local 임베딩(${embeddingProvider === "local" ? "기초 로컬 분석기" : "OpenAI 대형 임베딩"})과 LLM(${llmProvider.toUpperCase()})을 안전하게 래핑하여, 오차 없는 고도의 맥락 답변을 94% 이상의 정합성으로 보장합니다.`;
        sources = ["RAG 전처리 매뉴얼 - 1 page"];
      }

      setRagMessages(prev => [...prev, { sender: 'system', text: answerText, sources }]);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-white border-b-4 border-main-navy">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-xs font-bold text-action-blue uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Terminal className="w-4 h-4" />
            <span>04 / OUTCOMES & DEBUGGING MISSION</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-main-navy tracking-tight">
            Outcomes & 해결 능력
          </h2>
          <p className="text-slate-500 font-sans mt-3 text-base max-w-2xl">
            과제 수행 및 코딩 실습 과정에서 직면한 난해한 데이터 결함과 버그들을 근성 있게 격파한 산출물 기록입니다.
          </p>
        </div>

        {/* Wide Layout Column splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Outcome Selector Cards */}
          <div className="lg:col-span-5 space-y-4">
            {OUTCOMES_DATA.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectOutcome(item.id)}
                  className={`p-5 rounded-xl border-2 text-left cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? "border-main-navy bg-slate-50 brutalist-shadow"
                      : "border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] bg-slate-100 border border-slate-300 px-2 py-0.5 rounded font-bold text-slate-600">
                      [{item.label}]
                    </span>
                    {isSelected && (
                      <span className="w-2.5 h-2.5 rounded-full bg-action-blue animate-pulse" />
                    )}
                  </div>
                  <h3 className="font-display font-bold text-lg text-main-navy mb-1.5">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-xs font-mono text-action-blue mt-2 font-bold">
                    <span>자세히 분석 로그 보기</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Deep Dive Workspace */}
          <div className="lg:col-span-7 bg-white brutalist-border brutalist-shadow-lime rounded-2xl overflow-hidden flex flex-col justify-between min-h-[600px]">
            {/* Header tab structure */}
            <div className="bg-[#FAFAFA] border-b-2 border-main-navy p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-action-blue" />
                <span className="font-mono text-xs font-bold text-main-navy uppercase">
                  {selectedOutcome.label}.py
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">
                RESOLUTION STAGE: COMPLETE (99.8% ACCURACY)
              </span>
            </div>

            {/* Tab switch bar */}
            <div className="bg-slate-100 border-b-2 border-main-navy px-4 py-2 flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setActiveTab("code")}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-md transition-colors flex items-center gap-1.5 ${
                  activeTab === "code" 
                    ? "bg-main-navy text-white" 
                    : "text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Python Code Analysis</span>
              </button>
              {selectedId === "outcome-4" && (
                <button
                  onClick={() => setActiveTab("demo")}
                  className={`px-3 py-1.5 text-xs font-mono font-bold rounded-md transition-colors flex items-center gap-1.5 ${
                    activeTab === "demo" 
                      ? "bg-action-blue text-white" 
                      : "text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <Layout className="w-3.5 h-3.5" />
                  <span>실시간 Web UI 시뮬레이터 (나만의 RAG 챗봇)</span>
                </button>
              )}
            </div>

            {/* Content area conditional split */}
            {activeTab === "code" ? (
              <>
                {/* Interactive content area */}
                <div className="p-6 md:p-8 space-y-6 flex-1">
                  {/* Problem Statement */}
                  <div className="bg-red-50/70 border border-red-200 p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-red-700 font-bold mb-2">
                      <AlertCircle className="w-4 h-4" />
                      <span className="font-sans text-xs">상황 및 데이터 결함 (Problem)</span>
                    </div>
                    <p className="font-sans text-xs md:text-sm text-red-800 leading-relaxed font-medium">
                      {selectedOutcome.problem}
                    </p>
                  </div>

                  {/* Solution Statement */}
                  <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="font-sans text-xs">엔지니어링 접근 및 디버깅 (Solution)</span>
                    </div>
                    <p className="font-sans text-xs md:text-sm text-emerald-800 leading-relaxed font-medium">
                      {selectedOutcome.solution}
                    </p>
                  </div>

                  {/* Numerical Result metric callout */}
                  <div className="p-4 bg-pastel-mint border-2 border-main-navy rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 font-bold block">MEASURED METRIC & SUCCESS</span>
                      <span className="font-sans text-xs md:text-sm font-semibold text-main-navy">
                        {selectedOutcome.result}
                      </span>
                    </div>
                    <span className="font-mono text-xl md:text-2xl font-black text-main-navy shrink-0 ml-4 bg-warm-lime border border-main-navy px-2.5 py-1 rounded rotate-2">
                      DONE
                    </span>
                  </div>

                  {/* Code Snippet display if available */}
                  {selectedOutcome.codeSnippet && (
                    <div className="relative mt-4">
                      <div className="bg-main-navy text-slate-300 font-mono text-[11px] p-4 rounded-xl overflow-x-auto brutalist-border max-h-[220px]">
                        <div className="flex justify-between items-center mb-2 border-b border-slate-700 pb-2">
                          <span className="text-warm-lime text-[10px]">Python Real Implementation Sample</span>
                          <button
                            onClick={() => handleCopyCode(selectedOutcome.codeSnippet || "")}
                            className="text-slate-400 hover:text-white transition-colors p-1"
                            title="Copy code"
                          >
                            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                        <pre className="text-left leading-normal whitespace-pre">
                          <code>{selectedOutcome.codeSnippet}</code>
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Bottom active block status info */}
                <div className="bg-slate-50 border-t border-slate-150 px-6 py-3 font-mono text-[10px] text-slate-500 text-center flex items-center justify-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>수작업 데이터 검증 통과 완료 — 다음 미션 준비 단계</span>
                </div>
              </>
            ) : (
              /* PDF RAG Streamlit simulation interface */
              <div className="relative flex-1 group">
                {/* Clickable Link Overlay */}
                {selectedOutcome.link && (
                  <a 
                    href={selectedOutcome.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-50 bg-transparent flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group-hover:bg-white/40 group-hover:backdrop-blur-[2px]"
                  >
                     <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-action-blue text-white px-6 py-3 rounded-lg shadow-xl font-bold flex items-center gap-2">
                        <Layout className="w-5 h-5" />
                        <span>직접 만든 RAG 챗봇 프로그램 열기 (새 창)</span>
                     </div>
                  </a>
                )}

                <div className="flex flex-col md:flex-row min-h-[500px] h-full bg-slate-50 text-left border-t border-slate-200 font-sans group-hover:opacity-80 transition-opacity">
                  {/* Streamlit style Sidebar */}
                  <div className="w-full md:w-[220px] bg-[#F0F2F6] border-r border-slate-200 p-4 flex flex-col justify-between select-none shrink-0 text-slate-800">
                  <div className="space-y-4">
                    <div className="flex items-center gap-1.5 font-bold text-xs text-slate-700 uppercase tracking-wider mb-3">
                      <Settings className="w-3.5 h-3.5 text-slate-500" />
                      <span>Provider 설정</span>
                    </div>
                    
                    {/* Embedding Provider selection */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-slate-600 block">임베딩 provider</label>
                      <div className="relative">
                        <select 
                          value={embeddingProvider}
                          onChange={(e) => setEmbeddingProvider(e.target.value)}
                          className="w-full text-xs bg-white border border-slate-300 rounded px-2 py-1.5 pr-8 focus:outline-none focus:ring-1 focus:ring-action-blue appearance-none cursor-pointer font-medium"
                        >
                          <option value="local">local</option>
                          <option value="openai">openai</option>
                        </select>
                        <ChevronDown className="w-3 h-3 absolute right-2.5 top-2.5 text-slate-500 pointer-events-none" />
                      </div>
                      <p className="text-[10px] text-slate-500 leading-tight mt-1">
                        {embeddingProvider === "local" 
                          ? "🤖 키/서버 없음 -> 검색 시 TF-IDF로 자동 폴백합니다." 
                          : "🔑 원격 대형 OpenAI 임베딩 파이프라인 구동"}
                      </p>
                    </div>

                    {/* LLM Provider selection */}
                    <div className="space-y-1 mt-4">
                      <label className="text-[11px] font-semibold text-slate-600 block">LLM provider</label>
                      <div className="relative">
                        <select 
                          value={llmProvider}
                          onChange={(e) => setLlmProvider(e.target.value)}
                          className="w-full text-xs bg-white border border-slate-300 rounded px-2 py-1.5 pr-8 focus:outline-none focus:ring-1 focus:ring-action-blue appearance-none cursor-pointer font-medium"
                        >
                          <option value="openai">openai</option>
                          <option value="gemini">gemini</option>
                          <option value="local">local</option>
                        </select>
                        <ChevronDown className="w-3 h-3 absolute right-2.5 top-2.5 text-slate-500 pointer-events-none" />
                      </div>
                      <p className="text-[10px] text-slate-500 leading-tight mt-1">
                        {llmProvider === "openai" 
                          ? "✍️ 키/서버 없음 -> 답변 시 데모 모드로 동작합니다." 
                          : llmProvider === "gemini" 
                          ? "✨ Gemini 가속 기반 지능형 데이터 요약 응답" 
                          : "💻 로컬 온디바이스 Llama 프레임워크 기반 연산"}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-250 text-[10px] text-slate-400 leading-relaxed space-y-1">
                    <p className="font-bold text-slate-500">📌 RAG 동작 가이드:</p>
                    <p>1. 우측에서 PDF 파일 업로드 시뮬레이션을 완료하세요.</p>
                    <p>2. 청킹 및 벡터 변환 후 하단 질문창을 통해 PDF 내용에 관해 대화해보세요.</p>
                  </div>
                </div>

                {/* Right Main Screen area */}
                <div className="flex-1 bg-white p-5 md:p-6 flex flex-col justify-between min-w-0">
                  <div className="space-y-4">
                    {/* Title block */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <span role="img" aria-label="books">📚</span>
                        <span>나만의 PDF RAG 챗봇</span>
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-1">
                        PDF 업로드 → 청킹 → 임베딩 검색 → 컨텍스트 조립 → LLM 답변(+출처 표시)
                      </p>
                    </div>

                    {/* Accordions */}
                    <div className="space-y-1.5 text-xs">
                      {/* Accordion 1 */}
                      <div className="border border-slate-200 rounded">
                        <button 
                          onClick={() => setAccordion1Open(!accordion1Open)}
                          className="w-full px-3 py-1.5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between text-slate-700 font-semibold"
                        >
                          <span className="flex items-center gap-1.5 text-slate-800">💡 이전 챕터와 연결</span>
                          <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${accordion1Open ? "rotate-180" : ""}`} />
                        </button>
                        {accordion1Open && (
                          <div className="p-3 bg-white border-t border-slate-200 text-slate-600 leading-relaxed text-[11px]">
                            이전 챕터에서 정제된 데이터 테이블을 텍스트 청크 단위로 FAISS 로컬 벡터 저장소에 정교하게 정렬시킵니다.
                          </div>
                        )}
                      </div>

                      {/* Accordion 2 */}
                      <div className="border border-slate-200 rounded">
                        <button 
                          onClick={() => setAccordion2Open(!accordion2Open)}
                          className="w-full px-3 py-1.5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between text-slate-700 font-semibold"
                        >
                          <span className="flex items-center gap-1.5 text-slate-800">🤖 심화(선택): search_docs를 진짜 '도구'로 등록하면?</span>
                          <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${accordion2Open ? "rotate-180" : ""}`} />
                        </button>
                        {accordion2Open && (
                          <div className="p-3 bg-white border-t border-slate-200 text-slate-600 leading-relaxed text-[11px]">
                            LLM의 Function Calling 기법을 통해, 챗봇이 임의 지식 검색이 필요할 때 직접 `search_docs` 도구를 능동적으로 호출하여 데이터를 수급해 답변하는 지능형 에이전트로 업그레이드할 수 있습니다.
                          </div>
                        )}
                      </div>
                    </div>

                    {/* File Upload simulator card */}
                    {!ragFileUploaded ? (
                      <div className="border-2 border-dashed border-slate-250 rounded-lg p-5 text-center bg-slate-50/50 hover:bg-slate-50 transition-colors">
                        <p className="text-xs text-slate-600 font-bold">문서 업로드 (txt·md·pdf)</p>
                        <div className="mt-3.5 flex flex-col items-center justify-center">
                          {isUploading ? (
                            <div className="w-full max-w-[220px] px-2">
                              <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-action-blue transition-all duration-150" 
                                  style={{ width: `${ragProgress}%` }}
                                />
                              </div>
                              <span className="text-[10px] text-slate-500 font-mono mt-2 block">
                                PDF 로드 및 형태소 청킹 분쇄 중... {ragProgress}%
                              </span>
                            </div>
                          ) : (
                            <>
                              <button 
                                onClick={handleSimulateUpload}
                                className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-3.5 py-1.5 rounded text-xs font-semibold shadow-sm flex items-center gap-1.5 transition-colors"
                              >
                                <Upload className="w-3.5 h-3.5 text-slate-500" />
                                <span>Browse files</span>
                              </button>
                              <span className="text-[10px] text-slate-400 mt-2">200MB per file · TXT, MD, PDF 지원</span>
                            </>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-emerald-800 truncate">AI_학부_빅데이터_전처리_가이드.pdf</p>
                            <p className="text-[10px] text-emerald-600 font-mono">42 Chunks · 128 KB · Ready for Q&A</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => {
                            setRagFileUploaded(false);
                            setRagMessages([{ sender: 'system', text: 'PDF 문서를 업로드해 주시면, 해당 문서의 지식을 완벽히 학습하여 질문에 답변해 드립니다. 왼쪽 패널에서 임베딩과 LLM 모델을 자유롭게 변경해 보세요!' }]);
                          }}
                          className="text-[10px] font-bold text-red-600 hover:underline px-2"
                        >
                          리셋
                        </button>
                      </div>
                    )}

                    {/* Banner hint */}
                    <div className="bg-[#E8F0FE] border border-[#D2E3FC] rounded px-3 py-2 text-[#1967D2] text-[11px] leading-relaxed">
                      {ragFileUploaded 
                        ? "✅ 문서를 성공적으로 읽었습니다! 아래 질문창이나 샘플 질문을 클릭하여 정교한 PDF RAG 챗봇 연산을 검증해 보세요." 
                        : "ℹ️ 문서를 업로드하면 실시간으로 텍스트를 청크로 나눈 후 FAISS 유사도 검색 대기 상태로 전환됩니다."}
                    </div>

                    {/* Chat messaging screen */}
                    <div className="border border-slate-200 rounded-lg h-[180px] overflow-y-auto p-3 bg-slate-50 space-y-3.5 text-xs flex flex-col scrollbar-thin">
                      {ragMessages.map((msg, idx) => (
                        <div 
                          key={idx} 
                          className={`max-w-[85%] rounded-lg p-2.5 ${
                            msg.sender === 'user' 
                              ? 'bg-action-blue text-white self-end rounded-tr-none' 
                              : 'bg-white text-slate-800 self-start rounded-tl-none border border-slate-150 shadow-sm'
                          }`}
                        >
                          <p className="whitespace-pre-line leading-relaxed text-[11px] font-medium">{msg.text}</p>
                          
                          {/* Reference documents matches */}
                          {msg.sources && msg.sources.length > 0 && (
                            <div className="mt-2.5 pt-2 border-t border-slate-100 text-[9px] text-slate-500 space-y-0.5 font-mono bg-slate-50/50 p-1.5 rounded">
                              <span className="font-bold text-slate-700 block mb-0.5">📚 유사도 매칭 추출 출처:</span>
                              {msg.sources.map((src, sIdx) => (
                                <div key={sIdx} className="flex items-center gap-1">
                                  <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                                  <span>{src}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                      {isAnalyzing && (
                        <div className="bg-white text-slate-500 self-start rounded-lg rounded-tl-none border border-slate-150 p-2.5 shadow-sm max-w-[80%] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                          <span className="text-[10px] font-mono ml-1">임베딩 매칭 및 답변 정제 중...</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Input form */}
                  <div className="mt-4 pt-3 border-t border-slate-150 flex gap-2">
                    {ragFileUploaded ? (
                      <>
                        <input 
                          type="text"
                          value={ragInput}
                          onChange={(e) => setRagInput(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && handleSendRagMessage()}
                          placeholder="예: KeyError 방지 대책은?"
                          disabled={isAnalyzing}
                          className="flex-1 border border-slate-300 rounded px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-action-blue font-medium"
                        />
                        <button 
                          onClick={() => handleSendRagMessage()}
                          disabled={isAnalyzing || !ragInput.trim()}
                          className="bg-action-blue text-white px-4 py-1.5 rounded hover:bg-action-blue/90 disabled:bg-slate-300 transition-colors flex items-center justify-center shrink-0"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </>
                    ) : (
                      <div className="w-full flex flex-col sm:flex-row gap-2 items-center">
                        <p className="text-[11px] text-slate-400 text-left flex-1">
                          ⚠️ RAG 활성화를 위해 상단 점선 영역의 <b>Browse files</b> 단추를 눌러 문서 수집 시뮬레이션을 완료하세요.
                        </p>
                        <button 
                          onClick={handleSimulateUpload}
                          className="text-[11px] font-bold text-action-blue hover:bg-blue-50/50 transition-colors border border-blue-200 px-3.5 py-1.5 rounded w-full sm:w-auto shrink-0 bg-blue-50/30"
                        >
                          데모용 PDF 자동 업로드
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {/* Shortcut chips */}
                  {ragFileUploaded && !isAnalyzing && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5 justify-start select-none">
                      <span className="text-[10px] text-slate-400 self-center font-bold">인기 키워드:</span>
                      <button 
                        onClick={() => handleSendRagMessage("KeyError 에러 방지 해결 방법")}
                        className="text-[10px] bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded px-2 py-0.5 text-slate-600 font-semibold transition-colors"
                      >
                        🔑 KeyError 방지법
                      </button>
                      <button 
                        onClick={() => handleSendRagMessage("한국어 청킹과 오버랩 최적 설계 수치")}
                        className="text-[10px] bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded px-2 py-0.5 text-slate-600 font-semibold transition-colors"
                      >
                        🧩 청킹 오버랩 이유
                      </button>
                    </div>
                  )}
                </div>
              </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
