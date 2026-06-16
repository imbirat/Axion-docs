import { Link, useLocation } from 'react-router-dom';
import { Github, BookOpen, Plus } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl mt-4 px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Axion Logo"
                className="w-8 h-8 rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xl font-bold gradient-text hidden sm:inline">
                Axion
              </span>
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="https://github.com/imbirat/Axion-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl glass hover:scale-105 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-[var(--text-secondary)]" />
              </a>

              <a
                href="https://discord.com/oauth2/authorize?client_id=1502623528476737627&permissions=6282225540967030&integration_type=0&scope=bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-white font-medium text-sm transition-all duration-200 hover:scale-105 glow-sm"
                style={{ background: 'var(--gradient-1)' }}
              >
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Add Bot</span>
              </a>

              <Link
                to="/docs"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 ${
                  location.pathname === '/docs'
                    ? 'glass text-[var(--text-primary)]'
                    : 'text-[var(--text-secondary)] hover:glass hover:text-[var(--text-primary)]'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Docs</span>
              </Link>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
