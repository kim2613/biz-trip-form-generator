// ===================================================
// 고정값 — 본인 정보 (필요하면 여기 값만 바꾸면 됨)
// ===================================================
const EXCLUDE_WORDS = ["원격", "유선", "전화", "영상"];
const LEAVE_WORDS = ["연차휴가", "대체휴가", "휴가"];

// 캘린더 제목 -> 출장 여부 판별
// 규칙:
//  1. 휴가류 제외
//  2. 제목 끝 "(...)" 추출
//     - "(원격)/(유선)" 등 -> 출장 아님
//     - "(지역,시간)" 또는 "(지역)" 형태이고 지역사전에 있으면 -> 출장
//     - 그 외(시간 등) -> 출장 아님
//  3. 끝에 괄호가 없으면, 맨 앞 "[지역명]" (과거 습관) 검사
//  4. 둘 다 아니면 -> 출장 아님
function judge(title, regions) {
  const original = title.trim();

  if (LEAVE_WORDS.some(w => original.includes(w))) {
    return { trip: false, reason: "휴가 관련 일정이라 제외", purpose: null, place: null };
  }

  const endMatch = original.match(/\(([^()]*)\)\s*$/);
  if (endMatch) {
    const inner = endMatch[1].trim();

    if (EXCLUDE_WORDS.some(w => inner.includes(w))) {
      return { trip: false, reason: `끝 "(${inner})" → 출장 아닌 키워드`, purpose: null, place: null };
    }

    const candidateRegion = inner.split(",")[0].trim();
    if (regions.includes(candidateRegion)) {
      const purpose = original.slice(0, endMatch.index).trim();
      // 제목 앞에 [기관명] 있으면 → 도착지를 "기관명(지역명)" 형태로
      const orgMatch = purpose.match(/^\[(.+?)\]/);
      const org = orgMatch ? orgMatch[1].trim() : null;
      const place = org ? `${org}(${candidateRegion})` : candidateRegion;
      return { trip: true, reason: `끝 "(${inner})" → 지역명 인식`, purpose, place };
    }

    return { trip: false, reason: `끝 "(${inner})" → 지역명 사전에 없음(시간/기타로 판단)`, purpose: null, place: null };
  }

  const frontMatch = original.match(/^\[([^\[\]]+)\]/);
  if (frontMatch && regions.includes(frontMatch[1].trim())) {
    const place = frontMatch[1].trim();
    const purpose = original.slice(frontMatch[0].length).trim();
    return { trip: true, reason: `앞 "[${place}]" → 지역명 인식 (과거 습관)`, purpose, place };
  }

  return { trip: false, reason: "끝/앞 어디에도 지역명 없음", purpose: null, place: null };
}

function getRegionList() {
  return document.getElementById("regionList").value.split(",").map(s => s.trim()).filter(Boolean);
}
