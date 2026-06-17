import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Axion',
  description: 'Privacy Policy for Axion Discord Bot. Learn how we collect, use, and protect your data.',
};

const sections = [
  {
    title: 'Data We Collect',
    content:
      'To provide and improve our services, Axion collects the following types of data:',
    list: [
      'Discord User IDs — used to identify users for economy, leveling, moderation actions, and command logging.',
      'Discord Server (Guild) IDs — used to store per-server configurations, moderation settings, and custom commands.',
      'Discord Channel and Role IDs — used to manage permissions, log channels, and role-based features.',
      'Command usage data — anonymized statistics about which commands are used and how often, to help us prioritize development.',
      'Settings and configuration — user-set preferences such as custom prefixes, welcome messages, auto-roles, and reaction roles.',
    ],
  },
  {
    title: 'How We Use Your Data',
    content:
      'The data we collect is used exclusively for the following purposes:',
    list: [
      'Operating and maintaining bot features such as moderation, economy, leveling, and music.',
      'Persisting server and user settings across bot restarts.',
      'Improving bot performance and reliability based on usage patterns.',
      'Debugging issues and providing customer support.',
      'Ensuring compliance with our Terms of Service and Discord\'s policies.',
    ],
  },
  {
    title: 'Data Retention',
    content:
      'We retain collected data only as long as necessary to provide the bot\'s services. Specifically:',
    list: [
      'Server configuration data is retained until the bot is removed from the server.',
      'User economy and leveling data is retained until the user requests deletion or the bot is removed from the server.',
      'Command logs are retained for up to 90 days for debugging and analytics purposes.',
      'Moderation action logs are retained for up to 30 days unless otherwise required for ongoing investigations.',
    ],
    afterList:
      'Upon removal of the bot from a server, associated server-specific data is deleted within 30 days unless required for legal or security purposes.',
  },
  {
    title: 'Third-Party Services',
    content:
      'Axion relies on the following third-party services to function. Each service has its own privacy policy governing data handling:',
    list: [
      'Discord API — used for all bot interactions. Data handling is governed by Discord\'s Privacy Policy.',
      'YouTube API — used for music features. Video searches and playback comply with YouTube\'s Terms of Service.',
      'Hosting Provider — Axion is hosted on secure infrastructure. Logs and data are stored in encrypted databases.',
    ],
    afterList:
      'We do not sell, trade, or share your personal data with third parties for their marketing purposes.',
  },
  {
    title: 'Your Rights',
    content:
      'Depending on your jurisdiction, including rights under the General Data Protection Regulation (GDPR) if you are in the European Economic Area, you may have the following rights:',
    list: [
      'Right to access — request a copy of the data we hold about you.',
      'Right to rectification — request correction of inaccurate data.',
      'Right to erasure — request deletion of your data, subject to legal obligations.',
      'Right to restrict processing — request limitation of how your data is used.',
      'Right to data portability — request transfer of your data to another service.',
      'Right to object — object to the processing of your data for certain purposes.',
    ],
    afterList:
      'To exercise any of these rights, please contact us using the information in the Contact section below.',
  },
  {
    title: 'Security',
    content:
      'We take data security seriously and implement the following measures to protect your information:',
    list: [
      'Encryption — all data in transit is encrypted using TLS. Sensitive data at rest is encrypted using industry-standard algorithms.',
      'Access control — only the bot developer and designated administrators have access to the database, and access is logged and audited.',
      'Backups — regular encrypted backups are performed to prevent data loss in the event of a failure.',
      'Monitoring — automated systems monitor for unauthorized access attempts and unusual activity.',
    ],
    afterList:
      'While we strive to protect your data, no method of electronic storage is 100% secure. We cannot guarantee absolute security.',
  },
  {
    title: 'Contact',
    content:
      'If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us:',
    list: [
      'Email: support@axionbot.qzz.io',
      'Discord Support Server: https://discord.gg/5ZGTMY6GRj',
    ],
    afterList:
      'We will respond to your inquiry within 30 days.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1
          className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl"
          style={{ color: 'var(--text-primary)' }}
        >
          Privacy Policy
        </h1>
        <p className="mx-auto max-w-2xl text-lg" style={{ color: 'var(--text-secondary)' }}>
          Your privacy matters to us. This policy outlines what data Axion collects, how it is used, and your rights regarding that data.
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
          {section.content && (
            <p className="mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {section.content}
            </p>
          )}
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
