/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,   // 초대장 열기 화면 보여주기

  // ── 메인 (히어로) ──
  groom: {
    name: "이지홍",
    nameEn: "Groom",
    father: "이도열",
    mother: "남순늠",
    fatherDeceased: false,
    motherDeceased: true,
  },

  bride: {
    name: "손예슬",
    nameEn: "Bride",
    father: "손승만",
    mother: "정윤하",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-07-05",
    time: "15:30",
    venue: "더베일리하우스",
    hall: "3층 단독홀",
    address: "서울 강남구 영동대로 506",
    tel: "02-539-2956",
    mapLinks: {
      kakao: "https://kko.to/X9lXtv3Qxu/",
      naver: "https://naver.me/GJTHDfUm/"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "달려온 시간 위에,\n우리의 오늘을 올립니다.\n\n저희의 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "",
    // 영상 링크를 입력하세요. (YouTube, Vimeo 등 공유 링크 또는 직접 링크)
    // 사용하지 않으려면 null로 두세요.
    video: "https://youtu.be/nz7x9Oxi5Ws",
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "이지홍", bank: "우리은행", number: "1002-831-668352" },
      { role: "아버지", name: "이도열", bank: "IM Bank", number: "023-07-348799-001" },
    ],
    bride: [
      { role: "신부", name: "손예슬", bank: "국민은행", number: "533302-01-236102" },
      { role: "아버지", name: "손승만", bank: "국민은행", number: "011-24-0006-448" },
      { role: "어머니", name: "정윤하", bank: "국민은행", number: "411425-89-108786" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 ♥ 신부 결혼합니다",
    description: "2025년 1월 1일, 소중한 분들을 초대합니다."
  }
};
