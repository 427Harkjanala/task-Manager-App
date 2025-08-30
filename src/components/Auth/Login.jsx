import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import api from '../../api/api';
import styles from './Auth.module.css';
import Button from '../UI/Button';
import Input from '../UI/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', { email, password });
      dispatch(login({ user: response.data.user, token: response.data.token }));
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <form className={styles.authForm} onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p className={styles.error}>{error}</p>}
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;