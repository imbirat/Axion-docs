'use client';

import FeatureCard from '@/components/FeatureCard';
import {
  Shield,
  TrendingUp,
  Coins,
  ScrollText,
  Ticket,
  Bot,
  Users,
  Clock,
  Sparkles,
  Plus,
  BookOpen,
} from 'lucide-react';

const features = [
  { icon: Shield, title: 'Advanced Moderation', description: 'Auto-ban, kick, mute, warn with full audit logs' },
  { icon: TrendingUp, title: 'Leveling & XP', description: 'Custom XP rates, leaderboards, role rewards' },
  { icon: Coins, title: 'Economy System', description: 'Earn, spend, gamble — full virtual economy' },
  { icon: ScrollText, title: 'Logging', description: 'Track every action — messages, joins, edits' },
  { icon: Ticket, title: 'Ticket System', description: 'Category-based support tickets with transcripts' },
  { icon: Bot, title: 'Auto-Mod & Anti-Nuke', description: 'Spam, raid, nuke protection — always on' },
  { icon: Users, title: 'Role Management', description: 'Auto-roles, reaction roles, role menus' },
  { icon: Clock, title: '24/7 Uptime', description: 'Hosted on enterprise infra — never offline' },
];

export default function HomePage() {

  return (
    <>
      <style>{`
        .gradient-text {
          background: linear-gradient(to right, #7c3aed, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '24rem',
            height: '24rem',
            background: 'rgba(124,58,237,0.15)',
            borderRadius: '50%',
            filter: 'blur(96px)',
          }}
        />

        <div className="relative max-w-[800px] mx-auto text-center">
          {/* Pill badge */}
          <div
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
            style={{
              border: '1px solid rgba(124,58,237,0.3)',
              backgroundColor: 'rgba(124,58,237,0.1)',
              color: 'var(--accent)',
            }}
          >
            <Sparkles size={13} />
            Premium Features &mdash; 100% Free
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: 'var(--text-primary)' }}>
            Meet <span className="gradient-text">Axion</span> bot
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl max-w-[600px] mx-auto mb-10" style={{ color: 'var(--text-secondary)' }}>
            The all-in-one Discord bot your server deserves. Moderation, economy, tickets, leveling, and more &mdash; completely free.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://discord.com/oauth2/authorize?client_id=1502623528476737627&permissions=6282225540967030&integration_type=0&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--accent)', color: '#ffffff' }}
            >
              <Plus size={16} />
              Add to Discord
            </a>
            <a
              href="/docs/introduction"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-colors"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <BookOpen size={16} />
              View Docs
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Why <span className="gradient-text">Axion</span>?
            </h2>
            <p className="text-base sm:text-lg max-w-[600px] mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Everything you need to manage, engage, and protect your community &mdash; in one powerful bot.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
