import { Client } from 'discord.js';

export default (client: Client) => {
	client.once('ready', () => {
		if (!client.user || !client.application) return;
		console.log(`Logged on discord as: ${client.user.tag}!`);
		client.user.setPresence({
			activities: [{ name: 'your messages 👀', type:  3 }],
			status: 'online',
		});
	});
};
