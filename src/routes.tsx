import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AuthRedirect } from './components/AuthRedirect';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AppLayout } from './pages/_layouts/app';
import { LoginLayout } from './pages/_layouts/login';
import { Dashboard } from './pages/dashboard';
import { Login } from './pages/login';

export const router = createBrowserRouter([
  {
    path: '/login',
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
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },

  {
    path: '*',
    element: <Navigate replace to="/login" />,
  },
]);
