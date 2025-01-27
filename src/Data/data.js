

// Images 
import FennecFox from "../assets/images/FennecFox.webp"
import ArcticFox from "../assets/images/ArcticFox.webp"
import ArcticSquirrel from "../assets/images/ArcticSquirrel.jpeg"

// Videos
import ArcticFoxSubtitle from "/videos/ArcticFoxSubtitle.mp4"
import FennecFoxSubtitles from "/videos/FennecFoxSubtitle.mp4"
import ArcticSquirrelSubtitle from "/videos/ArcticSquirrelSubtitle.mp4"

export const Documetaries = [
  { 
    id: 1, 
    title: "Fennec Fox", 
    description:
    "بچووکترین ڕێوەیە لەجیهاندا لەبیابانەکانی باکوری ئەفریقیا و هەندێك ناوچەی باکوری سعودیا دەژیت. ئەم ئاژەڵە لەکەشی کەم ئاوی و بێ ئاوی ڕاهاتووە، ژیانێکی هەمەچەشنیان هەیە.",
    name:"ڕێوی  فێنێک", 
    img: FennecFox, 
    category: "ژیانی ئاژەڵە کێوییەکان",
    linkVideo: FennecFoxSubtitles,
    btn: "بینینی ڤیدیۆ",
    metadata: [
      { label: "زمان", value: "ئینگلیزی" },
      { label: "وەرگێڕ", value: "شەن کامیل" },
      { label: "پێداچوونەوە", value: "جهاد عبدالرحمن - شیلان عمر" },
      { label: "تەکنیکار", value: "محمود هونەر" },
      { label: "ماوە", value: "٣.٤٥ خولەک" },
    ],
  },
  { 
    id: 2, 
    title: "Arctic Fox",
    description:
      "ئەڕکتیک ڕێوە دەژیت لە ناوچەی زەویێکی سارد و ڕەشەکانی زەوی. ئەم ڕێوەیە ژیانێکی تایبەتییان هەیە بۆ گەیشتنی گەرمیدا.",
    name:"ڕێوی جەمسەری باکوور", 
    img: ArcticFox,    
    category: "ژیانی ئاژەڵە کێوییەکان",
    linkVideo:  ArcticFoxSubtitle,
    btn: "بینینی ڤیدیۆ",
    metadata: [
      { label: "زمان", value: "ئینگلیزی" },
      { label: "وەرگێڕ", value: "شەن کامیل" },
      { label: "پێداچوونەوە", value: "جهاد عبدالرحمن - شیلان عمر" },
      { label: "تەکنیکار", value: "محمود هونەر" },
      { label: "ماوە", value: "٢.٥٤ خولەک" },
    ],
  },
  { 
    id: 3, 
    title: "Arctic Squirrel",
    description:
      "کۆترە زەمینیەکانی جەمسەری باکوور گەورەترین جۆری کۆترە زەمینیەکانی ئەمریکای باکوورە، کێشیان لە نێوان ٥٢٤ بۆ ١٥٠٠ گرامە، درێژییەکەی ٣٣٢ بۆ ٤٩٥ ملم. گۆڕانی وەرزی لە بارستەی جەستەیان بەسەردا دێت و لە کاتی خەوی زستانەدا کێشیان دادەبەزێت.",
    name:"Arctic Squirrel", 
    img: ArcticSquirrel,    
    category: "ژیانی ئاژەڵە کێوییەکان",
    linkVideo:  ArcticSquirrelSubtitle,
    btn: "بینینی ڤیدیۆ",
    metadata: [
      { label: "زمان", value: "ئینگلیزی" },
      { label: "وەرگێڕ", value: "شەن کامیل" },
      { label: "پێداچوونەوە", value: "جهاد عبدالرحمن - شیلان عمر" },
      { label: "تەکنیکار", value: "محمود هونەر" },
      { label: "ماوە", value: "٢.٥٤ خولەک" },
    ],
  },

]



// Navbar dropdown 
export const NavLinks = [
  { id: 1, name: "سەرەکی", link: "/", isActive: false },
  {
    id: 2,
    name: "دۆکیۆمێنتارییەکان",
    link: "/DocumenterisFilter",
    isActive: false,
    submenu: [
      { id: 1, name: "ژیانی ئاژەڵە کێوییەکان" ,link:'/DocumenterisFilter?type=ژیانی ئاژەڵە کێوییەکان'},
    ],
  },
  { id: 3, name: "وەرگێڕەکان", link: "/TranslatorsPages", isActive: false },
];

// DocumentaryFiltering dropdown
export const dropdownData = [
  {
    id: 1,
    name: "جۆری دۆکیۆمێنتاری",
    dropdown: [
      {
        id: 1,
        name: "هەموو",
        category: null,
      },
      {
        id: 2,
        name: "ژیانی ئاژەڵە کێوییەکان",
        category: "ژیانی ئاژەڵە کێوییەکان",
      },

 
    ],
  },
];
