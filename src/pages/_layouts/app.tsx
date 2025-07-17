import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <div className="flex min-h-screen min-w-screen">
      <Outlet />
    </div>
  );
}
