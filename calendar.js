let gisTokenClient = null;
let gAccessToken = null;

function initGoogleAuth() {
  gisTokenClient = google.accounts.oauth2.initTokenClient({
    client_id: GOOGLE_CLIENT_ID,
    scope: "https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/spreadsheets",
    callback: (resp) => {
      if (resp.error) {
        showToast("로그인 실패: " + resp.error);
        return;
      }
      gAccessToken = resp.access_token;
      document.getElementById("gLoginStatus").textContent = "✅ 연결됨";
      document.getElementById("gFetchBtn").disabled = false;
      loadContactsFromSheet(); // 시트에서 업체담당자 불러오기
    }
  });
}

function connectGoogleCalendar() {
  if (!gisTokenClient) {
    showToast("구글 로그인 준비 중... 잠시 후 다시 눌러주세요");
    return;
  }
  gisTokenClient.requestAccessToken();
}

// 날짜 문자열(YYYY-MM-DD)에 day일 더하기/빼기 (시간대 변환 버그 없이)
function shiftDateString(dateStr, deltaDays) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + deltaDays);
  const yy = dt.getFullYear();
  const mm = String(dt.getMonth() + 1).padStart(2, "0");
  const dd = String(dt.getDate()).padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
}

// 선택한 기간의 일정을 구글 캘린더 API로 가져와서 행으로 추가
async function fetchGoogleEvents() {
  if (!gAccessToken) {
    showToast("먼저 구글 캘린더를 연결해주세요");
    return;
  }
  const startInput = document.getElementById("rangeStart").value;
  const endInput = document.getElementById("rangeEnd").value;
  if (!startInput || !endInput) {
    showToast("조회할 기간을 선택해주세요");
    return;
  }

  const timeMin = new Date(startInput + "T00:00:00+09:00").toISOString();
  const timeMax = new Date(endInput + "T23:59:59+09:00").toISOString();

  const url = `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${encodeURIComponent(timeMin)}&timeMax=${encodeURIComponent(timeMax)}&singleEvents=true&orderBy=startTime&maxResults=250`;

  try {
    const res = await fetch(url, { headers: { Authorization: `Bearer ${gAccessToken}` } });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      showToast("캘린더 조회 실패: " + (err.error?.message || res.status));
      return;
    }
    const data = await res.json();
    const items = data.items || [];

    clearRows();
    items.forEach(ev => {
      const title = ev.summary || "";
      const startDate = (ev.start.date || ev.start.dateTime || "").slice(0, 10);
      let endDate;
      if (ev.end.date) {
        // All-day 이벤트는 종료일이 "다음날"로 옴(배타적) -> 하루 빼서 실제 마지막 날로 보정
        endDate = shiftDateString(ev.end.date, -1);
      } else {
        endDate = (ev.end.dateTime || "").slice(0, 10) || startDate;
      }
      addRow(startDate, endDate, title);
    });

    showToast(`${items.length}건 불러왔어요. 분석하기를 눌러주세요.`);
  } catch (e) {
    showToast("오류 발생: " + e.message);
  }
}

window.addEventListener("load", () => {
  if (window.google && google.accounts) initGoogleAuth();
});

// =============================================
// Google Sheets API - 업체담당자 관리
// =============================================

// 시트에서 업체담당자 목록 읽기
async function loadContactsFromSheet() {
  if (!gAccessToken) return;
  try {
    const range = encodeURIComponent(CONTACTS_SHEET_NAME + "!A2:D1000");
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${CONTACTS_SPREADSHEET_ID}/values/${range}`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${gAccessToken}` } });
    if (!res.ok) { console.error("시트 읽기 실패", await res.text()); return; }
    const data = await res.json();
    const rows = data.values || [];
    window._sheetContacts = rows.map(r => ({
      org  : r[0] || "",
      name : r[1] || "",
      title: r[2] || "",
      email: r[3] || ""
    })).filter(c => c.org || c.email);
    if (typeof renderContactsList === "function") renderContactsList();
  } catch (e) { console.error("시트 읽기 오류", e); }
}

// 시트에 업체담당자 목록 전체 저장 (덮어쓰기)
async function saveContactsToSheet(contacts) {
  if (!gAccessToken) { showToast("구글 캘린더를 먼저 연결해주세요."); return false; }
  try {
    // 기존 데이터 지우기
    const sheetRange = encodeURIComponent(CONTACTS_SHEET_NAME + "!A2:D1000");
    const sheetStart = encodeURIComponent(CONTACTS_SHEET_NAME + "!A2");
    const clearUrl = `https://sheets.googleapis.com/v4/spreadsheets/${CONTACTS_SPREADSHEET_ID}/values/${sheetRange}:clear`;
    await fetch(clearUrl, { method: "POST", headers: { Authorization: `Bearer ${gAccessToken}` } });

    if (contacts.length === 0) return true;

    // 새 데이터 쓰기
    const values = contacts.map(c => [c.org, c.name, c.title, c.email]);
    const writeUrl = `https://sheets.googleapis.com/v4/spreadsheets/${CONTACTS_SPREADSHEET_ID}/values/${sheetStart}?valueInputOption=RAW`;
    const res = await fetch(writeUrl, {
      method: "PUT",
      headers: { Authorization: `Bearer ${gAccessToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({ values })
    });
    return res.ok;
  } catch (e) { console.error("시트 쓰기 오류", e); return false; }
}
