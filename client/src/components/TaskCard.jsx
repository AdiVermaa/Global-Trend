import { Edit2, Trash2, Clock, CheckCircle2, Circle, AlertTriangle } from 'lucide-react';

const TaskCard = ({ task, onEdit, onDelete, onUpdate }) => {
  const isUrgent = task.deadline && 
    (new Date(task.deadline) - new Date() > 0) && 
    (new Date(task.deadline) - new Date() < 24 * 60 * 60 * 1000);

  const toggleStatus = () => {
    const statuses = ['pending', 'in-progress', 'completed'];
    const currentIndex = statuses.indexOf(task.status);
    const nextStatus = statuses[(currentIndex + 1) % statuses.length];
    onUpdate({ status: nextStatus }, task._id);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'in-progress':
        return <Clock className="w-4 h-4" />;
      default:
        return <Circle className="w-4 h-4" />;
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'completed':
        return 'badge-completed';
      case 'in-progress':
        return 'badge-in-progress';
      default:
        return 'badge-pending';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'in-progress':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      default:
        return 'Pending';
    }
  };

  return (
    <div className={`task-card animate-fade-in ${isUrgent ? 'border-l-4 border-red-500' : ''}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-slate-800">{task.title}</h3>
          {isUrgent && (
            <div className="flex items-center gap-1 text-red-500 text-xs font-bold mt-1">
              <AlertTriangle className="w-3 h-3" />
              URGENT
            </div>
          )}
        </div>
        <div className="flex items-center gap-1 ml-4">
          <button
            onClick={() => onEdit(task)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200 group"
            title="Edit task"
          >
            <Edit2 className="w-4 h-4 text-blue-600 group-hover:text-blue-700" />
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200 group"
            title="Delete task"
          >
            <Trash2 className="w-4 h-4 text-red-500 group-hover:text-red-600" />
          </button>
        </div>
      </div>
      
      <p className="text-slate-600 mb-4 line-clamp-2">{task.description}</p>
      
      <div className="flex flex-col gap-3">
        {task.deadline && (
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Clock className={`w-3.5 h-3.5 ${isUrgent ? 'text-red-500' : ''}`} />
            <span>Due: {new Date(task.deadline).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}</span>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <button 
            onClick={toggleStatus}
            className={`badge ${getStatusBadgeClass(task.status)} hover:opacity-80 transition-opacity cursor-pointer border-none`}
            title="Click to toggle status"
          >
            {getStatusIcon(task.status)}
            {getStatusLabel(task.status)}
          </button>
          <span className="text-[10px] text-slate-400">
            Created: {new Date(task.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
