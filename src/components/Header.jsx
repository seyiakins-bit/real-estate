import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/akinsluxury.png";
import React from "react";

const Header = ({ token, userData, onLogout }) => {
  const navigate = useNavigate();
  const userName = userData?.name || "";
  const userRole = userData?.role || "";

  const handleLogout = () => {
    onLogout();
    navigate("/login", { replace: true });
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      {/* Logo + Site Name */}
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
        <Link to="/home" className="text-xl font-bold">
          Akins Luxury Homes
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex gap-4 items-center">
        {/* Home always available if logged in */}
        {token && <Link to="/home" className="hover:text-gray-200">Home</Link>}

        {/* Dashboards */}
        {token && userRole === "user" && (
          <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
        )}
        {token && userRole === "admin" && (
          <Link to="/admin-dashboard" className="hover:text-gray-200">Admin</Link>
        )}

        {/* Add Property */}
        {token && (
          <Link to="/add-property" className="hover:text-gray-200">Add Property</Link>
        )}

        {/* Auth links */}
        {!token && (
          <>
            <Link to="/login" className="hover:text-gray-200">Login</Link>
            <Link to="/register" className="hover:text-gray-200">Register</Link>
          </>
        )}

        {/* User info + Logout */}
        {token && (
          <div className="ml-4 flex items-center gap-2">
            <span>{userName}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
