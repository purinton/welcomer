import assert from 'assert';
import messageCreate from '../events/messageCreate.mjs';

function createMockMessage({ id = '123', channelId = 'test-channel', reactFn } = {}) {
    return {
        id,
        channel: { id: channelId },
        react: reactFn || (() => { throw new Error('react not called'); })
    };
}

describe('messageCreate event handler', () => {
    it('should react with 👋 if message is in the correct channel', async () => {
        let reacted = false;
        const mockMessage = createMockMessage({
            channelId: 'abc',
            reactFn: (emoji) => {
                reacted = true;
                assert.strictEqual(emoji, '👋');
            }
        });
        const log = { debug: () => {} };
        await messageCreate({ log, channel_id: 'abc' }, mockMessage);
        assert(reacted, 'Expected message.react to be called');
    });

    it('should not react if message is in a different channel', async () => {
        let reacted = false;
        const mockMessage = createMockMessage({
            channelId: 'wrong-channel',
            reactFn: () => { reacted = true; }
        });
        const log = { debug: () => {} };
        await messageCreate({ log, channel_id: 'abc' }, mockMessage);
        assert(!reacted, 'Expected message.react not to be called');
    });
});
