import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';

function App() {
  return (
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
            <Route path="/profile" element={<PrivateRoute component={ProfilePage} />} />
          </Routes>
        </div>
      </Router>
  );
}

// Custom PrivateRoute component to check for authenticated routes
const PrivateRoute = ({ component: Component }) => {
  const token = localStorage.getItem('token'); // Check if JWT token exists
  return token ? <Component /> : <Navigate to="/" />;
};

export default App