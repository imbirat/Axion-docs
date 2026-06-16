import LegalLayout from '../components/LegalLayout';

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: (
      <>
        <p>
          By inviting, using, or interacting with the Axion Discord bot (&ldquo;Axion,&rdquo;
          &ldquo;the Bot,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) or
          visiting axionbot.qzz.io (&ldquo;the Website&rdquo;), you agree to be bound by these
          Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, you must not
          use the Bot or the Website.
        </p>
        <p>
          These Terms constitute a legally binding agreement between you and the Axion team. We
          reserve the right to update or modify these Terms at any time without prior notice. Your
          continued use of Axion after any changes constitutes acceptance of the new Terms.
        </p>
      </>
    ),
  },
  {
    id: 'eligibility',
    title: 'Eligibility',
    content: (
      <>
        <p>By using Axion, you represent and warrant that:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            You are at least 13 years of age (or the age of digital consent in your country).
          </li>
          <li>
            You have the authority to bind the Discord server (&ldquo;Server&rdquo;) you manage to
            these Terms.
          </li>
          <li>
            Your use of Axion complies with Discord&rsquo;s{' '}
            <a
              href="https://discord.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5865F2] hover:underline"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="https://discord.com/guidelines"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5865F2] hover:underline"
            >
              Community Guidelines
            </a>
            .
          </li>
          <li>You are not located in a jurisdiction where use of Axion is prohibited.</li>
        </ul>
        <p>
          If you are under 13, you are not permitted to use Axion. If you are a parent or guardian
          and discover that your child has been using Axion, please contact us immediately.
        </p>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable Use',
    content: (
      <>
        <p>
          You agree to use Axion in accordance with all applicable laws, regulations, and Discord
          policies. You are responsible for all activity that occurs under your Discord account and
          within the Servers where Axion is present.
        </p>
        <p>When using Axion, you agree to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Use the bot only for its intended purposes as described in the documentation.</li>
          <li>Respect rate limits and avoid excessive API requests.</li>
          <li>Report bugs, exploits, or security vulnerabilities responsibly.</li>
          <li>Use commands and features in a manner that does not disrupt other users.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'prohibited-activities',
    title: 'Prohibited Activities',
    content: (
      <>
        <p>The following activities are strictly prohibited when using Axion:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Using the bot for any illegal activity or to promote illegal activities.
          </li>
          <li>
            Attempting to reverse-engineer, decompile, or extract the bot&rsquo;s source code.
          </li>
          <li>
            Exploiting bugs, glitches, or vulnerabilities for personal gain or to harm others.
          </li>
          <li>
            Using automation or scripting to abuse bot commands beyond normal usage patterns.
          </li>
          <li>
            Interfering with the bot&rsquo;s operation or the experience of other users.
          </li>
          <li>
            Using the bot to harass, threaten, or discriminate against individuals or groups.
          </li>
          <li>
            Attempting to access restricted features or data without authorization.
          </li>
        </ul>
        <p>
          Violation of these prohibitions may result in immediate termination of access to Axion
          and notification to Discord Trust &amp; Safety.
        </p>
      </>
    ),
  },
  {
    id: 'premium-features',
    title: 'Premium Features',
    content: (
      <>
        <p>
          Axion is currently and will remain completely free to use. All features, including those
          commonly offered as premium in other bots, are available at no cost.
        </p>
        <p>
          In the event that premium tiers or paid features are introduced in the future, those
          features will be clearly marked and governed by additional terms. Existing free features
          will not be reduced or removed when premium features are introduced.
        </p>
        <p>
          Any future purchases will be processed through a secure third-party payment processor.
          We do not store or process payment information on our servers.
        </p>
      </>
    ),
  },
  {
    id: 'service-availability',
    title: 'Service Availability',
    content: (
      <>
        <p>
          We strive to maintain 99.9% uptime for Axion, but we do not guarantee uninterrupted
          service. You acknowledge and agree that:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Axion may experience temporary downtime for maintenance, updates, or technical issues.
          </li>
          <li>
            We are not liable for any losses or damages resulting from service unavailability.
          </li>
          <li>
            Features may change, be updated, or be removed as the bot evolves.
          </li>
          <li>
            Data loss may occur in rare circumstances despite our backup protocols.
          </li>
        </ul>
        <p>
          We will use commercially reasonable efforts to provide advance notice of scheduled
          maintenance through our Discord support server.
        </p>
      </>
    ),
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, the Axion team and its contributors
          shall not be liable for any indirect, incidental, special, consequential, or punitive
          damages, including but not limited to:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Loss of profits, data, or goodwill</li>
          <li>Service interruption or data loss</li>
          <li>Damages resulting from use or inability to use the bot</li>
          <li>Unauthorized access to or alteration of your transmissions or data</li>
        </ul>
        <p>
          Our total liability for any claims arising under these Terms shall not exceed the amount
          paid by you (if any) for using Axion during the twelve months preceding the claim.
        </p>
        <p>
          Axion is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of
          any kind, either express or implied.
        </p>
      </>
    ),
  },
  {
    id: 'termination',
    title: 'Termination',
    content: (
      <>
        <p>
          We reserve the right to suspend or terminate access to Axion at our sole discretion,
          without prior notice or liability, for any reason including but not limited to:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Violation of these Terms</li>
          <li>Abuse of the bot or its infrastructure</li>
          <li>Legal or regulatory requirements</li>
          <li>Technical or security concerns</li>
        </ul>
        <p>
          Upon termination, your right to use Axion immediately ceases. Server-specific data will
          be deleted within 30 days of bot removal, subject to our Privacy Policy.
        </p>
        <p>
          You may terminate these Terms at any time by removing Axion from your Discord server and
          ceasing use of the Website.
        </p>
      </>
    ),
  },
  {
    id: 'changes-to-terms',
    title: 'Changes to Terms',
    content: (
      <>
        <p>
          We reserve the right to modify or replace these Terms at any time. Material changes will
          be communicated through:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>A notice in our Discord support server</li>
          <li>An updated &ldquo;Last Updated&rdquo; date at the top of this page</li>
          <li>A notification via the bot itself (for significant changes)</li>
        </ul>
        <p>
          By continuing to access or use Axion after revisions become effective, you agree to be
          bound by the revised Terms. If you do not agree to the new Terms, you must stop using
          Axion.
        </p>
        <p>
          We encourage you to review these Terms periodically for any changes. Significant updates
          will be posted at least 14 days before taking effect.
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
          If you have any questions, concerns, or requests regarding these Terms, please contact us:
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
              href="mailto:legal@axionbot.qzz.io"
              className="text-[#5865F2] hover:underline"
            >
              legal@axionbot.qzz.io
            </a>
          </li>
        </ul>
        <p>
          For pressing legal matters, you may send correspondence to our designated legal contact.
          We aim to respond to all inquiries within 14 business days.
        </p>
      </>
    ),
  },
];

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="Rules, guidelines, and terms for using Axion."
      lastUpdated="June 1, 2026"
      sections={sections}
      seo={{
        title: 'Terms of Service - Axion',
        description:
          'Terms of Service for Axion Discord bot. Understand the rules, eligibility, acceptable use, and limitations of liability when using Axion.',
        path: '/terms',
      }}
    />
  );
}
