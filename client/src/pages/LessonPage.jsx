import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';
import LessonPlayer from '../components/LessonPlayer';

const LessonPage = () => {
  const { id } = useParams();

  const { data: lesson, isLoading, error } = useQuery({
    queryKey: ['lesson', id],
    queryFn: async () => {
      const { data } = await api.get(`/lessons/${id}`);
      return data;
    }
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">Loading lesson...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center text-red-600">
          Error loading lesson: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/courses" className="text-primary-600 hover:text-primary-700 mb-6 inline-block">
        ← Back to Courses
      </Link>
      <LessonPlayer lesson={lesson} />
    </div>
  );
};

export default LessonPage;
