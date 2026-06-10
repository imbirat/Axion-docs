import { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { docSections } from '../data/docs';
import DocsLayout from '../layouts/DocsLayout';
import { motion } from 'framer-motion';
import { Copy, Check, Terminal, AlertTriangle, Info, AlertCircle } from 'lucide-react';

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

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return docSections;

    const query = searchQuery.toLowerCase();
    return docSections
      .map((section) => {
        const contentMatch = section.content.toLowerCase().includes(query);
        const titleMatch = section.title.toLowerCase().includes(query);
        if (titleMatch) return { ...section, content: section.content };
        if (contentMatch) {
          const lines = section.content.split('\n');
          const matchingLines = lines.filter(
            (line) => line.toLowerCase().includes(query)
          );
          return {
            ...section,
            content: matchingLines.join('\n'),
          };
        }
        return null;
      })
      .filter(Boolean) as typeof docSections;
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
