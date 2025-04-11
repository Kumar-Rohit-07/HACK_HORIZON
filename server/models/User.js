import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String, // store hashed passwords
  role: { type: String, enum: ['student', 'mentor'], default: 'student' },
  skills: [String],
  interests: [String],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
