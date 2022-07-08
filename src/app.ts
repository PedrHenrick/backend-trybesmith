import express from 'express';
import routers from './routers/router';

const app = express();

app.use(express.json());
app.use(routers);
// app.use(errorMiddleware);

export default app;
