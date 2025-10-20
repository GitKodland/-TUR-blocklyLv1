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
    goal: "Reach the 🚪 in 4 steps.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Go down and to the right."
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
    goal: "Reach the 🚪 while avoiding the walls.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Move around the walls in a zigzag."
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
    goal: "Reach the 🚪 through the maze.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Go down, then to the right."
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
    goal: "Find a path to the 🚪.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Look for a route through the free cells."
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
    goal: "A tricky route to the 🚪.",
    maxBlocks: 15,
    needCarrots: false,
    hint: "Move in a zigzag down and to the left."
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
    goal: "Collect the 🥕 and reach the 🚪.",
    maxBlocks: 15,
    needCarrots: true,
    hint: "Don’t miss the carrot!"
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
    goal: "Collect all 🥕 and go to the 🚪.",
    maxBlocks: 15,
    needCarrots: true,
    hint: "Go around the walls."
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
    goal: "All 🥕 must be collected!",
    maxBlocks: 15,
    needCarrots: true,
    hint: "Carrots first, then the door."
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
    goal: "Collect 🥕 and reach the 🚪.",
    maxBlocks: 15,
    needCarrots: true,
    hint: "Find the shortest path to the carrots."
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
    goal: "Final task: collect all 🥕 and reach the 🚪.",
    maxBlocks: 15,
    needCarrots: true,
    hint: "You’ll need to move in a zigzag."
  }
];
