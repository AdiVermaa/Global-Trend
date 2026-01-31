import { Link } from 'react-router-dom';
import { CheckSquare, ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="page-container">
        <div className="text-center py-20 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl mb-6 animate-scale-in">
            <CheckSquare className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">TaskFlow</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Manage your tasks efficiently with our modern, intuitive task management system
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/register" className="btn-primary text-lg flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/login" className="btn-secondary text-lg">
              Sign In
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            <div className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Intuitive Interface</h3>
              <p className="text-white/60">
                Beautiful, modern design that makes task management a breeze
              </p>
            </div>

            <div className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Lightning Fast</h3>
              <p className="text-white/60">
                Quick and responsive performance for seamless task management
              </p>
            </div>

            <div className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Secure & Private</h3>
              <p className="text-white/60">
                Your tasks are protected with industry-standard security
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
