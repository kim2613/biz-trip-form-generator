// ===================================================
// 프로젝트 목록 (선택하면 Project 명/코드 자동 채워짐)
// ===================================================
const PROJECTS = [
  { code: "P2657458", name: "[26MA] 경상남도교육청교육연구정보원 표준기록물관리 Agent 유지보수" },
  { code: "P2657767", name: "[26MA] 26년 게임물관리위원회 유지보수 사업" },
  { code: "P2657275", name: "[26MA] 광주은행 채널 유지보수" },
  { code: "P2455985", name: "[25MA] 광주은행 eCross 유지보수" },
  { code: "P2657230", name: "[26MA] 국가보훈부 '26년 국가보훈등록증 발급관리시스템 운영 및 유지관리" },
  { code: "P2657494", name: "[26MA] 국가유산 전자행정시스템 유지관리" },
  { code: "P2657227", name: "[26MA] 차세대문화재수리종합정보시스템 유지보수" },
  { code: "P2657246", name: "[26MA] 국립수산과학원 연계소프트 유지관리 사업" },
  { code: "P2657241", name: "[26MA] 국립아시아문화전당 2025년 전산시스템 통합유지관리 사업" },
  { code: "P2556327", name: "[26MA] 국민연금공단 주거래 통합유지보수 사업_ESB" },
  { code: "P2657249", name: "[26MA] 국민연금공단 전산장비 통합유지관리_ESB" },
  { code: "P2556713", name: "[25MA] 국민연금공단 1355특수번호 서비스 유지관리" },
  { code: "P2657223", name: "[26MA] 국세청 2026년 엔티스 운영 및 유지관리 사업" },
  { code: "P2657457", name: "[26MA] 국세청 2026년 국세통계시스템 운영 및 유지관리 사업" },
  { code: "P2657221", name: "[26MA] 국세청 2026년 해외정보교환시스템(AXIS) 운영 및 유지관리" },
  { code: "P2556310", name: "[25MA] 국세청 25년~26년 소득자료관리시스템 운영 및 유지관리" },
  { code: "P2557448", name: "[26MA] 취업 후 학자금 상환 전산시스템 운영 및 유지관리" },
  { code: "P2657224", name: "[26MA] ESB 사이버안전센터 운영 및 유지관리" },
  { code: "P2657226", name: "[26MA] 국세청 빅데이터 운영 및 유지관리 사업" },
  { code: "P2455797", name: "[25MA] 25~26년 국세법령정보·홈페이지·생각나래 운영 및 유지관리 사업" },
  { code: "P2657456", name: "[26MA] 농림수산식품교육문화정보원 연계솔루션 유지보수" },
  { code: "P2657635", name: "[25MA] 대구광역시교육청 더-바른 감사정보시스템 유지관리" },
  { code: "P2657461", name: "[26MA] 대구광역시교육청 정보통신시스템 유지관리 용역" },
  { code: "P2657455", name: "[26MA] 대구미래교육연구원 2026년 표준기록관리 인프라 유지관리" },
  { code: "P2657238", name: "[26MA] 대전광역시 승용차요일제 이행확인시스템 유지보수" },
  { code: "P2657297", name: "[26MA] 부산,경남은행 인젠트 솔루션통합유지보수" },
  { code: "P2557358", name: "[26MA] 신협중앙회 유지보수 (통합)" },
  { code: "P2657460", name: "[26MA] 울산교육연구정보원 유지관리 사업" },
  { code: "P2657218", name: "[26MA] 전북교육포털 정보시스템 메신저 eCross" },
  { code: "P2657454", name: "[26MA] 전북교육청 고입전형포털시스템 물적기반 유지보수" },
  { code: "P2657573", name: "[26MA] 26~27년 정부청사관리본부 연계솔루션 유지보수_eCross" },
  { code: "P2657508", name: "[26MA] 질병관리청 예방접종통합관리시스템 전산장비 유지관리_I/F" },
  { code: "P2657855", name: "[25MA] 축산물품질평가원 통합정보시스템 유지관리_eCross MA" },
  { code: "P2657453", name: "[26MA] 충청북도교육연구정보원 교육행정전산시스템 및 부대장비 유지관리 용역" },
  { code: "P2556624", name: "[26MA]한국과학기술기획평가원_범부처 IRIS 인프라운영유지보수_ECM_ESB" },
  { code: "P2657665", name: "[26MA] 2026년 방송중고 사이버교육시스템 통합플랫폼 운영 및 유지관리 사업 연계솔루션" },
  { code: "P2657636", name: "[26MA] 한국교육개발원 나이스 교육통계시스템 유지보수" },
  { code: "P2657812", name: "[26MA] 나이스 인프라 유지관리 통합" },
  { code: "P2455188", name: "[24MA] 한국교육학술정보원 2024년 국립대학자원관리시스템(KORUS) 통합 유지관리" },
  { code: "P2455524", name: "[24MA] 한국교통안전공단_정보시스템 통합 유지관리 용역" },
  { code: "P2556806", name: "[25MA] 2025년 생명자원정보서비스 통합 유지관리" },
  { code: "P2657459", name: "[26MA] 한국대학교육협의회 2026년 대학정보공시 통합시스템 유지보수" },
  { code: "P2657252", name: "[26MA] 국가교통정보센터 운영 유지관리 용역" },
  { code: "P2455567", name: "[24SO] 한국도로공사 교통정보통합플랫폼 구축" },
  { code: "P2556706", name: "[25MA] 한국산업안전보건공단 25~27년 산재예방 정보시스템 유지관리 사업" },
  { code: "P2657245", name: "[26MA]2026년도 식품진흥원 전산자원, 플랫폼 통합 운영 및 유지관리_eCross" },
  { code: "P2455680", name: "[24MA] 한국어촌어항공단 수산교육포털 시스템 eCross 유지보수" },
  { code: "P2657236", name: "[26MA] 한국전기공사협회 전산시스템 통합유지보수 용역_ESB" },
  { code: "P2657509", name: "[26MA] 한국전력공사 연계솔루션 유지보수_I/F" },
  { code: "P2556160", name: "[25MA] 한국조폐공사 모바일 신분증 운전면허시스템 유지보수" },
  { code: "P2657260", name: "[26MA] 해양수산부 2026년 해양수산정보 공동활용체계 운영 및 유지관리" },
  { code: "P2657237", name: "[26MA] 해양수산부 수산정보통합시스템 유지관리_eCross" }
];

function getMyFilteredProjects() {
  const all = getAllProjects();
  const myList = getMyProjectFilter();
  return all
    .map((p, idx) => ({ ...p, idx }))
    .filter(p => !myList || myList.includes(p.idx));
}

function buildProjectOptionsHTML(selectedIdx) {
  const opts = [`<option value="none">미생성</option>`];
  getMyFilteredProjects().forEach(p => {
    const sel = String(p.idx) === String(selectedIdx) ? "selected" : "";
    opts.push(`<option value="${p.idx}" ${sel}>${p.code} - ${p.name}</option>`);
  });
  return opts.join("");
}

// ===================================================
// 자가차량 교통비 계산
// 표준연비는 고정, 유류비는 2기간으로 관리 (매월 11일 ~ 다음달 10일)
// ===================================================
const FUEL_MILEAGE_DEFAULT = { "휘발유": 8, "경유": 10, "LPG": 6, "전기": 5 };
const FUEL_PRICE_DEFAULT_1 = { "휘발유": 1866, "경유": 1849, "LPG": 1117, "전기": 348 }; // 기간1
const FUEL_PRICE_DEFAULT_2 = { "휘발유": 1866, "경유": 1849, "LPG": 1117, "전기": 348 }; // 기간2

function fuelPriceKey(period) { return "bizTrip_fuelPrices_" + period; }
function fuelMileageKey() { return "bizTrip_fuelMileage"; }

// 출장 날짜(YYYY-MM-DD)로 어느 기간인지 판별
// 기간1: 전달 11일 ~ 당월 10일 (1~10일 출장)
// 기간2: 당월 11일 ~ 다음달 10일 (11~31일 출장)
function getFuelPeriod(dateStr) {
  const day = parseInt((dateStr || "").split("-")[2] || 0);
  return day >= 11 ? 2 : 1;
}

// 기간 라벨 반환
function getFuelPeriodLabel(period) {
  return period === 1 ? "1~10일 출장 적용" : "11~31일 출장 적용";
}

// ===================================================
// 이동거리 자동 저장/불러오기
// ===================================================
function distKey(depart, place) {
  return "bizTrip_dist_" + depart + "_" + place;
}

function getSavedDist(depart, place) {
  const val = localStorage.getItem(distKey(depart, place));
  return val !== null ? parseFloat(val) : null;
}

function saveDist(depart, place, km) {
  if (place && km > 0) localStorage.setItem(distKey(depart, place), km);
}

function getAllDists() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key || !key.startsWith("bizTrip_dist_")) continue;
    const rest = key.slice("bizTrip_dist_".length);
    const firstUnderscore = rest.indexOf("_");
    if (firstUnderscore !== -1) {
      const depart = rest.slice(0, firstUnderscore);
      const place = rest.slice(firstUnderscore + 1);
      result.push({ key, depart, place, km: parseFloat(localStorage.getItem(key)) });
    }
  }
  return result.sort((a, b) => a.depart.localeCompare(b.depart) || a.place.localeCompare(b.place));
}

function autoFillDist(idx) {
  const depart = document.getElementById("depart-select-" + idx)?.value || "회사";
  const place = lastResults[idx]?.place || "";
  if (!place) return;
  const saved = getSavedDist(depart, place);
  if (saved !== null) {
    const distInput = document.getElementById("distance-input-" + idx);
    if (distInput) {
      distInput.value = saved;
      calcCarCost(idx);
    }
  }
}

function onDistanceInput(idx) {
  calcCarCost(idx);
  const dist = parseFloat(document.getElementById("distance-input-" + idx)?.value || 0);
  const depart = document.getElementById("depart-select-" + idx)?.value || "회사";
  const place = lastResults[idx]?.place || "";
  if (dist > 0 && place) saveDist(depart, place, dist);
}

function onDepartChange(idx) {
  autoFillDist(idx);
}

function regionListKey() {
  return "bizTrip_regionList";
}

function openRuleSettings() {
  const saved = localStorage.getItem(regionListKey());
  if (saved) document.getElementById("regionList").value = saved;
  document.getElementById("ruleModalOverlay").style.display = "flex";
}

function closeRuleSettings() {
  document.getElementById("ruleModalOverlay").style.display = "none";
}

function saveRuleSettings() {
  const val = document.getElementById("regionList").value.trim();
  localStorage.setItem(regionListKey(), val);
  showToast("출장지 목록을 저장했어요");
  closeRuleSettings();
}

function openDistSettings() {
  renderDistList();
  document.getElementById("distModalOverlay").style.display = "flex";
}

function closeDistSettings() {
  document.getElementById("distModalOverlay").style.display = "none";
}

function renderDistList() {
  const list = getAllDists();
  const el = document.getElementById("distList");
  if (!el) return;
  if (list.length === 0) {
    el.innerHTML = '<p style="color:#6b7280; font-size:13px; text-align:center; padding:16px 0;">저장된 거리가 없어요.<br>자가차량 거리를 입력하면 자동으로 저장돼요.</p>';
    return;
  }
  el.innerHTML = `
    <table style="width:100%; border-collapse:collapse; font-size:13px;">
      <tr style="background:#f1f5f9;">
        <th style="padding:7px 10px; text-align:left; border-bottom:1px solid #e2e8f0;">출발지</th>
        <th style="padding:7px 10px; text-align:left; border-bottom:1px solid #e2e8f0;">도착지</th>
        <th style="padding:7px 10px; text-align:right; border-bottom:1px solid #e2e8f0;">거리 (왕복 km)</th>
        <th style="padding:7px 10px; border-bottom:1px solid #e2e8f0;"></th>
      </tr>
      ${list.map(d => `
        <tr>
          <td style="padding:7px 10px; border-bottom:1px solid #f1f5f9;">${d.depart}</td>
          <td style="padding:7px 10px; border-bottom:1px solid #f1f5f9;">${d.place}</td>
          <td style="padding:7px 10px; border-bottom:1px solid #f1f5f9; text-align:right;">
            <input type="number" value="${d.km}" min="0"
              style="width:70px; padding:3px 6px; border:1px solid #d1d5db; border-radius:6px; text-align:right; font-size:13px;"
              onchange="updateDistEntry('${d.key}', this.value)">
          </td>
          <td style="padding:7px 10px; border-bottom:1px solid #f1f5f9; text-align:center;">
            <button class="btn-small btn-danger" onclick="deleteDistEntry('${d.key}')">삭제</button>
          </td>
        </tr>
      `).join("")}
    </table>
  `;
}

function updateDistEntry(key, val) {
  const km = parseFloat(val);
  if (km > 0) {
    localStorage.setItem(key, km);
    showToast("거리가 수정됐어요.");
  }
}

function deleteDistEntry(key) {
  localStorage.removeItem(key);
  renderDistList();
  showToast("삭제됐어요.");
}

function fuelTypeKey() {
  const empNo = document.getElementById("myEmpNo")?.value || "guest";
  return "bizTrip_fuelType_" + empNo;
}

function getFuelPrices(period) {
  const p = period || 1;
  const def = p === 1 ? FUEL_PRICE_DEFAULT_1 : FUEL_PRICE_DEFAULT_2;
  try {
    const saved = localStorage.getItem(fuelPriceKey(p));
    return saved ? JSON.parse(saved) : { ...def };
  } catch (e) { return { ...def }; }
}

function getFuelMileage() {
  try {
    const saved = localStorage.getItem(fuelMileageKey());
    return saved ? JSON.parse(saved) : { ...FUEL_MILEAGE_DEFAULT };
  } catch (e) { return { ...FUEL_MILEAGE_DEFAULT }; }
}

function saveFuelPrices() {
  [1, 2].forEach(p => {
    const prices = {
      "휘발유": parseFloat(document.getElementById(`fp${p}-휘발유`)?.value) || (p===1?FUEL_PRICE_DEFAULT_1:FUEL_PRICE_DEFAULT_2)["휘발유"],
      "경유":   parseFloat(document.getElementById(`fp${p}-경유`)?.value)   || (p===1?FUEL_PRICE_DEFAULT_1:FUEL_PRICE_DEFAULT_2)["경유"],
      "LPG":    parseFloat(document.getElementById(`fp${p}-LPG`)?.value)    || (p===1?FUEL_PRICE_DEFAULT_1:FUEL_PRICE_DEFAULT_2)["LPG"],
      "전기":   parseFloat(document.getElementById(`fp${p}-전기`)?.value)   || (p===1?FUEL_PRICE_DEFAULT_1:FUEL_PRICE_DEFAULT_2)["전기"]
    };
    localStorage.setItem(fuelPriceKey(p), JSON.stringify(prices));
  });
  const mileage = {
    "휘발유": parseFloat(document.getElementById("fm-휘발유")?.value) || FUEL_MILEAGE_DEFAULT["휘발유"],
    "경유":   parseFloat(document.getElementById("fm-경유")?.value)   || FUEL_MILEAGE_DEFAULT["경유"],
    "LPG":    parseFloat(document.getElementById("fm-LPG")?.value)    || FUEL_MILEAGE_DEFAULT["LPG"],
    "전기":   parseFloat(document.getElementById("fm-전기")?.value)   || FUEL_MILEAGE_DEFAULT["전기"]
  };
  localStorage.setItem(fuelMileageKey(), JSON.stringify(mileage));
  closeFuelSettings();
  if (typeof lastResults !== "undefined" && lastResults.length) analyze();
  showToast("유류비/표준연비가 저장됐어요.");
}

function getSavedFuelType() {
  return localStorage.getItem(fuelTypeKey()) || "휘발유";
}

function onFuelChange(idx) {
  const fuel = document.getElementById("fuel-select-" + idx)?.value;
  if (fuel) localStorage.setItem(fuelTypeKey(), fuel);
  calcCarCost(idx);
}

function openFuelSettings() {
  const mileage = getFuelMileage();
  [1, 2].forEach(p => {
    const prices = getFuelPrices(p);
    ["휘발유","경유","LPG","전기"].forEach(f => {
      const ep = document.getElementById(`fp${p}-` + f);
      if (ep) ep.value = prices[f];
    });
  });
  ["휘발유","경유","LPG","전기"].forEach(f => {
    const em = document.getElementById("fm-" + f);
    if (em) em.value = mileage[f];
  });
  // 기간 라벨 업데이트
  const l1 = document.getElementById("fuelPeriodLabel1");
  const l2 = document.getElementById("fuelPeriodLabel2");
  if (l1) l1.textContent = getFuelPeriodLabel(1);
  if (l2) l2.textContent = getFuelPeriodLabel(2);
  document.getElementById("fuelModalOverlay").style.display = "flex";
}

function closeFuelSettings() {
  document.getElementById("fuelModalOverlay").style.display = "none";
}

function onTransportChange(idx) {
  const hasCar = document.getElementById("tr-" + idx + "-자가차량")?.checked;
  const carSection = document.getElementById("car-section-" + idx);
  if (carSection) carSection.style.display = hasCar ? "block" : "none";
  if (hasCar) {
    const fuelSel = document.getElementById("fuel-select-" + idx);
    if (fuelSel) fuelSel.value = getSavedFuelType();
    calcCarCost(idx);
  }

  const hasBus = document.getElementById("tr-" + idx + "-대중교통")?.checked;
  const busAmt = document.getElementById("tr-" + idx + "-대중교통-amt");
  if (busAmt) busAmt.style.display = hasBus ? "inline-block" : "none";

  const hasAir = document.getElementById("tr-" + idx + "-항공")?.checked;
  const airAmt = document.getElementById("tr-" + idx + "-항공-amt");
  if (airAmt) airAmt.style.display = hasAir ? "inline-block" : "none";

  const hasEtc = document.getElementById("tr-" + idx + "-기타")?.checked;
  const etcInput = document.getElementById("tr-" + idx + "-기타-text");
  if (etcInput) etcInput.style.display = hasEtc ? "inline-block" : "none";
  const etcAmt = document.getElementById("tr-" + idx + "-기타-amt");
  if (etcAmt) etcAmt.style.display = hasEtc ? "inline-block" : "none";
}

function calcCarCost(idx) {
  const fuel = document.getElementById("fuel-select-" + idx)?.value;
  const dist = parseFloat(document.getElementById("distance-input-" + idx)?.value || 0);
  const resultEl = document.getElementById("car-cost-result-" + idx);
  if (!fuel || !dist || dist <= 0) {
    if (resultEl) resultEl.textContent = "거리를 입력하세요";
    return;
  }
  const dateStr = lastResults[idx]?.start || "";
  const period = getFuelPeriod(dateStr);
  const prices = getFuelPrices(period);
  const mileage = getFuelMileage();
  const cost = Math.round((dist / mileage[fuel]) * prices[fuel]);
  if (resultEl) resultEl.textContent = cost.toLocaleString() + " 원";
}

function getTransportInfo(idx) {
  const types = ["대중교통", "항공", "자가차량", "기타"];
  const checked = types.filter(t => document.getElementById("tr-" + idx + "-" + t)?.checked);
  const transport = checked.length ? checked : [];
  const etcText = document.getElementById("tr-" + idx + "-기타-text")?.value.trim() || "";

  const parts = [];
  let costAmount = 0;

  if (transport.includes("대중교통")) {
    const amt = parseFloat(document.getElementById("tr-" + idx + "-대중교통-amt")?.value || 0);
    if (amt > 0) {
      costAmount += amt;
      parts.push(`대중교통 ${amt.toLocaleString()}`);
    }
  }
  if (transport.includes("항공")) {
    const amt = parseFloat(document.getElementById("tr-" + idx + "-항공-amt")?.value || 0);
    if (amt > 0) {
      costAmount += amt;
      parts.push(`항공 ${amt.toLocaleString()}`);
    }
  }
  if (transport.includes("자가차량")) {
    const fuel = document.getElementById("fuel-select-" + idx)?.value || "휘발유";
    const dist = parseFloat(document.getElementById("distance-input-" + idx)?.value || 0);
    if (dist > 0) {
      const dateStr = lastResults[idx]?.start || "";
      const period = getFuelPeriod(dateStr);
      const prices = getFuelPrices(period);
      const mileage = getFuelMileage();
      const carAmount = Math.round((dist / mileage[fuel]) * prices[fuel]);
      costAmount += carAmount;
      parts.push(`주유비 ${dist}km ÷ ${mileage[fuel]}km × ${prices[fuel].toLocaleString()} = ${carAmount.toLocaleString()}`);
    }
  }
  if (transport.includes("기타")) {
    const amt = parseFloat(document.getElementById("tr-" + idx + "-기타-amt")?.value || 0);
    if (amt > 0) {
      costAmount += amt;
      parts.push(`기타${etcText ? "(" + etcText + ")" : ""} ${amt.toLocaleString()}`);
    }
  }

  const costText = parts.join(" / ");
  return { transport, etcText, costText, costAmount };
}

function getSelectedProject(idx) {
  const sel = document.getElementById("proj-select-" + idx);
  if (!sel || sel.value === "none" || sel.value === "") return { name: "미생성", code: "미생성" };
  const p = PROJECTS[sel.value];
  return { name: p.name, code: p.code };
}

// ===================================================

// ===================================================
// 프로젝트 추가 / 삭제 관리 (localStorage 기반)
// ===================================================
function customProjectsKey() { return "bizTrip_customProjects"; }
function deletedProjectsKey() { return "bizTrip_deletedProjects"; }

function getCustomProjects() {
  try { return JSON.parse(localStorage.getItem(customProjectsKey()) || "[]"); } catch(e) { return []; }
}
function getDeletedProjects() {
  try { return JSON.parse(localStorage.getItem(deletedProjectsKey()) || "[]"); } catch(e) { return []; }
}

// 전체 프로젝트 = 기본 PROJECTS(삭제된 것 제외) + 커스텀 추가분
function getAllProjects() {
  const deleted = getDeletedProjects();
  const base = PROJECTS
    .map((p, i) => ({ ...p, _src: "base", _baseIdx: i }))
    .filter(p => !deleted.includes(p._baseIdx));
  const custom = getCustomProjects()
    .map((p, i) => ({ ...p, _src: "custom", _customIdx: i }));
  return [...base, ...custom];
}

function addCustomProject(code, name) {
  if (!code || !name) return { ok: false, msg: "코드와 이름을 모두 입력해주세요." };
  const code_ = code.trim(), name_ = name.trim();
  const all = getAllProjects();
  const dup = all.find(p => p.code === code_);
  if (dup) return { ok: false, msg: `${code_} 은(는) 이미 존재하는 프로젝트 코드예요.` };
  const list = getCustomProjects();
  list.push({ code: code_, name: name_ });
  localStorage.setItem(customProjectsKey(), JSON.stringify(list));
  return { ok: true };
}

function deleteProject(src, idx) {
  if (src === "base") {
    const deleted = getDeletedProjects();
    if (!deleted.includes(idx)) { deleted.push(idx); localStorage.setItem(deletedProjectsKey(), JSON.stringify(deleted)); }
  } else {
    const list = getCustomProjects();
    list.splice(idx, 1);
    localStorage.setItem(customProjectsKey(), JSON.stringify(list));
  }
}

// 사용자별 프로젝트 필터 — 로그인한 사번 기준으로 localStorage에 저장
// ===================================================
function projectFilterKey() {
  const empNo = document.getElementById("myEmpNo")?.value || "guest";
  return "bizTrip_myProjects_" + empNo;
}

function getMyProjectFilter() {
  const raw = localStorage.getItem(projectFilterKey());
  if (!raw) return null; // 설정 안 했으면 전체 보여줌
  try { return JSON.parse(raw); } catch (e) { return null; }
}

function setMyProjectFilter(list) {
  localStorage.setItem(projectFilterKey(), JSON.stringify(list));
}

function openProjectSettings() {
  renderProjectSettingsList();
  document.getElementById("projectFilterInput").value = "";
  document.getElementById("projectModalOverlay").style.display = "flex";
}

function renderProjectSettingsList() {
  const list = document.getElementById("projectCheckList");
  const myList = getMyProjectFilter();
  const all = getAllProjects();
  list.innerHTML = "";
  all.forEach((p, idx) => {
    const checked = myList ? myList.includes(idx) : true;
    const row = document.createElement("div");
    row.className = "project-check-item";
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.gap = "6px";
    row.dataset.search = (p.code + " " + p.name).toLowerCase();
    row.innerHTML = `
      <label style="flex:1; display:flex; align-items:center; gap:6px; cursor:pointer;">
        <input type="checkbox" value="${idx}" ${checked ? "checked" : ""}>
        <span>${p.name}<br><span class="pcode">${p.code}</span></span>
      </label>
      <button onclick="onDeleteProject('${p._src}', ${p._src === 'base' ? p._baseIdx : p._customIdx})"
        style="flex-shrink:0; padding:2px 8px; font-size:11px; background:#fee2e2; border:1px solid #fca5a5; border-radius:4px; color:#dc2626; cursor:pointer;">삭제</button>
    `;
    list.appendChild(row);
  });
}

function onDeleteProject(src, idx) {
  if (!confirm("이 프로젝트를 목록에서 삭제할까요?")) return;
  deleteProject(src, idx);
  renderProjectSettingsList();
  showToast("삭제됐어요.");
}

function onAddProject() {
  const code = document.getElementById("newProjectCode").value.trim();
  const name = document.getElementById("newProjectName").value.trim();
  const result = addCustomProject(code, name);
  if (!result.ok) { showToast(result.msg); return; }
  document.getElementById("newProjectCode").value = "";
  document.getElementById("newProjectName").value = "";
  renderProjectSettingsList();
  showToast("프로젝트가 추가됐어요.");
}

// 프로젝트 업로드 양식 다운로드
function downloadProjectTemplate() {
  const XLSX = window.XLSX;
  const ws = XLSX.utils.aoa_to_sheet([
    ["프로젝트 코드", "프로젝트명"],
    ["P2657458", "[26MA] 예시 프로젝트명"],
    ["P2657459", "[26MA] 예시 프로젝트명2"],
  ]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "프로젝트목록");
  XLSX.writeFile(wb, "프로젝트_업로드_양식.xlsx");
}

// 엑셀 업로드로 프로젝트 일괄 추가
function onProjectExcelUpload(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const XLSX = window.XLSX;
      const wb = XLSX.read(e.target.result, { type: "binary" });
      const ws = wb.Sheets[wb.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });

      const added = [], skipped = [];
      for (let i = 0; i < rows.length; i++) {
        const [code, name] = rows[i];
        if (!code || !name) continue;
        const result = addCustomProject(String(code).trim(), String(name).trim());
        if (result.ok) added.push(String(code).trim());
        else skipped.push(`${String(code).trim()} - ${String(name).trim()}`);
      }

      renderProjectSettingsList();

      let msg = "";
      if (added.length) msg += `${added.length}개 추가 완료!`;
      if (skipped.length) {
        msg += (added.length ? "\n" : "") + `아래 ${skipped.length}개는 중복으로 건너뜀:\n` + skipped.join("\n");
      }
      if (!added.length && !skipped.length) msg = "추가할 항목이 없어요.";
      alert(msg);
    } catch(err) {
      alert("파일을 읽는 중 오류가 발생했어요. 엑셀 형식을 확인해주세요.");
    }
    input.value = "";
  };
  reader.readAsBinaryString(file);
}

function closeProjectSettings() {
  document.getElementById("projectModalOverlay").style.display = "none";
}

function checkAllProjects(value) {
  document.querySelectorAll("#projectCheckList input[type=checkbox]").forEach(cb => cb.checked = value);
}

function saveProjectSettings() {
  const checked = [...document.querySelectorAll("#projectCheckList input[type=checkbox]:checked")]
    .map(cb => Number(cb.value));
  setMyProjectFilter(checked);
  closeProjectSettings();
  if (lastResults.length) analyze();
  showToast("내 프로젝트 목록이 저장됐어요.");
}
const TEAM_MEMBERS = [
  { team: "연계3팀", empNo: "374063", grade: "수석", name: "김미혜" },
  { team: "연계3팀", empNo: "384074", grade: "수석", name: "노성진" },
  { team: "연계3팀", empNo: "394182", grade: "수석", name: "박준혁" },
  { team: "연계3팀", empNo: "394333", grade: "수석", name: "김정권" },
  { team: "연계3팀", empNo: "384176", grade: "책임", name: "차민석" }
];

const LOGIN_PASSWORD = "chrlqlqjs@#!8";

function findMemberByEmpNo(empNo) {
  return TEAM_MEMBERS.find(m => m.empNo === empNo);
}

function showApp(member) {
  document.getElementById("myTeam").value = member.team;
  document.getElementById("myEmpNo").value = member.empNo;
  document.getElementById("myGrade").value = member.grade;
  document.getElementById("myName").value = member.name;
  document.getElementById("loggedInAs").textContent = `${member.name} (${member.team} / ${member.grade}) 님 로그인`;
  document.getElementById("loginCard").style.display = "none";
  document.getElementById("appContent").style.display = "block";
}

function attemptLogin() {
  const empNo = document.getElementById("loginEmpNo").value.trim();
  const pw = document.getElementById("loginPassword").value;
  const member = findMemberByEmpNo(empNo);
  const errEl = document.getElementById("loginError");

  if (!member || pw !== LOGIN_PASSWORD) {
    errEl.style.display = "block";
    return;
  }
  errEl.style.display = "none";
  localStorage.setItem("bizTrip_loggedInEmpNo", empNo);
  showApp(member);
}

function logout() {
  localStorage.removeItem("bizTrip_loggedInEmpNo");
  document.getElementById("loginCard").style.display = "block";
  document.getElementById("appContent").style.display = "none";
  document.getElementById("loginEmpNo").value = "";
  document.getElementById("loginPassword").value = "";
}

function tryAutoLogin() {
  const savedEmpNo = localStorage.getItem("bizTrip_loggedInEmpNo");
  if (!savedEmpNo) return;
  const member = findMemberByEmpNo(savedEmpNo);
  if (member) showApp(member);
}

// ===================================================
// 내 정보 — 로그인 시 자동으로 채워짐 (직접 입력 불필요)
// ===================================================
const MY_INFO_FIELDS = ["myTeam", "myEmpNo", "myGrade", "myName"];

function getMyInfo() {
  return {
    team: document.getElementById("myTeam").value || "",
    empNo: document.getElementById("myEmpNo").value || "",
    grade: document.getElementById("myGrade").value || "",
    name: document.getElementById("myName").value || ""
  };
}

// ===================================================
// 조회 기간 — 기본값은 이번 달, 월 선택기로 다른 달도 선택 가능
// ===================================================
function pad2(n) { return String(n).padStart(2, "0"); }

function setRangeToMonth(year, month) {
  // month: 1~12
  const start = `${year}-${pad2(month)}-01`;
  const lastDay = new Date(year, month, 0).getDate(); // 해당 월의 마지막 날
  const end = `${year}-${pad2(month)}-${pad2(lastDay)}`;
  document.getElementById("rangeStart").value = start;
  document.getElementById("rangeEnd").value = end;
  document.getElementById("monthPicker").value = `${year}-${pad2(month)}`;
}

function applyMonthPicker() {
  const val = document.getElementById("monthPicker").value; // "YYYY-MM"
  if (!val) return;
  const [y, m] = val.split("-").map(Number);
  setRangeToMonth(y, m);
}

function initDefaultRange() {
  const today = new Date();
  setRangeToMonth(today.getFullYear(), today.getMonth() + 1);
}

window.addEventListener("DOMContentLoaded", () => {
  tryAutoLogin();
  initDefaultRange();
  const savedRegions = localStorage.getItem(regionListKey());
  if (savedRegions) document.getElementById("regionList").value = savedRegions;
  document.getElementById("loginPassword").addEventListener("keydown", e => {
    if (e.key === "Enter") attemptLogin();
  });
  document.getElementById("projectFilterInput").addEventListener("input", e => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll("#projectCheckList .project-check-item").forEach(row => {
      row.style.display = row.dataset.search.includes(q) ? "flex" : "none";
    });
  });
});

function addRow(start = "", end = "", title = "") {
  const tbody = document.getElementById("eventBody");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><input type="date" class="d-start" value="${start}"></td>
    <td><input type="date" class="d-end" value="${end || start}"></td>
    <td><input type="text" class="d-title" value="${title}" placeholder="예: [통계청]이전설치(대전)"></td>
    <td><button class="btn-small btn-danger" onclick="this.closest('tr').remove()">✕</button></td>
  `;
  tbody.appendChild(tr);
}

function clearRows() {
  document.getElementById("eventBody").innerHTML = "";
  document.getElementById("resultCard").style.display = "none";
}

// 캘린더에서 직접 확인한 본인 일정 예시 (필요하면 본인 걸로 교체)
function loadSample() {
  clearRows();
  const sample = [
    ["2026-06-01", "2026-06-01", "[연차휴가]"],
    ["2026-06-04", "2026-06-04", "[정부청사관리본부]인증서 갱신(서울)"],
    ["2026-06-05", "2026-06-05", "[통계청]이전설치(대전)"],
    ["2026-06-11", "2026-06-11", "[대학재정]에이전트 이관 사전작업"],
    ["2026-06-12", "2026-06-12", "[대학재정]에이전트 이관 사전작업"],
    ["2026-06-16", "2026-06-16", "[국립수산과학원]점검(부산)"],
    ["2026-06-18", "2026-06-18", "[게임물관리위원회]점검(원격)"],
    ["2026-06-18", "2026-06-18", "[게임물관리위원회]운영전환지원(원격)"],
    ["2026-06-23", "2026-06-23", "[교육]AI(서울,09:00)"]
  ];
  sample.forEach(([s, e, t]) => addRow(s, e, t));
}

let lastResults = [];

function analyze() {
  const regions = getRegionList();
  const rows = [...document.querySelectorAll("#eventBody tr")];

  lastResults = rows
    .map(tr => {
      const start = tr.querySelector(".d-start").value;
      const end = tr.querySelector(".d-end").value || start;
      const title = tr.querySelector(".d-title").value;
      return { start, end, title, ...judge(title, regions) };
    })
    .filter(r => r.title)
    .sort((a, b) => a.start.localeCompare(b.start)); // 날짜 빠른 순서

  const list = document.getElementById("resultList");
  list.innerHTML = "";

  lastResults.forEach((r, idx) => {
    const div = document.createElement("div");
    div.className = r.trip ? "result-row" : "result-row result-row-excluded";
    div.innerHTML = `
      <div class="result-info">
        <span class="badge ${r.trip ? "badge-ok" : "badge-no"}">${r.trip ? "출장" : "제외"}</span>
        &nbsp; <b>${r.start}${r.end !== r.start ? " ~ " + r.end : ""}</b> — ${r.title}
        ${r.trip ? `
        <div style="margin-top:12px; display:flex; gap:20px; flex-wrap:wrap;">
          <div style="flex:1; min-width:200px;">
            <label style="font-size:12px; color:#444;">프로젝트</label>
            <select id="proj-select-${idx}" style="width:100%; padding:7px 10px; border:1px solid #d1d5db; border-radius:7px; font-size:13px;">
              ${buildProjectOptionsHTML(null)}
            </select>
          </div>
          <div>
            <label style="font-size:12px; color:#444;">출발지</label>
            <select id="depart-select-${idx}" onchange="onDepartChange(${idx})" style="padding:7px 10px; border:1px solid #d1d5db; border-radius:7px; font-size:13px; height:34px;">
              <option value="회사" selected>회사</option>
              <option value="자택">자택</option>
            </select>
          </div>
          <div>
            <label style="font-size:12px; color:#444;">교통편</label>
            <div style="display:flex; gap:16px; flex-wrap:wrap; margin-top:6px;">
              <label style="font-size:13px; display:flex; align-items:center; gap:4px;"><input type="checkbox" name="tr-${idx}" id="tr-${idx}-대중교통" onchange="onTransportChange(${idx})"> 대중교통</label>
              <input type="number" id="tr-${idx}-대중교통-amt" placeholder="금액" min="0" oninput="onTransportChange(${idx})" style="display:none; width:90px; padding:3px 7px; border:1px solid #d1d5db; border-radius:6px; font-size:12.5px;">
              <label style="font-size:13px; display:flex; align-items:center; gap:4px;"><input type="checkbox" name="tr-${idx}" id="tr-${idx}-항공" onchange="onTransportChange(${idx})"> 항공</label>
              <input type="number" id="tr-${idx}-항공-amt" placeholder="금액" min="0" oninput="onTransportChange(${idx})" style="display:none; width:90px; padding:3px 7px; border:1px solid #d1d5db; border-radius:6px; font-size:12.5px;">
              <label style="font-size:13px; display:flex; align-items:center; gap:4px;"><input type="checkbox" name="tr-${idx}" id="tr-${idx}-자가차량" onchange="onTransportChange(${idx})"> 자가차량</label>
              <label style="font-size:13px; display:flex; align-items:center; gap:4px;"><input type="checkbox" name="tr-${idx}" id="tr-${idx}-기타" onchange="onTransportChange(${idx})"> 기타</label>
              <input type="text" id="tr-${idx}-기타-text" placeholder="기타 교통편 입력" value="택시" style="display:none; width:140px; padding:3px 7px; border:1px solid #d1d5db; border-radius:6px; font-size:12.5px;">
              <input type="number" id="tr-${idx}-기타-amt" placeholder="금액" min="0" oninput="onTransportChange(${idx})" style="display:none; width:90px; padding:3px 7px; border:1px solid #d1d5db; border-radius:6px; font-size:12.5px;">
            </div>
          </div>
        </div>
        <div id="car-section-${idx}" style="display:none; margin-top:8px; background:#f8fafc; border:1px dashed #cbd5e1; border-radius:8px; padding:10px;">
          <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:flex-end;">
            <div>
              <label style="font-size:12px; color:#444;">유종</label>
              <select id="fuel-select-${idx}" onchange="onFuelChange(${idx})" style="padding:5px 7px; border:1px solid #d1d5db; border-radius:6px; font-size:12.5px;">
                <option value="휘발유">휘발유</option>
                <option value="경유">경유</option>
                <option value="LPG">LPG</option>
                <option value="전기">전기</option>
              </select>
            </div>
            <div>
              <label style="font-size:12px; color:#444;">이동실거리 <span style="font-size:11px; color:#6b7280; font-weight:normal;">(왕복 km)</span></label>
              <input type="number" id="distance-input-${idx}" min="0" placeholder="예: 80" oninput="onDistanceInput(${idx})"
                style="width:100px; padding:5px 7px; border:1px solid #d1d5db; border-radius:6px; font-size:12.5px;">
            </div>
            <div>
              <label style="font-size:12px; color:#444; display:block;">산출 교통비</label>
              <span id="car-cost-result-${idx}" style="font-size:13px; font-weight:600; color:#2563eb;">거리를 입력하세요</span>
            </div>
          </div>
          <div style="font-size:11.5px; color:#6b7280; margin-top:6px;">
            산출방식: 이동실거리 ÷ 표준연비 × 기준유류비
          </div>
        </div>` : ""}
      </div>
      <div>
        ${r.trip ? `<button class="btn-main btn-small" onclick="togglePreview(${idx})">신청서 생성</button>` : ""}
      </div>
    `;
    list.appendChild(div);

    if (r.trip) {
      autoFillDist(idx); // 저장된 거리 자동 채우기
      const pv = document.createElement("div");
      pv.className = "preview-wrap";
      pv.id = "pv-" + idx;
      list.appendChild(pv);
    }
  });

  document.getElementById("resultCard").style.display = "block";
}

function togglePreview(idx) {
  const pv = document.getElementById("pv-" + idx);
  if (pv.style.display === "block") {
    pv.style.display = "none";
    return;
  }
  const html = buildFormHTML(lastResults[idx], idx);
  pv.innerHTML = html + `<div style="margin-top:8px;"><button class="btn-main btn-small" onclick="copyHTML(${idx})">📋 복사하기 (인트라넷에 붙여넣기)</button></div>`;
  pv.style.display = "block";
}

async function copyHTML(idx) {
  const html = buildFormHTML(lastResults[idx], idx);
  try {
    const blob = new Blob([html], { type: "text/html" });
    const item = new ClipboardItem({ "text/html": blob });
    await navigator.clipboard.write([item]);
    showToast("복사 완료! 인트라넷 입력칸에 붙여넣기 하세요.");
  } catch (e) {
    try {
      const tmp = document.createElement("div");
      tmp.contentEditable = true;
      tmp.style.position = "fixed";
      tmp.style.left = "-9999px";
      tmp.innerHTML = html;
      document.body.appendChild(tmp);
      const range = document.createRange();
      range.selectNodeContents(tmp);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      document.execCommand("copy");
      sel.removeAllRanges();
      document.body.removeChild(tmp);
      showToast("복사 완료! 인트라넷 입력칸에 붙여넣기 하세요.");
    } catch (e2) {
      showToast("복사 실패 - 표를 직접 드래그해서 복사해주세요.");
    }
  }
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}

// 초기 행 1개
addRow();

// =============================================
// 업체담당자 관리 팝업
// =============================================
window._sheetContacts = window._sheetContacts || [];

function openContactsSettings() {
  if (!gAccessToken) {
    showToast("구글 캘린더를 먼저 연결해주세요.");
    return;
  }
  renderContactsList();
  document.getElementById("contactsModalOverlay").style.display = "flex";
}

function closeContactsSettings() {
  document.getElementById("contactsModalOverlay").style.display = "none";
}

function renderContactsList() {
  const el = document.getElementById("contactsList");
  if (!el) return;
  const list = window._sheetContacts || [];
  if (list.length === 0) {
    el.innerHTML = '<p style="color:#6b7280; font-size:13px; text-align:center; padding:16px 0;">등록된 고객사가 없어요. 아래에서 추가해주세요.</p>';
    return;
  }
  el.innerHTML = `
    <table style="width:100%; border-collapse:collapse; font-size:13px;">
      <tr style="background:#f1f5f9;">
        <th style="padding:7px 10px; text-align:left; border-bottom:1px solid #e2e8f0;">고객사명</th>
        <th style="padding:7px 10px; text-align:left; border-bottom:1px solid #e2e8f0; width:80px;">담당자명</th>
        <th style="padding:7px 10px; text-align:left; border-bottom:1px solid #e2e8f0; width:70px;">직함</th>
        <th style="padding:7px 10px; text-align:left; border-bottom:1px solid #e2e8f0;">이메일</th>
        <th style="padding:7px 10px; border-bottom:1px solid #e2e8f0; width:50px;"></th>
      </tr>
      ${list.map((c, i) => `
        <tr style="border-bottom:1px solid #f1f5f9;">
          <td style="padding:6px 10px;"><input type="text" value="${c.org}" onchange="onContactEdit(${i},'org',this.value)" style="width:100%; border:1px solid #e2e8f0; border-radius:4px; padding:3px 6px; font-size:12.5px;"></td>
          <td style="padding:6px 10px;"><input type="text" value="${c.name}" onchange="onContactEdit(${i},'name',this.value)" style="width:80px; border:1px solid #e2e8f0; border-radius:4px; padding:3px 6px; font-size:12.5px;"></td>
          <td style="padding:6px 10px;"><input type="text" value="${c.title}" onchange="onContactEdit(${i},'title',this.value)" style="width:70px; border:1px solid #e2e8f0; border-radius:4px; padding:3px 6px; font-size:12.5px;"></td>
          <td style="padding:6px 10px;"><input type="text" value="${c.email}" onchange="onContactEdit(${i},'email',this.value)" style="width:100%; border:1px solid #e2e8f0; border-radius:4px; padding:3px 6px; font-size:12.5px;"></td>
          <td style="padding:6px 10px; text-align:center; white-space:nowrap;">
            <button class="btn-small btn-danger" onclick="onDeleteContact(${i})" style="white-space:nowrap;">삭제</button>
          </td>
        </tr>
      `).join("")}
    </table>`;
}

function onContactEdit(idx, field, val) {
  if (!window._sheetContacts[idx]) return;
  window._sheetContacts[idx][field] = val.trim();
}

async function onDeleteContact(idx) {
  if (!confirm("이 고객사를 삭제할까요?")) return;
  window._sheetContacts.splice(idx, 1);
  const ok = await saveContactsToSheet(window._sheetContacts);
  if (ok) { renderContactsList(); showToast("삭제됐어요."); }
  else showToast("시트 저장 실패. 다시 시도해주세요.");
}

async function onAddContact() {
  const org   = document.getElementById("newContactOrg")?.value.trim();
  const name  = document.getElementById("newContactName")?.value.trim();
  const title = document.getElementById("newContactTitle")?.value.trim();
  const email = document.getElementById("newContactEmail")?.value.trim();
  if (!org || !email) { showToast("업체명과 이메일은 필수예요."); return; }
  const dup = window._sheetContacts.find(c => c.org === org);
  if (dup) { showToast(`${org} 은(는) 이미 등록된 고객사예요.`); return; }
  window._sheetContacts.push({ org, name, title, email });
  const ok = await saveContactsToSheet(window._sheetContacts);
  if (ok) {
    document.getElementById("newContactOrg").value = "";
    document.getElementById("newContactName").value = "";
    document.getElementById("newContactTitle").value = "";
    document.getElementById("newContactEmail").value = "";
    renderContactsList();
    showToast("추가됐어요.");
  } else showToast("시트 저장 실패. 다시 시도해주세요.");
}

async function onSaveContacts() {
  const ok = await saveContactsToSheet(window._sheetContacts);
  if (ok) showToast("저장됐어요.");
  else showToast("시트 저장 실패. 다시 시도해주세요.");
}
