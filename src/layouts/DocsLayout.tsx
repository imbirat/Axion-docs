import { ReactNode, useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { docSections } from '../data/docs';
import Sidebar from '../components/Sidebar';
import TableOfContents from '../components/TableOfContents';
import SearchBar from '../components/SearchBar';
import ThemeToggle from '../components/ThemeToggle';
import { Menu, ChevronRight, Home } from 'lucide-react';

interface DocsLayoutProps {
  children: ReactNode;
  onSearch: (query: string) => void;
  searchQuery: string;
}

export default function DocsLayout({ children, onSearch, searchQuery }: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = useCallback((id: string) => {
    setActiveId(id);
    navigate(`/docs#${id}`);
  }, [navigate]);

  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash && docSections.some((s) => s.id === hash)) {
      setActiveId(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (docSections.length > 0) {
      setActiveId(docSections[0].id);
    }
  }, [location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = docSections.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));

      const scrollPos = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.el && section.el.offsetTop <= scrollPos) {
          setActiveId(section.id);
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const breadcrumbs = activeId
    ? docSections.find((s) => s.id === activeId)?.title
    : '';

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sticky top-20 z-30 pb-4">
          <div className="flex items-center gap-3 glass rounded-2xl px-4 py-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl hover:glass transition-all"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <nav className="hidden sm:flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <Home className="w-4 h-4" />
              <ChevronRight className="w-3 h-3" />
              <span>Docs</span>
              {breadcrumbs && (
                <>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-[var(--text-primary)] font-medium">{breadcrumbs}</span>
                </>
              )}
            </nav>

            <SearchBar onSearch={onSearch} />

            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <Sidebar
            activeId={activeId}
            onNav={handleNav}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          <main className="flex-1 min-w-0">
            <div className="prose-custom max-w-none">
              {searchQuery && (
                <div className="mb-6">
                  <p className="text-sm text-[var(--text-muted)]">
                    Search results for: <span className="font-medium text-[var(--text-primary)]">&ldquo;{searchQuery}&rdquo;</span>
                  </p>
                </div>
              )}
              {children}
            </div>

            {!searchQuery && (
              <div className="mt-12 pt-8 border-t border-[var(--border)]">
                <div className="flex items-center justify-between text-sm text-[var(--text-muted)]">
                  <button
                    onClick={() => {
                      const idx = docSections.findIndex((s) => s.id === activeId);
                      if (idx > 0) handleNav(docSections[idx - 1].id);
                    }}
                    className="flex items-center gap-2 hover:text-[var(--text-primary)] transition-colors"
                    disabled={docSections.findIndex((s) => s.id === activeId) === 0}
                  >
                    <ChevronRight className="w-4 h-4 rotate-180" />
                    Previous
                  </button>
                  <button
                    onClick={() => {
                      const idx = docSections.findIndex((s) => s.id === activeId);
                      if (idx < docSections.length - 1) handleNav(docSections[idx + 1].id);
                    }}
                    className="flex items-center gap-2 hover:text-[var(--text-primary)] transition-colors"
                    disabled={docSections.findIndex((s) => s.id === activeId) === docSections.length - 1}
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </main>

          {!searchQuery && <TableOfContents activeId={activeId} />}
        </div>
      </div>
    </div>
  );
}
