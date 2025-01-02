import mongoose from 'mongoose';

const connectDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI).catch((err) => {
    console.log('Server is NOT connected to database', err.message);
  });
  if (!conn) {
    return false;
  }
  console.log('Server is connected to database...');
  return true;
};

export default connectDb;
