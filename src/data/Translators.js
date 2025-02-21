import FennecFox from "../assets/images/FennecFox.webp";
import ArcticFox from "../assets/images/ArcticFox.webp";
import ArcticSquirrel from "../assets/images/ArcticSquirrel.jpeg";
import mountainGoat from "../assets/images/mountainGoat.jpeg";
import img5 from "../assets/images/5.webp";
import img6 from "../assets/images/6.webp";

// Translators
import JihadAbdulrahman from "../assets/images/JihadAbdulrahman.jpg";
import BaraniSahid from "../assets/images/BaraniSahid.jpg";
import ShanKaml from "../assets/images/ShanKaml.jpg";
import SozyarFaruq from "../assets/images/SozyarFaruq.jpg";
import MahmoodOmer from "../assets/images/MahmoodOmer.jpg";
import ShilanOmer from "../assets/images/ShilanOmer.jpg";
import SarkawtSamad from "../assets/images/SarkawtSamad.jpg";
import ShnyarMahamad from "../assets/images/ShnyarMahamad.jpg";

export const translatorsList = [
  {
    id: 1,
    TranslatorName: "جهاد عبدالرحمن سعدی",
    title: "بەرهەمە وەرگێڕدراوەکانی",
    TranslatorImage: JihadAbdulrahman,
    number: "نیە",
    AllDatas: [],
  },
  {
    id: 2,
    TranslatorName: "سۆزیار فاروق شەریف",
    title: "بەرهەمە وەرگێڕدراوەکانی",
    TranslatorImage: SozyarFaruq,
    number: "١",
    AllDatas: [
      {
        id: 6,
        name: "هەڵۆی فلیپینی",
        img: img6,
      },
    ],
  },
  {
    id: 3,
    TranslatorName: "شەن کامل عمر",
    title: "بەرهەمە وەرگێڕدراوەکانی",
    TranslatorImage: ShanKaml,
    number: "٢",
    AllDatas: [
      { id: 1, name: "ڕێوی  فێنێک", img: FennecFox },
      { id: 4, name: "بزنی شاخاوی", img: mountainGoat },
    ],
  },
  {
    id: 4,
    TranslatorName: "بارانی سعید جرجیس",
    title: "بەرهەمە وەرگێڕدراوەکانی",
    TranslatorImage: BaraniSahid,
    number: "٢",
    AllDatas: [
      { id: 3, name: "سمۆرە زەمینیەکانی جەمسەری باکوور", img: ArcticSquirrel },
      { id: 5, name: "شا پەنگوینەکان", img: img5 },
    ],
  },
  {
    id: 5,
    TranslatorName: "محمود هونەر احمد",
    title: "بەرهەمە وەرگێڕدراوەکانی",
    TranslatorImage: MahmoodOmer,
    number: "نیە",
    AllDatas: [],
  },
  {
    id: 6,
    TranslatorName: "شیلان عمر احمد",
    title: "بەرهەمە وەرگێڕدراوەکانی",
    TranslatorImage: ShilanOmer,
    number: "١",
    AllDatas: [{ id: 2, name: "ڕێوی جەمسەری باکوور", img: ArcticFox }],
  },
  {
    id: 7,
    TranslatorName: "سەرکەوت صمد مصطفي",
    title: "بەرهەمە وەرگێڕدراوەکانی",
    TranslatorImage: SarkawtSamad,
    number: "نیە",
    AllDatas: [],
  },
  {
    id: 8,
    TranslatorName: "شنیار محمد قادر",
    title: "بەرهەمە وەرگێڕدراوەکانی",
    TranslatorImage: ShnyarMahamad,
    number: "نیە",
    AllDatas: [],
  },
];
