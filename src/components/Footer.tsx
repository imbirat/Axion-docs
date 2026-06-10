import { Github, BookOpen, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Axion Logo"
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-lg font-bold gradient-text">Axion</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:glass transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <Link
              to="/docs"
              className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:glass transition-all duration-200"
              aria-label="Documentation"
            >
              <BookOpen className="w-5 h-5" />
            </Link>

            <a
              href="https://discord.gg/axion"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:glass transition-all duration-200"
              aria-label="Discord"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--border)] text-center">
          <p className="text-sm text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Axion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
