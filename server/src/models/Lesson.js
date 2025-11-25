import mongoose from 'mongoose';

const contentBlockSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['text', 'video', 'quiz'],
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  // For text blocks
  content: String,
  // For video blocks
  videoUrl: String,
  videoTitle: String,
  // For quiz blocks (placeholder)
  quizData: mongoose.Schema.Types.Mixed
}, { _id: false });

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Lesson title is required'],
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  moduleId: {
    type: String,
    required: true,
    index: true
  },
  moduleName: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  duration: {
    type: Number, // in minutes
    default: 15
  },
  contentBlocks: [contentBlockSchema],
  published: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for searching
lessonSchema.index({ title: 'text', description: 'text' });

export default mongoose.model('Lesson', lessonSchema);
