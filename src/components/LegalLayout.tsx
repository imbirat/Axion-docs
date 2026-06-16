import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Section {
  id: string;
  title: string;
  content: ReactNode;
}

interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  sections: Section[];
  seo: {
    title: string;
    description: string;
    path: string;
  };
}

export default function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  sections,
  seo,
}: LegalLayoutProps) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    document.title = seo.title;
    const canonical =
      document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevHref = canonical?.getAttribute('href');
    if (canonical) {
      canonical.setAttribute('href', `https://axionbot.qzz.io${seo.path}`);
    }
    return () => {
      document.title = 'Axion - Powerful Discord Bot';
      if (canonical && prevHref) {
        canonical.setAttribute('href', prevHref);
      }
    };
  }, [seo]);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveSection((topmost.target as HTMLElement).id);
        }
      },
      { rootMargin: '-100px 0px -50% 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && (
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
              {subtitle}
            </p>
          )}
          <p className="text-sm text-[var(--text-muted)]">
            Last Updated: {lastUpdated}
          </p>
        </motion.div>

        <div className="flex gap-8">
          <aside className="hidden xl:block w-56 shrink-0">
            <div className="sticky top-24 overflow-y-auto max-h-[calc(100vh-8rem)]">
              <h4 className="text-sm font-semibold mb-3 text-[var(--text-primary)]">
                On this page
              </h4>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleNav(s.id)}
                    className={`block w-full text-left text-sm rounded-xl px-3 py-1.5 transition-all duration-200 ${
                      activeSection === s.id
                        ? 'font-medium'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:glass'
                    }`}
                    style={
                      activeSection === s.id
                        ? {
                            background: 'var(--gradient-1)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }
                        : undefined
                    }
                  >
                    {s.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass rounded-2xl p-6 sm:p-8 scroll-mt-28"
                >
                  <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
                    {section.title}
                  </h2>
                  <div className="text-[var(--text-secondary)] leading-relaxed space-y-4">
                    {section.content}
                  </div>
                </motion.section>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
