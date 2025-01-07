import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { io } from 'socket.io-client';
import { Toaster } from 'sonner';
import { ThemeProvider } from './components/theme-provider.js';
import { AuthProvider } from './contexts/auth.context.jsx';
import { GeolocationProvider } from './contexts/location.context.jsx';
import './index.css';
import router from './router.jsx';

const queryClient = new QueryClient();

const socket = io('http://localhost:5000');

socket.on('connection', (value) => {
  console.log(value);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <GeolocationProvider>
          <ThemeProvider defaultTheme="light" storageKey="theme">
            <RouterProvider router={router} />
            <Toaster position="top-center" />
          </ThemeProvider>
        </GeolocationProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
