import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import AppNavigator from './src/components/AppNavigator';
import { AuthProvider } from './src/components/AuthContext';

const App = () => {

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
  },
});

export default App;
