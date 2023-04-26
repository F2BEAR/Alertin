import { Client } from 'discord.js';
import readyClient from './discordListeners/readyClient.js';
import config from './config.js';

const client = new Client({ intents: [] })

readyClient(client);

client.login(config.TOKEN)

client.on("interactionCreate", async (e) => {
    console.log('si');
    console.log(e)
});
export default client;
