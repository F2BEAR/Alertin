import app from './app.js';
import client from './discord.js';
import config from './config.js';
import SyslogServer, { SyslogMessage, SyslogError } from 'ts-syslog';

const syslogger = new SyslogServer();
const syslogPort = parseInt(config.SYSLOG_PORT);

app.listen(config.PORT, () => {
	console.log(`Alertin listening on port ${config.PORT}`);
});

syslogger.on('message', (value: SyslogMessage) => {
	const canal = client.channels.cache.get(config.CHANNEL);
	if (!canal || !canal.isTextBased()) return;
	canal.send(value.message);
	console.log(value.message);
});

syslogger.on('error', (err: SyslogError) => {
	console.error(err);
});

syslogger.listen({ port: syslogPort }, () => {
	console.log(`Syslog server litening on UDP port ${syslogPort}`);
});
