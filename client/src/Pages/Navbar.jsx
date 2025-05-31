// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, username, role, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">🎵 InstruMeta</Link>

        <div className="collapse navbar-collapse">
          {isAuthenticated ? (
            <ul className="navbar-nav ms-auto align-items-center">

              {role === 'admin' ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/manage-users">Manage Users</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin-dashboard">Admin</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/analyze">Analyze Music</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/virtual-instruments">Virtual Instruments</Link>
                  </li>
                  <li className="nav-item nav-link fw-bold">
                    <Link className="nav-link" to="/dashboard">{username}</Link>
                  </li>
                </>
              )}

              <li className="nav-item">
                <button className="btn btn-danger btn-sm" onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
