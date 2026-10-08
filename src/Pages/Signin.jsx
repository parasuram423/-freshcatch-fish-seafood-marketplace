 import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Signin.css';

function Signin() {
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

    const customers =
      JSON.parse(
        localStorage.getItem('freshcatchCustomers')
      ) || [];

    const customer = customers.find(
      (item) =>
        item.email.toLowerCase() ===
          enteredEmail &&
        item.password === enteredPassword
    );

    if (!customer) {
      setError(
        'Invalid email or password.'
      );
      return;
    }

    login({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      role: 'USER'
    });

    setError('');

    navigate('/');
  }

  return (
    <main className="signin-page">

      <div className="signin-card">

        <div className="signin-icon">
          🐟
        </div>

        <span className="signin-label">
          WELCOME BACK
        </span>

        <h1>
          Sign In
        </h1>

        <p>
          Login to your FreshCatch account.
        </p>


        {error && (
          <div className="signin-error">
            {error}
          </div>
        )}


        <form onSubmit={handleSubmit}>

          <label htmlFor="signin-email">
            Email Address
          </label>

          <input
            id="signin-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError('');
            }}
            required
          />


          <label htmlFor="signin-password">
            Password
          </label>

          <input
            id="signin-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError('');
            }}
            required
          />


          <button type="submit">
            Sign In
          </button>

        </form>


        <p className="signin-signup-text">
          Don't have an account?{' '}

          <Link to="/signup">
            Create Account
          </Link>
        </p>


        <button
          type="button"
          className="signin-back-home"
          onClick={() => navigate('/')}
        >
          ← Back to FreshCatch
        </button>

      </div>

    </main>
  );
}

export default Signin;