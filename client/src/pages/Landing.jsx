import { Link } from 'react-router-dom';
import { CheckSquare, ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="page-container">
        <div className="text-center py-20 animate-fade-in">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-appleblue rounded-[32px] mb-12 animate-scale-in shadow-xl shadow-appleblue/20">
            <CheckSquare className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-applegrey-500 mb-8">
            Manage tasks.<br/><span className="text-appleblue">Simplified.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-applegrey-300 font-normal mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the new standard of productivity with TaskFlow's elegant, simplified workflow.
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
            <div className="glass-card p-10 text-center group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-apple-blue transition-colors duration-300">
                <Sparkles className="w-8 h-8 text-appleblue group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Intuitive Interface</h3>
              <p className="text-slate-500">
                Beautiful, modern design that makes task management a breeze
              </p>
            </div>

            <div className="glass-card p-10 text-center group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-appleblue transition-colors duration-300">
                <Zap className="w-8 h-8 text-appleblue group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Lightning Fast</h3>
              <p className="text-slate-500">
                Quick and responsive performance for seamless task management
              </p>
            </div>

            <div className="glass-card p-10 text-center group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-appleblue transition-colors duration-300">
                <Shield className="w-8 h-8 text-appleblue group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Secure & Private</h3>
              <p className="text-slate-500">
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
