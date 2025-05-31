import { useState } from 'react';

const LoginForm = ({ onLogin, onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      onRegister({ username, password });
    } else {
      onLogin({ username, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      <button 
        type="button"
        onClick={() => setIsRegistering(!isRegistering)}
      >
        {isRegistering ? 'Switch to Login' : 'Switch to Register'}
      </button>
    </form>
  );
};

export default LoginForm;