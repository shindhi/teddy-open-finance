import { Outlet } from 'react-router-dom';

export function LoginLayout() {
  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center px-4">
      <Outlet />
    </div>
  );
}
