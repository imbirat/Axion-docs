'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarGroups } from '@/lib/docs';
import { ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const slug = pathname.replace('/docs/', '');
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-colors"
        style={{ backgroundColor: 'var(--accent)', color: 'white' }}
        onClick={() => setOpen(!open)}
        aria-label="Toggle sidebar"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:sticky top-14 left-0 z-40 h-[calc(100vh-56px)] transition-transform duration-300 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          width: '260px',
          backgroundColor: 'var(--bg-primary)',
          borderRight: '1px solid var(--border)',
          overflowY: 'auto',
        }}
      >
        <div className="p-4">
          {sidebarGroups.map((group) => (
            <div key={group.title}>
              <div
                className="text-xs font-semibold uppercase tracking-wider mt-5 mb-1 px-2"
                style={{ color: 'var(--text-muted)' }}
              >
                {group.title}
              </div>
              {group.items.map((item) => {
                const active = slug === item.slug;
                return (
                  <Link
                    key={item.slug}
                    href={`/docs/${item.slug}`}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-1.5 rounded-md text-sm transition-all duration-200"
                    style={{
                      color: active ? 'var(--accent)' : 'var(--text-secondary)',
                      backgroundColor: active ? 'rgba(124,58,237,0.15)' : 'transparent',
                      fontWeight: active ? 500 : 400,
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                      }
                    }}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
