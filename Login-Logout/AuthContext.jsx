import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  username: '',
  setIsLoggedIn: () => {},
  setUsername: () => {},
  lastVisitedPage: '',
  setLastVisitedPage: () => {},
});

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [lastVisitedPage, setLastVisitedPage] = useState(
    localStorage.getItem('lastVisitedPage') || null
  ); 

  const login = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  useEffect(() => {
    if (lastVisitedPage) {
      localStorage.setItem('lastVisitedPage', lastVisitedPage);
    }
  }, [lastVisitedPage]);

  const value = {
    isLoggedIn,
    username,
    login,
    logout,
    lastVisitedPage,
    setLastVisitedPage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
