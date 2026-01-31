import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, CheckSquare } from 'lucide-react';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="glass-card mx-4 mt-4 mb-8 animate-slide-down">
      <div className="page-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <CheckSquare className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">
              TaskFlow
            </span>
          </Link>

          {isAuthenticated && (
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 backdrop-blur-xl bg-white/5 px-4 py-2 rounded-xl border border-white/20">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-sm font-bold">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
                <span className="text-white/90">{user?.name}</span>
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
