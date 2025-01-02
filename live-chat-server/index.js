import cors from 'cors';
import {} from 'dotenv/config';
import express from 'express';
import userRoutes from './Routes/userRoutes.js';
import connectDb from './database/database.js';

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user', userRoutes);

app.listen(PORT, async () => {
  const database = await connectDb();
  if (!database) {
    return console.log(
      `Server is running on port ${PORT} but without connection to the database...`
    );
  }
  console.log(`Server is running on port ${PORT} and connected to database...`);
});
