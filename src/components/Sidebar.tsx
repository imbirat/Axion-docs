import { useEffect, useState } from 'react';
import { docSections } from '../data/docs';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';

interface SidebarProps {
  activeId: string;
  onNav: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ activeId, onNav, isOpen, onClose }: SidebarProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNav = (id: string) => {
    onNav(id);
    onClose();
  };

  const sidebarContent = (
    <nav className="space-y-1">
      {docSections.map((section, i) => (
        <motion.button
          key={section.id}
          initial={mounted ? { opacity: 0, x: -20 } : false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          onClick={() => handleNav(section.id)}
          className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
            activeId === section.id
              ? 'text-white glow-sm'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:glass'
          }`}
          style={
            activeId === section.id
              ? { background: 'var(--gradient-1)' }
              : undefined
          }
        >
          <section.icon className={`w-4 h-4 ${
            activeId === section.id ? 'text-white' : 'text-[var(--text-muted)] group-hover:text-[var(--text-primary)]'
          }`} />
          <span className="text-left">{section.title}</span>
        </motion.button>
      ))}
    </nav>
  );

  return (
    <>
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24 overflow-y-auto max-h-[calc(100vh-8rem)] pr-4">
          {sidebarContent}
        </div>
      </aside>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-72 z-50 lg:hidden glass"
              style={{ background: 'var(--bg-primary)' }}
            >
              <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="Axion" className="w-7 h-7 rounded-lg" />
                  <span className="font-bold gradient-text">Axion Docs</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl hover:glass transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
                {sidebarContent}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
