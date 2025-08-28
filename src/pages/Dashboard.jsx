import React from 'react';
import useAuth from '../hooks/useAuth';
import styles from './Pages.module.css';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className={styles.page}>
      <h1>Welcome, {user?.name}!</h1>
      <p>This is your dashboard.</p>
    </div>
  );
};

export default Dashboard;