 import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

function getSavedUser() {
  try {
    const savedUser =
      localStorage.getItem('freshcatchUser');

    if (!savedUser) {
      return null;
    }

    return JSON.parse(savedUser);
  } catch (error) {
    localStorage.removeItem('freshcatchUser');
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getSavedUser);

  function login(userData) {
    const loggedInUser = {
      name: userData.name || '',
      email: userData.email || '',
      phone: userData.phone || '',
      role: userData.role || 'USER'
    };

    localStorage.setItem(
      'freshcatchUser',
      JSON.stringify(loggedInUser)
    );

    setUser(loggedInUser);
  }

  function logout() {
    localStorage.removeItem('freshcatchUser');

    setUser(null);
  }

  const isLoggedIn = !!user;

  const isAdmin =
    user?.role === 'ADMIN';

  const isUser =
    user?.role === 'USER';

  const isGuest =
    !user;

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoggedIn,
        isAdmin,
        isUser,
        isGuest
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}