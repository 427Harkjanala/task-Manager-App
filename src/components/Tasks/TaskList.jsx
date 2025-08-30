import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import styles from './Task.module.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;