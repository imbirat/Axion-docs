import { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';
import { docSections } from '../data/docs';
import DocsLayout from '../layouts/DocsLayout';
import { motion } from 'framer-motion';
import { Copy, Check, Terminal, AlertTriangle, Info, AlertCircle } from 'lucide-react';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function stripMarkdown(text: string): string {
  return text
    .replace(/^#+\s+/gm, '')
    .replace(/\*{1,3}/g, '')
    .replace(/`{1,3}/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\|/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function createExcerpt(text: string, query: string): string {
  const clean = stripMarkdown(text);
  const lower = clean.toLowerCase();
  const q = query.toLowerCase();
  const idx = lower.indexOf(q);
  if (idx === -1) return '';

  const ctx = 60;
  const start = Math.max(0, idx - ctx);
  const end = Math.min(clean.length, idx + q.length + ctx);

  const before = clean.slice(start, idx);
  const match = clean.slice(idx, idx + q.length);
  const after = clean.slice(idx + q.length, end);

  const prefix = start > 0 ? '\u2026' : '';
  const suffix = end < clean.length ? '\u2026' : '';

  return `${prefix}${before}**${match}**${after}${suffix}`;
}

function CodeBlock({ className, children, ...props }: any) {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || '');
  const isInline = !match;

  if (isInline) {
    return <code className={className} {...props}>{children}</code>;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(String(children).replace(/\n$/, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="flex items-center justify-between px-4 py-2 rounded-t-lg border-b border-[var(--border)] bg-[var(--bg-tertiary)]">
        <span className="text-xs font-medium text-[var(--text-muted)] uppercase">
          {match[1]}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:glass transition-all"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="!mt-0 !rounded-t-none">
        <code className={className} {...props}>{children}</code>
      </pre>
    </div>
  );
}

function Alert({ type, title, children }: { type: 'info' | 'warning' | 'success' | 'error'; title?: string; children: React.ReactNode }) {
  const icons = {
    info: Info,
    warning: AlertTriangle,
    success: Check,
    error: AlertCircle,
  };
  const Icon = icons[type];
  const borderColors = {
    info: 'var(--alert-info-border)',
    warning: 'var(--alert-warning-border)',
    success: 'var(--alert-success-border)',
    error: 'var(--alert-error-border)',
  };
  const bgColors = {
    info: 'var(--alert-info-bg)',
    warning: 'var(--alert-warning-bg)',
    success: 'var(--alert-success-bg)',
    error: 'var(--alert-error-bg)',
  };

  return (
    <div
      className="flex gap-3 p-4 rounded-xl mb-6 border-l-4"
      style={{ borderLeftColor: borderColors[type], background: bgColors[type] }}
    >
      <Icon className="w-5 h-5 mt-0.5 shrink-0" style={{ color: borderColors[type] }} />
      <div>
        {title && <p className="font-medium text-sm mb-1 text-[var(--text-primary)]">{title}</p>}
        <div className="text-sm text-[var(--text-secondary)]">{children}</div>
      </div>
    </div>
  );
}

export default function Docs() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchCard = (id: string) => {
    setSearchQuery('');
    navigate(`/docs#${id}`);
  };

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return docSections;

    const query = searchQuery.toLowerCase();
    return docSections
      .map((section) => {
        const titleMatch = section.title.toLowerCase().includes(query);
        const contentMatch = section.content.toLowerCase().includes(query);
        if (!titleMatch && !contentMatch) return null;
        return {
          ...section,
          excerpt: createExcerpt(section.content, searchQuery),
        };
      })
      .filter(Boolean) as (typeof docSections[number] & { excerpt: string })[];
  }, [searchQuery]);

  return (
    <DocsLayout onSearch={setSearchQuery} searchQuery={searchQuery}>
      {filteredSections.length === 0 ? (
        <div className="text-center py-20">
          <Terminal className="w-12 h-12 mx-auto mb-4 text-[var(--text-muted)]" />
          <h2 className="text-xl font-semibold mb-2">No results found</h2>
          <p className="text-[var(--text-secondary)]">
            Try searching for something else.
          </p>
        </div>
      ) : searchQuery ? (
        (filteredSections as (typeof docSections[number] & { excerpt: string })[]).map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <button
              onClick={() => handleSearchCard(section.id)}
              className="w-full text-left glass rounded-2xl p-5 hover:glass transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <section.icon className="w-5 h-5 text-[var(--text-muted)]" />
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {section.title}
                </h3>
              </div>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {section.excerpt.split('**').map((part: string, i: number) =>
                  i % 2 === 1 ? (
                    <strong key={i} className="text-[var(--text-primary)]">
                      {part}
                    </strong>
                  ) : (
                    part
                  )
                )}
              </p>
            </button>
          </motion.div>
        ))
      ) : (
        filteredSections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="scroll-mt-32"
          >
            <ReactMarkdown
              components={{
                code: CodeBlock as any,
                h1: ({ children, ...props }: any) => {
                  const text = String(children || '');
                  const id = `${section.id}--${slugify(text)}`;
                  return <h1 id={id} {...props}>{children}</h1>;
                },
                h2: ({ children, ...props }: any) => {
                  const text = String(children || '');
                  const id = `${section.id}--${slugify(text)}`;
                  return <h2 id={id} {...props}>{children}</h2>;
                },
                h3: ({ children, ...props }: any) => {
                  const text = String(children || '');
                  const id = `${section.id}--${slugify(text)}`;
                  return <h3 id={id} {...props}>{children}</h3>;
                },
              }}
            >
              {section.content}
            </ReactMarkdown>
          </motion.section>
        ))
      )}

      <Alert type="info" title="Need Help?">
        Join our <a href="https://discord.gg/axion" className="underline">Discord server</a> for support.
      </Alert>
    </DocsLayout>
  );
}
