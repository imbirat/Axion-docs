import { useMemo, useEffect, useState } from 'react';
import { docSections } from '../data/docs';

interface Heading {
  level: number;
  text: string;
  id: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

interface TableOfContentsProps {
  activeId: string;
}

export default function TableOfContents({ activeId }: TableOfContentsProps) {
  const [activeHeading, setActiveHeading] = useState('');

  const activeSection = docSections.find((s) => s.id === activeId);

  const headings = useMemo(() => {
    if (!activeSection) return [];
    const lines = activeSection.content.split('\n');
    const result: Heading[] = [];
    for (const line of lines) {
      const match = line.match(/^(#{1,3})\s+(.+)/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = `${activeSection.id}--${slugify(text)}`;
        result.push({ level, text, id });
      }
    }
    return result;
  }, [activeSection]);

  useEffect(() => {
    if (headings.length === 0) return;

    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveHeading(topmost.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block w-52 shrink-0">
      <div className="sticky top-24 overflow-y-auto max-h-[calc(100vh-8rem)]">
        <h4 className="text-sm font-semibold mb-3 text-[var(--text-primary)]">
          On this page
        </h4>
        <nav className="space-y-1">
          {headings.map((h) => (
            <button
              key={h.id}
              onClick={() => handleClick(h.id)}
              className={`block w-full text-left text-sm rounded-xl px-3 py-1.5 transition-all duration-200 ${
                activeHeading === h.id
                  ? 'font-medium'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:glass'
              }`}
              style={
                activeHeading === h.id
                  ? {
                      background: 'var(--gradient-1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }
                  : undefined
              }
            >
              {h.text}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
