import express from 'express';
import routes from './routes.js';
const app = express();

app.use(express.json(), express.text());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

export default app;
