import React from 'react';
import useAuth from '../hooks/useAuth';
import styles from './Pages.module.css';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className={styles.page}>
      <h1>Profile</h1>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default Profile;