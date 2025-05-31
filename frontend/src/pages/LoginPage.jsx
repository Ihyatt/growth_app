import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { login, register } from '../api/auth';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const { login: authLogin } = useAuth();
  const [error, setError] = useState('');

  const handleLogin = async (credentials) => {
    try {
      const { access_token } = await login(credentials);
      authLogin(access_token);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  const handleRegister = async (credentials) => {
    try {
      await register(credentials);
      setError('Registration successful. Please login.');
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className="login-container">
      <LoginForm 
        onLogin={handleLogin} 
        onRegister={handleRegister} 
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default LoginPage;