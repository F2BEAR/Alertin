import dotenv from 'dotenv';
dotenv.config();
const { PORT, SYSLOG_PORT, TOKEN, CHANNEL, ALERTIN_ID } = process.env;

if (!PORT || !SYSLOG_PORT || !TOKEN || !CHANNEL || !ALERTIN_ID) {
	throw new Error('Missing environment variables');
}

const config: Record<string, string> = {
	PORT,
	SYSLOG_PORT,
	TOKEN,
	CHANNEL,
	ALERTIN_ID,
};

export default config;
