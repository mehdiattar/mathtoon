import Link from "next/link";
import { notFound } from "next/navigation";
import { chapters, toPersian } from "@/data/chapters";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ChapterPage({ params }: Props) {
  const { id } = await params;
  const chapter = chapters.find((item) => item.id === Number(id));

  if (!chapter) {
    notFound();
  }

  return (
    <main className="chapter-page">
      <header className="chapter-header">
        <Link href="/" className="back-home">
          ← بازگشت به نقشه ماجراجویی
        </Link>
        <span className="chapter-header-brand">🦉 MathToon</span>
      </header>

      <section className={`chapter-hero ${chapter.color}`}>
        <div className="chapter-hero-icon">{chapter.icon}</div>
        <span>فصل {toPersian(chapter.id)}</span>
        <h1>{chapter.title}</h1>
        <p>{chapter.description}</p>
        <div className="chapter-topic-count">
          {toPersian(chapter.topics.length)} موضوع برای یادگیری
        </div>
      </section>

      <section className="topics-section">
        <div className="topics-heading">
          <span>🗺️ نقشه این فصل</span>
          <h2>ماجراجویی‌های این فصل</h2>
          <p>یک موضوع را انتخاب کن و یادگیری را شروع کن.</p>
        </div>

        <div className="topics-grid">
          {chapter.topics.map((topic, index) => (
            <article className="topic-card" key={topic}>
              <div className="topic-number">{toPersian(index + 1)}</div>

              <div className="topic-info">
                <span>موضوع {toPersian(index + 1)}</span>
                <h3>{topic}</h3>
                <small>به‌زودی: داستان، آموزش و بازی</small>
              </div>

              <span className="topic-arrow">←</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>🦉 MathToon</span>
        <span>هر موضوع، یک ماجراجویی تازه!</span>
      </footer>
    </main>
  );
}
