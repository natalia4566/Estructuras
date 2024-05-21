import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Componets/AuthContext';
import Login from './Componets/Login';
import Home from './Home';
import Logout from './Componets/Logout';
import PrivateRoute from './PrivateRoute';
import { useState, useEffect } from 'react';
import { AuthContext } from './Componets/AuthContext';

function App() {
  const [lastVisitedPage, setLastVisitedPage] = useState(null);

  useEffect(() => {
    const storedPage = localStorage.getItem('lastVisitedPage');
    if (storedPage) {
      setLastVisitedPage(storedPage);
    }
  }, []);

  useEffect(() => {
    if (lastVisitedPage) {
      localStorage.setItem('lastVisitedPage', lastVisitedPage);
    }
  }, [lastVisitedPage]);

  const handlePageVisit = (path) => {
    setLastVisitedPage(path);
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          
          <Route path="/" element={<Home onVisit={handlePageVisit} />} />

          
          <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
          <Route path="/profile" element={<PrivateRoute component={Profile} />} />

          <Route
            path="*"
            element={
              <AuthContext.Consumer>
                {(context) => (
                  context.isLoggedIn ? (
                    <p>Welcome back, {context.username}!</p>
                  ) : (
                    <p>Please log in to access this page.</p>
                  )
                )}
              </AuthContext.Consumer>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
