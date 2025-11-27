import express from 'express';
import {
  getLessons,
  getLesson,
  markLessonComplete,
  createLesson
} from '../controllers/lessonController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getLessons);
router.get('/:id', getLesson);
router.post('/:id/complete', protect, markLessonComplete);
router.post('/', protect, admin, createLesson);

export default router;