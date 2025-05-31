import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Signup = ({ setAuth, setUsername, setRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const username = email.split('@')[0]; // create username from email

      const res = await axios.post('http://localhost:5000/api/register', {
        username,
        email,
        password,
      });

      console.log('Backend response:', res.data);

      // If backend returns a user object, use it; otherwise fallback to defaults
      if (res.data && res.data.user) {
        setAuth(true);
        setUsername(res.data.user.username);
        setRole(res.data.user.role);
        navigate('/dashboard');
      } 
      // If no user object but registration success message present
      else if (res.data && res.data.message) {
        setAuth(true);
        setUsername(username);
        setRole('user');  // default role
        navigate('/dashboard');
      } else {
        alert('Registration failed: Unexpected response from server');
      }
    } catch (err) {
      console.error('Registration error:', err.response?.data || err.message);
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h2 className="text-center mb-4 text-primary">Signup</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter a password"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Re-enter the password"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 shadow-sm">
                  Create Account
                </button>

                <Link to="/" className="btn btn-outline-secondary w-100 mt-3">
                  ⬅ Back to Home
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
