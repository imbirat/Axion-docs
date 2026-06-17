'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ contentRef }: { contentRef: React.RefObject<HTMLDivElement | null> }) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const el = contentRef?.current;
    if (!el) return;

    const headings = el.querySelectorAll('h2, h3');
    const tocItems: TocItem[] = [];
    headings.forEach((h) => {
      const id = h.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || '';
      h.id = id;
      tocItems.push({
        id,
        text: h.textContent || '',
        level: h.tagName === 'H2' ? 2 : 3,
      });
    });
    setItems(tocItems);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveId((topmost.target as HTMLElement).id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [contentRef]);

  if (items.length === 0) return null;

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside
      className="hidden xl:block shrink-0"
      style={{ width: '220px' }}
    >
      <div
        className="sticky overflow-y-auto"
        style={{ top: '80px', maxHeight: 'calc(100vh - 100px)' }}
      >
        <div
          className="text-xs font-semibold uppercase tracking-wider mb-3"
          style={{ color: 'var(--text-muted)' }}
        >
          On this page
        </div>
        <nav className="space-y-0.5">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="block w-full text-left text-sm rounded-md px-3 py-1.5 transition-all duration-200"
              style={{
                paddingLeft: item.level === 3 ? '1.75rem' : '0.75rem',
                color: activeId === item.id ? 'var(--accent)' : 'var(--text-muted)',
                fontWeight: activeId === item.id ? 500 : 400,
                backgroundColor: activeId === item.id ? 'rgba(124,58,237,0.1)' : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (activeId !== item.id) {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeId !== item.id) {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {item.text}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
