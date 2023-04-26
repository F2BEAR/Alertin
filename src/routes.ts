import { Router } from 'express';
import moment from 'moment';
import discordClient from './discord.js';

const router = Router();

router.get('/', (_, res) => {
	res.send("I'm alive ~");
});

router.post('/message', async (req, res) => {
	if (!req.is('application/json')) {
		return res.status(406).send('Not Acceptable');
	}
	if (!req.body.message || !req.body.channel) {
		return res.status(400).send('Bad Request');
	}
	if (
		typeof req.body.message !== 'string' ||
		typeof req.body.channel !== 'string'
	) {
		return res.status(400).send('Bad Request');
	}
	const date = moment();
	const formatedDate = date.format('d/m/y H:M:S');
	const message: string = req.body.message;
	const channelId: string = req.body.channel;

	const channel = await discordClient.channels.fetch(channelId);
	if (!channel) {
		return res.status(500).send('No pudimos acceder al canal de discord :(');
	}
	if (!channel.isTextBased()) return;
	channel.send(message);

	console.log(`${formatedDate} - ${message} [${req.socket.remoteAddress}]`);
	res.status(200).send(`ok\n Channel: ${channelId}\n Message: ${message}\n`);
});

router.all('*', (_, res) => {
	res.status(404).send(`Not Found :(`);
});

export default router;
