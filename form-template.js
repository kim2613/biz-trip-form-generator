// 날짜 문자열(YYYY-MM-DD) -> {y, m, day}
function fmtDate(d) {
  const dt = new Date(d + "T00:00:00");
  return { y: dt.getFullYear(), m: dt.getMonth() + 1, day: dt.getDate() };
}

// 출장 기간 표기: 당일 → "박 1 일", 이상 → "N박 M일"
function calcNights(start, end) {
  const s = new Date(start + "T00:00:00"), e = new Date(end + "T00:00:00");
  const diff = Math.round((e - s) / 86400000);
  if (diff === 0) return "박 1 일";
  return `${diff}박 ${diff + 1}일`;
}

// 박 수(숫자) 반환 — 당일=0
function calcNightCount(start, end) {
  const s = new Date(start + "T00:00:00"), e = new Date(end + "T00:00:00");
  return Math.round((e - s) / 86400000);
}

// 결과(r) -> 회사 양식 그대로의 HTML (복사해서 인트라넷에 붙여넣기용)
// 주의: 원본 HTML 구조(셀 너비 px, 테두리 방향별 스타일, 출장비 명세서 표 포함)를 그대로 따라감
function formatPlace(place) {
  // rules.js에서 이미 "기관명(지역명)" 형태로 변환돼서 옴
  return place || "";
}

function buildFormHTML(r, idx) {
  const s = fmtDate(r.start), e = fmtDate(r.end);
  const nights = calcNights(r.start, r.end);
  const me = getMyInfo();
  const proj = getSelectedProject(idx);
  const depart = document.getElementById("depart-select-" + idx)?.value || "회사";
  const { transport, etcText, costText, costAmount } = getTransportInfo(idx);
  const nightCount = calcNightCount(r.start, r.end);
  const NIGHT_PRICE = 70000;
  const nightCost = nightCount * NIGHT_PRICE;
  const nightCostText = nightCount > 0
    ? `${NIGHT_PRICE.toLocaleString()} × ${nightCount} = ${nightCost.toLocaleString()}`
    : "";
  const totalAmount = (costAmount || 0) + nightCost;
  const mm = String(s.m).padStart(2, "0");
  const dd = String(s.day).padStart(2, "0");
  const em = String(e.m).padStart(2, "0");
  const ed = String(e.day).padStart(2, "0");

  const hdCell = (w, h) =>
    `border-width: 0px 0px 1px 1px; width: ${w}px; height: ${h}px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(201, 224, 240);`;
  const wCell = (w, h) =>
    `border-width: 0px 0px 1px 1px; width: ${w}px; height: ${h}px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);`;

  return `<p><span style="font-size: 10pt;"><span style="color: rgb(255, 0, 0); font-size: 10pt;"><strong>※ *표시는 필수입력란으로 프로젝트별 관리손익에 반영될 수 있도록</strong></span></span></p><p></p><p></p><p><span style="color: rgb(255, 0, 0); font-size: 10pt;"><strong>&nbsp;&nbsp;&nbsp; 반드시 Project 코드/명 을 등록하여야 합니다.</strong></span></p><p><span style="color: rgb(255, 0, 0); font-size: 10pt;"><strong>※ Project 코드가 없거나 미생성상태일때는 없음 또는 미생성 이라고 기재바랍니다.</strong></span></p><p style="margin: 0cm 0cm 0pt; line-height: 115%;"><strong style="color: rgb(255, 0, 0); font-size: 13.3333px;"><span style="color: rgb(0, 0, 0);">※ 결재라인</span><span lang="EN-US" style="color: rgb(0, 0, 0);"> - </span></strong><strong style="color: rgb(255, 0, 0); font-size: 10pt;"><span style="color: rgb(0, 0, 0);">인</span><span lang="EN-US"><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span style="color: rgb(0, 0, 0);">젠&nbsp;</span><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;</span><span style="color: rgb(0, 0, 0);">트</span><span lang="EN-US" style="color: rgb(0, 0, 0);"> : 작성자</span><span style="color: rgb(0, 0, 0);"> → 합의</span></strong><span lang="EN-US" style="font-size: 10pt;"><strong>(강현지</strong></span><strong style="color: rgb(255, 0, 0); font-size: 10pt;"><span lang="EN-US" style="color: rgb(0, 0, 0);">) </span><span style="color: rgb(0, 0, 0);">→ 상위직급자 → 참조</span><span lang="EN-US" style="color: rgb(0, 0, 0);">(안민경</span><span lang="EN-US" style="color: rgb(0, 0, 0);">)</span></strong><span style="font-size: 10pt;"></span></p><p style="margin: 0cm 0cm 0pt; line-height: 115%;"><strong style="font-size: 10pt;"><span lang="EN-US" style="color: rgb(0, 0, 0);"><br></span></strong></p><p style="margin: 0cm 0cm 0pt; line-height: 115%;"><span lang="EN-US" style="color: rgb(0, 0, 0);"></span></p><p></p><p style="margin: 0cm 0cm 0pt; line-height: 115%;"><strong><span lang="EN-US" style="color: rgb(0, 0, 0);"><br></span></strong></p><p></p><p><strong><span style="color: rgb(255, 0, 0); font-size: 10pt;"><br></span></strong></p><p></p>
<p></p>
<table class="__se_tbl" style="border-width: 1px 1px 0px 0px; border-style: solid solid none none; border-color: rgb(0, 0, 0) rgb(0, 0, 0) currentColor currentColor;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="${hdCell(98, 25)}"><p align="center"><span style="color: rgb(255, 0, 0); font-size: 10pt;"><strong>&nbsp;*Project 명</strong></span></p></td>
<td style="${wCell(249, 25)}" colspan="2"><p align="center"><span style="font-size: 10pt;"><strong>&nbsp;${proj.name}</strong></span></p></td>
<td style="${hdCell(112, 25)}"><p align="center"><strong><span style="color: rgb(255, 0, 0); font-size: 10pt;">&nbsp;*Project 코드</span></strong></p></td>
<td style="${wCell(255, 25)}" colspan="2"><p align="center"><span style="font-size: 10pt;"><strong>${proj.code}&nbsp;</strong></span></p></td></tr>
<tr>
<td style="${hdCell(98, 67)}" rowspan="4"><p align="center"><span style="font-size: 10pt;"><strong>&nbsp;출장자</strong></span></p></td>
<td style="${hdCell(158, 18)}"><p align="center"><span style="font-size: 10pt;"><strong>&nbsp;근무팀</strong></span></p></td>
<td style="${hdCell(91, 18)}"><p align="center"><strong><span style="font-size: 10pt;">사번&nbsp;</span></strong></p></td>
<td style="${hdCell(112, 18)}"><p align="center"><span style="font-size: 10pt;"><strong>&nbsp;직급</strong></span></p></td>
<td style="${hdCell(105, 18)}"><p align="center"><span style="font-size: 10pt;"><strong>&nbsp;성명</strong></span></p></td>
<td style="${hdCell(150, 18)}"><p align="center"><span style="font-size: 10pt;"><strong>&nbsp;비고</strong></span></p></td></tr>
<tr>
<td style="${wCell(158, 18)}"><p align="center"><span style="font-size: 10pt;">&nbsp;${me.team}</span></p></td>
<td style="${wCell(91, 18)}"><p align="center"><span style="font-size: 10pt;">${me.empNo}</span></p></td>
<td style="${wCell(112, 18)}"><p align="center"><span style="font-size: 10pt;">${me.grade}&nbsp;</span></p></td>
<td style="${wCell(105, 18)}"><p align="center"><span style="font-size: 10pt;">${me.name}&nbsp;</span></p></td>
<td style="${wCell(150, 18)}"><p align="center"><span style="font-size: 10pt;">&nbsp;</span></p></td></tr>
<tr>
<td style="${wCell(158, 13)}"><p align="center"><span style="font-size: 10pt;">&nbsp;</span></p></td>
<td style="${wCell(91, 13)}"><p align="center"><span style="font-size: 10pt;">&nbsp;</span></p></td>
<td style="${wCell(112, 13)}"><p align="center"><span style="font-size: 10pt;">&nbsp;</span></p></td>
<td style="${wCell(105, 13)}"><p align="center"><span style="font-size: 10pt;">&nbsp;</span></p></td>
<td style="${wCell(150, 13)}"><p align="center"><span style="font-size: 10pt;">&nbsp;</span></p></td></tr>
<tr>
<td style="${wCell(158, 18)}"><p align="center"><span style="font-size: 10pt;">&nbsp;</span></p></td>
<td style="${wCell(91, 18)}"><p align="center"><span style="font-size: 10pt;">&nbsp;</span></p></td>
<td style="${wCell(112, 18)}"><p align="center"><span style="font-size: 10pt;">&nbsp;</span></p></td>
<td style="${wCell(105, 18)}"><p align="center"><span style="font-size: 10pt;">&nbsp;</span></p></td>
<td style="${wCell(150, 18)}"><p align="center"><span style="font-size: 10pt;">&nbsp;</span></p></td></tr>
<tr>
<td style="${hdCell(98, 28)}"><p align="center"><span style="font-size: 10pt;"><strong>&nbsp;출장기간</strong></span></p></td>
<td style="${wCell(466, 28)}" colspan="4"><p align="center"><span style="font-size: 10pt;">&nbsp;${s.y}년&nbsp; &nbsp;${mm}월&nbsp; &nbsp;${dd}일&nbsp; &nbsp;09시 ~&nbsp; &nbsp; &nbsp;${e.y}년&nbsp; &nbsp;${em}월&nbsp; &nbsp;${ed}일&nbsp; &nbsp;18시 </span></p></td>
<td style="${wCell(150, 28)}"><p align="center"><span style="font-size: 10pt;">&nbsp; ${nights}</span></p></td></tr>
<tr>
<td style="${hdCell(98, 28)}"><p align="center"><span style="font-size: 10pt;"><strong>&nbsp;출장목적</strong></span></p></td>
<td style="${wCell(616, 28)}" colspan="5"><p align="center"><span style="font-size: 10pt;">${r.purpose}&nbsp;</span></p></td></tr>
<tr>
<td style="${hdCell(98, 28)}"><p align="center"><span style="font-size: 10pt;"><strong>&nbsp;출장일정</strong></span></p></td>
<td style="${wCell(616, 28)}" colspan="5"><p align="center"><span style="font-size: 10pt;">&nbsp;</span></p></td></tr>
<tr>
<td style="${hdCell(98, 82)}" rowspan="5"><p align="center"><span style="font-size: 10pt;"><strong>&nbsp;출장지</strong></span></p></td>
<td style="${hdCell(158, 18)}"><p align="center"><span style="font-size: 10pt;"><strong>&nbsp;출발지</strong></span></p></td>
<td style="${wCell(458, 18)}" colspan="4"><p align="center"><span style="font-size: 10pt;">${depart}&nbsp;</span></p></td></tr>
<tr>
<td style="${hdCell(158, 18)}"><p align="center"><span style="font-size: 10pt;"><strong>&nbsp;경유지1</strong></span></p></td>
<td style="${wCell(458, 18)}" colspan="4"><p align="center"><span style="font-size: 10pt;">&nbsp;</span></p></td></tr>
<tr>
<td style="${hdCell(158, 18)}"><p align="center"><span style="font-size: 10pt;"><strong>&nbsp;경유지2</strong></span></p></td>
<td style="${wCell(458, 18)}" colspan="4"><p align="center"><span style="font-size: 10pt;">&nbsp;</span></p></td></tr>
<tr>
<td style="${hdCell(158, 10)}"><p align="center"><span style="font-size: 10pt;"><strong>&nbsp;경유지3</strong></span></p></td>
<td style="${wCell(458, 10)}" colspan="4"><p align="center"><span style="font-size: 10pt;">&nbsp;</span></p></td></tr>
<tr>
<td style="${hdCell(158, 18)}"><p align="center"><span style="font-size: 10pt;"><strong>&nbsp;도착지</strong></span></p></td>
<td style="${wCell(458, 18)}" colspan="4"><p align="center"><span style="font-size: 10pt;">&nbsp;${formatPlace(r.place)}</span></p></td></tr>
<tr>
<td style="${hdCell(98, 48)}" rowspan="2"><p align="center"><span style="font-size: 10pt;"><strong>&nbsp;교통편</strong></span></p></td>
<td style="${wCell(361, 26)}" colspan="3"><p align="center"><span style="font-size: 10pt;">&nbsp;${transport.includes("대중교통") ? "(O)" : "( )"} 대중교통(기차,버스,선박 등)</span></p></td>
<td style="${wCell(255, 26)}" colspan="2"><p align="center"><span style="font-size: 10pt;">&nbsp;${transport.includes("항공") ? "(O)" : "( )"} 항공</span></p></td></tr>
<tr>
<td style="${wCell(361, 22)}" colspan="3"><p align="center"><span style="font-size: 10pt;">&nbsp;${transport.includes("자가차량") ? "(O)" : "( )"} 자가차량</span></p></td>
<td style="${wCell(255, 22)}" colspan="2"><p align="center"><span style="font-size: 10pt;">&nbsp;${transport.includes("기타") ? "(O)" : "( )"} 기타 (${etcText ? " " + etcText + " " : " "})</span></p></td></tr></tbody></table>
<p></p>
<p></p>
<p><span style="color: rgb(255, 0, 0); font-size: 12pt;"></span></p>
<p style="line-height: 0.8;"><span style="color: rgb(255, 0, 0); font-size: 12pt;">​</span></p>
<p><span style="color: rgb(255, 0, 0); font-size: 11pt;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size: 11pt;"><strong><span style="color: rgb(0, 0, 0);">위와 같이 출장을 신청하오니 재가하여 주시기 바랍니다. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></strong></span></span></p>
<p><span style="color: rgb(255, 0, 0); font-size: 12pt;"><span style="font-size: 12pt;"></span></span>&nbsp;</p>
<p><span style="color: rgb(255, 0, 0); font-size: 12pt;"><span style="font-size: 12pt;">​</span></span></p>
<p></p>
<p><span style="color: rgb(255, 0, 0); font-size: 12pt;"><span style="font-size: 12pt;"></span></span></p>
<p></p>
<table class="__se_tbl" style="border-width: 1px 1px 0px 0px; border-style: solid solid none none; border-color: rgb(0, 0, 0) rgb(0, 0, 0) currentColor currentColor;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="border-width: 0px 0px 1px 1px; width: 657px; height: 30px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(201, 224, 240);" colspan="4">
<p align="center" style="text-align: center;"><strong><span style="font-size: 12pt;">&nbsp;출장비 명세서</span></strong></p></td></tr>
<tr>
<td style="border-width: 0px 0px 1px 1px; width: 110px; height: 18px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(201, 224, 240);">
<p align="center" style="text-align: center;"><strong><span style="font-size: 10pt;">항목</span></strong></p></td>
<td style="border-width: 0px 0px 1px 1px; width: 269px; height: 18px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(201, 224, 240);">
<p align="center"><strong><span style="font-size: 10pt;">&nbsp;산출근거</span></strong></p></td>
<td style="border-width: 0px 0px 1px 1px; width: 136px; height: 18px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(201, 224, 240);">
<p align="center"><strong><span style="font-size: 10pt;">금액&nbsp;</span></strong></p></td>
<td style="border-width: 0px 0px 1px 1px; width: 142px; height: 18px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(201, 224, 240);">
<p align="center" style="text-align: center;"><strong><span style="font-size: 10pt;">비고&nbsp;</span></strong></p></td></tr>
<tr>
<td style="border-width: 0px 0px 1px 1px; width: 110px; height: 28px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(201, 224, 240);">
<p align="center" style="text-align: center;"><strong><span style="font-size: 10pt;">교통비</span></strong></p></td>
<td style="border-width: 0px 0px 1px 1px; width: 269px; height: 28px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);">
<p align="center"><span style="font-size: 10pt;">${costText ? "&nbsp;" + costText : "&nbsp;"}</span></p></td>
<td style="border-width: 0px 0px 1px 1px; width: 136px; height: 26px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);">
<p align="center" style="text-align: right;"><span style="font-size: 10pt;">${costAmount ? costAmount.toLocaleString() + " 원 &nbsp; " : "원 &nbsp; "}</span></p></td>
<td style="border-width: 0px 0px 1px 1px; width: 142px; height: 28px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);">
<p align="center"><span style="font-size: 10pt;">&nbsp;</span></p></td></tr>
<tr>
<td style="border-width: 0px 0px 1px 1px; width: 110px; height: 26px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(201, 224, 240);">
<p align="center" style="text-align: center;"><strong><span style="font-size: 10pt;">숙박비</span></strong></p></td>
<td style="border-width: 0px 0px 1px 1px; width: 269px; height: 26px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);">
<p align="center"><span style="font-size: 10pt;">&nbsp;${nightCostText}</span></p></td>
<td style="border-width: 0px 0px 1px 1px; width: 136px; height: 26px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);">
<p align="center" style="text-align: right;"><span style="font-size: 10pt;">${nightCost > 0 ? nightCost.toLocaleString() + " 원 &nbsp;" : "원 &nbsp;"}</span></p></td>
<td style="border-width: 0px 0px 1px 1px; width: 142px; height: 26px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);">
<p align="center"><span style="font-size: 10pt;">&nbsp;</span></p></td></tr>
<tr>
<td style="border-width: 0px 0px 1px 1px; width: 110px; height: 25px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(201, 224, 240);">
<p align="center" style="text-align: center;"><strong><span style="font-size: 10pt;">일비</span></strong></p></td>
<td style="border-width: 0px 0px 1px 1px; width: 269px; height: 25px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);">
<p align="center"><span style="font-size: 10pt;">&nbsp;</span></p></td>
<td style="border-width: 0px 0px 1px 1px; width: 136px; height: 25px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);">
<p align="center" style="text-align: right;"><span style="font-size: 10pt;">&nbsp;원 &nbsp; </span></p></td>
<td style="border-width: 0px 0px 1px 1px; width: 142px; height: 25px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);">
<p align="center"><span style="font-size: 10pt;">&nbsp; &nbsp;</span></p></td></tr>
<tr>
<td style="border-width: 0px 0px 1px 1px; width: 110px; height: 39px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(201, 224, 240);">
<p align="center" style="text-align: center;"><strong>합계</strong></p></td>
<td style="border-width: 0px 0px 1px 1px; width: 405px; height: 39px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);" colspan="2">
<p align="right" style="text-align: right;">${totalAmount > 0 ? totalAmount.toLocaleString() + " 원 &nbsp;" : "0 원 &nbsp;"}</p></td>
<td style="border-width: 0px 0px 1px 1px; width: 142px; height: 39px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);">
<p>&nbsp;</p></td></tr>
<tr>
<td style="border-width: 0px 0px 1px 1px; width: 172px; height: 14px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(201, 224, 240);">
<p align="center" style="text-align: center;"><strong><span style="font-size: 10pt;">&nbsp;특이사항</span></strong></p>
<p align="center" style="text-align: center;"><strong><span style="font-size: 10pt;">(출장여비 규정외)</span></strong></p></td>
<td style="border-width: 0px 0px 1px 1px; width: 485px; height: 14px; border-bottom-color: rgb(0, 0, 0); border-left-color: rgb(0, 0, 0); border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);" colspan="3">
<p align="center" style="text-align: center;">&nbsp; </p>
<p align="center" style="text-align: center;"><span style="font-size: 10pt;">&nbsp;</span></p></td></tr></tbody></table>
<p></p>
<p></p>
<p><span style="color: rgb(255, 0, 0); font-size: 12pt;">​</span></p>`;
}
