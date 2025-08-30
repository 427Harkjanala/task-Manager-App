import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../../redux/slices/taskSlice';
import api from '../../api/api';
import styles from './Task.module.css';
import Button from '../UI/Button';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = async () => {
    const updated = {
      ...task,
      status: task.status === 'pending' ? 'completed' : 'pending'
    };
    try {
      const response = await api.put(`/tasks/${task._id}`, updated);
      dispatch(updateTask(response.data));
    } catch (err) {
      console.error('Failed to update task', err);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/tasks/${task._id}`);
      dispatch(deleteTask(task._id));
    } catch (err) {
      console.error('Failed to delete task', err);
    }
  };

  return (
    <div className={styles.taskItem}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <Button onClick={handleToggle}>Toggle Status</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default TaskItem;
