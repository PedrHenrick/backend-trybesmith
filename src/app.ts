import 'express-async-errors';
import express from 'express';
import routers from './routers/router';
import ErrorMiddleware from './middleware/errorMiddleware';

const app = express();

app.use(express.json());
app.use(routers);
app.use(ErrorMiddleware);

export default app;
