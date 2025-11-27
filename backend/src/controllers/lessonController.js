import Lesson from '../models/Lesson.js';
import User from '../models/User.js';

/**
 * @route   GET /api/v1/lessons
 * @desc    Get all published lessons
 * @access  Public
 */
export const getLessons = async (req, res) => {
  try {
    const { moduleId, page = 1, limit = 20 } = req.query;
    
    const query = { published: true };
    if (moduleId) query.moduleId = moduleId;

    const lessons = await Lesson.find(query)
      .sort({ order: 1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Lesson.countDocuments(query);

    res.json({
      lessons,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @route   GET /api/v1/lessons/:id
 * @desc    Get single lesson
 * @access  Public
 */
export const getLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    
    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }

    res.json(lesson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @route   POST /api/v1/lessons/:id/complete
 * @desc    Mark lesson as complete/incomplete
 * @access  Private
 */
export const markLessonComplete = async (req, res) => {
  try {
    const { completed } = req.body;
    const lessonId = req.params.id;
    const userId = req.user._id;

    const lesson = await Lesson.findById(lessonId);
    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }

    const user = await User.findById(userId);
    
    // Find existing progress entry
    const progressIndex = user.progress.findIndex(
      p => p.lessonId.toString() === lessonId
    );

    if (progressIndex > -1) {
      // Update existing
      user.progress[progressIndex].completed = completed;
      if (completed) {
        user.progress[progressIndex].completedAt = new Date();
      }
    } else {
      // Add new
      user.progress.push({
        lessonId,
        completed,
        completedAt: completed ? new Date() : null
      });
    }

    await user.save();

    res.json({
      message: 'Progress updated',
      progress: user.progress
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @route   POST /api/v1/lessons
 * @desc    Create lesson (admin only)
 * @access  Private/Admin
 */
export const createLesson = async (req, res) => {
  try {
    const lesson = await Lesson.create({
      ...req.body,
      createdBy: req.user._id
    });
    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};