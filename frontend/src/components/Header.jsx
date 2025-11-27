import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary-600">
            Shepower Nexus
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/courses" className="text-gray-700 hover:text-primary-600">
              Courses
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-primary-600">
              Resources
            </Link>
            <Link to="/mentors" className="text-gray-700 hover:text-primary-600">
              Mentors
            </Link>
            <Link to="/community" className="text-gray-700 hover:text-primary-600">
              Community
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-gray-600">Hi, {user?.name}</span>
                <button onClick={logout} className="btn-secondary text-sm">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-primary-600">
                  Login
                </Link>
                <Link to="/register" className="btn-primary text-sm">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;