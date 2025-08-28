import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/slices/taskSlice';
import api from '../../api/api';
import styles from './Task.module.css';
import Button from '../UI/Button';
import Input from '../UI/Input';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/tasks', { title, description, status: 'pending' });
      dispatch(addTask(response.data));
      setTitle('');
      setDescription('');
    } catch (err) {
      console.error('Failed to add task');
    }
  };

  return (
    <form className={styles.taskForm} onSubmit={handleSubmit}>
      <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" />
      <textarea
        className={styles.textarea}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TaskForm;