import { useState, useEffect } from 'react';
import { Plus, Filter, Search, AlertCircle } from 'lucide-react';
import TaskCard from '../components/TaskCard';
import TaskModal from '../components/TaskModal';
import api from '../utils/api';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    filterTasks();
  }, [tasks, statusFilter, searchQuery]);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await api.get('/tasks');
      setTasks(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch tasks. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filterTasks = () => {
    let filtered = tasks;

    // Filter by status
    if (statusFilter === 'urgent') {
      filtered = filtered.filter((task) => {
        if (!task.deadline) return false;
        const diff = new Date(task.deadline) - new Date();
        return diff > 0 && diff < 24 * 60 * 60 * 1000;
      });
    } else if (statusFilter !== 'all') {
      filtered = filtered.filter((task) => task.status === statusFilter);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (task) =>
          task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredTasks(filtered);
  };

  const handleCreateTask = async (taskData) => {
    try {
      const response = await api.post('/tasks', taskData);
      setTasks([response.data, ...tasks]);
      setError('');
    } catch (err) {
      setError('Failed to create task. Please try again.');
      console.error(err);
    }
  };

  const handleUpdateTask = async (taskData, taskId = null) => {
    try {
      const id = taskId || editingTask?._id;
      if (!id) return;
      const response = await api.put(`/tasks/${id}`, taskData);
      setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
      if (!taskId) setEditingTask(null);
      setError('');
    } catch (err) {
      setError('Failed to update task. Please try again.');
      console.error(err);
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (!window.confirm('Are you sure you want to delete this task?')) {
      return;
    }

    try {
      await api.delete(`/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task._id !== taskId));
      setError('');
    } catch (err) {
      setError('Failed to delete task. Please try again.');
      console.error(err);
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleModalSubmit = (taskData) => {
    if (editingTask) {
      handleUpdateTask(taskData);
    } else {
      handleCreateTask(taskData);
    }
  };

  const getTaskStats = () => {
    return {
      total: tasks.length,
      pending: tasks.filter((t) => t.status === 'pending').length,
      inProgress: tasks.filter((t) => t.status === 'in-progress').length,
      completed: tasks.filter((t) => t.status === 'completed').length,
    };
  };

  const stats = getTaskStats();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Header Section */}
      <div className="mb-12 animate-slide-up">
        <h1 className="heading-1">My Tasks</h1>
        <p className="subheading">Manage and organize your tasks efficiently</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-slide-up">
        <div className="glass-card p-6">
          <p className="text-applegrey-300 text-[13px] font-semibold uppercase tracking-wider mb-1">Total Tasks</p>
          <p className="text-3xl font-bold text-applegrey-500">{stats.total}</p>
        </div>
        <div className="glass-card p-6">
          <p className="text-applegrey-300 text-[13px] font-semibold uppercase tracking-wider mb-1">Pending</p>
          <p className="text-3xl font-bold text-orange-500">{stats.pending}</p>
        </div>
        <div className="glass-card p-6">
          <p className="text-applegrey-300 text-[13px] font-semibold uppercase tracking-wider mb-1">In Progress</p>
          <p className="text-3xl font-bold text-appleblue">{stats.inProgress}</p>
        </div>
        <div className="glass-card p-6">
          <p className="text-applegrey-300 text-[13px] font-semibold uppercase tracking-wider mb-1">Completed</p>
          <p className="text-3xl font-bold text-green-500">{stats.completed}</p>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-xl mb-6 flex items-center gap-2 animate-slide-down">
          <AlertCircle className="w-5 h-5" />
          {error}
        </div>
      )}

      {/* Filters and Actions */}
      <div className="glass-card p-6 mb-6 animate-slide-up">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-11"
              />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="input-field pl-11 pr-8"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>

          {/* Create Task Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-primary flex items-center gap-2 w-full sm:w-auto px-8"
          >
            <Plus className="w-5 h-5" />
            Add Task
          </button>
        </div>
      </div>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTasks.length === 0 ? (
          <div className="col-span-full glass-card p-12 text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-600 mb-2">No tasks found</h3>
            <p className="text-slate-400 mb-6">
              {searchQuery || statusFilter !== 'all'
                ? 'Try adjusting your filters'
                : 'Create your first task to get started'}
            </p>
            {!searchQuery && statusFilter === 'all' && (
              <button onClick={() => setIsModalOpen(true)} className="btn-primary">
                <Plus className="w-5 h-5 inline mr-2" />
                Create Task
              </button>
            )}
          </div>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard 
              key={task._id} 
              task={task} 
              onEdit={handleEdit} 
              onDelete={handleDeleteTask} 
              onUpdate={handleUpdateTask}
            />
          ))
        )}
      </div>

      {/* Task Modal */}
      <TaskModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
        task={editingTask}
      />
    </div>
  );
};

export default Dashboard;
