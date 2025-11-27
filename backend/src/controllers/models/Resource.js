import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    enum: ['article', 'guide', 'opportunity', 'tool'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  tags: [String],
  sdgTags: [{
    type: String,
    enum: ['SDG1', 'SDG2', 'SDG3', 'SDG4', 'SDG5', 'SDG8', 'SDG10', 'SDG16']
  }],
  imageUrl: String,
  externalUrl: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  published: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Text index for search
resourceSchema.index({ title: 'text', body: 'text', description: 'text' });

export default mongoose.model('Resource', resourceSchema);