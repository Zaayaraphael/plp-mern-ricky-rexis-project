import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';

const CourseDetail = () => {
  const { moduleId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['lessons', moduleId],
    queryFn: async () => {
      const { data } = await api.get(`/lessons?moduleId=${moduleId}`);
      return data;
    }
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">Loading course...</div>
      </div>
    );
  }

  const lessons = data?.lessons || [];
  const moduleName = lessons[0]?.moduleName || 'Course';

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/courses" className="text-primary-600 hover:text-primary-700 mb-6 inline-block">
        ← Back to Courses
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{moduleName}</h1>
        <p className="text-gray-600 text-lg">
          {lessons.length} lessons • Self-paced learning
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson, index) => (
          <Link
            key={lesson._id}
            to={`/lessons/${lesson._id}`}
            className="card hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold">
                {index + 1}
              </div>
              <div className="grow">
                <h3 className="font-semibold mb-2">{lesson.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{lesson.description}</p>
                <div className="text-xs text-gray-500">
                  ⏱️ {lesson.duration} minutes
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;