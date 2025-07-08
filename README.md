# [![Purinton Dev](https://purinton.us/logos/brand.png)](https://discord.gg/QSBxQnX7PF)

## @purinton/welcomer [![npm version](https://img.shields.io/npm/v/@purinton/welcomer.svg)](https://www.npmjs.com/package/@purinton/welcomer)[![license](https://img.shields.io/github/license/purinton/welcomer.svg)](LICENSE)[![build status](https://github.com/purinton/welcomer/actions/workflows/nodejs.yml/badge.svg)](https://github.com/purinton/welcomer/actions)

A minimal Discord bot that replies to every message in a specific welcome channel with a 👋 emoji. No slash commands, no configuration beyond a few environment variables.

---

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Running as a Service (systemd)](#running-as-a-service-systemd)
- [Docker](#docker)
- [Customization](#customization)
- [Testing](#testing)
- [Support](#support)
- [License](#license)

## Features

- Replies to every message in your configured welcome channel with a 👋 emoji
- No slash commands or user interaction required
- Simple configuration: just set your channel ID in `.env`
- Modern Node.js, ESM, and Docker support
- Logging and signal handling via `@purinton/common`

## Getting Started

1. **Clone this project:**

   ```bash
   git clone https://github.com/purinton/welcomer.git
   cd welcomer
   npm install
   ```

2. **Configure your bot:**
   - Copy `.env.example` to `.env`:

     ```bash
     cp .env.example .env
     ```

   - Edit `.env` and set your Discord bot token and the channel ID you want the bot to watch:

     ```env
     LOG_LEVEL=info
     DISCORD_CLIENT_ID=your_client_id_here
     DISCORD_TOKEN=your_app_token_here
     WELCOME_CHANNEL_ID=your_welcome_channel_id_here
     ```

3. **Start the bot locally:**

   ```bash
   npm start
   # or
   node welcomer.mjs
   ```

## Configuration

All configuration is handled via environment variables in the `.env` file. The only required variable for basic operation is `WELCOME_CHANNEL_ID`.

See `.env.example` for the full list:

```ini
LOG_LEVEL=info
DISCORD_CLIENT_ID=your_client_id_here
DISCORD_TOKEN=your_app_token_here
WELCOME_CHANNEL_ID=your_welcome_channel_id_here
```

## Running as a Service (systemd)

1. Copy `welcomer.service` to `/usr/lib/systemd/system/welcomer.service`.
2. Edit the paths and user/group as needed.
3. Reload systemd and start the service:

   ```bash
   sudo systemctl daemon-reload
   sudo systemctl enable welcomer
   sudo systemctl start welcomer
   sudo systemctl status welcomer
   ```

## Docker

1. Build the Docker image:

   ```bash
   docker build -t welcomer .
   ```

2. Run the container:

   ```bash
   docker run --env-file .env welcomer
   ```

## Customization

This bot is intentionally minimal. If you want to change the emoji, channel, or add more features, edit the event handler in `events/messageCreate.mjs`.

You can add more event handlers in the `events/` directory if you want to expand functionality.

## Testing

Run tests with:

```bash
npm test
```

Add your tests in the `tests/` folder.

## Support

For help, questions, or to chat with the author and community, visit:

[![Discord](https://purinton.us/logos/discord_96.png)](https://discord.gg/QSBxQnX7PF)

**[Purinton Dev on Discord](https://discord.gg/QSBxQnX7PF)**

## License

[MIT © 2025 Russell Purinton](LICENSE)

## Links

- [GitHub Repo](https://github.com/purinton/welcomer)
- [GitHub Org](https://github.com/purinton)
- [GitHub Personal](https://github.com/rpurinton)
- [Discord](https://discord.gg/QSBxQnX7PF)
