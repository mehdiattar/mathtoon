const chapters = [
  {
    id: 1,
    title: "عددنویسی و الگوها",
    topics: 4,
    icon: "🔢",
    color: "blue",
    description: "ماجراجویی در شهر اعداد",
  },
  {
    id: 2,
    title: "کسر",
    topics: 5,
    icon: "🍫",
    color: "pink",
    description: "سفر به سرزمین شکلات‌ها",
  },
  {
    id: 3,
    title: "نسبت، تناسب و درصد",
    topics: 4,
    icon: "⚖️",
    color: "orange",
    description: "آزمایشگاه تناسب",
  },
  {
    id: 4,
    title: "تقارن و چندضلعی‌ها",
    topics: 4,
    icon: "🔷",
    color: "purple",
    description: "شهر شگفت‌انگیز شکل‌ها",
  },
  {
    id: 5,
    title: "عددهای اعشاری",
    topics: 4,
    icon: "🧮",
    color: "green",
    description: "کارخانه عددهای اعشاری",
  },
  {
    id: 6,
    title: "اندازه‌گیری",
    topics: 4,
    icon: "📏",
    color: "yellow",
    description: "سرزمین مهندسان کوچک",
  },
  {
    id: 7,
    title: "آمار و احتمال",
    topics: 3,
    icon: "🎲",
    color: "cyan",
    description: "آزمایشگاه شانس و آمار",
  },
];

const toPersian = (value: number) =>
  value.toLocaleString("fa-IR");

export default function Home() {
  const totalTopics = chapters.reduce(
    (sum, chapter) => sum + chapter.topics,
    0
  );

  return (
    <main className="math-page">
      <header className="topbar">
        <a className="brand" href="/">
          <span className="brand-icon">🦉</span>
          <span>
            <strong>MathToon</strong>
            <small>دنیای ماجراجویی ریاضی</small>
          </span>
        </a>

        <div className="topbar-label">
          <span>✨</span>
          یادگیری با داستان و بازی
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-tag">
            <span>🌟</span>
            به دنیای شگفت‌انگیز ریاضی خوش آمدی!
          </div>

          <h1>
            ریاضی را
            <span> بازی کن،</span>
            <br />
            یاد بگیر و ماجراجویی کن!
          </h1>

          <p>
            همراه جغد دانا به سرزمین‌های شگفت‌انگیز ریاضی سفر کن.
            داستان ببین، کشف کن و با بازی کردن قهرمان ریاضی شو!
          </p>

          <a href="#chapters" className="hero-button">
            شروع ماجراجویی
            <span>←</span>
          </a>

          <div className="hero-stats">
            <div>
              <strong>{toPersian(7)}</strong>
              <span>فصل آموزشی</span>
            </div>
            <div>
              <strong>{toPersian(totalTopics)}</strong>
              <span>موضوع یادگیری</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>ماجراجویی</span>
            </div>
          </div>
        </div>

        <div className="hero-art">
          <div className="sun-decoration">☀️</div>
          <div className="star star-one">✦</div>
          <div className="star star-two">✧</div>
          <div className="hero-circle">
            <div className="owl-character">🦉</div>
          </div>
          <div className="speech-bubble">
            سلام قهرمان!
            <br />
            آماده‌ای؟ 🎉
          </div>
          <div className="floating-math math-one">＋</div>
          <div className="floating-math math-two">÷</div>
          <div className="floating-math math-three">×</div>
        </div>
      </section>

      <section className="learning-section" id="chapters">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">نقشه ماجراجویی</span>
            <h2>سرزمین‌های ریاضی</h2>
            <p>یک فصل را انتخاب کن و ماجراجویی را شروع کن.</p>
          </div>
          <span className="map-decoration">🗺️</span>
        </div>

        <div className="chapter-grid">
          {chapters.map((chapter) => (
            <article
              key={chapter.id}
              className={`chapter-card ${chapter.color}`}
            >
              <div className="chapter-card-top">
                <span className="chapter-number">
                  فصل {toPersian(chapter.id)}
                </span>
                <span className="chapter-icon">{chapter.icon}</span>
              </div>

              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>

              <div className="chapter-card-bottom">
                <span>
                  📚 {toPersian(chapter.topics)} موضوع آموزشی
                </span>
                <button
                  type="button"
                  aria-label={`انتخاب فصل ${chapter.title}`}
                  title="به‌زودی"
                >
                  ←
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="adventure-banner">
        <div className="banner-character">🦉</div>
        <div>
          <h2>هر مسئله، یک ماجراجویی تازه!</h2>
          <p>
            آماده شو تا با کمک دوستانت رازهای دنیای ریاضی را کشف کنی.
          </p>
        </div>
        <span className="banner-star">⭐</span>
      </section>

      <footer className="footer">
        <span>🦉 MathToon</span>
        <span>یادگیری شیرین ریاضی، با طعم ماجراجویی!</span>
      </footer>
    </main>
  );
}