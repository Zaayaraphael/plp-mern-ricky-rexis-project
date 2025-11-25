import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const progressSchema = new mongoose.Schema({
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  completed: { type: Boolean, default: false },
  completedAt: Date
}, { _id: false });

const bookmarkSchema = new mongoose.Schema({
  itemId: mongoose.Schema.Types.ObjectId,
  itemType: { type: String, enum: ['resource', 'lesson', 'story', 'event'] },
  createdAt: { type: Date, default: Date.now }
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'mentor', 'admin', 'organizer'],
    default: 'user'
  },
  progress: [progressSchema],
  bookmarks: [bookmarkSchema],
  skillPathways: [{
    pathwayId: mongoose.Schema.Types.ObjectId,
    completedSteps: [Number]
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model('User', userSchema);
