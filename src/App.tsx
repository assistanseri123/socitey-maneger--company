import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import ForgotPassword from './components/ForgotPassword';
import RegistrationForm from './components/RegistrationForm';
import ResetPassword from './components/ResetPassword';
import { Dashboard } from './components/dashboard/Dashboard';

function App() {
  const [currentView, setCurrentView] = useState<
    'login' | 'register' | 'forgot-password' | 'reset-password' | 'dashboard'
  >('login');

  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentView('dashboard');
    }
  }, []);

  const handleViewChange = (
    view: 'login' | 'register' | 'forgot-password' | 'reset-password' | 'dashboard'
  ) => {
    setCurrentView(view);
  };

  const handleLoginSuccess = () => {
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setCurrentView('login');
  };

  return (
    <div>
      {currentView === 'login' && (
        <LoginForm
          onForgotPassword={() => handleViewChange('forgot-password')}
          onRegister={() => handleViewChange('register')}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      {currentView === 'forgot-password' && (
        <ForgotPassword onBackToLogin={() => handleViewChange('login')} />
      )}
      {currentView === 'register' && (
        <RegistrationForm onBackToLogin={() => handleViewChange('login')} />
      )}
      {currentView === 'reset-password' && (
        <ResetPassword onBackToLogin={() => handleViewChange('login')} />
      )}
      {currentView === 'dashboard' && <Dashboard onLogout={handleLogout} />}
    </div>
  );
}

export default App;