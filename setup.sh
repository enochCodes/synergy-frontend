#!/bin/bash

# Create base directories
mkdir -p src/components
mkdir -p src/pages
mkdir -p src/layouts
mkdir -p src/services
mkdir -p src/state
mkdir -p src/utils

# Move App.tsx to the root and clean up unnecessary boilerplate
mv src/App.tsx src/App.tsx.bak
cat > src/App.tsx <<EOF
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
EOF

# Create placeholder files in each folder

# Components
cat > src/components/Button.tsx <<EOF
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
EOF

cat > src/components/Navbar.tsx <<EOF
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <h1 className="text-xl">Synergy</h1>
    </nav>
  );
};

export default Navbar;
EOF

# Pages
cat > src/pages/Home.tsx <<EOF
import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-2xl mt-4">Welcome to Synergy</h1>
    </div>
  );
};

export default Home;
EOF

cat > src/pages/Login.tsx <<EOF
import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-xl mb-4">Log in to Synergy</h1>
    </div>
  );
};

export default Login;
EOF

cat > src/pages/Signup.tsx <<EOF
import React from 'react';

const Signup: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-xl mb-4">Sign up for Synergy</h1>
    </div>
  );
};

export default Signup;
EOF

# Layouts
cat > src/layouts/AuthLayout.tsx <<EOF
import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
EOF

cat > src/layouts/DashboardLayout.tsx <<EOF
import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white p-4">Sidebar</aside>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default DashboardLayout;
EOF

# Services
cat > src/services/authService.ts <<EOF
export const login = async (email: string, password: string) => {
  return { email, token: 'fake-token' }; // Replace with actual API call
};
EOF

cat > src/services/userService.ts <<EOF
export const getUserDetails = async () => {
  return { id: 1, name: 'John Doe', role: 'creator' }; // Replace with actual API call
};
EOF

# State
cat > src/state/userSlice.ts <<EOF
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
EOF

# Utils
cat > src/utils/constants.ts <<EOF
export const API_URL = 'https://api.synergy.com';
EOF

cat > src/utils/validators.ts <<EOF
export const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
EOF

# Clean up boilerplate files
rm src/main.tsx
cat > src/main.tsx <<EOF
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOF

echo "Project structure updated successfully!"

