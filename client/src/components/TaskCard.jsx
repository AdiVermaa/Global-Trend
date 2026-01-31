import { Edit2, Trash2, Clock, CheckCircle2, Circle } from 'lucide-react';

const TaskCard = ({ task, onEdit, onDelete }) => {
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
    <div className="task-card animate-fade-in">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-slate-800 flex-1">{task.title}</h3>
        <div className="flex items-center gap-2 ml-4">
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
      
      <div className="flex items-center justify-between">
        <span className={`badge ${getStatusBadgeClass(task.status)}`}>
          {getStatusIcon(task.status)}
          {getStatusLabel(task.status)}
        </span>
        <span className="text-xs text-slate-400">
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
