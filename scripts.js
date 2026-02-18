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
    pref: "香川",
    event_id: "20260221-TETORA"
  },
  {
    date: "2026/02/22",
    title: "FOMARE OVER TOUR 25-26",
    place: "愛媛 松山WstudioRED",
    time: "OPEN 17:00 / START 18:00",
    ticket: "前売り 4800円",
    band: "TETORA",
    pref: "愛媛",
    event_id: "20260222-TETORA"
  },
  {
    date: "2026/02/28",
    title: "THE NINTH APOLLO pre ハローミドルグラウンド3",
    place: "Zepp DiverCity(TOKYO)",
    time: "OPEN 12:15 / START 13:00",
    ticket: "前売り 5000円",
    band: "TETORA",
    pref: "東京",
    event_id: "20260228-TETORA_ammo_アルステイク"
  },
  {
    date: "2026/03/01",
    title: "東京、君がいない街 睨んで疑ってツアー初日 CLUB PHASE 25th 1st DAY",
    place: "東京 高田馬場CLUB PHASE",
    time: "OPEN 17:15 / START 18:00",
    ticket: "前売り 3500円",
    band: "TETORA",
    pref: "東京",
    event_id: "20260301-TETORA"
  },
  {
    date: "2026/03/08",
    title: "アメ村あかちょうちん5周年企画 【THE ZIAGE】 あかちょうちん移転記念イベント",
    place: "大阪 心斎橋BRONZE",
    time: "OPEN 17:00 / START 17:30",
    ticket: "前売り 3000円",
    band: "TETORA",
    pref: "大阪",
    event_id: "20260308-TETORA"
  },
  {
    date: "2026/03/14",
    title: "TETORA x 炙りなタウン クレイジー&リアル ツアー 第3期",
    place: "沖縄 那覇 桜坂セントラル",
    time: "OPEN 12:30 / START 13:00",
    ticket: "前売り 3500円",
    band: "TETORA",
    pref: "沖縄",
    event_id: "20260314-TETORA"
  },
{
  date: "2026/03/20",
  title: "ツタロックフェス2026",
  place: "千葉県 幕張メッセ",
  time: "OPEN 9:00",
  ticket: "前売り 12000円（各種チケットあり）",
  band: "TETORA",
  pref: "千葉",
  event_id: "20260320-TETORA_ammo"
},
  {
    date: "2026/03/22",
    title: "TETORA エピソード0ツアー",
    place: "宮城 仙台darwin",
    time: "OPEN 17:15 / START 18:00",
    ticket: "前売り 3900円",
    band: "TETORA",
    pref: "宮城",
    event_id: "20260322-TETORA"
  },
  {
    date: "2026/03/24",
    title: "TETORA x 炙りなタウン クレイジー&リアル ツアー 第3期",
    place: "千葉LOOK",
    time: "OPEN 18:15 / START 19:00",
    ticket: "前売り 3900円",
    band: "TETORA",
    pref: "千葉",
    event_id: "20260324-TETORA"
  },
  {
    date: "2026/04/01",
    title: "TETORA エピソード0ツアー",
    place: "福岡BEAT STATION",
    time: "OPEN 18:15 / START 19:00",
    ticket: "前売り 3900円",
    band: "TETORA",
    pref: "福岡",
    event_id: "20260401-TETORA"
  },
  {
    date: "2026/04/16",
    title: "参源色 - sangensyoku -",
    place: "東京 渋谷Spotify O-EAST",
    time: "OPEN 17:30 / START 18:30",
    ticket: "前売り（各種チケットあり）",
    band: "TETORA",
    pref: "東京",
    event_id: "20260416-TETORA"
  },
{
  date: "2026/05/10",
  title: "COMING KOBE26",
  place: "兵庫県 神戸メリケンパーク 常設ステージ / 特設ステージ",
  time: "OPEN 9:00 / START 10:00",
  ticket: "無料（各種チケットあり）",
  band: "TETORA",
  pref: "兵庫",
  event_id: "20260510-TETORA_ammo_アルステイク"
},
  {
    date: "2026/05/14",
    title: "TETORA エピソード0ツアー",
    place: "東京 渋谷CLUB QUATTRO",
    time: "OPEN 18:00 / START 19:00",
    ticket: "前売り 3900円",
    band: "TETORA",
    pref: "東京",
    event_id: "20260514-TETORA"
  },
  {
    date: "2026/05/17",
    title: "TETORA エピソード0ツアー",
    place: "愛知 名古屋CLUB QUATTRO",
    time: "OPEN 17:30 / START 18:30",
    ticket: "前売り 3900円",
    band: "TETORA",
    pref: "愛知",
    event_id: "20260517-TETORA"
  },
  {
    date: "2026/05/30",
    title: "OSAKA METROPOLITAN ROCK FESTIVAL 2026",
    place: "大阪堺 海とのふれあい広場",
    time: "",
    ticket: "2日通し券 28000円",
    band: "TETORA",
    pref: "大阪",
    event_id: "20260530-TETORA"
  },
  {
    date: "2026/06/06",
    title: "TETORA エピソード0ツアー",
    place: "北海道 札幌ペニーレーン24",
    time: "OPEN 17:15 / START 18:00",
    ticket: "前売り 3900円",
    band: "TETORA",
    pref: "北海道",
    event_id: "20260606-TETORA"
  },
  {
    date: "2026/06/25",
    title: "TETORA エピソード0ツアー",
    place: "大阪 梅田CLUB QUATTRO",
    time: "OPEN 18:00 / START 19:00",
    ticket: "前売り 3900円",
    band: "TETORA",
    pref: "大阪",
    event_id: "20260625-TETORA"
  }
];

// ------------------------------
// ammo
// ------------------------------
const ammoLiveData = [
  {
    date: "2026/02/28",
    title: "THE NINTH APOLLO pre 「ハローミドルグラウンド3」",
    place: "東京 Zepp DiverCity(TOKYO)",
    time: "OPEN 12:15 / START 13:00",
    ticket: "前売り 5000円 +1Drink",
    band: "ammo",
    pref: "東京",
    event_id: "20260228-TETORA_ammo_アルステイク"
  },
  {
    date: "2026/03/11",
    title: "FOMARE pre.「OVER TOUR 25-26」",
    place: "宮崎 宮崎 LAZARUS",
    time: "OPEN 18:00 / START 18:30",
    ticket: "前売り 4800円 +1Drink",
    band: "ammo",
    pref: "宮崎",
    event_id: "20260311-ammo"
  },
  {
    date: "2026/03/12",
    title: "FOMARE pre.「OVER TOUR 25-26」",
    place: "鹿児島 鹿児島 SR HALL",
    time: "OPEN 18:00 / START 18:30",
    ticket: "前売り 4800円 +1Drink",
    band: "ammo",
    pref: "鹿児島",
    event_id: "20260312-ammo"
  },
  {
  date: "2026/03/20",
  title: "Vポイント pre.「ツタロックフェス 2026」",
  place: "千葉 幕張メッセ国際展示場 4・5・6・7ホール",
  time: "OPEN 9:00 / START 11:00",
  ticket: "前売り 12000円",
  band: "ammo",
  pref: "千葉",
  event_id: "20260320-TETORA_ammo"
},
  {
    date: "2026/03/21",
    title: "THE NINTH APOLLO pre.「ennの25周年を祝うサーキット」",
    place: "宮城 仙台enm 2nd & 3rd",
    time: "OPEN 13:15 / START 14:00",
    ticket: "前売り 4500円 +1Drink",
    band: "ammo",
    pref: "宮城",
    event_id: "20260321-ammo_アルステイク"
  },
  {
    date: "2026/04/03",
    title: "Blue Mash pre.「この街を出て -Live House Tour 2026-」",
    place: "愛知 名古屋DIAMOND HALL",
    time: "OPEN 18:00 / START 19:00",
    ticket: "前売り 4200円 +1Drink",
    band: "ammo",
    pref: "愛知",
    event_id: "20260403-ammo"
  },
  {
    date: "2026/04/18",
    title: "at Anytime pre.「TIME OF YOUR LIFE Vol.95 -Baby smoker “VOLTEX” Release Tour 2026-」",
    place: "三重 鈴鹿ANSWER",
    time: "OPEN 18:00 / START 18:30",
    ticket: "前売り 3400円 +1Drink",
    band: "ammo",
    pref: "三重",
    event_id: "20260418-ammo"
  },
  {
  date: "2026/05/10",
  title: "COMING KOBE26",
  place: "兵庫 神戸メリケンパーク",
  time: "OPEN 10:00",
  ticket: "入場無料",
  band: "ammo",
  pref: "兵庫",
  event_id: "20260510-TETORA_ammo_アルステイク"
}
];
// ----------
// アルステイク
// ----------

const alstakeLiveData = [
  {
    date: "2026/02/17",
    title: "FOMARE 「OVER TOUR 25-26」",
    place: "山口 LIVE rise SHUNAN",
    time: "OPEN 18:00 / START 18:30",
    ticket: "ADV ¥4,800 +1Drink",
    band: "アルステイク",
    pref: "山口",
    event_id: "20260217-アルステイク"
  },
  {
    date: "2026/02/23",
    title: "BRONZE pre 「BRONZE 12周年祭 \"キョーメー 2月\"」",
    place: "大阪 心斎橋BRONZE",
    time: "OPEN 17:15 / START 18:00",
    ticket: "ADV ¥3,500 +1Drink",
    band: "アルステイク",
    pref: "大阪",
    event_id: "20260223-アルステイク"
  },
  {
    date: "2026/02/28",
    title: "THE NINTH APOLLO pre 「ハローミドルグラウンド3」",
    place: "東京 Zepp DiverCity(TOKYO)",
    time: "OPEN 12:15 / START 13:00",
    ticket: "ADV ¥5,000 +1Drink",
    band: "アルステイク",
    pref: "東京",
    event_id: "20260228-TETORA_ammo_アルステイク"
  },
  {
    date: "2026/03/03",
    title: "THE NINTH APOLLO pre 「PHASEの25周年を祝う \"2000 フェイズと同じ歳の歌い手たち\"」",
    place: "東京 高田馬場CLUB PHASE",
    time: "OPEN 17:00 / START 17:30",
    ticket: "ADV ¥3,025 +1Drink",
    band: "アルステイク",
    pref: "東京",
    event_id: "20260303-アルステイク"
  },
  {
    date: "2026/03/08",
    title: "「TENJIN ONTAQ 2026」",
    place: "福岡 天神地区8会場",
    time: "OPEN 11:30 / START 12:30",
    ticket: "1日券 ¥6,000 / 2日通し券 ¥11,000",
    band: "アルステイク",
    pref: "福岡",
    event_id: "20260308-アルステイク"
  },
  {
    date: "2026/03/09",
    title: "Brown Basket 「ぶっ滾るツアー 2026」",
    place: "香川 高松RIZIN'",
    time: "OPEN 18:30 / START 19:00",
    ticket: "ADV ¥3,300 +1Drink",
    band: "アルステイク",
    pref: "香川",
    event_id: "20260309-アルステイク"
  },
  {
    date: "2026/03/14",
    title: "「見放題東京2026」",
    place: "東京 新宿12会場",
    time: "OPEN 11:30 / START 12:00",
    ticket: "ADV ¥5,500 +1Drink",
    band: "アルステイク",
    pref: "東京",
    event_id: "20260314-アルステイク"
  },
  {
    date: "2026/03/16",
    title: "アルステイク 「初めてのワンマンツアー」",
    place: "東京 高田馬場CLUB PHASE",
    time: "OPEN 18:15 / START 19:00",
    ticket: "ADV ¥3,900 +1Drink",
    band: "アルステイク",
    pref: "東京",
    event_id: "20260316-アルステイク"
  },
  {
    date: "2026/03/17",
    title: "アルステイク 「初めてのワンマンツアー」",
    place: "東京 高田馬場CLUB PHASE",
    time: "OPEN 18:15 / START 19:00",
    ticket: "ADV ¥3,900 +1Drink",
    band: "アルステイク",
    pref: "東京",
    event_id: "20260317-アルステイク"
  },
  {
    date: "2026/03/21",
    title: "THE NINTH APOLLO pre 「ennの25周年を祝うサーキット」",
    place: "宮城 仙台enn 2nd & 3rd",
    time: "OPEN 13:15 / START 14:00",
    ticket: "ADV ¥4,500 +1Drink",
    band: "アルステイク",
    pref: "宮城",
    event_id: "20260321-ammo_アルステイク"
  },
  {
    date: "2026/03/22",
    title: "アルステイク 「初めてのワンマンツアー」",
    place: "北海道 札幌ペニーレーン24",
    time: "OPEN 18:15 / START 19:00",
    ticket: "ADV ¥3,900 +1Drink",
    band: "アルステイク",
    pref: "北海道",
    event_id: "20260322-アルステイク"
  },
  {
    date: "2026/03/26",
    title: "「THE SUN ALSO RISES vol.397」",
    place: "神奈川 F.A.D YOKOHAMA",
    time: "OPEN 18:15 / START 19:00",
    ticket: "一般 ¥3,500 / 学生 ¥2,500 +1Drink",
    band: "アルステイク",
    pref: "神奈川",
    event_id: "20260326-アルステイク"
  },
  {
    date: "2026/03/29",
    title: "ねぐせ。presents 「HOT de GOOD fest. 2026」",
    place: "愛知 名古屋COMTEC PORTBASE",
    time: "OPEN 12:00 / START 13:00",
    ticket: "ADV ¥6,666 +1Drink",
    band: "アルステイク",
    pref: "愛知",
    event_id: "20260329-アルステイク"
  },
  {
    date: "2026/04/25",
    title: "アルステイク 「初めてのワンマンツアー」",
    place: "岡山 YEBISU YA PRO",
    time: "OPEN 17:15 / START 18:00",
    ticket: "ADV ¥3,900 +1Drink",
    band: "アルステイク",
    pref: "岡山",
    event_id: "20260425-アルステイク"
  },
  {
    date: "2026/04/30",
    title: "アルステイク 「初めてのワンマンツアー」",
    place: "愛知 名古屋CLUB QUATTRO",
    time: "OPEN 18:15 / START 19:00",
    ticket: "ADV ¥3,900 +1Drink",
    band: "アルステイク",
    pref: "愛知",
    event_id: "20260430-アルステイク"
  },
  {
    date: "2026/05/08",
    title: "アルステイク 「初めてのワンマンツアー」",
    place: "福岡 BEAT STATION",
    time: "OPEN 18:15 / START 19:00",
    ticket: "ADV ¥3,900 +1Drink",
    band: "アルステイク",
    pref: "福岡",
    event_id: "20260508-アルステイク"
  },
  {
    date: "2026/05/10",
    title: "COMING KOBE26",
    place: "兵庫 神戸メリケンパーク 常設ステージ 特設ステージ",
    time: "",
    ticket: "",
    band: "アルステイク",
    pref: "兵庫",
    event_id: "20260510-TETORA_ammo_アルステイク"
  },
  {
    date: "2026/05/13",
    title: "Blue Mash「この街を出て -去年の続き-」",
    place: "岡山 CRAZY MAMA 2nd ROOM",
    time: "OPEN 18:30 / START 19:00",
    ticket: "ADV ¥4,200 +1Drink",
    band: "アルステイク",
    pref: "岡山",
    event_id: "20260513-アルステイク"
  },
  {
    date: "2026/06/07",
    title: "アルステイク 「初めてのワンマンツアー」",
    place: "宮城 仙台darwin",
    time: "OPEN 17:15 / START 18:00",
    ticket: "ADV ¥3,900 +1Drink",
    band: "アルステイク",
    pref: "宮城",
    event_id: "20260607-アルステイク"
  },
  {
    date: "2026/06/18",
    title: "アルステイク 「初めてのワンマンツアー」",
    place: "大阪 心斎橋BRONZE",
    time: "OPEN 18:15 / START 19:00",
    ticket: "ADV ¥3,900 +1Drink",
    band: "アルステイク",
    pref: "大阪",
    event_id: "20260618-アルステイク"
  },
  {
    date: "2026/06/19",
    title: "アルステイク 「初めてのワンマンツアー」",
    place: "大阪 心斎橋BRONZE",
    time: "OPEN 18:15 / START 19:00",
    ticket: "ADV ¥3,900 +1Drink",
    band: "アルステイク",
    pref: "大阪",
    event_id: "20260619-アルステイク"
  }
];



// ------------------------------
// 全バンドまとめて日付順にソート
// ------------------------------
const allLiveData = [...liveData, ...ammoLiveData, ...alstakeLiveData];

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
// ロゴ・チップ
// ------------------------------
document.querySelectorAll(".band-logo").forEach(logo => {
  logo.addEventListener("click", () => {
    const band = logo.dataset.band;
    searchInput.value = band;
    searchInput.dispatchEvent(new Event("input"));
  });
});

document.querySelector(".agency").addEventListener("click", () => {
  searchInput.value = "";
  renderCards(allLiveData);
});

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    searchInput.value = chip.textContent;
    searchInput.dispatchEvent(new Event("input"));
  });
});

// ------------------------------
// 初回だけロゴを自動スクロール（画像読み込み後）
// ------------------------------
window.addEventListener("load", () => {
  // 初回チェック
  if (localStorage.getItem("logoScrollDone")) return;

  const bands = document.querySelector(".logo-area .bands");
  if (!bands) return;

  // 画像読み込みを待つ
  const images = bands.querySelectorAll("img");
  let loadedCount = 0;

  images.forEach(img => {
    if (img.complete) {
      loadedCount++;
    } else {
      img.addEventListener("load", () => {
        loadedCount++;
        if (loadedCount === images.length) startScroll();
      });
    }
  });

  // 全部 complete だった場合
  if (loadedCount === images.length) startScroll();

  function startScroll() {
    const maxScroll = bands.scrollWidth - bands.clientWidth;
    if (maxScroll <= 0) return;

    // 少し待ってからスクロール（スマホで安定）
    setTimeout(() => {
      bands.scrollTo({
        left: maxScroll,
        behavior: "smooth"
      });

      // 終わったらフラグ保存
      setTimeout(() => {
        localStorage.setItem("logoScrollDone", "true");
      }, 1200);
    }, 300);
  }
});