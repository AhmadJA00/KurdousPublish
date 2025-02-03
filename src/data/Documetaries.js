// Images
import FennecFox from "../assets/images/FennecFox.webp";
import ArcticFox from "../assets/images/ArcticFox.webp";
import ArcticSquirrel from "../assets/images/ArcticSquirrel.jpeg";
import mountainGoat from "../assets/images/mountainGoat.jpeg";


import v1 from "../assets/videos/1.mp4";
import v2 from "../assets/videos/2.mp4";
import v3 from "../assets/videos/3.mp4";
import v4 from "../assets/videos/4.mp4";


export const documetaries = [
  {
    id: 1,
    title: "Fennec Fox",
    description:
      "بچووکترین ڕێوەیە لەجیهاندا لەبیابانەکانی باکوری ئەفریقیا و هەندێك ناوچەی باکوری سعودیا دەژیت. ئەم ئاژەڵە لەکەشی کەم ئاوی و بێ ئاوی ڕاهاتووە، ژیانێکی هەمەچەشنیان هەیە.",
    name: "ڕێوی  فێنێک",
    img: FennecFox,
    category: "ژیانی ئاژەڵە کێوییەکان",
    linkVideo: v1, // Streaming URL

    btn: "بینینی ڤیدیۆ",
    metadata: [
      { label: "زمان", value: "ئینگلیزی" },
      { label: "وەرگێڕ", value: "شەن کامیل" },
      { label: "تەکنیکار", value: "محمود هونەر" },
      { label: "ماوە", value: "٣.٤٥ خولەک" },
    ],
  },
  {
    id: 2,
    title: "Arctic Fox",
    description:
      "ئەڕکتیک ڕێوە دەژیت لە ناوچەی زەویێکی سارد و ڕەشەکانی زەوی. ئەم ڕێوەیە ژیانێکی تایبەتییان هەیە بۆ گەیشتنی گەرمیدا.",
    name: "ڕێوی جەمسەری باکوور",
    img: ArcticFox,
    category: "ژیانی ئاژەڵە کێوییەکان",
    linkVideo: v2, // Streaming URL
    btn: "بینینی ڤیدیۆ",
    metadata: [
      { label: "زمان", value: "ئینگلیزی" },
      { label: "وەرگێڕ", value: "شیلان عمر احمد" },
      { label: "تەکنیکار", value: "محمود هونەر" },
      { label: "ماوە", value: "٢.٥٤ خولەک" },
    ],
  },
  {
    id: 3,
    title: "Arctic Squirrel",
    description:
      "سمۆرە زەمینیەکانی جەمسەری باکوور گەورەترین جۆری کۆترە زەمینیەکانی ئەمریکای باکوورە، کێشیان لە نێوان ٥٢٤ بۆ ١٥٠٠ گرامە، درێژییەکەی ٣٣٢ بۆ ٤٩٥ ملم. گۆڕانی وەرزی لە بارستەی جەستەیان بەسەردا دێت و لە کاتی خەوی زستانەدا کێشیان دادەبەزێت.",
    name: "سمۆرە زەمینیەکان ",
    img: ArcticSquirrel,
    category: "ژیانی ئاژەڵە کێوییەکان",
    linkVideo: v3,
    btn: "بینینی ڤیدیۆ",
    metadata: [
      { label: "زمان", value: "ئینگلیزی" },
      { label: "وەرگێڕ", value: "بارانی سعید جرجیس" },
      { label: "تەکنیکار", value: "محمود هونەر" },
      { label: "ماوە", value: "٢.٥٤ خولەک" },
    ],
  },
  {
    id: 4,
    title: "male mountain goat",
    description:
      "بزن و مەڕەکان وەرزی زاوزێ کردنیان دەکەوێتە ئەو کاتانەی کە شەو درێژە و ڕۆژ کورتە، وەرزی زستان و بەهار. لەم کورتە دیۆکیۆمێنتاریە ئاماژە بە شەڕانگێزی تەگە (نێرەی بزن) دەکات.",
    name: "بزنی شاخاوی ",
    img: mountainGoat,
    category: "ژیانی ئاژەڵە کێوییەکان",
    linkVideo: v4,
    btn: "بینینی ڤیدیۆ",
    metadata: [
      { label: "زمان", value: "ئینگلیزی" },
      { label: "وەرگێڕ", value: "شەن کامل" },
      { label: "تەکنیکار", value: "محمود هونەر" },
      { label: "ماوە", value: "٣.١٩ خولەک" },
    ],
  },
];
