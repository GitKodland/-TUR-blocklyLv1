const LEVELS_RABBIT = [
  // === 1–5: only exit ===
  {
    size: 5,
    grid: [
      "..W..",
      "....E",
      ".W.W.",
      "..R.W",
      ".W.WW"
    ],
    goal: "4 adımda 🚪 kapısına ulaş.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Aşağı ve sağa git."
  },
  {
    size: 5,
    grid: [
      "R....",
      ".WWWW",
      "...WW",
      ".WEW.",
      "WWWWW"
    ],
    goal: "Duvarlardan kaçınarak 🚪 kapısına ulaş.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Duvarların etrafından zikzak çizerek git."
  },
  {
    size: 5,
    grid: [
      "R....",
      "WW.W.",
      ".....",
      ".W.W.",
      "....E"
    ],
    goal: "Labirentten geçerek 🚪 kapısına ulaş.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Aşağı git, sonra sağa."
  },
  {
    size: 5,
    grid: [
      "R.W..",
      ".W.W.",
      "...W.",
      ".W...",
      "...E."
    ],
    goal: "Kapıya 🚪 giden bir yol bul.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Boş hücrelerden geçen bir rota ara."
  },
  {
    size: 5,
    grid: [
      "R...W",
      ".W.W.",
      ".....",
      "W.W.W",
      "E...."
    ],
    goal: "Kapıya 🚪 giden zorlu bir rota.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Aşağı ve sola doğru zikzak yaparak git."
  },

  // === 6–10: carrots + exit ===
  {
    size: 5,
    grid: [
      "R.CWW",
      ".W..W",
      "..CW.",
      ".W...",
      "..WWE"
    ],
    goal: "Havucu 🥕 topla ve 🚪 kapısına ulaş.",
    maxBlocks: 15,
    needCarrots: true,
    hint: "Havucu kaçırma!"
  },
  {
    size: 5,
    grid: [
      "....R",
      "WW.C.",
      "..C.W",
      ".W.W.",
      "....E"
    ],
    goal: "Tüm 🥕 havuçları topla ve 🚪 kapısına git.",
    maxBlocks: 15,
    needCarrots: true,
    hint: "Duvarların etrafından dolaş."
  },
  {
    size: 5,
    grid: [
      "R...C",
      ".W.W.",
      "C...C",
      ".W.W.",
      "E...."
    ],
    goal: "Tüm 🥕 havuçlar toplanmalı!",
    maxBlocks: 15,
    needCarrots: true,
    hint: "Önce havuçlar, sonra kapı."
  },
  {
    size: 5,
    grid: [
      "R.C.W",
      "W..C.",
      "...C.",
      "W.W..",
      "..E.."
    ],
    goal: "Havuçları 🥕 topla ve 🚪 kapısına ulaş.",
    maxBlocks: 15,
    needCarrots: true,
    hint: "Havuçlara giden en kısa yolu bul."
  },
  {
    size: 5,
    grid: [
      "R.W..",
      ".C..W",
      ".C...",
      ".W.C.",
      "E...."
    ],
    goal: "Son görev: tüm 🥕 havuçları topla ve 🚪 kapısına ulaş.",
    maxBlocks: 15,
    needCarrots: true,
    hint: "Zikzak yapman gerekecek."
  }
];
