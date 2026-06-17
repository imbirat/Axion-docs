import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Axion',
  description: 'Terms of Service for Axion Discord Bot. Review the rules, guidelines, and legal terms governing the use of Axion.',
};

const sections = [
  {
    title: 'Acceptance of Terms',
    content:
      'By inviting Axion to your Discord server or using any of its features, commands, or services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must discontinue use of the bot immediately. Continued use of Axion constitutes acceptance of any future updates to these terms.',
  },
  {
    title: 'Use of Bot',
    content:
      'Axion is provided free of charge for use on Discord servers where the user has permission to add bots. You agree to use Axion in compliance with Discord\'s Terms of Service and Community Guidelines. The bot is intended to enhance server management, moderation, engagement, and entertainment. You may not use Axion for any unlawful purpose or in any manner that could damage, disable, overburden, or impair the bot\'s functionality.',
  },
  {
    title: 'Prohibited Activities',
    content:
      'When using Axion, you agree not to:',
    list: [
      'Use the bot to harass, abuse, or threaten other users.',
      'Exploit bugs, vulnerabilities, or errors in the bot for personal gain.',
      'Attempt to reverse-engineer, decompile, or tamper with the bot\'s code.',
      'Use automated scripts or macros to spam commands or overload the bot.',
      'Use the bot to distribute malicious content, spam, or unsolicited messages.',
      'Impersonate Axion developers, staff, or other users.',
      'Violate Discord\'s Terms of Service or any applicable laws.',
    ],
  },
  {
    title: 'Data Collection',
    content:
      'Axion collects and stores certain data necessary for its operation, including:',
    list: [
      'Discord User IDs — to track command usage, economy profiles, and user settings.',
      'Server (Guild) IDs — to store per-server configuration and moderation logs.',
      'Channel and Role IDs — to manage custom bot settings per server.',
      'Command usage statistics — to improve performance and feature development.',
      'User-generated content (e.g., custom prefixes, welcome messages, reaction roles).',
    ],
    afterList:
      'This data is used solely for bot functionality and is never sold or shared with third parties beyond what is necessary to provide the service.',
  },
  {
    title: 'Termination',
    content:
      'We reserve the right to terminate or suspend access to Axion for any server or user at our sole discretion, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, third parties, or the bot itself. Upon termination, your right to use Axion will immediately cease. Server administrators may remove the bot at any time.',
  },
  {
    title: 'Changes to Terms',
    content:
      'We reserve the right to update or modify these Terms of Service at any time. Changes will be communicated via our official Discord support server and, where appropriate, through announcements within the bot. Continued use of Axion after any modifications constitutes acceptance of the updated terms. We encourage users to review this page periodically.',
  },
  {
    title: 'Contact',
    content:
      'If you have any questions, concerns, or requests regarding these Terms of Service, please reach out to us through our official Discord support server at https://discord.gg/axion or contact us via email at support@axionbot.qzz.io.',
  },
];

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1
          className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl"
          style={{ color: 'var(--text-primary)' }}
        >
          Terms of Service
        </h1>
        <p className="mx-auto max-w-2xl text-lg" style={{ color: 'var(--text-secondary)' }}>
          Please read these terms carefully before using Axion. By using the bot, you agree to be bound by these terms.
        </p>
        <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
          Last Updated: June 1, 2026
        </p>
      </div>

      {sections.map((section, i) => (
        <div
          key={i}
          className="mb-6 rounded-xl border p-6 sm:p-8"
          style={{
            borderColor: 'var(--border)',
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
          }}
        >
          <h2 className="mb-3 text-xl font-bold sm:text-2xl">{section.title}</h2>
          <p className="mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {section.content}
          </p>
          {section.list && (
            <ul className="list-inside list-disc space-y-1.5 pl-2" style={{ color: 'var(--text-secondary)' }}>
              {section.list.map((item, j) => (
                <li key={j} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          )}
          {section.afterList && (
            <p className="mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {section.afterList}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
