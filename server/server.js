import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import routes from './routes';

import models, { connectDb } from './models';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = { models };
  next();
});

connectDb().then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});

// Routes
app.use('/dogs', routes.dog);

app.get('/', (req, res) => res.send('Hello World!'))