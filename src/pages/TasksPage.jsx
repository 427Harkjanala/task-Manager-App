import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/slices/taskSlice';
import TaskForm from '../components/Tasks/TaskForm';
import TaskList from '../components/Tasks/TaskList';
import Loader from '../components/UI/Loader';
import styles from './Pages.module.css';

const TasksPage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className={styles.page}>
      <h1>Tasks</h1>
      <TaskForm />
      {loading ? <Loader /> : <TaskList />}
    </div>
  );
};

export default TasksPage;