import React from 'react';

export interface DocPage {
  slug: string;
  title: string;
  description: string;
  content: React.ReactNode;
  sidebar: string;
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
}

function CodeBlock({ language, code }: { language?: string; code: string }) {
  return (
    <div className="rounded-lg border overflow-hidden my-4" style={{ borderColor: 'var(--border)', backgroundColor: '#161b22' }}>
      <div className="flex items-center justify-between px-4 py-2 border-b" style={{ borderColor: 'var(--border)' }}>
        <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{language || 'bash'}</span>
        <button className="text-xs" style={{ color: 'var(--text-muted)' }}>Copy</button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono" style={{ color: 'var(--code-text)' }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function InlineCode({ code }: { code: string }) {
  return (
    <code className="px-1.5 py-0.5 rounded text-sm font-mono" style={{ backgroundColor: 'var(--code-bg)', color: 'var(--code-text)' }}>
      {code}
    </code>
  );
}

function Badge({ type, children }: { type: 'permission' | 'cooldown'; children: React.ReactNode }) {
  const styles = {
    permission: {
      backgroundColor: 'rgba(234, 179, 8, 0.1)',
      color: '#eab308',
      border: '1px solid rgba(234, 179, 8, 0.2)',
    },
    cooldown: {
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      color: '#60a5fa',
      border: '1px solid rgba(59, 130, 246, 0.2)',
    },
  };
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium"
      style={styles[type]}
    >
      {children}
    </span>
  );
}

function CommandTable({ usage, permission, cooldown, options, notes }: { usage: string; permission: string; cooldown: string; options?: { name: string; description: string; required?: boolean }[]; notes?: string[] }) {
  return (
    <>
      <div className="overflow-x-auto rounded-lg border" style={{ borderColor: 'var(--border)' }}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ backgroundColor: 'var(--bg-tertiary)' }}>
              <th className="px-4 py-2 text-left font-medium" style={{ color: 'var(--text-primary)' }}>Field</th>
              <th className="px-4 py-2 text-left font-medium" style={{ color: 'var(--text-primary)' }}>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t" style={{ borderColor: 'var(--border)' }}>
              <td className="px-4 py-2" style={{ color: 'var(--text-secondary)' }}>Usage</td>
              <td className="px-4 py-2 font-mono text-sm" style={{ color: 'var(--code-text)' }}>{usage}</td>
            </tr>
            <tr className="border-t" style={{ borderColor: 'var(--border)' }}>
              <td className="px-4 py-2" style={{ color: 'var(--text-secondary)' }}>Permission</td>
              <td className="px-4 py-2"><Badge type="permission">{permission}</Badge></td>
            </tr>
            <tr className="border-t" style={{ borderColor: 'var(--border)' }}>
              <td className="px-4 py-2" style={{ color: 'var(--text-secondary)' }}>Cooldown</td>
              <td className="px-4 py-2"><Badge type="cooldown">{cooldown}</Badge></td>
            </tr>
          </tbody>
        </table>
      </div>
      {options && options.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Options</h4>
          <ul className="space-y-1.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
            {options.map((opt, i) => (
              <li key={i}>
                <span className="font-mono text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: 'var(--code-bg)', color: 'var(--code-text)' }}>{opt.name}</span>
                {' — '}{opt.description}{opt.required ? ' (Required)' : ' (Optional)'}
              </li>
            ))}
          </ul>
        </div>
      )}
      {notes && notes.length > 0 && (
        <div className="mt-4 p-3 rounded-lg text-sm" style={{ backgroundColor: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.2)', color: 'var(--text-secondary)' }}>
          <p className="font-medium mb-1" style={{ color: '#eab308' }}>Notes</p>
          <ul className="list-disc pl-4 space-y-1">
            {notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

function H1({ children }: { children: React.ReactNode }) {
  return <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{children}</h1>;
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold mt-8 mb-3" style={{ color: 'var(--text-primary)' }}>{children}</h2>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: 'var(--text-primary)' }}>{children}</h3>;
}

function P({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={`mb-4 leading-relaxed${className ? ` ${className}` : ''}`} style={{ color: 'var(--text-secondary)' }}>{children}</p>;
}

function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="mb-4 space-y-2 ml-5 list-disc" style={{ color: 'var(--text-secondary)' }}>{children}</ul>;
}

function Ol({ children }: { children: React.ReactNode }) {
  return <ol className="mb-4 space-y-2 ml-5 list-decimal" style={{ color: 'var(--text-secondary)' }}>{children}</ol>;
}

function Li({ children }: { children: React.ReactNode }) {
  return <li className="leading-relaxed">{children}</li>;
}

function Section({ children }: { children: React.ReactNode }) {
  return <div className="mb-8">{children}</div>;
}

function SectionDivider() {
  return <hr className="my-6 border-0" style={{ borderTop: '1px solid var(--border)' }} />;
}

export const docPages: DocPage[] = [
  {
    slug: 'introduction',
    title: 'Introduction',
    description: 'Learn what Axion is and how it can transform your Discord server.',
    sidebar: 'Getting Started',
    next: { slug: 'quick-setup', title: 'Quick Setup' },
    content: (
      <div>
        <H1>Introduction</H1>
        <P>
          Axion is a free, all-in-one Discord bot designed to bring powerful moderation,
          engaging community features, and advanced utilities to your server. Built with
          performance and ease of use in mind, Axion offers over 200 commands across 15+
          modules — all completely free, forever.
        </P>

        <H2>Features Overview</H2>
        <Ul>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Moderation &amp; Anti-Nuke</strong> — Keep your server safe with advanced moderation tools, anti-nuke protection, and auto-moderation.</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Leveling &amp; Economy</strong> — Boost engagement with XP, leaderboards, currency, and fun economy commands.</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Ticket System</strong> — Handle support requests seamlessly with a fully customizable ticket system.</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Verification</strong> — Protect your server with CAPTCHA, reaction, and button verification modes.</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Giveaways</strong> — Run exciting giveaways and boost server activity with ease.</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Reaction &amp; Button Roles</strong> — Let members self-assign roles using reactions or buttons.</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>AI Commands</strong> — Powered by Gemini AI for intelligent chat, image generation, and translation.</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Anime &amp; Fun</strong> — Entertainment with memes, anime, 8ball, matchmaking, and more.</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Advanced Features</strong> — Sticky messages, auto-roles, custom commands, starboard, counting game, and more.</Li>
        </Ul>

        <H2>Quick Start</H2>
        <P>Getting started with Axion takes just a few minutes. Invite the bot to your server and run:</P>
        <CodeBlock code="/help" />
        <P>Set up your server with one command:</P>
        <CodeBlock code="/setup" />
        <P>Check if the bot is responsive:</P>
        <CodeBlock code="/ping" />

        <P>
          Axion is designed to work right out of the box with sensible defaults.
          Customize every aspect of the bot using the dedicated configuration commands
          found in the sections below.
        </P>
      </div>
    ),
  },
  {
    slug: 'quick-setup',
    title: 'Quick Setup',
    description: 'Get Axion up and running in your Discord server in minutes.',
    sidebar: 'Getting Started',
    prev: { slug: 'introduction', title: 'Introduction' },
    next: { slug: 'moderation', title: 'Moderation' },
    content: (
      <div>
        <H1>Quick Setup</H1>
        <P>
          Follow these simple steps to get Axion fully operational in your Discord server.
          Most features work immediately after setup, but we recommend configuring the
          core modules for the best experience.
        </P>

        <H2>Step-by-Step Guide</H2>
        <Ol>
          <Li>
            <strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Invite Axion to your server</strong><br />
            Click the <strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Add</strong> button on our website or use{' '}
            <a href="https://discord.com/oauth2/authorize?client_id=1502623528476737627&permissions=6282225540967030&integration_type=0&scope=bot" className="underline" style={{ color: 'var(--accent)' }}>this invite link</a>.
            Make sure you have the <strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Administrator</strong> permission to invite the bot.
          </Li>
          <Li>
            <strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Grant necessary permissions</strong><br />
            Axion requires certain permissions to function properly. During the invite flow,
            ensure all requested permissions are granted.
          </Li>
          <Li>
            <strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Set your custom prefix</strong><br />
            Change the default prefix to something your community will remember:
            <CodeBlock code="/setprefix ?" />
          </Li>
          <Li>
            <strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Set up logging channels</strong><br />
            Designate channels for moderation logs, welcome messages, and more:
            <CodeBlock code="/setchannel modlogs #mod-logs" />
            <CodeBlock code="/setchannel welcome #welcome" />
          </Li>
          <Li>
            <strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Enable protection modules</strong><br />
            Run these commands to secure your server against raids and spam:
            <CodeBlock code="/antinuke enable" />
            <CodeBlock code="/automod enable" />
          </Li>
        </Ol>

        <H2>Supported Languages</H2>
        <P>
          Axion supports multiple languages out of the box. You can change the language any time using:
        </P>
        <CodeBlock code="/setlanguage en" />
        <Ul>
          <Li><InlineCode code="en" /> — English</Li>
          <Li><InlineCode code="es" /> — Spanish</Li>
          <Li><InlineCode code="fr" /> — French</Li>
          <Li><InlineCode code="de" /> — German</Li>
          <Li><InlineCode code="pt" /> — Portuguese</Li>
          <Li><InlineCode code="hi" /> — Hindi</Li>
          <Li><InlineCode code="zh" /> — Chinese</Li>
          <Li><InlineCode code="ja" /> — Japanese</Li>
          <Li><InlineCode code="ko" /> — Korean</Li>
          <Li><InlineCode code="ru" /> — Russian</Li>
          <Li><InlineCode code="ar" /> — Arabic</Li>
          <Li><InlineCode code="tr" /> — Turkish</Li>
          <Li><InlineCode code="it" /> — Italian</Li>
          <Li><InlineCode code="nl" /> — Dutch</Li>
          <Li><InlineCode code="pl" /> — Polish</Li>
          <Li><InlineCode code="sv" /> — Swedish</Li>
        </Ul>
      </div>
    ),
  },
  {
    slug: 'moderation',
    title: 'Moderation',
    description: 'Keep your server safe with Axion\'s powerful moderation commands.',
    sidebar: 'Moderation',
    prev: { slug: 'quick-setup', title: 'Quick Setup' },
    next: { slug: 'antinuke', title: 'Anti-Nuke' },
    content: (
      <div>
        <H1>Moderation</H1>
        <P>
          Axion provides a complete suite of moderation tools to help you manage your
          server effectively. Every command is designed with safety in mind and includes
          detailed audit logging.
        </P>

        <Section>
          <H2>/ban — Ban a Member</H2>
          <P>Permanently remove a member from your server. Banned members cannot rejoin unless unbanned.</P>
          <CommandTable
            usage="/ban &lt;user&gt; [reason] [deleteMessages]"
            permission="Ban Members"
            cooldown="5s"
            options={[
              { name: 'user', description: 'The member to ban', required: true },
              { name: 'reason', description: 'Reason for the ban' },
              { name: 'deleteMessages', description: 'Delete recent messages (None, 1h, 6h, 24h)' },
            ]}
            notes={[
              'Banned users are added to the server\'s ban list and cannot rejoin.',
              'Use /unban to reverse a ban.',
              'Set deleteMessages to remove evidence of spam or harassment.',
            ]}
          />
        </Section>

        <Section>
          <H2>/kick — Kick a Member</H2>
          <P>Remove a member from your server. Unlike bans, kicked members can rejoin with a new invite.</P>
          <CommandTable
            usage="/kick &lt;user&gt; [reason]"
            permission="Kick Members"
            cooldown="5s"
            options={[
              { name: 'user', description: 'The member to kick', required: true },
              { name: 'reason', description: 'Reason for the kick' },
            ]}
          />
        </Section>

        <Section>
          <H2>/warn — Warn a Member</H2>
          <P>Issue a warning to a member. Warnings accumulate and can trigger automatic actions at configured thresholds.</P>
          <CommandTable
            usage="/warn &lt;user&gt; &lt;reason&gt;"
            permission="Moderate Members"
            cooldown="3s"
            options={[
              { name: 'user', description: 'The member to warn', required: true },
              { name: 'reason', description: 'Reason for the warning', required: true },
            ]}
            notes={[
              'Warnings are stored permanently and can be viewed with /warnings.',
              'Configure auto-action thresholds in the dashboard.',
            ]}
          />
        </Section>

        <Section>
          <H2>/mute — Mute a Member</H2>
          <P>Prevent a member from sending messages in all channels. The member can still read messages and join voice channels.</P>
          <CommandTable
            usage="/mute &lt;user&gt; [duration] [reason]"
            permission="Moderate Members"
            cooldown="5s"
            options={[
              { name: 'user', description: 'The member to mute', required: true },
              { name: 'duration', description: 'Mute duration (e.g. 10m, 1h, 1d)' },
              { name: 'reason', description: 'Reason for the mute' },
            ]}
            notes={[
              'If no duration is specified, the mute is permanent until manually unmuted.',
              'Muted members can still see channels but cannot send messages.',
            ]}
          />
        </Section>

        <Section>
          <H2>/unmute — Unmute a Member</H2>
          <P>Remove a mute from a member, restoring their ability to send messages.</P>
          <CommandTable
            usage="/unmute &lt;user&gt;"
            permission="Moderate Members"
            cooldown="3s"
            options={[
              { name: 'user', description: 'The member to unmute', required: true },
            ]}
          />
        </Section>

        <Section>
          <H2>/lock — Lock a Channel</H2>
          <P>Prevent all members from sending messages in a specific channel. Useful during raids or heated discussions.</P>
          <CommandTable
            usage="/lock [channel] [reason]"
            permission="Manage Channels"
            cooldown="5s"
            options={[
              { name: 'channel', description: 'The channel to lock (defaults to current channel)' },
              { name: 'reason', description: 'Reason for locking the channel' },
            ]}
            notes={[
              'Only members with Manage Channels permission can bypass the lock.',
              'Use /unlock to restore access.',
            ]}
          />
        </Section>

        <Section>
          <H2>/unlock — Unlock a Channel</H2>
          <P>Restore sending permissions in a previously locked channel.</P>
          <CommandTable
            usage="/unlock [channel]"
            permission="Manage Channels"
            cooldown="3s"
            options={[
              { name: 'channel', description: 'The channel to unlock (defaults to current channel)' },
            ]}
          />
        </Section>

        <Section>
          <H2>/jail — Jail a Member</H2>
          <P>Restrict a member to a single channel (jail channel) where they can only see and interact within that channel.</P>
          <CommandTable
            usage="/jail &lt;user&gt; [reason]"
            permission="Moderate Members"
            cooldown="5s"
            options={[
              { name: 'user', description: 'The member to jail', required: true },
              { name: 'reason', description: 'Reason for jailing' },
            ]}
            notes={[
              'A jail channel must be set up first using /setchannel jail.',
              'Jailed members lose access to all other channels.',
            ]}
          />
        </Section>

        <Section>
          <H2>/unjail — Unjail a Member</H2>
          <P>Release a member from jail and restore their channel access.</P>
          <CommandTable
            usage="/unjail &lt;user&gt;"
            permission="Moderate Members"
            cooldown="3s"
            options={[
              { name: 'user', description: 'The member to unjail', required: true },
            ]}
          />
        </Section>

        <Section>
          <H2>/nickname — Change Nickname</H2>
          <P>Change a member's server nickname. Useful for enforcing naming conventions.</P>
          <CommandTable
            usage="/nickname &lt;user&gt; &lt;nickname&gt;"
            permission="Manage Nicknames"
            cooldown="3s"
            options={[
              { name: 'user', description: 'The member to rename', required: true },
              { name: 'nickname', description: 'The new nickname', required: true },
            ]}
          />
        </Section>

        <Section>
          <H2>/slowmode — Set Slowmode</H2>
          <P>Set a slowmode delay for a channel to control the rate of messages.</P>
          <CommandTable
            usage="/slowmode &lt;duration&gt; [channel]"
            permission="Manage Channels"
            cooldown="5s"
            options={[
              { name: 'duration', description: 'Slowmode duration (0s to 6h)', required: true },
              { name: 'channel', description: 'The target channel (defaults to current channel)' },
            ]}
            notes={[
              'Set duration to 0 to disable slowmode.',
              'Slowmode applies to all members except those with Manage Channels permission.',
            ]}
          />
        </Section>

        <Section>
          <H2>/clear — Clear Messages</H2>
          <P>Bulk delete messages in a channel. Useful for cleaning up spam or resetting conversation history.</P>
          <CommandTable
            usage="/clear &lt;amount&gt; [user]"
            permission="Manage Messages"
            cooldown="10s"
            options={[
              { name: 'amount', description: 'Number of messages to delete (1-1000)', required: true },
              { name: 'user', description: 'Only delete messages from a specific member' },
            ]}
            notes={[
              'Messages older than 14 days cannot be bulk deleted due to Discord API limitations.',
              'Bot will never delete messages older than 14 days.',
            ]}
          />
        </Section>
      </div>
    ),
  },
  {
    slug: 'antinuke',
    title: 'Anti-Nuke',
    description: 'Protect your server from raids, mass bans, and destructive actions.',
    sidebar: 'Anti-Nuke',
    prev: { slug: 'moderation', title: 'Moderation' },
    next: undefined,
    content: (
      <div>
        <H1>Anti-Nuke</H1>
        <P>
          Axion's Anti-Nuke system is your server's first line of defense against malicious
          actors. It monitors destructive actions in real-time and automatically punishes
          users who exceed configured thresholds.
        </P>

        <H2>Protection List</H2>
        <P>The Anti-Nuke module protects against the following actions:</P>
        <Ul>
          <Li>Mass channel creation / deletion</Li>
          <Li>Mass role creation / deletion</Li>
          <Li>Mass ban / kick actions</Li>
          <Li>Webhook creation</Li>
          <Li>Bot additions</Li>
          <Li>Server settings changes</Li>
          <Li>Permission overwrites</Li>
        </Ul>

        <H2>Commands</H2>

        <Section>
          <H3>/antinuke enable</H3>
          <P>Enable the Anti-Nuke protection system with default or custom thresholds.</P>
          <CommandTable
            usage="/antinuke enable [punishment] [threshold]"
            permission="Administrator"
            cooldown="10s"
            options={[
              { name: 'punishment', description: 'Punishment for violators (kick, ban, warn)' },
              { name: 'threshold', description: 'Number of allowed actions before punishment' },
            ]}
          />
        </Section>

        <Section>
          <H3>/antinuke disable</H3>
          <P>Disable the Anti-Nuke protection system.</P>
          <CommandTable
            usage="/antinuke disable"
            permission="Administrator"
            cooldown="10s"
          />
        </Section>

        <Section>
          <H3>/antinuke config</H3>
          <P>View and adjust the current Anti-Nuke configuration and thresholds.</P>
          <CommandTable
            usage="/antinuke config [option] [value]"
            permission="Administrator"
            cooldown="5s"
          />
        </Section>
      </div>
    ),
  },
  {
    slug: 'automod',
    title: 'Auto-Mod',
    description: 'Automatically detect and filter unwanted content in your server.',
    sidebar: 'Auto-Mod',
    prev: undefined,
    next: undefined,
    content: (
      <div>
        <H1>Auto-Mod</H1>
        <P>
          Axion's Auto-Mod system automatically detects and filters unwanted content,
          keeping your server clean and safe without manual intervention. It uses advanced
          pattern matching and machine learning to identify rule violations.
        </P>

        <H2>What Auto-Mod Detects</H2>
        <Ul>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Spam</strong> — Repeated messages, mass mentions, and message duplication</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Links</strong> — Blacklisted URLs, invite links, and suspicious domains</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Bad Words</strong> — Profanity, slurs, and custom blacklisted words</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Caps Lock</strong> — Excessive capitalization in messages</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Attachments</strong> — Suspicious file types and malware scanning</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Mention Spam</strong> — Mass mentions and role pings</Li>
        </Ul>

        <H2>Commands</H2>

        <Section>
          <H3>/automod enable</H3>
          <P>Enable Auto-Mod with configurable filters and actions.</P>
          <CommandTable
            usage="/automod enable [filter] [action]"
            permission="Administrator"
            cooldown="10s"
            options={[
              { name: 'filter', description: 'The filter to enable (spam, links, words, caps, mentions)' },
              { name: 'action', description: 'Action to take (mute, warn, delete, kick)' },
            ]}
            notes={[
              'If no filter is specified, all filters are enabled.',
              'Actions can be customized per filter type.',
            ]}
          />
        </Section>

        <Section>
          <H3>/automod disable</H3>
          <P>Disable Auto-Mod or a specific filter.</P>
          <CommandTable
            usage="/automod disable [filter]"
            permission="Administrator"
            cooldown="10s"
            options={[
              { name: 'filter', description: 'The filter to disable (defaults to all)' },
            ]}
          />
        </Section>

        <Section>
          <H3>/automod config</H3>
          <P>View or modify Auto-Mod settings and thresholds.</P>
          <CommandTable
            usage="/automod config [setting] [value]"
            permission="Administrator"
            cooldown="5s"
            options={[
              { name: 'setting', description: 'The setting to configure' },
              { name: 'value', description: 'The new value for the setting' },
            ]}
          />
        </Section>
      </div>
    ),
  },
  {
    slug: 'logging',
    title: 'Logging',
    description: 'Keep track of all server activities with detailed logging.',
    sidebar: 'Logging',
    prev: undefined,
    next: undefined,
    content: (
      <div>
        <H1>Logging</H1>
        <P>
          Axion's logging system keeps a detailed record of all important events in your
          server. Every action — from message edits to member joins — is logged in real-time
          to designated channels.
        </P>

        <H2>Events Logged</H2>
        <Ul>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Moderation Actions</strong> — Bans, kicks, mutes, warns, and timeouts</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Message Events</strong> — Edits and deletions with message content history</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Member Events</strong> — Joins, leaves, nicknames, and role changes</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Channel Events</strong> — Creation, deletion, and permission updates</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Role Events</strong> — Creation, deletion, and permission modifications</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Voice Events</strong> — Join, leave, and channel moves</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Server Events</strong> — Server updates, boosts, and vanities</Li>
        </Ul>

        <H2>Setup</H2>
        <P>To start logging, designate channels for your log types:</P>
        <CodeBlock code="/setchannel modlogs #mod-logs" />
        <CodeBlock code="/setchannel serverlogs #server-logs" />
        <CodeBlock code="/setchannel messagelogs #message-logs" />

        <H2>Commands</H2>

        <Section>
          <H3>/logging enable</H3>
          <P>Enable logging for specific event types.</P>
          <CommandTable
            usage="/logging enable &lt;type&gt;"
            permission="Administrator"
            cooldown="10s"
            options={[
              { name: 'type', description: 'Log type (all, moderation, messages, members, channels, roles, voice, server)', required: true },
            ]}
          />
        </Section>

        <Section>
          <H3>/logging disable</H3>
          <P>Disable logging for specific event types.</P>
          <CommandTable
            usage="/logging disable [type]"
            permission="Administrator"
            cooldown="10s"
            options={[
              { name: 'type', description: 'Log type to disable (defaults to all)' },
            ]}
          />
        </Section>
      </div>
    ),
  },
  {
    slug: 'leveling',
    title: 'Leveling & XP',
    description: 'Boost engagement with XP, levels, and leaderboards.',
    sidebar: 'Leveling',
    prev: undefined,
    next: undefined,
    content: (
      <div>
        <H1>Leveling &amp; XP</H1>
        <P>
          Axion's leveling system rewards active members with XP and levels. As members
          chat and participate, they earn experience points that unlock new levels and
          rewards.
        </P>

        <H2>How XP Works</H2>
        <Ul>
          <Li>Members earn XP by sending messages in text channels</Li>
          <Li>XP is awarded once per minute to prevent spam farming</Li>
          <Li>Longer messages earn slightly more XP</Li>
          <Li>Levels are calculated using a progressive formula — higher levels require more XP</Li>
          <Li>Configure custom role rewards for reaching specific levels</Li>
        </Ul>

        <H2>Commands</H2>

        <Section>
          <H3>/profile xp</H3>
          <P>View your or another member's XP stats and level progress.</P>
          <CommandTable
            usage="/profile xp [user]"
            permission="None"
            cooldown="3s"
            options={[
              { name: 'user', description: 'The member to check (defaults to yourself)' },
            ]}
          />
        </Section>

        <Section>
          <H3>/leaderboard xp</H3>
          <P>View the server's XP leaderboard.</P>
          <CommandTable
            usage="/leaderboard xp"
            permission="None"
            cooldown="10s"
          />
        </Section>

        <Section>
          <H3>/addxp</H3>
          <P>Add XP to a member (administrative command).</P>
          <CommandTable
            usage="/addxp &lt;user&gt; &lt;amount&gt;"
            permission="Administrator"
            cooldown="5s"
            options={[
              { name: 'user', description: 'The member to give XP to', required: true },
              { name: 'amount', description: 'Amount of XP to add', required: true },
            ]}
          />
        </Section>

        <Section>
          <H3>/removexp</H3>
          <P>Remove XP from a member (administrative command).</P>
          <CommandTable
            usage="/removexp &lt;user&gt; &lt;amount&gt;"
            permission="Administrator"
            cooldown="5s"
            options={[
              { name: 'user', description: 'The member to remove XP from', required: true },
              { name: 'amount', description: 'Amount of XP to remove', required: true },
            ]}
          />
        </Section>
      </div>
    ),
  },
  {
    slug: 'economy',
    title: 'Economy System',
    description: 'A full-featured economy system with currency, jobs, and gambling.',
    sidebar: 'Economy',
    prev: undefined,
    next: undefined,
    content: (
      <div>
        <H1>Economy System</H1>
        <P>
          Axion's economy system brings a fully-featured virtual economy to your server.
          Members can earn coins, build wealth, and compete on the leaderboard.
        </P>

        <Section>
          <H2>/profile economy</H2>
          <P>View your or another member's economy profile including balance and stats.</P>
          <CommandTable
            usage="/profile economy [user]"
            permission="None"
            cooldown="3s"
            options={[
              { name: 'user', description: 'The member to check (defaults to yourself)' },
            ]}
          />
        </Section>

        <Section>
          <H2>/leaderboard economy</H2>
          <P>View the server's economy leaderboard showing the wealthiest members.</P>
          <CommandTable
            usage="/leaderboard economy"
            permission="None"
            cooldown="10s"
          />
        </Section>

        <Section>
          <H2>/daily</H2>
          <P>Claim your daily reward. The streak bonus increases each consecutive day.</P>
          <CommandTable
            usage="/daily"
            permission="None"
            cooldown="24h"
            notes={[
              'The reward amount increases with your streak.',
              'Missing a day resets your streak to zero.',
            ]}
          />
        </Section>

        <Section>
          <H2>/work</H2>
          <P>Work a job to earn coins. Different jobs have varying payouts.</P>
          <CommandTable
            usage="/work [job]"
            permission="None"
            cooldown="1h"
            options={[
              { name: 'job', description: 'The job to work (programmer, doctor, teacher, etc.)' },
            ]}
          />
        </Section>

        <Section>
          <H2>/fish</H2>
          <P>Go fishing to catch fish and earn coins. Rare fish are worth more.</P>
          <CommandTable
            usage="/fish"
            permission="None"
            cooldown="30m"
            notes={[
              'Different fish have different rarities and values.',
              'Sell your catch automatically for coins.',
            ]}
          />
        </Section>

        <Section>
          <H2>/rob</H2>
          <P>Attempt to rob another member. Success is not guaranteed and failure has consequences.</P>
          <CommandTable
            usage="/rob &lt;user&gt;"
            permission="None"
            cooldown="1h"
            options={[
              { name: 'user', description: 'The member to rob', required: true },
            ]}
            notes={[
              'Success rate depends on your level and the target\'s level.',
              'Getting caught results in a fine.',
            ]}
          />
        </Section>

        <Section>
          <H2>/deposit</H2>
          <P>Deposit coins into your bank for safe keeping. Banked coins cannot be stolen.</P>
          <CommandTable
            usage="/deposit &lt;amount&gt;"
            permission="None"
            cooldown="3s"
            options={[
              { name: 'amount', description: 'Amount to deposit (or "all")', required: true },
            ]}
          />
        </Section>

        <Section>
          <H2>/bank</H2>
          <P>Check your bank balance and withdrawal options.</P>
          <CommandTable
            usage="/bank [action] [amount]"
            permission="None"
            cooldown="3s"
            options={[
              { name: 'action', description: 'Action to take (balance, withdraw)' },
              { name: 'amount', description: 'Amount to withdraw' },
            ]}
          />
        </Section>

        <Section>
          <H2>/give</H2>
          <P>Give coins to another member as a gift or payment.</P>
          <CommandTable
            usage="/give &lt;user&gt; &lt;amount&gt;"
            permission="None"
            cooldown="10s"
            options={[
              { name: 'user', description: 'The member to give coins to', required: true },
              { name: 'amount', description: 'Amount of coins to give', required: true },
            ]}
          />
        </Section>

        <Section>
          <H2>/coinflip</H2>
          <P>Bet coins on a coin flip. Double your money or lose it all.</P>
          <CommandTable
            usage="/coinflip &lt;bet&gt; [side]"
            permission="None"
            cooldown="5s"
            options={[
              { name: 'bet', description: 'Amount of coins to bet', required: true },
              { name: 'side', description: 'Heads or tails (defaults to random)' },
            ]}
          />
        </Section>
      </div>
    ),
  },
  {
    slug: 'tickets',
    title: 'Ticket System',
    description: 'Handle support requests with a customizable ticket system.',
    sidebar: 'Ticket System',
    prev: undefined,
    next: undefined,
    content: (
      <div>
        <H1>Ticket System</H1>
        <P>
          Axion's ticket system provides a professional way to handle support requests,
          applications, and inquiries. Members can open tickets, and staff can manage them
          with a full suite of tools.
        </P>

        <H2>Setup</H2>
        <P>To set up the ticket system, first configure the ticket panel:</P>
        <CodeBlock code="/setchannel tickets #tickets" />
        <CodeBlock code="/ticketsetup" />
        <P>
          After running <InlineCode code="/ticketsetup" />, a ticket panel will be created
          in the designated channel where members can open tickets by clicking a button.
        </P>

        <H2>Commands</H2>

        <Section>
          <H3>/ticketsetup</H3>
          <P>Configure and create the ticket panel with customizable options.</P>
          <CommandTable
            usage="/ticketsetup [category] [supportRole] [title] [description]"
            permission="Administrator"
            cooldown="30s"
            options={[
              { name: 'category', description: 'Category where ticket channels will be created' },
              { name: 'supportRole', description: 'Role that can see and manage tickets' },
              { name: 'title', description: 'Title of the ticket panel embed' },
              { name: 'description', description: 'Description of the ticket panel embed' },
            ]}
          />
        </Section>

        <Section>
          <H3>/ticket close</H3>
          <P>Close a ticket. The channel is archived or deleted after closure.</P>
          <CommandTable
            usage="/ticket close [reason]"
            permission="Manage Tickets"
            cooldown="5s"
            options={[
              { name: 'reason', description: 'Reason for closing the ticket' },
            ]}
          />
        </Section>

        <Section>
          <H3>/ticket claim</H3>
          <P>Claim a ticket to indicate you are handling it. Other staff members will see the claim.</P>
          <CommandTable
            usage="/ticket claim"
            permission="Manage Tickets"
            cooldown="3s"
          />
        </Section>

        <Section>
          <H3>/ticket add</H3>
          <P>Add a member to the ticket so they can view and participate in the conversation.</P>
          <CommandTable
            usage="/ticket add &lt;user&gt;"
            permission="Manage Tickets"
            cooldown="3s"
            options={[
              { name: 'user', description: 'The member to add', required: true },
            ]}
          />
        </Section>

        <Section>
          <H3>/ticket rename</H3>
          <P>Rename the ticket channel for better organization.</P>
          <CommandTable
            usage="/ticket rename &lt;name&gt;"
            permission="Manage Tickets"
            cooldown="5s"
            options={[
              { name: 'name', description: 'New name for the ticket channel', required: true },
            ]}
          />
        </Section>

        <Section>
          <H3>/ticket transcript</H3>
          <P>Generate and save a transcript of the ticket conversation.</P>
          <CommandTable
            usage="/ticket transcript"
            permission="Manage Tickets"
            cooldown="10s"
          />
        </Section>

        <Section>
          <H3>/ticket reopen</H3>
          <P>Reopen a previously closed ticket.</P>
          <CommandTable
            usage="/ticket reopen"
            permission="Manage Tickets"
            cooldown="10s"
            notes={[
              'Only tickets that were closed can be reopened.',
              'A new channel is created for the reopened ticket.',
            ]}
          />
        </Section>

        <Section>
          <H3>/ticket stats</H3>
          <P>View ticket system statistics including total tickets, open tickets, and resolution times.</P>
          <CommandTable
            usage="/ticket stats"
            permission="Manage Tickets"
            cooldown="10s"
          />
        </Section>

        <Section>
          <H3>/ticket blacklist</H3>
          <P>Blacklist a member from opening tickets.</P>
          <CommandTable
            usage="/ticket blacklist &lt;user&gt; [reason]"
            permission="Administrator"
            cooldown="5s"
            options={[
              { name: 'user', description: 'The member to blacklist', required: true },
              { name: 'reason', description: 'Reason for blacklisting' },
            ]}
          />
        </Section>

        <Section>
          <H3>/ticket unblacklist</H3>
          <P>Remove a member from the ticket blacklist.</P>
          <CommandTable
            usage="/ticket unblacklist &lt;user&gt;"
            permission="Administrator"
            cooldown="5s"
            options={[
              { name: 'user', description: 'The member to unblacklist', required: true },
            ]}
          />
        </Section>
      </div>
    ),
  },
  {
    slug: 'verification',
    title: 'Verification',
    description: 'Verify members before granting them access to your server.',
    sidebar: 'Verification',
    prev: undefined,
    next: undefined,
    content: (
      <div>
        <H1>Verification</H1>
        <P>
          Axion's verification system helps protect your server from bots and unwanted
          members by requiring users to verify their identity before gaining full access.
        </P>

        <H2>Verification Modes</H2>
        <Ul>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>CAPTCHA</strong> — Members solve a CAPTCHA challenge to verify</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Reaction</strong> — Members click a reaction button to verify</Li>
          <Li><strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Button</strong> — Members click a button to verify</Li>
        </Ul>

        <Section>
          <H3>/verifysetup</H3>
          <P>Configure and enable the verification system for your server.</P>
          <CommandTable
            usage="/verifysetup &lt;channel&gt; &lt;role&gt; [mode]"
            permission="Administrator"
            cooldown="30s"
            options={[
              { name: 'channel', description: 'Channel where verification happens', required: true },
              { name: 'role', description: 'Role to assign after verification', required: true },
              { name: 'mode', description: 'Verification mode (captcha, reaction, button)' },
            ]}
          />
        </Section>

        <Section>
          <H3>/verify</H3>
          <P>Start the verification process for yourself.</P>
          <CommandTable
            usage="/verify"
            permission="None"
            cooldown="30s"
          />
        </Section>

        <Section>
          <H3>/unverify</H3>
          <P>Remove verified status from a member (staff only).</P>
          <CommandTable
            usage="/unverify &lt;user&gt;"
            permission="Manage Roles"
            cooldown="5s"
            options={[
              { name: 'user', description: 'The member to unverify', required: true },
            ]}
          />
        </Section>

        <Section>
          <H3>/verifymode</H3>
          <P>Change the verification mode without re-running the full setup.</P>
          <CommandTable
            usage="/verifymode &lt;mode&gt;"
            permission="Administrator"
            cooldown="10s"
            options={[
              { name: 'mode', description: 'Verification mode (captcha, reaction, button)', required: true },
            ]}
          />
        </Section>

        <Section>
          <H3>/verifyrole</H3>
          <P>Set or change the role assigned after successful verification.</P>
          <CommandTable
            usage="/verifyrole &lt;role&gt;"
            permission="Administrator"
            cooldown="10s"
            options={[
              { name: 'role', description: 'Role to assign after verification', required: true },
            ]}
          />
        </Section>
      </div>
    ),
  },
  {
    slug: 'giveaway',
    title: 'Giveaway System',
    description: 'Run exciting giveaways to boost server activity.',
    sidebar: 'Giveaway',
    prev: undefined,
    next: undefined,
    content: (
      <div>
        <H1>Giveaway System</H1>
        <P>
          Axion's giveaway system makes it easy to run engaging giveaways that boost
          server activity and reward your community members.
        </P>

        <Section>
          <H3>/giveaway start</H3>
          <P>Start a new giveaway with a prize, duration, and winner count.</P>
          <CommandTable
            usage="/giveaway start &lt;prize&gt; &lt;duration&gt; [winners] [channel]"
            permission="Manage Server"
            cooldown="30s"
            options={[
              { name: 'prize', description: 'The prize to give away', required: true },
              { name: 'duration', description: 'Duration (e.g. 1h, 2d, 7d)', required: true },
              { name: 'winners', description: 'Number of winners (default: 1)' },
              { name: 'channel', description: 'Channel for the giveaway (defaults to current)' },
            ]}
            notes={[
              'Members click the "Enter" button to join the giveaway.',
              'Winners are randomly selected when the giveaway ends.',
            ]}
          />
        </Section>

        <Section>
          <H3>/giveaway end</H3>
          <P>End a giveaway early and immediately pick winners.</P>
          <CommandTable
            usage="/giveaway end &lt;messageId&gt;"
            permission="Manage Server"
            cooldown="10s"
            options={[
              { name: 'messageId', description: 'The ID of the giveaway message', required: true },
            ]}
          />
        </Section>

        <Section>
          <H3>/giveaway reroll</H3>
          <P>Reroll a giveaway to pick new winners.</P>
          <CommandTable
            usage="/giveaway reroll &lt;messageId&gt; [winners]"
            permission="Manage Server"
            cooldown="10s"
            options={[
              { name: 'messageId', description: 'The ID of the giveaway message', required: true },
              { name: 'winners', description: 'Number of new winners to pick' },
            ]}
          />
        </Section>
      </div>
    ),
  },
  {
    slug: 'reaction-roles',
    title: 'Reaction Roles',
    description: 'Let members self-assign roles using reactions or buttons.',
    sidebar: 'Reaction Roles',
    prev: undefined,
    next: undefined,
    content: (
      <div>
        <H1>Reaction Roles</H1>
        <P>
          Axion's reaction and button role systems allow members to self-assign roles
          with a single click. This is perfect for notification roles, game roles, and
          any other opt-in role system.
        </P>

        <Section>
          <H3>/reactionrole create</H3>
          <P>Create a reaction role panel where members click emoji reactions to get roles.</P>
          <CommandTable
            usage="/reactionrole create &lt;channel&gt; &lt;title&gt; &lt;emoji:role&gt;..."
            permission="Manage Roles"
            cooldown="30s"
            options={[
              { name: 'channel', description: 'Channel for the reaction role message', required: true },
              { name: 'title', description: 'Title of the embed message', required: true },
              { name: 'emoji:role', description: 'Pairs of emoji and role name separated by spaces', required: true },
            ]}
            notes={[
              'You can add multiple emoji:role pairs in one command.',
              'Users can click multiple reactions to get multiple roles.',
            ]}
          />
        </Section>

        <Section>
          <H3>/buttonrole create</H3>
          <P>Create a button role panel where members click styled buttons to get roles.</P>
          <CommandTable
            usage="/buttonrole create &lt;channel&gt; &lt;title&gt; &lt;label:role&gt;..."
            permission="Manage Roles"
            cooldown="30s"
            options={[
              { name: 'channel', description: 'Channel for the button role message', required: true },
              { name: 'title', description: 'Title of the embed message', required: true },
              { name: 'label:role', description: 'Pairs of button label and role name', required: true },
            ]}
            notes={[
              'Buttons are color-coded: primary for single-role, green for toggle.',
              'You can customize button styles in the dashboard.',
            ]}
          />
        </Section>
      </div>
    ),
  },
  {
    slug: 'analytics',
    title: 'Analytics',
    description: 'Track server growth, activity, and engagement metrics.',
    sidebar: 'Analytics',
    prev: undefined,
    next: undefined,
    content: (
      <div>
        <H1>Analytics</H1>
        <P>
          Axion's analytics module provides detailed insights into your server's growth,
          activity levels, and member engagement. Make data-driven decisions with
          comprehensive server statistics.
        </P>

        <Section>
          <H3>/serverstats</H3>
          <P>View real-time server statistics including member count, online users, and channel distribution.</P>
          <CommandTable
            usage="/serverstats"
            permission="None"
            cooldown="10s"
          />
        </Section>

        <Section>
          <H3>/invites</H3>
          <P>Track invite usage. See who invited the most members and how each invite link performs.</P>
          <CommandTable
            usage="/invites [user]"
            permission="None"
            cooldown="10s"
            options={[
              { name: 'user', description: 'Check invites for a specific member' },
            ]}
            notes={[
              'Tracks all invite links created in the server.',
              'Shows vanity invite stats if linked.',
            ]}
          />
        </Section>

        <Section>
          <H3>/activity</H3>
          <P>View server activity metrics including peak hours, most active channels, and daily message counts.</P>
          <CommandTable
            usage="/activity [period]"
            permission="None"
            cooldown="10s"
            options={[
              { name: 'period', description: 'Time period (today, week, month, all)' },
            ]}
          />
        </Section>

        <Section>
          <H3>/serveranalytics</H3>
          <P>Comprehensive server analytics with charts and trends over time.</P>
          <CommandTable
            usage="/serveranalytics"
            permission="Manage Server"
            cooldown="30s"
            notes={[
              'Shows growth trends, engagement rates, and retention metrics.',
              'Data is displayed in interactive chart format.',
            ]}
          />
        </Section>
      </div>
    ),
  },
  {
    slug: 'ai-commands',
    title: 'AI Commands',
    description: 'Harness the power of Gemini AI for chat, images, and translation.',
    sidebar: 'AI Commands',
    prev: undefined,
    next: undefined,
    content: (
      <div>
        <H1>AI Commands</H1>
        <P>
          Axion's AI module is powered by <strong className="font-medium" style={{ color: 'var(--text-primary)' }}>Gemini AI</strong>,
          bringing state-of-the-art artificial intelligence directly to your Discord server.
          From intelligent conversations to image generation, the AI module elevates your
          server experience.
        </P>

        <Section>
          <H3>/ask</H3>
          <P>Ask any question to the Gemini AI and get intelligent, contextual responses.</P>
          <CommandTable
            usage="/ask &lt;question&gt;"
            permission="None"
            cooldown="5s"
            options={[
              { name: 'question', description: 'Your question or prompt for the AI', required: true },
            ]}
            notes={[
              'Supports follow-up questions within the same channel.',
              'AI remembers context from recent messages in the chat.',
            ]}
          />
        </Section>

        <Section>
          <H3>/createimage</H3>
          <P>Generate images using AI based on a text description.</P>
          <CommandTable
            usage="/createimage &lt;prompt&gt; [style] [size]"
            permission="None"
            cooldown="30s"
            options={[
              { name: 'prompt', description: 'Description of the image to generate', required: true },
              { name: 'style', description: 'Art style (realistic, anime, oil painting, etc.)' },
              { name: 'size', description: 'Image size (256x256, 512x512, 1024x1024)' },
            ]}
          />
        </Section>

        <Section>
          <H3>/summarize</H3>
          <P>Summarize long messages or conversation threads into concise bullet points.</P>
          <CommandTable
            usage="/summarize [messages] [length]"
            permission="None"
            cooldown="10s"
            options={[
              { name: 'messages', description: 'Number of recent messages to summarize (default: 50)' },
              { name: 'length', description: 'Summary length (short, medium, long)' },
            ]}
          />
        </Section>

        <Section>
          <H3>/translate</H3>
          <P>Translate text between any of the supported languages instantly.</P>
          <CommandTable
            usage="/translate &lt;text&gt; &lt;language&gt;"
            permission="None"
            cooldown="5s"
            options={[
              { name: 'text', description: 'The text to translate', required: true },
              { name: 'language', description: 'Target language (e.g. es, fr, ja)', required: true },
            ]}
          />
          <P className="mt-3">Supported languages:</P>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
            {['English', 'Spanish', 'French', 'German', 'Portuguese', 'Italian', 'Dutch', 'Russian', 'Japanese', 'Korean', 'Chinese', 'Arabic', 'Turkish', 'Hindi', 'Bengali', 'Vietnamese', 'Thai', 'Polish', 'Swedish', 'Greek', 'Czech', 'Romanian', 'Hungarian', 'Ukrainian'].map((lang) => (
              <span key={lang} className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--bg-tertiary)' }}>{lang}</span>
            ))}
          </div>
        </Section>
      </div>
    ),
  },
  {
    slug: 'fun',
    title: 'Fun Commands',
    description: 'Entertainment commands including memes, 8ball, and number guessing.',
    sidebar: 'Fun & Social',
    prev: undefined,
    next: undefined,
    content: (
      <div>
        <H1>Fun Commands</H1>
        <P>
          Axion comes packed with fun commands to entertain your community. From memes
          to magic 8ball, there is always something to do.
        </P>

        <Section>
          <H3>/meme</H3>
          <P>Fetch a random meme from the internet and share it in the channel.</P>
          <CommandTable
            usage="/meme [subreddit]"
            permission="None"
            cooldown="5s"
            options={[
              { name: 'subreddit', description: 'Specific subreddit to fetch memes from' },
            ]}
          />
        </Section>

        <Section>
          <H3>/8ball</H3>
          <P>Ask the magic 8ball a question and receive a mysterious answer.</P>
          <CommandTable
            usage="/8ball &lt;question&gt;"
            permission="None"
            cooldown="3s"
            options={[
              { name: 'question', description: 'Your question for the 8ball', required: true },
            ]}
          />
        </Section>

        <Section>
          <H3>/guessnumber</H3>
          <P>Guess a random number within a range and try to win.</P>
          <CommandTable
            usage="/guessnumber &lt;min&gt; &lt;max&gt;"
            permission="None"
            cooldown="10s"
            options={[
              { name: 'min', description: 'Minimum number in the range', required: true },
              { name: 'max', description: 'Maximum number in the range', required: true },
            ]}
            notes={[
              'The bot picks a random number in the given range.',
              'You get hints (higher/lower) after each guess.',
            ]}
          />
        </Section>
      </div>
    ),
  },
  {
    slug: 'social',
    title: 'Social Commands',
    description: 'Engage your community with confessions, truth or dare, and matchmaking.',
    sidebar: 'Fun & Social',
    prev: undefined,
    next: undefined,
    content: (
      <div>
        <H1>Social Commands</H1>
        <P>
          Social commands help build community interaction and engagement. From anonymous
          confessions to daily icebreakers, these commands bring members together.
        </P>

        <Section>
          <H3>/confess</H3>
          <P>Send an anonymous confession that will be posted in the configured confession channel.</P>
          <CommandTable
            usage="/confess &lt;message&gt;"
            permission="None"
            cooldown="1h"
            options={[
              { name: 'message', description: 'Your anonymous confession', required: true },
            ]}
            notes={[
              'Confessions are completely anonymous.',
              'Harassment or abusive confessions should be reported to staff.',
            ]}
          />
        </Section>

        <Section>
          <H3>/truth</H3>
          <P>Get a random "truth" question for a game of Truth or Dare.</P>
          <CommandTable
            usage="/truth"
            permission="None"
            cooldown="5s"
          />
        </Section>

        <Section>
          <H3>/dare</H3>
          <P>Get a random "dare" challenge for a game of Truth or Dare.</P>
          <CommandTable
            usage="/dare"
            permission="None"
            cooldown="5s"
          />
        </Section>

        <Section>
          <H3>/matchmaking</H3>
          <P>Find your compatibility with another member.</P>
          <CommandTable
            usage="/matchmaking &lt;user1&gt; [user2]"
            permission="None"
            cooldown="10s"
            options={[
              { name: 'user1', description: 'First member', required: true },
              { name: 'user2', description: 'Second member (defaults to you)' },
            ]}
          />
        </Section>

        <Section>
          <H3>/dailyquestion</H3>
          <P>Get a daily discussion question to spark conversation in your server.</P>
          <CommandTable
            usage="/dailyquestion"
            permission="None"
            cooldown="1h"
          />
        </Section>
      </div>
    ),
  },
  {
    slug: 'anime',
    title: 'Anime Commands',
    description: 'Explore anime, manga, characters, and get recommendations.',
    sidebar: 'Anime',
    prev: undefined,
    next: undefined,
    content: (
      <div>
        <H1>Anime Commands</H1>
        <P>
          Axion's anime module brings the world of anime and manga to your Discord server.
          Search for series, discover characters, get recommendations, and enjoy anime quotes.
        </P>

        <Section>
          <H3>/anime</H3>
          <P>Search for detailed information about any anime series.</P>
          <CommandTable
            usage="/anime &lt;name&gt;"
            permission="None"
            cooldown="5s"
            options={[
              { name: 'name', description: 'Name of the anime to search for', required: true },
            ]}
          />
        </Section>

        <Section>
          <H3>/manga</H3>
          <P>Search for manga series with details including chapters, score, and synopsis.</P>
          <CommandTable
            usage="/manga &lt;name&gt;"
            permission="None"
            cooldown="5s"
            options={[
              { name: 'name', description: 'Name of the manga to search for', required: true },
            ]}
          />
        </Section>

        <Section>
          <H3>/character</H3>
          <P>Search for anime or manga characters and view their details.</P>
          <CommandTable
            usage="/character &lt;name&gt;"
            permission="None"
            cooldown="5s"
            options={[
              { name: 'name', description: 'Name of the character to search for', required: true },
            ]}
          />
        </Section>

        <Section>
          <H3>/animequote</H3>
          <P>Get a random inspirational or memorable quote from an anime character.</P>
          <CommandTable
            usage="/animequote"
            permission="None"
            cooldown="3s"
          />
        </Section>

        <Section>
          <H3>/animerandom</H3>
          <P>Discover a random anime or manga recommendation.</P>
          <CommandTable
            usage="/animerandom [type]"
            permission="None"
            cooldown="5s"
            options={[
              { name: 'type', description: 'Type (anime, manga, or both)' },
            ]}
          />
        </Section>

        <Section>
          <H3>/waifu</H3>
          <P>Get a random waifu image or rate your waifu.</P>
          <CommandTable
            usage="/waifu [action]"
            permission="None"
            cooldown="5s"
            options={[
              { name: 'action', description: 'Action (random, rate, top)' },
            ]}
          />
        </Section>

        <Section>
          <H3>/movierecommend</H3>
          <P>Get personalized anime movie recommendations.</P>
          <CommandTable
            usage="/movierecommend [genre]"
            permission="None"
            cooldown="10s"
            options={[
              { name: 'genre', description: 'Preferred genre (action, romance, fantasy, etc.)' },
            ]}
          />
        </Section>
      </div>
    ),
  },
  {
    slug: 'utilities',
    title: 'Utility Commands',
    description: 'Essential utility commands for everyday server management.',
    sidebar: 'Utilities',
    prev: undefined,
    next: undefined,
    content: (
      <div>
        <H1>Utility Commands</H1>
        <P>
          Axion's utility commands provide essential tools for both members and staff.
          From server information to message management, these commands make daily
          server operations effortless.
        </P>

        <Section>
          <H3>/help</H3>
          <P>Display a comprehensive help menu with all available commands and modules.</P>
          <CommandTable
            usage="/help [command]"
            permission="None"
            cooldown="3s"
            options={[
              { name: 'command', description: 'Get help for a specific command' },
            ]}
          />
        </Section>

        <Section>
          <H3>/ping</H3>
          <P>Check the bot's response time and API latency.</P>
          <CommandTable
            usage="/ping"
            permission="None"
            cooldown="3s"
          />
        </Section>

        <Section>
          <H3>/botinfo</H3>
          <P>View detailed information about the bot including version, uptime, and stats.</P>
          <CommandTable
            usage="/botinfo"
            permission="None"
            cooldown="5s"
          />
        </Section>

        <Section>
          <H3>/serverinfo</H3>
          <P>View detailed information about the server including owner, creation date, member stats, and channels.</P>
          <CommandTable
            usage="/serverinfo"
            permission="None"
            cooldown="5s"
          />
        </Section>

        <Section>
          <H3>/userinfo</H3>
          <P>View detailed information about a member including join date, roles, and permissions.</P>
          <CommandTable
            usage="/userinfo [user]"
            permission="None"
            cooldown="3s"
            options={[
              { name: 'user', description: 'The member to check (defaults to yourself)' },
            ]}
          />
        </Section>

        <Section>
          <H3>/avatar</H3>
          <P>View a member's avatar in full size.</P>
          <CommandTable
            usage="/avatar [user]"
            permission="None"
            cooldown="3s"
            options={[
              { name: 'user', description: 'The member whose avatar to view (defaults to yourself)' },
            ]}
          />
        </Section>

        <Section>
          <H3>/banner</H3>
          <P>View a member's profile banner in full size.</P>
          <CommandTable
            usage="/banner [user]"
            permission="None"
            cooldown="3s"
            options={[
              { name: 'user', description: 'The member whose banner to view' },
            ]}
          />
        </Section>

        <Section>
          <H3>/afk</H3>
          <P>Set an AFK status. When mentioned, the bot will notify others that you are away.</P>
          <CommandTable
            usage="/afk [reason]"
            permission="None"
            cooldown="10s"
            options={[
              { name: 'reason', description: 'Reason for being AFK' },
            ]}
            notes={[
              'AFK status is automatically removed when you send a message.',
            ]}
          />
        </Section>

        <Section>
          <H3>/membercount</H3>
          <P>Display the current member count of the server.</P>
          <CommandTable
            usage="/membercount"
            permission="None"
            cooldown="5s"
          />
        </Section>

        <Section>
          <H3>/snipe</H3>
          <P>Retrieve the last deleted or edited message in a channel.</P>
          <CommandTable
            usage="/snipe [channel]"
            permission="Manage Messages"
            cooldown="5s"
            options={[
              { name: 'channel', description: 'Channel to snipe (defaults to current)' },
            ]}
            notes={[
              'Only the last 5 deleted/edited messages are cached per channel.',
              'Messages are cleared after bot restart.',
            ]}
          />
        </Section>

        <Section>
          <H3>/reminder</H3>
          <P>Set a personal reminder that the bot will send you after a specified duration.</P>
          <CommandTable
            usage="/reminder &lt;duration&gt; &lt;message&gt;"
            permission="None"
            cooldown="10s"
            options={[
              { name: 'duration', description: 'When to remind you (e.g. 10m, 1h, tomorrow)', required: true },
              { name: 'message', description: 'The reminder message', required: true },
            ]}
          />
        </Section>

        <Section>
          <H3>/poll</H3>
          <P>Create a quick poll with multiple options for members to vote on.</P>
          <CommandTable
            usage="/poll &lt;question&gt; &lt;option1&gt; &lt;option2&gt; [options...]"
            permission="Manage Messages"
            cooldown="10s"
            options={[
              { name: 'question', description: 'The poll question', required: true },
              { name: 'option1', description: 'First option', required: true },
              { name: 'option2', description: 'Second option', required: true },
              { name: 'options', description: 'Additional options (up to 8 total)' },
            ]}
          />
        </Section>

        <Section>
          <H3>/giverole</H3>
          <P>Add a role to a member.</P>
          <CommandTable
            usage="/giverole &lt;user&gt; &lt;role&gt;"
            permission="Manage Roles"
            cooldown="5s"
            options={[
              { name: 'user', description: 'The member to give the role to', required: true },
              { name: 'role', description: 'The role to assign', required: true },
            ]}
          />
        </Section>

        <Section>
          <H3>/roleall</H3>
          <P>Add or remove a role from all members in the server.</P>
          <CommandTable
            usage="/roleall &lt;role&gt; [action]"
            permission="Administrator"
            cooldown="60s"
            options={[
              { name: 'role', description: 'The role to assign/remove', required: true },
              { name: 'action', description: 'Action (add or remove, defaults to add)' },
            ]}
            notes={[
              'This command operates in the background to avoid rate limits.',
              'Use caution — this affects every member in the server.',
            ]}
          />
        </Section>
      </div>
    ),
  },
  {
    slug: 'config',
    title: 'Server Config',
    description: 'Configure and customize every aspect of Axion for your server.',
    sidebar: 'Config',
    prev: undefined,
    next: undefined,
    content: (
      <div>
        <H1>Server Config</H1>
        <P>
          Axion offers extensive configuration options to tailor the bot to your server's
          needs. Use these commands to set up prefixes, channels, custom messages, and more.
        </P>

        <Section>
          <H3>/setprefix</H3>
          <P>Change the bot's command prefix for your server.</P>
          <CommandTable
            usage="/setprefix &lt;prefix&gt;"
            permission="Administrator"
            cooldown="10s"
            options={[
              { name: 'prefix', description: 'New command prefix (e.g. !, ?, $)', required: true },
            ]}
            notes={[
              'The default prefix is "/".',
              'You can set a prefix up to 3 characters long.',
            ]}
          />
        </Section>

        <Section>
          <H3>/setchannel</H3>
          <P>Designate specific channels for various bot features.</P>
          <CommandTable
            usage="/setchannel &lt;type&gt; &lt;channel&gt;"
            permission="Administrator"
            cooldown="10s"
            options={[
              { name: 'type', description: 'Channel type (welcome, modlogs, tickets, jail, etc.)', required: true },
              { name: 'channel', description: 'The channel to set', required: true },
            ]}
          />
        </Section>

        <Section>
          <H3>/setcustommessage</H3>
          <P>Set custom welcome, farewell, or boost messages with placeholders.</P>
          <CommandTable
            usage="/setcustommessage &lt;type&gt; &lt;message&gt;"
            permission="Administrator"
            cooldown="10s"
            options={[
              { name: 'type', description: 'Message type (welcome, farewell, boost)', required: true },
              { name: 'message', description: 'Custom message with placeholders ({user}, {server})', required: true },
            ]}
          />
        </Section>

        <Section>
          <H3>/setlanguage</H3>
          <P>Change the bot's language for your server.</P>
          <CommandTable
            usage="/setlanguage &lt;code&gt;"
            permission="Administrator"
            cooldown="10s"
            options={[
              { name: 'code', description: 'Language code (en, es, fr, de, etc.)', required: true },
            ]}
          />
        </Section>

        <Section>
          <H3>/setaichannel</H3>
          <P>Designate a channel where the AI chat feature is active.</P>
          <CommandTable
            usage="/setaichannel &lt;channel&gt; [mode]"
            permission="Administrator"
            cooldown="10s"
            options={[
              { name: 'channel', description: 'Channel for AI chat', required: true },
              { name: 'mode', description: 'AI mode (chat, image, both)' },
            ]}
          />
        </Section>
      </div>
    ),
  },
  {
    slug: 'birthday',
    title: 'Birthday System',
    description: 'Celebrate member birthdays with automated greetings and announcements.',
    sidebar: 'Birthday',
    prev: undefined,
    next: undefined,
    content: (
      <div>
        <H1>Birthday System</H1>
        <P>
          Axion's birthday system helps you celebrate your community members' special day.
          Members can set their birthdays, and the bot will automatically post birthday
          greetings in the configured channel.
        </P>

        <Section>
          <H3>/birthday set</H3>
          <P>Set your birthday date. The bot will remember it and greet you on your special day.</P>
          <CommandTable
            usage="/birthday set &lt;date&gt;"
            permission="None"
            cooldown="1h"
            options={[
              { name: 'date', description: 'Your birthday (e.g. 2000-01-15 or January 15)', required: true },
            ]}
            notes={[
              'Only the month and day are stored for privacy.',
              'You can update your birthday anytime.',
            ]}
          />
        </Section>

        <Section>
          <H3>/birthday check</H3>
          <P>Check when a member's birthday is.</P>
          <CommandTable
            usage="/birthday check [user]"
            permission="None"
            cooldown="5s"
            options={[
              { name: 'user', description: 'The member to check (defaults to yourself)' },
            ]}
          />
        </Section>

        <Section>
          <H3>/birthday list</H3>
          <P>View a list of all upcoming birthdays in the server.</P>
          <CommandTable
            usage="/birthday list"
            permission="None"
            cooldown="10s"
          />
        </Section>
      </div>
    ),
  },
  {
    slug: 'advanced-features',
    title: 'Advanced Features',
    description: 'Advanced tools including quotes, sticky messages, auto-roles, and more.',
    sidebar: 'Advanced Features',
    prev: undefined,
    next: undefined,
    content: (
      <div>
        <H1>Advanced Features</H1>
        <P>
          Axion includes a suite of advanced features for servers that want more control
          and customization. From auto-roles to custom commands, these tools help you
          create a unique experience for your community.
        </P>

        <Section>
          <H2>Quotes</H2>
          <P>Save and recall memorable messages from your server members.</P>

          <H3>/quote add</H3>
          <CommandTable
            usage="/quote add &lt;messageId&gt; [channel]"
            permission="Manage Messages"
            cooldown="5s"
            options={[
              { name: 'messageId', description: 'ID of the message to quote', required: true },
              { name: 'channel', description: 'Channel where the message is (defaults to current)' },
            ]}
          />

          <H3>/quote random</H3>
          <CommandTable
            usage="/quote random"
            permission="None"
            cooldown="3s"
          />

          <H3>/quote list</H3>
          <CommandTable
            usage="/quote list [user]"
            permission="None"
            cooldown="5s"
            options={[
              { name: 'user', description: 'Filter quotes by a specific member' },
            ]}
          />
        </Section>

        <SectionDivider />

        <Section>
          <H2>Sticky Messages</H2>
          <P>Pin a message to the bottom of a channel that stays there even after new messages are sent.</P>

          <H3>/sticky set</H3>
          <CommandTable
            usage="/sticky set &lt;message&gt; [channel]"
            permission="Manage Messages"
            cooldown="10s"
            options={[
              { name: 'message', description: 'The message to stick to the channel', required: true },
              { name: 'channel', description: 'Channel for the sticky message (defaults to current)' },
            ]}
          />

          <H3>/sticky remove</H3>
          <CommandTable
            usage="/sticky remove [channel]"
            permission="Manage Messages"
            cooldown="5s"
            options={[
              { name: 'channel', description: 'Channel to remove sticky from (defaults to current)' },
            ]}
          />
        </Section>

        <SectionDivider />

        <Section>
          <H2>Advanced Polls</H2>
          <P>Create sophisticated polls with multiple options, timers, and anonymous voting.</P>

          <H3>/advancedpoll create</H3>
          <CommandTable
            usage="/advancedpoll create &lt;question&gt; &lt;options...&gt; [duration] [anonymous]"
            permission="Manage Messages"
            cooldown="15s"
            options={[
              { name: 'question', description: 'The poll question', required: true },
              { name: 'options', description: 'Poll options (2-10)', required: true },
              { name: 'duration', description: 'Poll duration (e.g. 1h, 1d)' },
              { name: 'anonymous', description: 'Hide voter identities (true/false)' },
            ]}
          />

          <H3>/advancedpoll end</H3>
          <CommandTable
            usage="/advancedpoll end &lt;messageId&gt;"
            permission="Manage Messages"
            cooldown="5s"
            options={[
              { name: 'messageId', description: 'ID of the poll message', required: true },
            ]}
          />

          <H3>/advancedpoll results</H3>
          <CommandTable
            usage="/advancedpoll results &lt;messageId&gt;"
            permission="None"
            cooldown="5s"
            options={[
              { name: 'messageId', description: 'ID of the poll message', required: true },
            ]}
          />
        </Section>

        <SectionDivider />

        <Section>
          <H2>Auto-Roles</H2>
          <P>Automatically assign roles to members when they join the server or reach certain milestones.</P>

          <H3>/autorole add</H3>
          <CommandTable
            usage="/autorole add &lt;role&gt; [type]"
            permission="Administrator"
            cooldown="10s"
            options={[
              { name: 'role', description: 'Role to auto-assign', required: true },
              { name: 'type', description: 'Trigger (join, level, boost)' },
            ]}
          />

          <H3>/autorole remove</H3>
          <CommandTable
            usage="/autorole remove &lt;role&gt;"
            permission="Administrator"
            cooldown="10s"
            options={[
              { name: 'role', description: 'Role to remove from auto-assign', required: true },
            ]}
          />

          <H3>/autorole list</H3>
          <CommandTable
            usage="/autorole list"
            permission="None"
            cooldown="5s"
          />
        </Section>

        <SectionDivider />

        <Section>
          <H2>Starboard</H2>
          <P>Highlight the best messages in your server by letting members "star" them.</P>

          <H3>/starboard setup</H3>
          <CommandTable
            usage="/starboard setup &lt;channel&gt; [count]"
            permission="Administrator"
            cooldown="30s"
            options={[
              { name: 'channel', description: 'Channel where starred messages appear', required: true },
              { name: 'count', description: 'Stars required to appear (default: 3)' },
            ]}
          />

          <H3>/starboard config</H3>
          <CommandTable
            usage="/starboard config [option] [value]"
            permission="Administrator"
            cooldown="10s"
          />

          <H3>/starboard emoji</H3>
          <CommandTable
            usage="/starboard emoji &lt;emoji&gt;"
            permission="Administrator"
            cooldown="10s"
            options={[
              { name: 'emoji', description: 'Custom emoji to use for starring', required: true },
            ]}
          />

          <H3>/starboard disable</H3>
          <CommandTable
            usage="/starboard disable"
            permission="Administrator"
            cooldown="10s"
          />
        </Section>

        <SectionDivider />

        <Section>
          <H2>Custom Commands</H2>
          <P>Create your own custom commands with responses that the bot will reply with.</P>

          <H3>/customcmd add</H3>
          <CommandTable
            usage="/customcmd add &lt;name&gt; &lt;response&gt;"
            permission="Administrator"
            cooldown="10s"
            options={[
              { name: 'name', description: 'Command name (without prefix)', required: true },
              { name: 'response', description: 'What the bot should reply', required: true },
            ]}
          />

          <H3>/customcmd edit</H3>
          <CommandTable
            usage="/customcmd edit &lt;name&gt; &lt;response&gt;"
            permission="Administrator"
            cooldown="10s"
            options={[
              { name: 'name', description: 'Command name to edit', required: true },
              { name: 'response', description: 'New response text', required: true },
            ]}
          />

          <H3>/customcmd remove</H3>
          <CommandTable
            usage="/customcmd remove &lt;name&gt;"
            permission="Administrator"
            cooldown="10s"
            options={[
              { name: 'name', description: 'Command name to remove', required: true },
            ]}
          />

          <H3>/customcmd list</H3>
          <CommandTable
            usage="/customcmd list"
            permission="None"
            cooldown="5s"
          />
        </Section>

        <SectionDivider />

        <Section>
          <H2>Temp Voice Channels</H2>
          <P>Let members create temporary voice channels that are automatically cleaned up when empty.</P>

          <H3>/tempvc setup</H3>
          <CommandTable
            usage="/tempvc setup &lt;channel&gt;"
            permission="Administrator"
            cooldown="30s"
            options={[
              { name: 'channel', description: 'The voice channel to use as the creation point', required: true },
            ]}
          />

          <H3>/tempvc name</H3>
          <CommandTable
            usage="/tempvc name &lt;name&gt;"
            permission="None"
            cooldown="10s"
            options={[
              { name: 'name', description: 'New name for your temp voice channel', required: true },
            ]}
          />

          <H3>/tempvc limit</H3>
          <CommandTable
            usage="/tempvc limit &lt;limit&gt;"
            permission="None"
            cooldown="10s"
            options={[
              { name: 'limit', description: 'User limit (0 for unlimited)', required: true },
            ]}
          />

          <H3>/tempvc disable</H3>
          <CommandTable
            usage="/tempvc disable"
            permission="Administrator"
            cooldown="10s"
          />
        </Section>

        <SectionDivider />

        <Section>
          <H2>Counting Game</H2>
          <P>A fun counting game for your server. Members take turns counting up in a designated channel.</P>

          <H3>/counting setup</H3>
          <CommandTable
            usage="/counting setup &lt;channel&gt; [start]"
            permission="Administrator"
            cooldown="30s"
            options={[
              { name: 'channel', description: 'Channel for the counting game', required: true },
              { name: 'start', description: 'Starting number (default: 1)' },
            ]}
          />

          <H3>/counting disable</H3>
          <CommandTable
            usage="/counting disable"
            permission="Administrator"
            cooldown="10s"
          />
        </Section>

        <SectionDivider />

        <Section>
          <H2>Bump Reminder</H2>
          <P>Never forget to bump your server on server listing sites.</P>

          <H3>/bumper setup</H3>
          <CommandTable
            usage="/bumper setup &lt;channel&gt; [role]"
            permission="Administrator"
            cooldown="30s"
            options={[
              { name: 'channel', description: 'Channel for bump reminders', required: true },
              { name: 'role', description: 'Role to ping when bump is ready' },
            ]}
          />

          <H3>/bumper status</H3>
          <CommandTable
            usage="/bumper status"
            permission="None"
            cooldown="10s"
          />
        </Section>

        <SectionDivider />

        <Section>
          <H2>Reports</H2>
          <P>Allow members to report rule violations to staff in a structured way.</P>

          <H3>/reportsetup</H3>
          <CommandTable
            usage="/reportsetup &lt;channel&gt; [anonymous]"
            permission="Administrator"
            cooldown="30s"
            options={[
              { name: 'channel', description: 'Channel where reports are sent', required: true },
              { name: 'anonymous', description: 'Hide reporter identity (true/false)' },
            ]}
          />

          <H3>/report</H3>
          <CommandTable
            usage="/report &lt;user&gt; &lt;reason&gt; [evidence]"
            permission="None"
            cooldown="1h"
            options={[
              { name: 'user', description: 'The member being reported', required: true },
              { name: 'reason', description: 'Reason for the report', required: true },
              { name: 'evidence', description: 'Attachment or message link as evidence' },
            ]}
          />

          <H3>/reports view</H3>
          <CommandTable
            usage="/reports view [status]"
            permission="Manage Messages"
            cooldown="10s"
            options={[
              { name: 'status', description: 'Filter by status (open, resolved, all)' },
            ]}
          />
        </Section>

        <SectionDivider />

        <Section>
          <H2>Scheduler</H2>
          <P>Schedule commands, messages, and events to run at specific times.</P>

          <H3>/schedule create</H3>
          <CommandTable
            usage="/schedule create &lt;time&gt; &lt;action&gt; [channel]"
            permission="Administrator"
            cooldown="15s"
            options={[
              { name: 'time', description: 'When to run (e.g. 2024-12-25 12:00)', required: true },
              { name: 'action', description: 'Action or message to execute', required: true },
              { name: 'channel', description: 'Channel for the action (defaults to current)' },
            ]}
          />

          <H3>/schedule list</H3>
          <CommandTable
            usage="/schedule list"
            permission="None"
            cooldown="10s"
          />

          <H3>/schedule cancel</H3>
          <CommandTable
            usage="/schedule cancel &lt;id&gt;"
            permission="Administrator"
            cooldown="5s"
            options={[
              { name: 'id', description: 'ID of the scheduled event', required: true },
            ]}
          />
        </Section>

        <SectionDivider />

        <Section>
          <H2>Server Stats Channels</H2>
          <P>Create auto-updating voice channels that display server statistics.</P>

          <H3>/serverstats setup</H3>
          <CommandTable
            usage="/serverstats setup &lt;stat&gt; &lt;category&gt; [name]"
            permission="Administrator"
            cooldown="30s"
            options={[
              { name: 'stat', description: 'Statistic to display (members, bots, online, channels, roles, all)', required: true },
              { name: 'category', description: 'Category where the stat channel will be created', required: true },
              { name: 'name', description: 'Custom name template (use {count} placeholder)' },
            ]}
          />

          <H3>/serverstats add</H3>
          <CommandTable
            usage="/serverstats add &lt;stat&gt; &lt;category&gt;"
            permission="Administrator"
            cooldown="30s"
          />

          <H3>/serverstats remove</H3>
          <CommandTable
            usage="/serverstats remove [stat]"
            permission="Administrator"
            cooldown="10s"
          />

          <H3>/serverstats disable</H3>
          <CommandTable
            usage="/serverstats disable"
            permission="Administrator"
            cooldown="10s"
          />
        </Section>

        <SectionDivider />

        <Section>
          <H2>Notifications</H2>
          <P>Configure notification preferences and opt-in for various server notifications.</P>

          <H3>/notification</H3>
          <CommandTable
            usage="/notification &lt;type&gt; [action]"
            permission="None"
            cooldown="5s"
            options={[
              { name: 'type', description: 'Notification type (giveaway, events, announcements, all)', required: true },
              { name: 'action', description: 'Subscribe or unsubscribe (defaults: subscribe)' },
            ]}
          />
        </Section>
      </div>
    ),
  },
];

export interface SidebarGroup {
  title: string;
  items: { slug: string; title: string }[];
}

export const sidebarGroups: SidebarGroup[] = [
  {
    title: 'Getting Started',
    items: [
      { slug: 'introduction', title: 'Introduction' },
      { slug: 'quick-setup', title: 'Quick Setup' },
    ],
  },
  {
    title: 'Moderation',
    items: [
      { slug: 'moderation', title: 'Moderation' },
    ],
  },
  {
    title: 'Anti-Nuke',
    items: [
      { slug: 'antinuke', title: 'Anti-Nuke' },
    ],
  },
  {
    title: 'Auto-Mod',
    items: [
      { slug: 'automod', title: 'Auto-Mod' },
    ],
  },
  {
    title: 'Logging',
    items: [
      { slug: 'logging', title: 'Logging' },
    ],
  },
  {
    title: 'Leveling',
    items: [
      { slug: 'leveling', title: 'Leveling & XP' },
    ],
  },
  {
    title: 'Economy',
    items: [
      { slug: 'economy', title: 'Economy System' },
    ],
  },
  {
    title: 'Ticket System',
    items: [
      { slug: 'tickets', title: 'Ticket System' },
    ],
  },
  {
    title: 'Verification',
    items: [
      { slug: 'verification', title: 'Verification' },
    ],
  },
  {
    title: 'Giveaway',
    items: [
      { slug: 'giveaway', title: 'Giveaway System' },
    ],
  },
  {
    title: 'Reaction Roles',
    items: [
      { slug: 'reaction-roles', title: 'Reaction Roles' },
    ],
  },
  {
    title: 'Analytics',
    items: [
      { slug: 'analytics', title: 'Analytics' },
    ],
  },
  {
    title: 'AI Commands',
    items: [
      { slug: 'ai-commands', title: 'AI Commands' },
    ],
  },
  {
    title: 'Fun & Social',
    items: [
      { slug: 'fun', title: 'Fun Commands' },
      { slug: 'social', title: 'Social Commands' },
    ],
  },
  {
    title: 'Anime',
    items: [
      { slug: 'anime', title: 'Anime Commands' },
    ],
  },
  {
    title: 'Utilities',
    items: [
      { slug: 'utilities', title: 'Utility Commands' },
    ],
  },
  {
    title: 'Config',
    items: [
      { slug: 'config', title: 'Server Config' },
    ],
  },
  {
    title: 'Birthday',
    items: [
      { slug: 'birthday', title: 'Birthday System' },
    ],
  },
  {
    title: 'Advanced Features',
    items: [
      { slug: 'advanced-features', title: 'Advanced Features' },
    ],
  },
];
