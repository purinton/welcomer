// events/messageCreate.mjs
export default async function ({ log, channel_id }, message) {
    log.debug('messageCreate', { id: message.id });
    if (message.channel.id !== channel_id) return;
    message.react('👋');
}