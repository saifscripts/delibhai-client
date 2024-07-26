const districts = [
  {
    _id: "66095f6dfd36d950f2be21fa",
    title: "ব্রাহ্মণবাড়িয়া",
    divisionId: "660877f14acc081c2ec906c9",
  },
  {
    _id: "66095f6dfd36d950f2be21f5",
    title: "ভোলা",
    divisionId: "660877f14acc081c2ec906ce",
  },
  {
    _id: "66095f6dfd36d950f2be2204",
    title: "ঢাকা",
    divisionId: "660877f14acc081c2ec906c8",
  },
  {
    _id: "66095f6dfd36d950f2be2214",
    title: "ঝিনাইদহ",
    divisionId: "660877f14acc081c2ec906cb",
  },
  {
    _id: "66095f6dfd36d950f2be2218",
    title: "মেহেরপুর",
    divisionId: "660877f14acc081c2ec906cb",
  },
  {
    _id: "66095f6dfd36d950f2be222f",
    title: "হবিগঞ্জ",
    divisionId: "660877f14acc081c2ec906cf",
  },
  {
    _id: "66095f6dfd36d950f2be21ff",
    title: "ফেনী",
    divisionId: "660877f14acc081c2ec906c9",
  },
  {
    _id: "66095f6dfd36d950f2be2205",
    title: "ফরিদপুর",
    divisionId: "660877f14acc081c2ec906c8",
  },
  {
    _id: "66095f6dfd36d950f2be2206",
    title: "গাজীপুর",
    divisionId: "660877f14acc081c2ec906c8",
  },
  {
    _id: "66095f6dfd36d950f2be220e",
    title: "রাজবাড়ী",
    divisionId: "660877f14acc081c2ec906c8",
  },
  {
    _id: "66095f6dfd36d950f2be220f",
    title: "শরীয়তপুর",
    divisionId: "660877f14acc081c2ec906c8",
  },
  {
    _id: "66095f6dfd36d950f2be2216",
    title: "কুষ্টিয়া",
    divisionId: "660877f14acc081c2ec906cb",
  },
  {
    _id: "66095f6dfd36d950f2be221c",
    title: "ময়মনসিংহ",
    divisionId: "660877f14acc081c2ec906cc",
  },
  {
    _id: "66095f6dfd36d950f2be2229",
    title: "কুড়িগ্রাম",
    divisionId: "660877f14acc081c2ec906cd",
  },
  {
    _id: "66095f6dfd36d950f2be222d",
    title: "রংপুর",
    divisionId: "660877f14acc081c2ec906cd",
  },
  {
    _id: "66095f6dfd36d950f2be222e",
    title: "ঠাকুরগাঁও",
    divisionId: "660877f14acc081c2ec906cd",
  },
  {
    _id: "66095f6dfd36d950f2be21f3",
    title: "বরগুনা",
    divisionId: "660877f14acc081c2ec906ce",
  },
  {
    _id: "66095f6dfd36d950f2be2208",
    title: "কিশোরগঞ্জ",
    divisionId: "660877f14acc081c2ec906c8",
  },
  {
    _id: "66095f6dfd36d950f2be220d",
    title: "নরসিংদী",
    divisionId: "660877f14acc081c2ec906c8",
  },
  {
    _id: "66095f6dfd36d950f2be2210",
    title: "টাঙ্গাইল",
    divisionId: "660877f14acc081c2ec906c8",
  },
  {
    _id: "66095f6dfd36d950f2be221b",
    title: "জামালপুর",
    divisionId: "660877f14acc081c2ec906cc",
  },
  {
    _id: "66095f6dfd36d950f2be221f",
    title: "বগুড়া",
    divisionId: "660877f14acc081c2ec906ca",
  },
  {
    _id: "66095f6dfd36d950f2be2221",
    title: "নওগাঁ",
    divisionId: "660877f14acc081c2ec906ca",
  },
  {
    _id: "66095f6dfd36d950f2be2222",
    title: "নাটোর",
    divisionId: "660877f14acc081c2ec906ca",
  },
  {
    _id: "66095f6dfd36d950f2be2225",
    title: "রাজশাহী",
    divisionId: "660877f14acc081c2ec906ca",
  },
  {
    _id: "66095f6dfd36d950f2be2231",
    title: "সুনামগঞ্জ",
    divisionId: "660877f14acc081c2ec906cf",
  },
  {
    _id: "66095f6dfd36d950f2be21f4",
    title: "বরিশাল",
    divisionId: "660877f14acc081c2ec906ce",
  },
  {
    _id: "66095f6dfd36d950f2be21f8",
    title: "পিরোজপুর",
    divisionId: "660877f14acc081c2ec906ce",
  },
  {
    _id: "66095f6dfd36d950f2be21fb",
    title: "চাঁদপুর",
    divisionId: "660877f14acc081c2ec906c9",
  },
  {
    _id: "66095f6dfd36d950f2be2207",
    title: "গোপালগঞ্জ",
    divisionId: "660877f14acc081c2ec906c8",
  },
  {
    _id: "66095f6dfd36d950f2be222b",
    title: "নীলফামারী",
    divisionId: "660877f14acc081c2ec906cd",
  },
  {
    _id: "66095f6dfd36d950f2be21f7",
    title: "পটুয়াখালী",
    divisionId: "660877f14acc081c2ec906ce",
  },
  {
    _id: "66095f6dfd36d950f2be2201",
    title: "লক্ষ্মীপুর",
    divisionId: "660877f14acc081c2ec906c9",
  },
  {
    _id: "66095f6dfd36d950f2be221a",
    title: "সাতক্ষীরা",
    divisionId: "660877f14acc081c2ec906cb",
  },
  {
    _id: "66095f6dfd36d950f2be221d",
    title: "নেত্রকোণা",
    divisionId: "660877f14acc081c2ec906cc",
  },
  {
    _id: "66095f6dfd36d950f2be2228",
    title: "গাইবান্ধা",
    divisionId: "660877f14acc081c2ec906cd",
  },
  {
    _id: "66095f6dfd36d950f2be21f9",
    title: "বান্দরবান",
    divisionId: "660877f14acc081c2ec906c9",
  },
  {
    _id: "66095f6dfd36d950f2be21f6",
    title: "ঝালকাঠি",
    divisionId: "660877f14acc081c2ec906ce",
  },
  {
    _id: "66095f6dfd36d950f2be21fe",
    title: "কক্সবাজার",
    divisionId: "660877f14acc081c2ec906c9",
  },
  {
    _id: "66095f6dfd36d950f2be2203",
    title: "রাঙ্গামাটি",
    divisionId: "660877f14acc081c2ec906c9",
  },
  {
    _id: "66095f6dfd36d950f2be220a",
    title: "মানিকগঞ্জ",
    divisionId: "660877f14acc081c2ec906c8",
  },
  {
    _id: "66095f6dfd36d950f2be2211",
    title: "বাগেরহাট",
    divisionId: "660877f14acc081c2ec906cb",
  },
  {
    _id: "66095f6dfd36d950f2be2220",
    title: "জয়পুরহাট",
    divisionId: "660877f14acc081c2ec906ca",
  },
  {
    _id: "66095f6dfd36d950f2be2224",
    title: "পাবনা",
    divisionId: "660877f14acc081c2ec906ca",
  },
  {
    _id: "66095f6dfd36d950f2be222a",
    title: "লালমনিরহাট",
    divisionId: "660877f14acc081c2ec906cd",
  },
  {
    _id: "66095f6dfd36d950f2be21fc",
    title: "চট্টগ্রাম",
    divisionId: "660877f14acc081c2ec906c9",
  },
  {
    _id: "66095f6dfd36d950f2be21fd",
    title: "কুমিল্লা",
    divisionId: "660877f14acc081c2ec906c9",
  },
  {
    _id: "66095f6dfd36d950f2be2200",
    title: "খাগড়াছড়ি",
    divisionId: "660877f14acc081c2ec906c9",
  },
  {
    _id: "66095f6dfd36d950f2be2202",
    title: "নোয়াখালী",
    divisionId: "660877f14acc081c2ec906c9",
  },
  {
    _id: "66095f6dfd36d950f2be2209",
    title: "মাদারীপুর",
    divisionId: "660877f14acc081c2ec906c8",
  },
  {
    _id: "66095f6dfd36d950f2be220b",
    title: "মুন্সিগঞ্জ",
    divisionId: "660877f14acc081c2ec906c8",
  },
  {
    _id: "66095f6dfd36d950f2be2212",
    title: "চুয়াডাঙ্গা",
    divisionId: "660877f14acc081c2ec906cb",
  },
  {
    _id: "66095f6dfd36d950f2be2213",
    title: "যশোর",
    divisionId: "660877f14acc081c2ec906cb",
  },
  {
    _id: "66095f6dfd36d950f2be2215",
    title: "খুলনা",
    divisionId: "660877f14acc081c2ec906cb",
  },
  {
    _id: "66095f6dfd36d950f2be2217",
    title: "মাগুরা",
    divisionId: "660877f14acc081c2ec906cb",
  },
  {
    _id: "66095f6dfd36d950f2be2219",
    title: "নড়াইল",
    divisionId: "660877f14acc081c2ec906cb",
  },
  {
    _id: "66095f6dfd36d950f2be221e",
    title: "শেরপুর",
    divisionId: "660877f14acc081c2ec906cc",
  },
  {
    _id: "66095f6dfd36d950f2be2223",
    title: "চাঁপাইনবাবগঞ্জ",
    divisionId: "660877f14acc081c2ec906ca",
  },
  {
    _id: "66095f6dfd36d950f2be2226",
    title: "সিরাজগঞ্জ",
    divisionId: "660877f14acc081c2ec906ca",
  },
  {
    _id: "66095f6dfd36d950f2be2232",
    title: "সিলেট",
    divisionId: "660877f14acc081c2ec906cf",
  },
  {
    _id: "66095f6dfd36d950f2be220c",
    title: "নারায়ণগঞ্জ",
    divisionId: "660877f14acc081c2ec906c8",
  },
  {
    _id: "66095f6dfd36d950f2be2227",
    title: "দিনাজপুর",
    divisionId: "660877f14acc081c2ec906cd",
  },
  {
    _id: "66095f6dfd36d950f2be222c",
    title: "পঞ্চগড়",
    divisionId: "660877f14acc081c2ec906cd",
  },
  {
    _id: "66095f6dfd36d950f2be2230",
    title: "মৌলভীবাজার",
    divisionId: "660877f14acc081c2ec906cf",
  },
];

export default districts;
