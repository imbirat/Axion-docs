import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Shield,
  TrendingUp,
  Wallet,
  Music,
  Ticket,
  Bot,
  Users,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';

const features = [
  { icon: Shield, title: 'Advanced Moderation', description: 'Powerful moderation tools to keep your server safe.' },
  { icon: TrendingUp, title: 'Leveling & XP', description: 'Reward active members with levels and XP.' },
  { icon: Wallet, title: 'Economy System', description: 'Create a fun and engaging economy experience.' },
  { icon: Music, title: 'Music Player', description: 'High-quality music playback with powerful controls.' },
  { icon: Ticket, title: 'Ticket System', description: 'Manage support requests efficiently.' },
  { icon: Bot, title: 'Auto-Mod & Anti-Nuke', description: 'Protect your server from raids and malicious actions.' },
  { icon: Users, title: 'Role Management', description: 'Automate and organize server permissions.' },
  { icon: Clock, title: '24/7 Uptime', description: 'Reliable infrastructure with uninterrupted service.' },
];

function TypingWord({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i === text.length) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 600);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="gradient-text inline-flex">
      {displayed}
      {!done && <span className="w-[2px] h-[0.8em] bg-purple-400 ml-0.5 animate-pulse" />}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[128px]" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-pulse-glow"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium gradient-text">Premium Features For Free</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance"
          >
            Meet{' '}
            <TypingWord text="Axion" />{' '}
            bot
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10"
          >
            All-in-one bot with moderation, economy, leveling, music, tickets, and more. 100% free forever.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <a
              href="https://discord.com/oauth2/authorize?client_id=axion"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:scale-105 glow"
              style={{ background: 'var(--gradient-1)' }}
            >
              Add Bot
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              to="/docs"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm glass text-[var(--text-primary)] transition-all duration-200 hover:scale-105"
            >
              Docs
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why <span className="gradient-text">Axion</span>?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to manage and grow your Discord community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
