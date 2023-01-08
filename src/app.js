import config from './config.js';
import express from 'express';
import cors from 'cors';
import indexRouter from './routes/index.js';
// import { createHttpTerminator } from 'http-terminator';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/', indexRouter);

const server = app.listen(config.PORT, () => {
  console.log(`See your changes at http://${config.HOST}:${config.PORT}/`);
});

// const httpTerminator = createHttpTerminator({ server });

// await httpTerminator.terminate();
