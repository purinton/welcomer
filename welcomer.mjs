#!/usr/bin/env node
import 'dotenv/config';
import { createDiscord } from '@purinton/discord';
import { log, fs, path, registerHandlers, registerSignals } from '@purinton/common';

registerHandlers({ log });
registerSignals({ log });

const packageJson = JSON.parse(fs.readFileSync(path(import.meta, 'package.json')), 'utf8');
const version = packageJson.version;

const presence = { activities: [{ name: `welcomer v${version}`, type: 4 }], status: 'online' };

const channel_id = process.env.WELCOME_CHANNEL_ID || null;

if (!channel_id) {
    log.error('No WELCOME_CHANNEL_ID provided. Please set it in your environment variables.');
    process.exit(1);
}

const client = await createDiscord({
    log,
    rootDir: path(import.meta),
    context: {
        presence,
        version,
        channel_id,
    }
});
registerSignals({ shutdownHook: () => client.destroy() });
