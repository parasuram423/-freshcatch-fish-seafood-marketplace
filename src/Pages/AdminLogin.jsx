 import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import adminAccount from '../data/admin';
import './AdminLogin.css';

function AdminLogin() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail =
      email.trim().toLowerCase();

    const enteredPassword =
      password.trim();

    if (
      enteredEmail ===
        adminAccount.email.toLowerCase() &&
      enteredPassword ===
        adminAccount.password
    ) {
      login({
        name: adminAccount.name,
        email: adminAccount.email,
        phone: adminAccount.phone,
        role: adminAccount.role
      });

      setError('');

      navigate('/admin');

      return;
    }

    setError(
      'Invalid admin email or password.'
    );
  }

  return (
    <main className="admin-login-page">

      <div className="admin-login-card">

        <div className="admin-icon">
          👨‍💼
        </div>

        <span className="admin-label">
          FRESHCATCH ADMIN
        </span>

        <h1>
          Admin Login
        </h1>

        <p>
          Login to manage your FreshCatch store.
        </p>


        {error && (
          <div className="admin-login-error">
            {error}
          </div>
        )}


        <form onSubmit={handleSubmit}>

          <label htmlFor="admin-email">
            Email Address
          </label>

          <input
            id="admin-email"
            type="email"
            placeholder="admin@freshcatch.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError('');
            }}
            required
          />


          <label htmlFor="admin-password">
            Password
          </label>

          <input
            id="admin-password"
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError('');
            }}
            required
          />


          <button type="submit">
            Login to Admin Panel
          </button>

        </form>


        <button
          type="button"
          className="back-home"
          onClick={() => navigate('/')}
        >
          ← Back to FreshCatch
        </button>

      </div>

    </main>
  );
}

export default AdminLogin;