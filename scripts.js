// ------------------------------
// 都道府県データ（最初に置く）
// ------------------------------
const prefectures = [
  { name: "北海道", yomi: "ほっかいどう" },
  { name: "青森", yomi: "あおもり" },
  { name: "岩手", yomi: "いわて" },
  { name: "宮城", yomi: "みやぎ" },
  { name: "秋田", yomi: "あきた" },
  { name: "山形", yomi: "やまがた" },
  { name: "福島", yomi: "ふくしま" },
  { name: "茨城", yomi: "いばらき" },
  { name: "栃木", yomi: "とちぎ" },
  { name: "群馬", yomi: "ぐんま" },
  { name: "埼玉", yomi: "さいたま" },
  { name: "千葉", yomi: "ちば" },
  { name: "東京", yomi: "とうきょう" },
  { name: "神奈川", yomi: "かながわ" },
  { name: "新潟", yomi: "にいがた" },
  { name: "富山", yomi: "とやま" },
  { name: "石川", yomi: "いしかわ" },
  { name: "福井", yomi: "ふくい" },
  { name: "山梨", yomi: "やまなし" },
  { name: "長野", yomi: "ながの" },
  { name: "岐阜", yomi: "ぎふ" },
  { name: "静岡", yomi: "しずおか" },
  { name: "愛知", yomi: "あいち" },
  { name: "三重", yomi: "みえ" },
  { name: "滋賀", yomi: "しが" },
  { name: "京都", yomi: "きょうと" },
  { name: "大阪", yomi: "おおさか" },
  { name: "兵庫", yomi: "ひょうご" },
  { name: "奈良", yomi: "なら" },
  { name: "和歌山", yomi: "わかやま" },
  { name: "鳥取", yomi: "とっとり" },
  { name: "島根", yomi: "しまね" },
  { name: "岡山", yomi: "おかやま" },
  { name: "広島", yomi: "ひろしま" },
  { name: "山口", yomi: "やまぐち" },
  { name: "徳島", yomi: "とくしま" },
  { name: "香川", yomi: "かがわ" },
  { name: "愛媛", yomi: "えひめ" },
  { name: "高知", yomi: "こうち" },
  { name: "福岡", yomi: "ふくおか" },
  { name: "佐賀", yomi: "さが" },
  { name: "長崎", yomi: "ながさき" },
  { name: "熊本", yomi: "くまもと" },
  { name: "大分", yomi: "おおいた" },
  { name: "宮崎", yomi: "みやざき" },
  { name: "鹿児島", yomi: "かごしま" },
  { name: "沖縄", yomi: "おきなわ" }
];

const dowList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

let liveData = [];

fetch("/data/live.json")
  .then(res => res.json())
  .then(data => {
    liveData = data;
    renderCards(liveData);
  })
  .catch(err => console.error("JSON読み込みエラー:", err));



// ------------------------------
// サジェスト用の単語
// ------------------------------
const suggestWords = [
  ...liveData.map(item => item.band),
  ...prefectures.map(p => p.name) // ← 漢字だけ
];



// ------------------------------
// カード生成
// ------------------------------
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getMonth() + 1} / ${date.getDate()}`;
}

function createLiveCard(item) {
  return `
    <div class="live-card">
      <div class="live-date">
        <span class="md">${formatDate(item.date)}</span>
        <span class="dow">${getDow(item.date)}</span>
      </div>
      <div class="live-body">
        <p class="band">${item.band}</p>
        <p class="title">${item.title}</p>
        <p class="place">${item.place}</p>
        <p class="time">${item.time}</p>
        <a class="link" href="${item.url}" target="_blank">詳細を見る</a>
      </div>
    </div>
  `;
}

function getDow(dateStr) {
  const d = new Date(dateStr);
  return dowList[d.getDay()];
}

function renderCards(data) {
  const list = document.querySelector(".live-list");
  list.innerHTML = "";
  data.forEach(item => list.innerHTML += createLiveCard(item));
}

// ------------------------------
// サジェスト
// ------------------------------
const suggestList = document.querySelector(".suggest-list");

function showSuggest(keyword) {
  if (!keyword) {
    suggestList.style.display = "none";
    return;
  }

  const lower = keyword.toLowerCase();

  // ひらがなでも漢字でもヒットさせる
  const matched = prefectures
    .filter(p =>
      p.name.includes(keyword) || p.yomi.includes(keyword)
    )
    .map(p => p.name); // ← サジェストは漢字だけ

  if (matched.length === 0) {
    suggestList.style.display = "none";
    return;
  }

  suggestList.innerHTML = matched
    .map(word => `<div class="suggest-item">${word}</div>`)
    .join("");

  suggestList.style.display = "block";
}

// ------------------------------
// 検索イベント
// ------------------------------
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.trim().toLowerCase();

  showSuggest(keyword);

  const filtered = liveData.filter(item => {
    const matchBand = item.band.toLowerCase().includes(keyword);
    const matchPlace = item.place.toLowerCase().includes(keyword);
    const matchTitle = item.title.toLowerCase().includes(keyword);

    const matchPref = prefectures.some(p =>
      p.name.includes(keyword) || p.yomi.includes(keyword)
    );

    return matchBand || matchPlace || matchTitle || matchPref;
  });

  renderCards(filtered);
});

// ------------------------------
// ロゴ・チップ
// ------------------------------
const bandLogos = document.querySelectorAll(".band-logo, .logo-frame");
bandLogos.forEach(logo => {
  logo.addEventListener("click", () => {
    searchInput.value = logo.alt || logo.textContent;
    searchInput.dispatchEvent(new Event("input"));
  });
});

document.querySelector(".agency").addEventListener("click", () => {
  searchInput.value = "";
  renderCards(liveData);
});

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    searchInput.value = chip.textContent;
    searchInput.dispatchEvent(new Event("input"));
  });
});

