// TETORA

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
    event_id: "20260228-TETORA_ammo_アルステイク_マタノシタシティー"
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
    event_id: "20260228-TETORA_ammo_アルステイク_マタノシタシティー"
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
    event_id: "20260228-TETORA_ammo_アルステイク_マタノシタシティー"
  },
  {
    date: "2026/03/03",
    title: "THE NINTH APOLLO pre 「PHASEの25周年を祝う \"2000 フェイズと同じ歳の歌い手たち\"」",
    place: "東京 高田馬場CLUB PHASE",
    time: "OPEN 17:00 / START 17:30",
    ticket: "ADV ¥3,025 +1Drink",
    band: "アルステイク",
    pref: "東京",
    event_id: "20260303-アルステイク_マタノシタシティー"
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

// マタノシタシティー
const matanoLiveData = [
  {
    date: "2026/02/20",
    title: "LIVE SQUARE 2nd LINE×Lucky Age pre. 「涙なんて馬鹿みたい」",
    place: "大阪 福島 LIVE SQUARE 2nd LINE",
    time: "OPEN 18:00 / START 18:30",
    ticket: "前売り 2500円",
    band: "マタノシタシティー",
    pref: "大阪",
    event_id: "20260220-マタノシタシティー"
  },
  {
    date: "2026/02/28",
    title: "THE NINTH APOLLO pre ハローミドルグラウンド3",
    place: "東京 Zepp DiverCity",
    time: "OPEN 12:15 / START 13:00",
    ticket: "前売り 5000円",
    band: "マタノシタシティー",
    pref: "東京",
    event_id: "20260228-TETORA_ammo_アルステイク_マタノシタシティー"
  },
  {
    date: "2026/03/03",
    title: "THE NINTH APOLLO pre PHASEの25周年を祝う \"2000 フェイズと同じ歳の歌い手たち\"",
    place: "東京 高田馬場CLUB PHASE",
    time: "OPEN 17:00 / START 17:30",
    ticket: "前売り 3025円 / 当日 4025円",
    band: "マタノシタシティー",
    pref: "東京",
    event_id: "20260303-アルステイク_マタノシタシティー"
  },
  {
    date: "2026/03/13",
    title: "人音風土",
    place: "香川 高松RIZIN'",
    time: "OPEN 18:00 / START 18:30",
    ticket: "前売り 3000円 / 当日 3500円",
    band: "マタノシタシティー",
    pref: "香川",
    event_id: "20260313-マタノシタシティー"
  },
  {
    date: "2026/03/14",
    title: "古墳シスターズと春夏秋冬~冬編~",
    place: "徳島 CLUB GRINDHOUSE",
    time: "OPEN 18:00 / START 18:30",
    ticket: "前売り 3000円",
    band: "マタノシタシティー",
    pref: "徳島",
    event_id: "20260314-マタノシタシティー"
  },
  {
    date: "2026/03/22",
    title: "SANUKI ROCK COLOSSEUM 2026",
    place: "香川 高松6会場",
    time: "OPEN 11:00 / START 11:30（予定）",
    ticket: "1日券 5800円 / 2日通し券 10500円",
    band: "マタノシタシティー",
    pref: "香川",
    event_id: "20260322-マタノシタシティー"
  }
];

// 東京、君がいない街
const tokikimiLiveData = [
  {
    date: "2026/02/22",
    title: "MEMETOOUR THE WORLD FESTIVAL 2026",
    place: "東京 新宿3会場",
    time: "START 15:30",
    ticket: "",
    band: "東京、君がいない街",
    pref: "東京",
    event_id: "20260222-東京、君がいない街"
  },
  {
    date: "2026/02/25",
    title: "middle scene pre. 『本音を重ねて』",
    place: "東京 高田馬場CLUB PHASE",
    time: "OPEN 18:00 / START 18:30",
    ticket: "",
    band: "東京、君がいない街",
    pref: "東京",
    event_id: "20260225-東京、君がいない街"
  },
  {
    date: "2026/02/26",
    title: "-Dripdays, \"Transient Tour 2025-2026\"- / Mighty Cats Digital Single「優しさに包まれて」Release Tour ''弛みない足跡''",
    place: "東京 高田馬場CLUB PHASE",
    time: "OPEN 17:00 / START 18:00",
    ticket: "",
    band: "東京、君がいない街",
    pref: "東京",
    event_id: "20260226-東京、君がいない街"
  },
  {
    date: "2026/03/01",
    title: "睨んで疑ってツアー 初日 CLUB PHASE 25th 1st DAY",
    place: "東京 高田馬場CLUB PHASE",
    time: "OPEN 17:15 / START 18:00",
    ticket: "",
    band: "東京、君がいない街",
    pref: "東京",
    event_id: "20260301-TETORA_東京、君がいない街"
  },
  {
    date: "2026/03/06",
    title: "東京、君がいない街 睨んで疑ってツアー",
    place: "福岡 LIVE HOUSE OP's",
    time: "OPEN 18:00 / START 18:30",
    ticket: "",
    band: "東京、君がいない街",
    pref: "福岡",
    event_id: "20260306-東京、君がいない街"
  },
  {
    date: "2026/03/08",
    title: "TENJIN ONTAQ 2026",
    place: "福岡 天神8会場",
    time: "OPEN 11:30 / START 12:30",
    ticket: "",
    band: "東京、君がいない街",
    pref: "福岡",
    event_id: "20260308-東京、君がいない街"
  },
  {
    date: "2026/03/12",
    title: "『BEATNUTS』 -CLUB PHASE25thAnniversary!!-",
    place: "東京 高田馬場CLUB PHASE",
    time: "OPEN 17:30 / START 18:00",
    ticket: "",
    band: "東京、君がいない街",
    pref: "東京",
    event_id: "20260312-東京、君がいない街"
  },
  {
    date: "2026/03/14",
    title: "見放題東京2026",
    place: "東京 新宿12会場",
    time: "OPEN 11:30 / START 12:00",
    ticket: "",
    band: "東京、君がいない街",
    pref: "東京",
    event_id: "20260314-東京、君がいない街"
  },
  {
    date: "2026/03/20",
    title: "NTTドコモ presents RADIO BERRY haruberrylive “CIRCUIT”2026",
    place: "栃木 宇都宮市内3会場",
    time: "OPEN 12:30 / START 13:00",
    ticket: "",
    band: "東京、君がいない街",
    pref: "栃木",
    event_id: "20260320-東京、君がいない街"
  },
  {
    date: "2026/03/21",
    title: "THE NINTH APOLLO pre ennの25周年を祝うサーキット",
    place: "宮城 仙台enn 2nd & 3rd",
    time: "OPEN 13:15 / START 14:00",
    ticket: "",
    band: "東京、君がいない街",
    pref: "宮城",
    event_id: "20260321-ammo_アルステイク_東京、君がいない街"
  },
  {
    date: "2026/03/23",
    title: "VINTAGE pre. -VINTAGE 42th Anniv.- 『 HYPER BIG DAY TRIP 』",
    place: "大阪 寝屋川VINTAGE",
    time: "",
    ticket: "",
    band: "東京、君がいない街",
    pref: "大阪",
    event_id: "20260323-東京、君がいない街"
  },
  {
    date: "2026/03/30",
    title: "「夜と同時に、動き出す。」pre 「世田谷アンダーグラウンド」",
    place: "東京 下北沢MOSAiC",
    time: "OPEN 13:30 / START 14:00",
    ticket: "",
    band: "東京、君がいない街",
    pref: "東京",
    event_id: "20260330-東京、君がいない街"
  },
  {
    date: "2026/04/02",
    title: "荒野を歩け",
    place: "東京 渋谷Spotify O-Crest",
    time: "OPEN 18:00 / START 18:30",
    ticket: "",
    band: "東京、君がいない街",
    pref: "東京",
    event_id: "20260402-東京、君がいない街"
  },
  {
    date: "2026/04/18",
    title: "FM NORTH WAVE & WESS PRESENTS IMPACT! XXIII",
    place: "北海道 札幌5会場",
    time: "START 11:00",
    ticket: "",
    band: "東京、君がいない街",
    pref: "北海道",
    event_id: "20260418-東京、君がいない街"
  }
];
