import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.route';
import taskRoutes from './routes/task.route';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

app.get('/', (_, res) => {
  res.send('API Task Manager!');
});

export default app;