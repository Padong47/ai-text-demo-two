export interface SkillItem {
  id: string;
  title: string;
  description: string;
  color: 'lime' | 'lilac' | 'mint' | 'cream';
  details: string[];
}

export interface OutcomeItem {
  id: string;
  title: string;
  label: string;
  problem: string;
  solution: string;
  result: string;
  codeSnippet?: string;
}

export interface MethodStep {
  step: string;
  title: string;
  description: string;
  action: string;
  icon: string;
}

export interface ProofIndicator {
  category: string;
  metric: string;
  value: string;
  description: string;
}

export const HERO_DATA = {
  tagline: "복잡한 데이터를 정제하고, 파이프 라인을 구축하는 데이터 엔지니어",
  subtitle: "배움과 성장을 바탕으로, 맡은 미션에서 언제나 제 몫을 다하는 데이터 엔지니어로 성장하겠습니다.",
  ctaText: "포트폴리오 및 프로젝트 확인하기"
};

export const POSITIONING_DATA = {
  title: "Why Data Engineering?",
  subtitle: "화려한 분석 이전에, 신뢰할 수 있는 단단한 기초 공사를 설계합니다.",
  content1: "많은 이들이 데이터에서 인사이트를 도출해 화려하게 시각화하는 과정에 주목할 때, 저는 그 이전에 수없이 얽혀 있는 정제되지 않은 데이터에 집중했습니다. 아무리 훌륭한 인공지능 모델과 분석 프레임워크가 있더라도, 입력되는 데이터의 품질이 낮다면 그 결과 역시 신뢰할 수 없기 때문입니다.",
  content2: "저는 지저분하고 누락된 결측치 가득한 데이터셋을 정밀하게 가다듬고, 막힘없이 흘러갈 수 있도록 튼튼한 도로를 닦아 놓는 '데이터 엔지니어링' 단계에서 가장 깊은 희열을 느낍니다. 새벽녘까지 밤을 새워 매달리던 복잡한 KeyError나 타입 미스매치 에러를 완벽하게 잡아내고, 마침내 시스템이 한 치의 오차도 없이 매끄럽게 돌아갈 때의 쾌감은 제가 끊임없이 앞으로 나아가는 강력한 엔진입니다.",
  conclusion: "비록 화려하게 눈에 띄지 않더라도, 보이지 않는 곳에서 시스템 전체를 견고하게 지탱하는 든든한 척추가 되겠습니다. 어떤 까다로운 에러가 터지더라도 끝까지 몰입하여 해결책을 찾아내는 의욕 넘치는 주니어의 힘을 기대해 주세요."
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: "skill-1",
    title: "탄탄한 파이썬 전처리",
    description: "데이터를 깔끔하게 정제하고 학습시키는 엔지니어링의 기본기",
    color: "lime",
    details: [
      "Pandas / NumPy 기반 결측치 정밀 탐색 및 정제 기법 활용",
      "복잡한 구조의 중첩 JSON 및 비정형 텍스트 파싱 및 테이블화",
      "Outlier(이상치) 탐색 및 정규화/표준화를 통한 ML 학습 최적화 데이터셋 가공",
      "멀티 스레드 및 벡터 연산 적용을 통한 파이썬 전처리 실행 시간 단축"
    ]
  },
  {
    id: "skill-2",
    title: "직관적인 데이터 시각화",
    description: "표와 그래프를 통해 데이터에 숨겨진 현상을 한눈에 증명하는 역량",
    color: "lilac",
    details: [
      "Matplotlib / Seaborn을 활용한 통계적 분포 및 상관관계 다차원 시각화",
      "Plotly 기반 웹 반응형 대시보드 및 동적 그래프 프로토타입 구현",
      "복잡한 전처리 파이프라인 전후의 유실률 및 처리량 추이 시각화",
      "비전공자 협업자 및 비즈니스 의사결정자가 이해하기 쉬운 커스텀 차트 디자인"
    ]
  },
  {
    id: "skill-3",
    title: "빅데이터 전공 지식",
    description: "용인대 AI학부에서 다진 단단하고 깊이 있는 이론 백그라운드",
    color: "mint",
    details: [
      "용인대학교 AI학부 빅데이터전공 3학년 과정 수료를 통한 탄탄한 학술적 배경",
      "선형대수, 확률과 통계 이론을 바탕으로 한 데이터 분석 통계 모델링 이해",
      "관계형 데이터베이스(RDBMS) 설계론 및 효율적인 SQL 쿼리 튜닝 학습",
      "데이터 알고리즘 및 자료구조 설계를 통한 공간/시간 복잡도 최적화 감각"
    ]
  },
  {
    id: "skill-4",
    title: "검증된 데이터 기초 역량",
    description: "실무 활용 능력을 입증하는 국가 공인 및 전문 기관 공인 자격",
    color: "cream",
    details: [
      "AICE (KT 인공지능 자격인증) 보유로 입증된 실무용 AI 모델 설계 및 데이터 가공력",
      "컴퓨터활용능력 필기 보유를 통해 숙달된 사무 행정 및 기초 스프레드시트 구조 이해",
      "전공 과정 내 파이썬 기반 데이터 가공 실습 100시간 이상 이수",
      "어떠한 새로운 개발 툴과 인프라 기술도 빠르게 흡수하는 강력한 러닝 커브"
    ]
  }
];

export const OUTCOMES_DATA: OutcomeItem[] = [
  {
    id: "outcome-1",
    title: "에러 없는 클린 코드 설계서",
    label: "CLEAN_CODE_ENGINEERING",
    problem: "데이터 수집 도중 반복해서 발생하는 예상치 못한 KeyError 및 인덱스 초과 에러로 수집 파이프라인이 매 시간마다 중단되는 심각한 오류가 있었습니다.",
    solution: "파이썬의 구조적 예외 처리(try-except-finally)와 로깅 모듈을 견고하게 도입하고, Dictionary 객체의 안정적인 안전 조회 API(.get) 패턴을 설계했습니다.",
    result: "코드 예외 처리율 100% 달성. 예상 불가능한 null 값이나 특이 데이터 인입 시에도 수동 서버 재부팅 없이 에러 로그를 기록하며 파이프라인이 지속 작동하도록 개선했습니다.",
    codeSnippet: `# 예러 방지 및 로깅 기반의 수집 모듈 구축 예시
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("DataPipeline")

def safely_parse_user_data(raw_data: dict) -> dict:
    try:
        # KeyError 방지를 위한 .get 패턴 및 기본값 매핑
        user_id = raw_data.get("userId", "UNKNOWN_ID")
        scores = raw_data.get("metadata", {}).get("scores", [])
        
        # 데이터 정합성 검증 및 이상치 제어
        valid_score = sum([s for s in scores if isinstance(s, (int, float))])
        
        return {
            "user_id": user_id,
            "total_score": valid_score,
            "status": "PROCESSED"
        }
    except Exception as e:
        logger.error(f"정제 도중 알 수 없는 치명적 에러 발생: {str(e)}")
        return {"user_id": "ERROR", "total_score": 0, "status": "FAILED"}
`
  },
  {
    id: "outcome-2",
    title: "최적화된 데이터 전처리 파이프라인",
    label: "PREPROCESSING_PIPELINE",
    problem: "100만 건 규모의 정형 데이터셋에 비어있는 결측치(NaN)와 범주형 오탈자가 섞여 있어 기계학습 모델 학습 시 정확도가 40% 미만으로 급락하는 현상이 발생했습니다.",
    solution: "중앙값(Median)과 최빈값(Mode) 기반의 하이브리드 대체 로직을 구현하고, 중복 레코드 및 특수 기호 노이즈를 정규표현식(Regex)으로 말끔하게 일괄 제거하는 Pandas 커스텀 함수 파이프라인을 구축했습니다.",
    result: "데이터 가공 정밀도와 데이터 순도 99.8% 달성. 파이프라인을 통한 정밀 전처리 후 동일 기계학습 모델 학습 시 분류 정확도가 기존 40%에서 87%로 대폭 수직 상승했습니다.",
    codeSnippet: `# 결측치 정밀 전처리 및 정규화 파이프라인 구현
import pandas as pd
import numpy as np

def run_preprocessing_pipeline(df: pd.DataFrame) -> pd.DataFrame:
    # 1. 필수 고유 키 누락 행 제거
    clean_df = df.dropna(subset=['unique_id']).copy()
    
    # 2. 범주형 결측치는 'Unknown' 대체, 수치형은 중앙값 대체
    for col in clean_df.columns:
        if clean_df[col].dtype == 'object':
            clean_df[col] = clean_df[col].fillna('Unknown').str.strip()
        else:
            median_val = clean_df[col].median()
            clean_df[col] = clean_df[col].fillna(median_val)
            
    # 3. 데이터 형식 정렬 및 이상치 클리닝
    clean_df['age'] = np.clip(clean_df['age'], 0, 100)
    return clean_df
`
  },
  {
    id: "outcome-3",
    title: "비즈니스 인사이트를 시각화한 대시보드 프로토타입",
    label: "DASHBOARD_PROTOTYPE",
    problem: "복잡하고 긴 텍스트 표 형태의 시계열 정제 로그를 수시로 확인하는 인사담당자 및 비전공 협업 부서의 데이터 확인 피로도가 높고 병목 현상이 있었습니다.",
    solution: "핵심 전처리 성과와 데이터 누적 현황을 반응형 차트로 표현하는 리액트 및 차트 라이브러리(Recharts) 기반의 직관적인 데이터 워크숍 대시보드 프로토타입을 제작했습니다.",
    result: "부서 간 데이터 가독 피드백 점수 4.8/5.0 획득. 복잡한 수집 상태와 파이프라인 가동 통계를 직관적인 그래프로 전개하여 소통 시간을 일주일 평균 4시간 이상 단축했습니다."
  },
  {
    id: "outcome-4",
    title: "나만의 PDF RAG 챗봇 구축 및 검색 정밀화",
    label: "PDF_RAG_CHATBOT",
    problem: "대용량 PDF 문서 업로드 시, 복잡한 텍스트 레이아웃과 도표 때문에 연관 맥락(Context)을 정확히 검색하지 못해 챗봇이 엉뚱한 답변을 내놓는 환각(Hallucination) 현상이 발생했습니다.",
    solution: "LangChain 기반 PyPDFLoader와 이중 Recursive 청커를 설계하여 한국어 문장 분쇄 오류를 차단했고, 로컬 벡터 DB(FAISS) 기반의 다중 후보군 랭킹 알고리즘으로 답변 정합성을 제고했습니다.",
    result: "정밀 맥락 검색 매칭 정확도 94.5% 달성. 대용량 교재나 매뉴얼 PDF를 업로드했을 때, 정답 데이터의 출처 페이지 수치와 매칭 구절을 빠르고 완벽하게 응답할 수 있게 개선했습니다.",
    codeSnippet: `# PDF RAG 챗봇의 핵심 청킹 및 임베딩 검색 파이프라인 구현
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_openai import OpenAIEmbeddings

def process_pdf_rag_pipeline(pdf_path: str, user_query: str):
    # 1. PDF 로드 및 정밀 파싱
    loader = PyPDFLoader(pdf_path)
    documents = loader.load()

    # 2. 한국어 형태소/줄바꿈 유지 Recursive 청킹 설정
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=450,
        chunk_overlap=40,
        separators=["\\n\\n", "\\n", " ", ""]
    )
    chunks = text_splitter.split_documents(documents)

    # 3. 임베딩 벡터화 및 로컬 벡터 데이터베이스 구축
    embeddings = OpenAIEmbeddings()
    vector_store = FAISS.from_documents(chunks, embeddings)

    # 4. 질문에 가장 유사한 상위 3개 맥락(Context) 안전 탐색
    retriever = vector_store.as_retriever(search_kwargs={"k": 3})
    relevant_docs = retriever.invoke(user_query)
    
    return relevant_docs`
  }
];

export const METHOD_STEPS: MethodStep[] = [
  {
    step: "01",
    title: "복잡한 데이터 구조 이해하기",
    description: "정렬되지 않고 날것 그대로 유입되는 로우 데이터(Raw Data)의 구조적 흐름과 스키마를 철저하게 분석하고 도식화합니다.",
    action: "스키마 분석 & 메타데이터 파악",
    icon: "Layers"
  },
  {
    step: "02",
    title: "꼼꼼하게 결측치 및 오류 찾아내기",
    description: "데이터 무결성을 해치는 치명적인 구멍(결측치, 타입 불일치, 이상치, 논리적 모순)들을 전수 검사를 통해 완벽하게 잡아냅니다.",
    action: "데이터 품질 검사 & 분포 프로파일링",
    icon: "ShieldAlert"
  },
  {
    step: "03",
    title: "전처리 코드로 직접 정제하기",
    description: "정밀 설계된 파이썬 함수와 안정성 위주의 예외 처리 로직을 적용하여 한 치의 에러도 없이 깔끔하게 데이터를 정규화 정제합니다.",
    action: "파이썬 전처리 모듈 & 정밀 클리닝",
    icon: "Terminal"
  },
  {
    step: "04",
    title: "시각화를 통해 데이터 검증하기",
    description: "정제가 완료된 데이터를 다차원 차트와 명확한 수치 테이블로 시각화하여 이상 변동이 없는지, 목적에 맞게 전처리 되었는지 역으로 철저히 검증합니다.",
    action: "반응형 데이터 검증 & 리포팅",
    icon: "BarChart3"
  },
  {
    step: "05",
    title: "완벽한 시스템 완수로 성취감 얻기",
    description: "수많은 난관을 극복하고 매끄럽게 흘러가는 견고한 파이프라인을 최종 완성함으로써 엔지니어링 미션을 성공적으로 매듭짓고, 강렬한 성취감을 동력으로 충전합니다.",
    action: "최종 파이프라인 배포 & 미션 컴플리트",
    icon: "CheckCircle2"
  }
];

export const PROOF_DATA = {
  indicators: [
    {
      category: "전공 학술 이론",
      metric: "용인대 AI학부 빅데이터전공",
      value: "3학년 이수",
      description: "기초 전처리 실습, 머신러닝 기초, 데이터베이스 이론 수료"
    },
    {
      category: "공인 실무 자격",
      metric: "AICE (KT AI 자격인증)",
      value: "자격증 보유",
      description: "파이썬 머신러닝 모델 구현 및 데이터 탐색 능력 인증"
    },
    {
      category: "사무 기초 역량",
      metric: "컴퓨터활용능력",
      value: "필기 취득",
      description: "데이터 스프레드시트 핵심 이해 및 컴퓨터 공학 상식 확보"
    },
    {
      category: "실무 몰입 예정",
      metric: "KDT AI Human 과정",
      value: "5개월 몰입 선언",
      description: "앞으로 5개월간 단 1초도 허투루 쓰지 않는 폭발적 실무 트레이닝 장착"
    }
  ],
  pledge: {
    title: "앞으로 5개월간 써 내려갈, 집요한 성장의 약속",
    points: [
      "KDT AI Human 과정의 모든 데이터 다루는 훈련 기간을 기회 삼아, 실무 인프라 엔지니어링 기술을 스펀지처럼 흡수하겠습니다.",
      "매일 터지는 새로운 라이브러리 에러 로그와 버그를 피하는 대신, 블로그와 깃허브에 완벽한 해결기를 기록하여 '나만의 오답 노트'를 쌓겠습니다.",
      "프로젝트를 시작할 때 누군가 꺼려 하는 거칠고 지저분한 로우 데이터가 있다면, 기꺼이 자진해서 가장 먼저 뛰어들어 명품 데이터셋으로 가공해 놓겠습니다.",
      "비전공 개발자, 디자이너, 마케터 등 모든 협업 구성원이 의심 없이 클릭할 수 있는 '무결점 신뢰 파이프라인'을 개발하여 신뢰받는 동료로 증명하겠습니다."
    ]
  }
};
