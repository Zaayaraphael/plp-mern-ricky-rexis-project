import { useState } from 'react';
import api from '../api/axios';
import { useAuth } from '../contexts/AuthContext';

const LessonPlayer = ({ lesson, onComplete }) => {
  const { isAuthenticated } = useAuth();
  const [isCompleted, setIsCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleMarkComplete = async () => {
    if (!isAuthenticated) {
      alert('Please login to track your progress');
      return;
    }

    setLoading(true);
    try {
      await api.post(`/lessons/${lesson._id}/complete`, { completed: !isCompleted });
      setIsCompleted(!isCompleted);
      if (onComplete) onComplete();
    } catch (error) {
      console.error('Error updating progress:', error);
      alert('Failed to update progress');
    } finally {
      setLoading(false);
    }
  };

  const renderContentBlock = (block) => {
    switch (block.type) {
      case 'text':
        return (
          <div
            key={block.order}
            className="prose max-w-none mb-6"
            dangerouslySetInnerHTML={{ __html: block.content }}
          />
        );
      
      case 'video':
        return (
          <div key={block.order} className="mb-8">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={block.videoUrl}
                title={block.videoTitle || 'Lesson video'}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {block.videoTitle && (
              <p className="text-sm text-gray-600 mt-2">{block.videoTitle}</p>
            )}
          </div>
        );
      
      case 'quiz':
        return (
          <div key={block.order} className="card mb-6">
            <p className="text-gray-600">Quiz coming soon...</p>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
        <p className="text-gray-600">{lesson.description}</p>
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
          <span>⏱️ {lesson.duration} minutes</span>
          <span>📚 {lesson.moduleName}</span>
        </div>
      </div>

      <div className="space-y-6">
        {lesson.contentBlocks
          .sort((a, b) => a.order - b.order)
          .map(renderContentBlock)}
      </div>

      {isAuthenticated && (
        <div className="mt-8 pt-6 border-t">
          <button
            onClick={handleMarkComplete}
            disabled={loading}
            className={`btn-primary ${isCompleted ? 'bg-green-600 hover:bg-green-700' : ''} ${loading ? 'opacity-50' : ''}`}
          >
            {loading ? 'Updating...' : isCompleted ? '✓ Completed' : 'Mark as Complete'}
          </button>
        </div>
      )}
    </div>
  );
};

export default LessonPlayer;
