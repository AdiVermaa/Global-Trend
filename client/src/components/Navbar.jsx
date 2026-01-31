import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, CheckSquare } from 'lucide-react';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-applegrey-100">
      <div className="page-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-appleblue p-1.5 rounded-lg group-hover:scale-105 transition-transform duration-300">
              <CheckSquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-applegrey-500 tracking-tight">
              TaskFlow
            </span>
          </Link>

          {isAuthenticated && (
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3">
                <span className="text-applegrey-300 text-sm font-medium">{user?.name}</span>
                <div className="w-8 h-8 bg-applegrey-100 rounded-full flex items-center justify-center text-applegrey-400 text-xs font-bold">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
              </div>
              <button
                onClick={logout}
                className="flex items-center gap-2 btn-secondary"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
