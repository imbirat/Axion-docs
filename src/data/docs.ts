import {
  BookOpen,
  Terminal,
  Command,
  Shield,
  Wallet,
  TrendingUp,
  Music,
  Ticket,
  Bot,
  HelpCircle,
  type LucideIcon,
} from 'lucide-react';

export interface DocSection {
  id: string;
  title: string;
  icon: LucideIcon;
  content: string;
}

export const docSections: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: BookOpen,
    content: `
# Getting Started

Welcome to Axion! This guide will help you get started with adding Axion to your Discord server and configuring it.

## What is Axion?

Axion is a powerful, all-in-one Discord bot that provides premium features completely free. From moderation to music, economy to tickets, Axion has everything you need to manage and grow your community.

## Quick Start

1. Click the "Add Bot" button on our homepage
2. Authorize the bot with the required permissions
3. Use \`/setup\` to configure Axion for your server
4. Explore commands with \`/help\`

## Prerequisites

- You need "Manage Server" permission on your Discord server
- Your server should have fewer than 250,000 members (for now)

## Support

Need help? Join our [Discord support server](https://discord.gg/axion) for assistance.
    `.trim(),
  },
  {
    id: 'installation',
    title: 'Installation',
    icon: Terminal,
    content: `
# Installation

Follow these steps to install Axion on your Discord server.

## Step 1: Invite the Bot

Click the invite link and select your server:

[Add Axion to Discord](https://discord.com/oauth2/authorize?client_id=axion)

You'll need the following permissions:
- Read Messages / View Channels
- Send Messages
- Manage Messages
- Embed Links
- Attach Files
- Read Message History
- Use Slash Commands

## Step 2: Verify Installation

Once added, run \`/ping\` to verify Axion is online.

## Step 3: Initial Setup

Use the \`/setup\` command to configure:
- Moderation logging channel
- Welcome messages
- Default prefix
- Auto-role assignments

## Updating

Axion updates automatically. You don't need to do anything to get the latest features and fixes.
    `.trim(),
  },
  {
    id: 'commands',
    title: 'Commands',
    icon: Command,
    content: `
# Commands

Axion comes with a comprehensive set of slash commands. Here's a complete overview.

## General Commands

| Command | Description | Usage |
|---------|-------------|-------|
| \`/help\` | Shows help menu | \`/help\` |
| \`/ping\` | Check bot latency | \`/ping\` |
| \`/info\` | Bot information | \`/info\` |
| \`/stats\` | Server statistics | \`/stats\` |
| \`/report\` | Report a user | \`/report @user reason\` |

## Moderation Commands

\`\`\`
/ban       - Ban a member from the server
/kick      - Kick a member from the server
/mute      - Mute a member
/unmute    - Unmute a member
/warn      - Warn a member
/clear     - Clear messages in a channel
/lock      - Lock a channel
/unlock    - Unlock a channel
\`\`\`

## Economy Commands

\`\`\`
/balance  - Check your balance
/daily    - Claim daily reward
/weekly   - Claim weekly reward
/work     - Work for coins
/beg      - Beg for coins
/rob      - Rob another user
/shop     - View the server shop
/inventory - View your items
\`\`\`

## Leveling Commands

\`\`\`
/rank     - Check your rank
/leaderboard - View server leaderboard
/rewards  - View level rewards
\`\`\`

## Music Commands

\`\`\`
/play     - Play a song
/skip     - Skip current song
/stop     - Stop playback
/queue    - View the queue
/nowplaying - Current song info
/volume   - Adjust volume
/pause    - Pause playback
/resume   - Resume playback
\`\`\`

## Ticket Commands

\`\`\`
/ticket   - Create a support ticket
/close    - Close a ticket
/add      - Add a user to ticket
/remove   - Remove a user from ticket
\`\`\`
    `.trim(),
  },
  {
    id: 'moderation',
    title: 'Moderation',
    icon: Shield,
    content: `
# Moderation

Axion's powerful moderation system keeps your server safe and organized.

## Overview

The moderation module includes everything you need to manage your community effectively.

## Ban Command

Bans a member from the server permanently.

**Usage:** \`/ban @user [reason]\`

**Permissions Required:** Ban Members

**Example:**
\`\`\'
/ban @spammer Violating rule #3
\`\`\`

## Kick Command

Removes a member from the server. They can rejoin with a new invite.

**Usage:** \`/kick @user [reason]\`

**Permissions Required:** Kick Members

## Mute Command

Temporarily prevents a member from sending messages.

**Usage:** \`/mute @user [duration] [reason]\`

**Permissions Required:** Moderate Members

## Warn System

The warning system tracks infractions:

- 3 warnings = automatic mute (1 hour)
- 5 warnings = automatic kick
- 7 warnings = automatic ban

## Moderation Logging

Set up a logging channel with \`/setup modlog #channel\` to track all moderation actions.
    `.trim(),
  },
  {
    id: 'economy',
    title: 'Economy',
    icon: Wallet,
    content: `
# Economy System

Create a fun and engaging economy experience for your community.

## Getting Started

Every user starts with 100 coins. Earn more by being active!

## Commands

| Command | Description | Cooldown |
|---------|-------------|----------|
| \`/daily\` | Claim daily reward | 24 hours |
| \`/weekly\` | Claim weekly reward | 7 days |
| \`/work\` | Work for coins | 1 hour |
| \`/beg\` | Beg for coins | 5 minutes |
| \`/rob\` | Rob another user | 30 minutes |
| \`/gamble\` | Gamble your coins | 10 minutes |

## Shop

Server admins can create custom shop items:

\`\`\'
/shop add "VIP Role" 5000
/shop add "Custom Color" 1000
/shop remove "Custom Color"
\`\`\`

## Transferring Coins

Use \`/pay @user amount\` to send coins to another user.

## Economy Settings

Configure economy settings:
\`\`\'
/economy set work-payout 50
/economy set daily-amount 200
/economy set currency 🪙
\`\`\`
    `.trim(),
  },
  {
    id: 'leveling',
    title: 'Leveling',
    icon: TrendingUp,
    content: `
# Leveling & XP

Reward your active members with levels and XP.

## How It Works

Members earn XP by sending messages in text channels.

- 15-25 XP per message (random)
- 60 second cooldown per member
- Level up every 100 XP × current level

## XP Formula

\`\`\`
XP needed = level × 100

Level 1: 100 XP
Level 2: 200 XP
Level 5: 500 XP
Level 10: 1000 XP
\`\`\`

## Level Rewards

Server admins can configure role rewards for reaching certain levels:

\`\`\'
/levels add-reward 5 @Member
/levels add-reward 10 @Regular
/levels add-reward 25 @Veteran
/levels add-reward 50 @Elite
\`\`\`

## Leaderboard

View the server leaderboard with \`/leaderboard\` to see top members.

## XP Multipliers

Boost XP gains for certain roles or channels:
- \`/levels set-multiplier @Nitro 2x\`
- \`/levels channel-multiplier #general 1.5x\`
    `.trim(),
  },
  {
    id: 'music',
    title: 'Music',
    icon: Music,
    content: `
# Music Player

High-quality music playback with powerful controls.

## Supported Sources

- YouTube
- Spotify
- SoundCloud
- Apple Music
- Direct audio files

## Basic Commands

\`\`\'
/play <song name or URL>
Play a song or add to queue

/skip
Skip the current song

/stop
Stop playback and clear queue

/pause
Pause the current song

/resume
Resume playback
\`\`\`

## Queue Management

\`\`\'
/queue
View the current music queue

/queue clear
Clear the entire queue

/queue remove <number>
Remove a specific song from queue

/queue shuffle
Shuffle the queue
\`\`\`

## Playback Controls

| Command | Description |
|---------|-------------|
| \`/volume 1-100\` | Adjust volume |
| \`/loop\` | Loop current song |
| \`/loop queue\` | Loop entire queue |
| \`/nowplaying\` | Show current song |
| \`/seek <time>\` | Seek to position |

## Requirements

- User must be in a voice channel
- Bot needs "Connect" and "Speak" permissions
- Stable internet connection recommended
    `.trim(),
  },
  {
    id: 'tickets',
    title: 'Tickets',
    icon: Ticket,
    content: `
# Ticket System

Manage support requests efficiently with Axion's ticket system.

## Overview

The ticket system allows members to create private support channels for reporting issues, asking questions, or requesting help.

## Creating Tickets

Users can create tickets using:

\`\`\'
/ticket reason
\`\`\'

This creates a private channel visible only to the user and staff.

## Managing Tickets

| Command | Description | Permission |
|---------|-------------|------------|
| \`/close\` | Close the ticket | Ticket creator or Admin |
| \`/add @user\` | Add user to ticket | Admin only |
| \`/remove @user\` | Remove user from ticket | Admin only |
| \`/ticket rename\` | Rename ticket channel | Admin only |

## Ticket Settings

Configure the ticket system:

\`\`\'
/ticket setup
/ticket set-category "Support Tickets"
/ticket set-message "Please describe your issue"
/ticket add-staff @SupportTeam
\`\`\`

## Auto-Close

Tickets automatically close after 24 hours of inactivity. Admins can configure this duration.
    `.trim(),
  },
  {
    id: 'auto-mod',
    title: 'Auto-Mod',
    icon: Bot,
    content: `
# Auto-Mod & Anti-Nuke

Protect your server from raids and malicious actions automatically.

## Features

- Automatic spam detection
- Link filtering
- Word blacklist
- Raid protection
- Anti-nuke measures
- CAPTCHA verification

## Spam Protection

Detects and prevents:
- Repeated messages
- Mass mentions (@everyone, @here)
- Message duplication
- Rapid message sending

## Configuration

\`\`\'
/automod spam-threshold 5
Enable: warns after 5 messages in 3 seconds

/automod mention-limit 3
Limit: max 3 mentions per message

/automod blacklist add badword
Add words to the blacklist

/automod whitelist add discord.com
Add allowed domains
\`\`\`

## Anti-Nuke Protection

Prevents destructive actions:
- Mass channel creation/deletion
- Mass role creation/deletion
- Mass ban/kick events
- Permission changes

If suspicious activity is detected, Axion automatically restricts the offending user and notifies admins.

## CAPTCHA Verification

Require new members to complete a CAPTCHA before accessing the server:

\`\`\'
/automod captcha enable
/automod captcha channel #welcome
\`\`\`
    `.trim(),
  },
  {
    id: 'faq',
    title: 'FAQ',
    icon: HelpCircle,
    content: `
# Frequently Asked Questions

## General Questions

**Is Axion really free?**

Yes! Axion is completely free to use. All features, including premium ones, are available at no cost.

**How do I add Axion to my server?**

Click the "Add Bot" button on our homepage and authorize the bot with the required permissions.

**What permissions does Axion need?**

Axion requires standard bot permissions including Read Messages, Send Messages, Manage Messages, and slash command support. Some features may require additional permissions.

## Technical Questions

**What if Axion goes offline?**

We maintain 99.9% uptime. If issues occur, check our status page or join our Discord for updates.

**Can I host Axion myself?**

Currently, Axion is only available as a hosted service. Self-hosting is not supported.

**Is my data safe?**

Yes, we take security seriously. We only store data necessary for bot functionality and never share it with third parties.

## Feature Questions

**Can I request features?**

Absolutely! Join our Discord server and suggest features in the #suggestions channel.

**How often is Axion updated?**

We release updates regularly with new features, improvements, and bug fixes.

**Does Axion support other languages?**

English is currently supported. More languages are coming soon.

## Troubleshooting

**Commands aren't working**

Make sure Axion has the necessary permissions and slash commands are synced. Try re-inviting the bot if issues persist.

**Music isn't playing**

Ensure the bot has "Connect" and "Speak" permissions in the voice channel. Check that the bot isn't server muted.

**Economy data was reset**

Economy data is stored per server. If the bot was removed and re-added, data may be lost.
    `.trim(),
  },
];
