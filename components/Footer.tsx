'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith('/docs')) return null;

  return (
    <footer
      className="border-t py-10 px-6"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-5xl">
        <div
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          <Link href="/privacy" className="hover:text-[var(--text-primary)] transition-colors">
            Privacy Policy
          </Link>
          <span className="select-none">&bull;</span>
          <Link href="/terms" className="hover:text-[var(--text-primary)] transition-colors">
            Terms of Service
          </Link>
          <span className="select-none">&bull;</span>
          <a
            href="https://discord.gg/5ZGTMY6GRj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Support Server
          </a>
          <span className="select-none">&bull;</span>
          <a
            href="https://discord.com/oauth2/authorize?client_id=1502623528476737627&permissions=6282225540967030&integration_type=0&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Invite Bot
          </a>
        </div>
        <p className="mt-5 text-center text-sm" style={{ color: 'var(--text-muted)' }}>
          &copy; {new Date().getFullYear()} Axion. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
