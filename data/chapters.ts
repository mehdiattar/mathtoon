export type Chapter = {
  id: number;
  title: string;
  topics: string[];
  icon: string;
  color: string;
  description: string;
};

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "عددنویسی و الگوها",
    topics: [
      "یادآوری عددنویسی",
      "عددهای بزرگ",
      "الگوهای عددی",
      "ماشین ورودی و خروجی",
    ],
    icon: "🔢",
    color: "blue",
    description: "ماجراجویی در شهر اعداد",
  },
  {
    id: 2,
    title: "کسر",
    topics: [
      "جمع و تفریق کسرها",
      "ضرب کسرها",
      "تقسیم کسرها",
      "ضرب عدد در کسر",
      "کاربرد کسرها",
    ],
    icon: "🍫",
    color: "pink",
    description: "سفر به سرزمین شکلات‌ها",
  },
  {
    id: 3,
    title: "نسبت، تناسب و درصد",
    topics: ["نسبت", "تناسب", "درصد", "کاربرد درصد"],
    icon: "⚖️",
    color: "orange",
    description: "آزمایشگاه تناسب",
  },
  {
    id: 4,
    title: "تقارن و چندضلعی‌ها",
    topics: ["تقارن", "تقارن مرکزی", "چندضلعی‌ها", "ویژگی‌های شکل‌های هندسی"],
    icon: "🔷",
    color: "purple",
    description: "شهر شگفت‌انگیز شکل‌ها",
  },
  {
    id: 5,
    title: "عددهای اعشاری",
    topics: [
      "یادآوری عددهای اعشاری",
      "جمع و تفریق اعشاری",
      "ضرب عددهای اعشاری",
      "تقسیم عددهای اعشاری",
    ],
    icon: "🧮",
    color: "green",
    description: "کارخانه عددهای اعشاری",
  },
  {
    id: 6,
    title: "اندازه‌گیری",
    topics: ["اندازه‌گیری طول", "مساحت", "حجم و گنجایش", "جرم و زمان"],
    icon: "📏",
    color: "yellow",
    description: "سرزمین مهندسان کوچک",
  },
  {
    id: 7,
    title: "آمار و احتمال",
    topics: ["جمع‌آوری و نمایش داده‌ها", "میانگین", "احتمال"],
    icon: "🎲",
    color: "cyan",
    description: "آزمایشگاه شانس و آمار",
  },
];

export const toPersian = (value: number) => value.toLocaleString("fa-IR");
