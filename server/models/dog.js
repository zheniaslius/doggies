import mongoose from 'mongoose';

const dogSchema = new mongoose.Schema({
  name: String,
  gender: String,
  breed: String,
  description: String,
  photo: String,
  createdAt: {type: Date, default: Date.now}
});

const Dog = mongoose.model('Dog', dogSchema);

export default Dog;