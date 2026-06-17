'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import TableOfContents from '@/components/TableOfContents';
import { ChevronRight, ArrowLeft, ArrowRight, Copy } from 'lucide-react';
import type { DocPage, SidebarGroup } from '@/lib/docs';

interface DocsClientProps {
  page: DocPage;
  groups: SidebarGroup[];
}

export default function DocsClient({ page, groups }: DocsClientProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const allPages = groups.flatMap((g) => g.items);
  const currentIndex = allPages.findIndex((p) => p.slug === page.slug);
  const prev = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const next = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  const groupTitle = groups.find((g) => g.items.some((i) => i.slug === page.slug))?.title;

  return (
    <>
      <Sidebar />

      <div className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8" style={{ maxWidth: '1200px' }}>
          <main className="flex-1 min-w-0" style={{ maxWidth: '800px' }}>
            {/* Breadcrumb */}
            {groupTitle && (
              <div className="flex items-center gap-1.5 text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                <span>{groupTitle}</span>
                <ChevronRight size={12} />
                <span style={{ color: 'var(--text-primary)' }}>{page.title}</span>
              </div>
            )}

            {/* Content */}
            <div ref={contentRef} className="docs-content">
              {page.content}
            </div>

            {/* Prev / Next */}
            <div className="flex items-center justify-between mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
              {prev ? (
                <Link
                  href={`/docs/${prev.slug}`}
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  <ArrowLeft size={14} />
                  <div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Previous</div>
                    <div style={{ color: 'var(--text-primary)' }}>{prev.title}</div>
                  </div>
                </Link>
              ) : <div />}

              {next ? (
                <Link
                  href={`/docs/${next.slug}`}
                  className="flex items-center gap-2 text-sm text-right transition-colors"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  <div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Next</div>
                    <div style={{ color: 'var(--text-primary)' }}>{next.title}</div>
                  </div>
                  <ArrowRight size={14} />
                </Link>
              ) : <div />}
            </div>
          </main>

          <TableOfContents contentRef={contentRef} />
        </div>
      </div>
    </>
  );
}
