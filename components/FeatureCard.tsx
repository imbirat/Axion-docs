'use client';

import { useEffect, useRef, useState } from 'react';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

export default function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="rounded-xl p-5 border transition-all duration-500"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${index * 0.08}s`,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
    >
      <div
        className="inline-flex p-2.5 rounded-lg mb-4"
        style={{ backgroundColor: 'rgba(124,58,237,0.1)', color: 'var(--accent)' }}
      >
        <Icon size={22} />
      </div>
      <h3 className="text-base font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {description}
      </p>
    </div>
  );
}
