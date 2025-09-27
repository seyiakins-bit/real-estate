import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import AddPropertyPage from "./pages/AddPropertyPage";
import EditPropertyPage from "./pages/EditPropertyPage";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LuxuryApartment from "./pages/LuxuryApartment";
import BeachHouse from "./pages/BeachHouse";
import ModernDuplex from "./pages/ModernDuplex";
import CozyBungalow from "./pages/CozyBungalow";
import LuxWater from "./pages/LuxWater";
import RoomBung from "./pages/RoomBung";
import LuxSmart from "./pages/Luxsmart";
import PrimeP from "./pages/PrimeP";
import BeachHouse1 from "./pages/BeachHouse1";
import BeachHouse2 from "./pages/BeachHouse2";
import ModernDuplex1 from "./pages/ModernDuplex1";
import ModernDuplex2 from "./pages/ModernDuplex2";
import CozyBungalow1 from "./pages/CozyBungalow1";
import CozyBungalow2 from "./pages/CozyBungalow2";

function App() {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);

  // Initialize auth state
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedToken) setToken(storedToken);
    if (storedUser) setUserData(storedUser);
  }, []);

  const handleLogin = (token, user) => {
    setToken(token);
    setUserData(user);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setToken(null);
    setUserData(null);
  };

  return (
    <Router>
      <Header token={token} userData={userData} onLogout={handleLogout} />
      <main className="min-h-screen">
        <Routes>
          {/* Home should always be public */}
          <Route path="/" element={<HomePage />} />

          {/* Public property showcase pages */}
          <Route path="/LuxuryApartment" element={<LuxuryApartment />} />
          <Route path="/BeachHouse" element={<BeachHouse />} />
          <Route path="/ModernDuplex" element={<ModernDuplex />} />
          <Route path="/cozy-bungalow" element={<CozyBungalow />} />
          <Route path="/luxWater" element={<LuxWater />} />
          <Route path="/roombung" element={<RoomBung />} />
          <Route path="/luxsmart" element={<LuxSmart />} />
          <Route path="/primep" element={<PrimeP />} />
          <Route path="/beachhouse1" element={<BeachHouse1 />} />
          <Route path="/beachhouse2" element={<BeachHouse2 />} />
          <Route path="/modernduplex1" element={<ModernDuplex1 />} />
          <Route path="/modernduplex2" element={<ModernDuplex2 />} />
          <Route path="/cozy-bungalow-1" element={<CozyBungalow1 />} />
          <Route path="/cozy-bungalow-2" element={<CozyBungalow2 />} />

          {/* Auth Pages */}
          <Route
            path="/register"
            element={!token ? <RegisterPage /> : <Navigate to="/" replace />}
          />
          <Route
            path="/login"
            element={
              !token ? (
                <LoginPage onLogin={handleLogin} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          {/* Protected Pages */}
          <Route
            path="/dashboard"
            element={
              !token ? (
                <Navigate to="/login" replace />
              ) : userData?.role === "admin" ? (
                <AdminDashboard />
              ) : (
                <UserDashboard />
              )
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              token && userData?.role === "admin" ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/add-property"
            element={
              token ? <AddPropertyPage /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/edit-property/:id"
            element={
              token ? <EditPropertyPage /> : <Navigate to="/login" replace />
            }
          />
        </Routes>
      </main>
      {/* ✅ Pass auth info into Footer */}
      <Footer isLoggedIn={!!token} onLogout={handleLogout} />
    </Router>
  );
}

export default App;
