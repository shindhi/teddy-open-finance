import { Outlet } from 'react-router-dom';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export function AppLayout() {
  return (
    <SidebarProvider>
      <Sidebar />
      <SidebarInset className="mx-auto max-w-screen xl:max-w-2/3">
        <Header />

        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
