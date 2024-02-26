import React, { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextProps {
  setIsUserAuthenticated: Dispatch<SetStateAction<boolean>>;
  isUserAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const checkLoginStatus = async () => {
    const loginStatus = await AsyncStorage.getItem('login');
    setIsUserAuthenticated(loginStatus === 'true');
  };
  useEffect(() => {
    checkLoginStatus();
  }, []);
  const login = async () => {
    setIsUserAuthenticated(true);

  };

  const logout = async () => {
    try {
      await AsyncStorage.setItem('login', 'false')
      setIsUserAuthenticated(false);
    } catch (error) {
      console.error('Error while logging out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isUserAuthenticated, setIsUserAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
