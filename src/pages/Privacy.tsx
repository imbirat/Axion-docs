import LegalLayout from '../components/LegalLayout';

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <>
        <p>
          Axion (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
          information when you use our Discord bot (&ldquo;Axion&rdquo;) and visit our website at
          axionbot.qzz.io.
        </p>
        <p>
          By using Axion, you agree to the collection and use of information in accordance with this
          policy. If you do not agree with the terms of this Privacy Policy, please do not use the
          bot.
        </p>
      </>
    ),
  },
  {
    id: 'data-we-collect',
    title: 'Data We Collect',
    content: (
      <>
        <p>
          We collect only the minimum data necessary to provide and improve our services. Axion
          stores the following information:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-[var(--text-primary)]">Discord User IDs</strong> &mdash; Used to
            identify users for economy balances, leveling progress, warnings, and command
            cooldowns.
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">Server (Guild) IDs</strong> &mdash; Used
            to store per-server configuration, settings, and moderation data.
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">Channel IDs</strong> &mdash; Used to
            remember configured channels for logging, welcome messages, ticket categories, and
            music playback.
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">Command Usage Data</strong> &mdash;
            Aggregate usage statistics to improve functionality and fix bugs. This does not include
            message content.
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">Settings and Configuration Data</strong>
            &mdash; Includes server-specific preferences such as moderation roles, custom prefixes,
            auto-role assignments, and economy settings.
          </li>
        </ul>
        <p>
          We do <strong className="text-[var(--text-primary)]">not</strong> collect message content,
          personal conversations, IP addresses (beyond standard web analytics), or any sensitive
          personal information.
        </p>
      </>
    ),
  },
  {
    id: 'how-data-is-used',
    title: 'How Data Is Used',
    content: (
      <>
        <p>The data we collect is used exclusively for the following purposes:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Providing and maintaining the bot&rsquo;s core functionality</li>
          <li>Persisting server configuration across bot restarts</li>
          <li>Tracking economy balances, levels, and XP progression</li>
          <li>Enforcing moderation actions and warning systems</li>
          <li>Improving the bot based on aggregate usage patterns</li>
          <li>Diagnosing and resolving technical issues</li>
        </ul>
        <p>
          We do <strong className="text-[var(--text-primary)]">not</strong> sell, rent, or share
          your data with third parties for marketing or advertising purposes.
        </p>
      </>
    ),
  },
  {
    id: 'data-storage-and-security',
    title: 'Data Storage and Security',
    content: (
      <>
        <p>
          All data is stored securely on encrypted servers with restricted access. We implement
          industry-standard security measures to protect your information, including:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Encryption at rest and in transit</li>
          <li>Access control and authentication for database operations</li>
          <li>Regular security audits and vulnerability assessments</li>
          <li>Automated backups to prevent data loss</li>
        </ul>
        <p>
          Data is retained for as long as the bot remains in your server. When the bot is removed
          from a server, associated data is scheduled for deletion within 30 days.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-services',
    title: 'Third-Party Services',
    content: (
      <>
        <p>
          Axion integrates with the following third-party services to provide its full feature set:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-[var(--text-primary)]">Discord API</strong> &mdash; For bot
            operations, message handling, and server interactions. Data handling is governed by{' '}
            <a
              href="https://discord.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5865F2] hover:underline"
            >
              Discord&rsquo;s Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">YouTube Data API</strong> &mdash; Used
            exclusively for music playback features. No user data is shared or stored beyond the
            scope of the requested song.
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">Hosting Provider</strong> &mdash; Our
            infrastructure is hosted on secure cloud servers. The provider does not have access to
            the data stored within the database.
          </li>
        </ul>
        <p>
          We are not responsible for the privacy practices of these third-party services. We
          encourage you to review their policies before using integrated features.
        </p>
      </>
    ),
  },
  {
    id: 'data-deletion',
    title: 'Data Deletion Requests',
    content: (
      <>
        <p>
          You have the right to request the deletion of your data at any time. Data deletion can be
          requested through the following methods:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-[var(--text-primary)]">Remove the Bot</strong> &mdash; Kicking or
            removing Axion from your Discord server will trigger automatic deletion of all
            server-associated data within 30 days.
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">Manual Deletion Request</strong> &mdash;
            Contact us directly via our{' '}
            <a
              href="https://discord.gg/axion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5865F2] hover:underline"
            >
              Discord support server
            </a>{' '}
            to request immediate data deletion.
          </li>
        </ul>
        <p>
          We will process deletion requests within 14 days. Please note that some data may be
          retained for legal compliance or fraud prevention purposes as permitted by applicable
          law.
        </p>
      </>
    ),
  },
  {
    id: 'user-rights',
    title: 'User Rights',
    content: (
      <>
        <p>
          Depending on your jurisdiction, you may have the following rights regarding your personal
          data:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-[var(--text-primary)]">Right to Access</strong> &mdash; Request a
            copy of the data we hold about you.
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">Right to Rectification</strong> &mdash;
            Request correction of inaccurate or incomplete data.
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">Right to Deletion</strong> &mdash; Request
            deletion of your data as described above.
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">Right to Restrict Processing</strong>
            &mdash; Request limitation of how your data is processed.
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">Right to Data Portability</strong> &mdash;
            Request transfer of your data to another service provider.
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">Right to Object</strong> &mdash; Object to
            the processing of your data for specific purposes.
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact us through our Discord support server. We
          will respond to your request within 30 days.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact Information',
    content: (
      <>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data
          practices, please reach out to us:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-[var(--text-primary)]">Discord Support Server:</strong>{' '}
            <a
              href="https://discord.gg/axion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5865F2] hover:underline"
            >
              discord.gg/axion
            </a>
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">Email:</strong>{' '}
            <a
              href="mailto:privacy@axionbot.qzz.io"
              className="text-[#5865F2] hover:underline"
            >
              privacy@axionbot.qzz.io
            </a>
          </li>
        </ul>
        <p>
          We will acknowledge receipt of your inquiry within 48 hours and respond within 14
          business days.
        </p>
      </>
    ),
  },
];

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How Axion collects, uses, and protects your data."
      lastUpdated="June 1, 2026"
      sections={sections}
      seo={{
        title: 'Privacy Policy - Axion',
        description:
          'Learn how Axion Discord bot collects, uses, and protects your data. Our privacy policy covers data collection, storage, security, and your rights.',
        path: '/privacy',
      }}
    />
  );
}
