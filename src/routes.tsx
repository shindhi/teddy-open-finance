import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AuthRedirect } from './components/auth-redirect';
import { ProtectedRoute } from './components/protected-route';
import { AppLayout } from './pages/_layouts/app';
import { LoginLayout } from './pages/_layouts/login';
import { Dashboard } from './pages/dashboard';
import { Login } from './pages/login';
import { SelectedCustomers } from './pages/selected-customers';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthRedirect>
        <LoginLayout />
      </AuthRedirect>
    ),
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },

  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/selected-customers',
        element: <SelectedCustomers />,
      },
    ],
  },

  {
    path: '*',
    element: <Navigate replace to="/login" />,
  },
]);
