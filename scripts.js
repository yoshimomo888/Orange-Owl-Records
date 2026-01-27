// ------------------------------
// ① DOMの取得
// ------------------------------
const bandSelect = document.getElementById("search-band");
const prefSelect = document.getElementById("search-pref");
const liveList = document.querySelector(".live-list");

// ------------------------------
// ③ カードを生成する関数
// ------------------------------
function renderLives(list) {
  liveList.innerHTML = ""; // 一旦リセット

  list.forEach(live => {
    const card = document.createElement("div");
    card.classList.add("live-card");

card.innerHTML = `
<div class="live-date">${live.date}</div>
      <div class="live-band">${live.band}</div>
      <div class="live-title">${live.title}</div>
      <div class="live-venue">${live.venue}</div>
      <div class="live-time">${live.time}</div>
      <div class="live-ticket">${live.ticket}</div>
      <a class="live-detail-link" href="#">詳細を見る</a>
    `;

    liveList.appendChild(card);
  });
}

// ------------------------------
// ④ 検索（フィルタリング）
// ------------------------------
function filterLives() {
  const selectedBand = bandSelect.value;
  const selectedPref = prefSelect.value;

  const filtered = window.allLives.filter(live => {
    const bandMatch = selectedBand === "" || live.band === selectedBand;
    const prefMatch = selectedPref === "" || live.pref === selectedPref;
    return bandMatch && prefMatch;
  });

  renderLives(filtered);
}
// ------------------------------
// ⑤ イベントリスナー
// ------------------------------
bandSelect.addEventListener("change", filterLives);
prefSelect.addEventListener("change", filterLives);

// ------------------------------
// JSON を読み込む
// ------------------------------
fetch("lives.json")
  .then(response => response.json())
  .then(data => {
    // data が JSON の配列になる
    renderLives(data);

    // 検索用に保存しておく
    window.allLives = data;
  });