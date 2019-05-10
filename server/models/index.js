import mongoose from 'mongoose';

import Dog from './dog';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
};

const models = { Dog };

export { connectDb };

export default models;