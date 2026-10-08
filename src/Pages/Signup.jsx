 import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }));

    setError('');
  }

  function handleSubmit(event) {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();
    const phone = formData.phone.trim();
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;

    if (
      !name ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      setError('Please fill all fields.');
      return;
    }

    if (password.length < 6) {
      setError(
        'Password must contain at least 6 characters.'
      );
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const existingCustomers =
      JSON.parse(
        localStorage.getItem('freshcatchCustomers')
      ) || [];

    const customerAlreadyExists =
      existingCustomers.some(
        (customer) =>
          customer.email.toLowerCase() === email
      );

    if (customerAlreadyExists) {
      setError(
        'An account with this email already exists.'
      );
      return;
    }

    const customer = {
      id: Date.now(),
      name,
      email,
      phone,
      password,
      role: 'USER',
      createdAt: new Date().toISOString()
    };

    const updatedCustomers = [
      ...existingCustomers,
      customer
    ];

    localStorage.setItem(
      'freshcatchCustomers',
      JSON.stringify(updatedCustomers)
    );

    localStorage.setItem(
      'freshcatchAccount',
      JSON.stringify(customer)
    );

    setError('');

    navigate('/signin');
  }

  return (
    <main className="signup-page">

      <div className="signup-card">

        <div className="signup-icon">
          🐟
        </div>

        <span className="signup-label">
          JOIN FRESHCATCH
        </span>

        <h1>
          Create Account
        </h1>

        <p>
          Create your FreshCatch customer account.
        </p>

        {error && (
          <div className="signup-error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <label htmlFor="name">
            Full Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />


          <label htmlFor="email">
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />


          <label htmlFor="phone">
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />


          <label htmlFor="password">
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
          />


          <label htmlFor="confirmPassword">
            Confirm Password
          </label>

          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />


          <button type="submit">
            Create Account
          </button>

        </form>


        <p className="signup-login-text">
          Already have an account?{' '}
          <Link to="/signin">
            Sign In
          </Link>
        </p>


        <button
          type="button"
          className="signup-back-home"
          onClick={() => navigate('/')}
        >
          ← Back to FreshCatch
        </button>

      </div>

    </main>
  );
}

export default Signup;