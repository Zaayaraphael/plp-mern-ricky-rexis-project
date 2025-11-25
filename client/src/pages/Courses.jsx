import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import api from '../api/axios';

const Courses = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['lessons'],
    queryFn: async () => {
      const { data } = await api.get('/lessons');
      return data;
    }
  });

  const availableModule = {
    id: 'digital-skills-micro-entrepreneurs',
    title: 'Digital Skills for Micro-Entrepreneurs',
    description: 'Learn essential digital skills to start and grow your online business',
    duration: '2 hours',
    lessons: data?.lessons?.length || 5,
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
    available: true
  };

  const comingSoonModules = [
    {
      id: 'financial-literacy',
      title: 'Financial Literacy for Women',
      description: 'Master personal and business finance management',
      duration: '3 hours',
      lessons: 8,
      imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
      available: false
    },
    {
      id: 'leadership-skills',
      title: 'Leadership & Confidence Building',
      description: 'Develop leadership skills and build confidence',
      duration: '2.5 hours',
      lessons: 6,
      imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400',
      available: false
    },
    {
      id: 'tech-skills',
      title: 'Technology Skills for Beginners',
      description: 'Essential computer and internet skills',
      duration: '4 hours',
      lessons: 10,
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400',
      available: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Learning Modules</h1>
        <p className="text-gray-600 text-lg">
          Build skills at your own pace with our interactive courses
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Available Module */}
        <Link to={`/courses/${availableModule.id}`} className="card hover:shadow-lg transition-shadow">
          <div className="relative">
            <img
              src={availableModule.imageUrl}
              alt={availableModule.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
              Available Now
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{availableModule.title}</h3>
          <p className="text-gray-600 mb-4">{availableModule.description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>⏱️ {availableModule.duration}</span>
            <span>📚 {availableModule.lessons} lessons</span>
          </div>
          {isLoading ? (
            <div className="mt-4 text-center text-sm text-gray-500">Loading...</div>
          ) : (
            <button className="btn-primary w-full mt-4">Start Learning</button>
          )}
        </Link>

        {/* Coming Soon Modules */}
        {comingSoonModules.map((module) => (
          <div key={module.id} className="card opacity-75 relative">
            <div className="relative">
              <img
                src={module.imageUrl}
                alt={module.title}
                className="w-full h-48 object-cover rounded-lg mb-4 grayscale"
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-lg flex items-center justify-center">
                <span className="bg-accent-500 text-white px-4 py-2 rounded-full font-semibold">
                  Coming Soon
                </span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
            <p className="text-gray-600 mb-4">{module.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>⏱️ {module.duration}</span>
              <span>📚 {module.lessons} lessons</span>
            </div>
            <button className="btn-secondary w-full mt-4 cursor-not-allowed" disabled>
              Not Available Yet
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
