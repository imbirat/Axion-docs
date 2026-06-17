'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Github, Plus } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-14"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <nav className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Axion"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span
            className="font-bold text-base"
            style={{ color: 'var(--text-primary)' }}
          >
            Axion
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/imbirat/Axion-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex p-1.5 rounded-md transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="https://discord.com/oauth2/authorize?client_id=1502623528476737627&permissions=6282225540967030&integration_type=0&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: 'var(--accent)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
          >
            <Plus size={15} />
            Add
          </a>

          <Link
            href="/docs"
            className="hidden md:flex text-sm transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            Docs
          </Link>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
