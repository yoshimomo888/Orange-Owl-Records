// ------------------------------
// 都道府県データ
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

// ------------------------------
// データ本体
// ------------------------------
const liveData = [
  {
    date: "2026/02/21",
    title: "FOMARE OVER TOUR 25-26",
    place: "香川 高松DIME",
    time: "OPEN 17:30 / START 18:00",
    ticket: "前売り 4800円",
    band: "TETORA",
    pref: "香川"
  },
  {
    date: "2026/02/22",
    title: "FOMARE OVER TOUR 25-26",
    place: "愛媛 松山WstudioRED",
    time: "OPEN 17:00 / START 18:00",
    ticket: "前売り 4800円",
    band: "TETORA",
    pref: "愛媛"
  },
  {
    date: "2026/02/28",
    title: "THE NINTH APOLLO pre ハローミドルグラウンド3",
    place: "Zepp DiverCity(TOKYO)",
    time: "OPEN 12:15 / START 13:00",
    ticket: "前売り 5000円",
    band: "TETORA",
    pref: "東京"
  },
  {
    date: "2026/03/01",
    title: "東京、君がいない街 睨んで疑ってツアー初日 CLUB PHASE 25th 1st DAY",
    place: "東京 高田馬場CLUB PHASE",
    time: "OPEN 17:15 / START 18:00",
    ticket: "前売り 3500円",
    band: "TETORA",
    pref: "東京"
  },
  {
    date: "2026/03/08",
    title: "アメ村あかちょうちん5周年企画 【THE ZIAGE】 あかちょうちん移転記念イベント",
    place: "大阪 心斎橋BRONZE",
    time: "OPEN 17:00 / START 17:30",
    ticket: "前売り 3000円",
    band: "TETORA",
    pref: "大阪"
  },
  {
    date: "2026/03/14",
    title: "TETORA x 炙りなタウン クレイジー&リアル ツアー 第3期",
    place: "沖縄 那覇 桜坂セントラル",
    time: "OPEN 12:30 / START 13:00",
    ticket: "前売り 3500円",
    band: "TETORA",
    pref: "沖縄"
  },
  {
    date: "2026/03/20",
    title: "ツタロックフェス2026",
    place: "千葉県 幕張メッセ",
    time: "OPEN 9:00",
    ticket: "前売り 12000円（各種チケットあり）",
    band: "TETORA",
    pref: "千葉"
  },
  {
    date: "2026/03/22",
    title: "TETORA エピソード0ツアー",
    place: "宮城 仙台darwin",
    time: "OPEN 17:15 / START 18:00",
    ticket: "前売り 3900円",
    band: "TETORA",
    pref: "宮城"
  },
  {
    date: "2026/03/24",
    title: "TETORA x 炙りなタウン クレイジー&リアル ツアー 第3期",
    place: "千葉LOOK",
    time: "OPEN 18:15 / START 19:00",
    ticket: "前売り 3900円",
    band: "TETORA",
    pref: "千葉"
  },
  {
    date: "2026/04/01",
    title: "TETORA エピソード0ツアー",
    place: "福岡BEAT STATION",
    time: "OPEN 18:15 / START 19:00",
    ticket: "前売り 3900円",
    band: "TETORA",
    pref: "福岡"
  },
  {
    date: "2026/04/16",
    title: "参源色 - sangensyoku -",
    place: "東京 渋谷Spotify O-EAST",
    time: "OPEN 17:30 / START 18:30",
    ticket: "前売り（各種チケットあり）",
    band: "TETORA",
    pref: "東京"
  },
  {
    date: "2026/05/10",
    title: "COMING KOBE26",
    place: "兵庫県 神戸メリケンパーク 常設ステージ / 特設ステージ",
    time: "OPEN 9:00 / START 10:00",
    ticket: "無料（各種チケットあり）",
    band: "TETORA",
    pref: "兵庫"
  },
  {
    date: "2026/05/14",
    title: "TETORA エピソード0ツアー",
    place: "東京 渋谷CLUB QUATTRO",
    time: "OPEN 18:00 / START 19:00",
    ticket: "前売り 3900円",
    band: "TETORA",
    pref: "東京"
  },
  {
    date: "2026/05/17",
    title: "TETORA エピソード0ツアー",
    place: "愛知 名古屋CLUB QUATTRO",
    time: "OPEN 17:30 / START 18:30",
    ticket: "前売り 3900円",
    band: "TETORA",
    pref: "愛知"
  },
  {
    date: "2026/05/30",
    title: "OSAKA METROPOLITAN ROCK FESTIVAL 2026",
    place: "大阪堺 海とのふれあい広場",
    time: "",
    ticket: "2日通し券 28000円",
    band: "TETORA",
    pref: "大阪"
  },
  {
    date: "2026/06/06",
    title: "TETORA エピソード0ツアー",
    place: "北海道 札幌ペニーレーン24",
    time: "OPEN 17:15 / START 18:00",
    ticket: "前売り 3900円",
    band: "TETORA",
    pref: "北海道"
  },
  {
    date: "2026/06/25",
    title: "TETORA エピソード0ツアー",
    place: "大阪 梅田CLUB QUATTRO",
    time: "OPEN 18:00 / START 19:00",
    ticket: "前売り 3900円",
    band: "TETORA",
    pref: "大阪"
  }
];


// ------------------------------
// バンドごとの公式URL
// ------------------------------
const bandUrl = {
  "TETORA": "https://www.tetoraosaka.com/live",
  "アルステイク": "https://alstake.com/live",
  "ammo": "https://ammoosaka.com/live",
  "東京、君がいない街": "https://tokyokimimati.ryzm.jp/live",
  "マタノシタシティー": "https://matanoshita.city/live"
};



// ------------------------------
// 曜日
// ------------------------------
function getDow(dateStr) {
  const date = new Date(dateStr);
  return dowList[date.getDay()];
}

// ------------------------------
// 日付（正方形＋斜線）
// ------------------------------
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const m = date.getMonth() + 1;
  const d = date.getDate();

  return (
    '<span class="md" data-left="' + m + '" data-right="' + d + '">' +
      '<span class="slash"></span>' +
    '</span>'
  );
}

// ------------------------------
// カード生成
// ------------------------------
function createLiveCard(item) {
  return `
    <div class="live-card">
      <div class="live-date-block">
        <div class="day-dow">
          ${formatDate(item.date)}
          <span class="dow ${getDow(item.date).toLowerCase()}">${getDow(item.date)}</span>
        </div>
      </div>

      <div class="live-body">
        <p class="band">
  ${item.band}
  <a href="${bandUrl[item.band]}" class="band-link" target="_blank" rel="noopener noreferrer">
    <i class="fa-solid fa-arrow-up-right-from-square"></i>
  </a>
</p>
        <p class="title">${item.title}</p>
        <p class="place">${item.place}</p>
        <p class="time">${item.time}</p>
      </div>
    </div>
  `;
}

// ------------------------------
// カード描画
// ------------------------------
function renderCards(data) {
  const list = document.querySelector(".live-list");
  list.innerHTML = "";

    if (data.length === 0) {
    list.innerHTML = `<p class="no-result">該当するLIVEはありません</p>`;
    return;
  }


  let lastMonth = "";

  data.forEach(item => {
    const date = new Date(item.date);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const monthYear = `${month} ${year}`;

    if (monthYear !== lastMonth) {
      list.innerHTML += `<div class="month-header"><span class="month">${month}</span> <span class="year">${year}</span></div>`;
      lastMonth = monthYear;
    }

    list.innerHTML += createLiveCard(item);
  });
}

// 初期表示
renderCards(liveData);

// ------------------------------
// サジェスト
// ------------------------------
const suggestList = document.querySelector(".suggest-list");

function showSuggest(keyword) {
  if (!keyword) {
    suggestList.style.display = "none";
    return;
  }

  const matched = prefectures
    .filter(p => p.name.includes(keyword) || p.yomi.includes(keyword))
    .map(p => p.name);

  if (matched.length === 0) {
    suggestList.style.display = "none";
    return;
  }

  suggestList.innerHTML = matched
    .map(word => `<div class="suggest-item">${word}</div>`)
    .join("");

  suggestList.style.display = "block";
}

suggestList.addEventListener("click", (e) => {
  if (e.target.classList.contains("suggest-item")) {
    searchInput.value = e.target.textContent;
    searchInput.dispatchEvent(new Event("input"));
    suggestList.style.display = "none";
  }
});

// ------------------------------
// 検索
// ------------------------------
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.trim().toLowerCase();

  showSuggest(keyword);

  const filtered = liveData.filter(item => {
    const matchBand = item.band.toLowerCase().includes(keyword);
    const matchPlace = item.place.toLowerCase().includes(keyword);
    const matchTitle = item.title.toLowerCase().includes(keyword);

    const matchPref =
      item.pref.includes(keyword) ||
      prefectures.some(p => p.name === item.pref && p.yomi.includes(keyword));

    return matchBand || matchPlace || matchTitle || matchPref;
  });

  renderCards(filtered);
});

// ------------------------------
// ロゴ・チップ
// ------------------------------
document.querySelectorAll(".band-logo, .logo-frame").forEach(logo => {
  logo.addEventListener("click", () => {
    const band = logo.dataset.band;
    searchInput.value = band;
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
