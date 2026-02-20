
// ------------------------------
// データ本体
// ------------------------------




// ------------------------------
// 全バンドまとめて日付順にソート
// ------------------------------
const allLiveData = [
  ...liveData,
  ...ammoLiveData,
  ...alstakeLiveData,
  ...matanoLiveData,
  ...tokikimiLiveData
];

allLiveData.sort((a, b) => new Date(a.date) - new Date(b.date));


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
// ★ event_id ごとにライブをまとめる
// ------------------------------
function groupLivesByEvent(lives) {
  const grouped = {};

  lives.forEach(live => {
    if (!grouped[live.event_id]) {
      grouped[live.event_id] = {
        date: live.date,
        title: live.title,
        place: live.place,
        time: live.time,
        bands: []
      };
    }
    grouped[live.event_id].bands.push(live.band);
  });

  return Object.values(grouped);
}


// ------------------------------
// ★ カード生成（複数バンド＋リンク対応）
// ------------------------------
function createLiveCard(item) {

  // バンド名をリンク付きで生成
  const bandLinks = item.bands
    .map(band => {
      const url = bandUrl[band] || "#";
      return `
        <span class="band-with-link">
          ${band}
          <a href="${url}" class="band-link" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </span>
      `;
    })
    .join(" / ");

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
          ${bandLinks}
        </p>
        <p class="title">${item.title}</p>
        <p class="place">${item.place}</p>
        <p class="time">${item.time}</p>
      </div>
    </div>
  `;
}


// ------------------------------
// ★ カード描画（まとめ後のデータを描画）
// ------------------------------
function renderCards(data) {
  const list = document.querySelector(".live-list");
  list.innerHTML = "";

  if (data.length === 0) {
    list.innerHTML = `<p class="no-result">該当するLIVEはありません</p>`;
    return;
  }

  const grouped = groupLivesByEvent(data);

  let lastMonth = "";

  grouped.forEach(item => {
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

renderCards(allLiveData);


// ------------------------------
// サジェスト
// ------------------------------
const suggestList = document.querySelector(".suggest-list");

// ひらがな → カタカナ変換
function hiraToKana(str) {
  return str.replace(/[\u3041-\u3096]/g, ch =>
    String.fromCharCode(ch.charCodeAt(0) + 0x60)
  );
}

// バンド名リスト（必要なら scripts.js から持ってきてもOK）
// バンド名 + 読み
const bandNames = [
  { name: "TETORA", yomi: "てとら" },
  { name: "ammo", yomi: "あも" },
  { name: "アルステイク", yomi: "あるすていく" },
  { name: "マタノシタシティー", yomi: "またのしたしてぃー" },
  { name: "東京、君がいない街", yomi: "とうきょうきみがいないまち" }
];


function showSuggest(keyword) {
  if (!keyword) {
    suggestList.style.display = "none";
    return;
  }

  // 入力をカタカナ化
  const kanaKeyword = hiraToKana(keyword.toLowerCase());

  // 都道府県の候補
  const prefMatched = prefectures
    .filter(p =>
      hiraToKana(p.name).toLowerCase().includes(kanaKeyword) ||
      hiraToKana(p.yomi).toLowerCase().includes(kanaKeyword)
    )
    .map(p => p.name);

  // バンド名の候補
const bandMatched = bandNames
  .filter(b =>
    hiraToKana(b.name).toLowerCase().includes(kanaKeyword) ||
    hiraToKana(b.yomi).toLowerCase().includes(kanaKeyword)
  )
  .map(b => b.name);

  // 合体
  const matched = [...prefMatched, ...bandMatched];

  if (matched.length === 0) {
    suggestList.style.display = "none";
    return;
  }

  suggestList.innerHTML = matched
    .map(word => `<div class="suggest-item">${word}</div>`)
    .join("");

  suggestList.style.display = "block";
}

// サジェストクリック時の動作
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

// ★ 追加：検索欄の内容が確定したらサジェストを閉じる
searchInput.addEventListener("change", () => {
  suggestList.style.display = "none";
});

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.trim().toLowerCase();

  showSuggest(keyword);

  const filtered = allLiveData.filter(item => {
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
// ロゴ・チップ・地域ボタン
// ------------------------------

// ロゴ（バンドロゴ）
document.querySelectorAll(".band-logo").forEach(logo => {
  logo.addEventListener("click", () => {
    const band = logo.dataset.band;

    // 検索欄に入れる
    searchInput.value = band;

    // 検索実行
    searchInput.dispatchEvent(new Event("input"));

    // ★ サジェスト閉じる
    searchInput.dispatchEvent(new Event("change"));

    // flash アニメーション
    searchInput.classList.add('flash');
    setTimeout(() => searchInput.classList.remove('flash'), 400);
  });
});

// agency（ロゴ上の全件表示ボタン）
document.querySelector(".agency").addEventListener("click", () => {
  searchInput.value = "";
  renderCards(allLiveData);

  // ★ サジェスト閉じる
  searchInput.dispatchEvent(new Event("change"));
});

// チップ（地域チップ）
document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    searchInput.value = chip.textContent;

    // 検索実行
    searchInput.dispatchEvent(new Event("input"));

    // ★ サジェスト閉じる
    searchInput.dispatchEvent(new Event("change"));
  });
});

// ------------------------------
// 東京・大阪・福岡ボタン
// ------------------------------
document.getElementById("tokyo-btn").addEventListener("click", () => {
  searchInput.value = "東京";
  searchInput.dispatchEvent(new Event("input"));
  searchInput.dispatchEvent(new Event("change")); // ★ サジェスト閉じる
});

document.getElementById("osaka-btn").addEventListener("click", () => {
  searchInput.value = "大阪";
  searchInput.dispatchEvent(new Event("input"));
  searchInput.dispatchEvent(new Event("change"));
});

document.getElementById("fukuoka-btn").addEventListener("click", () => {
  searchInput.value = "福岡";
  searchInput.dispatchEvent(new Event("input"));
  searchInput.dispatchEvent(new Event("change"));
});