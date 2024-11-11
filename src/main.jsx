import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import DarkModeContextProvider from './contexts/DarkModeContext.jsx';
import AuthContextProvider from './contexts/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeContextProvider>
  </BrowserRouter>
);
