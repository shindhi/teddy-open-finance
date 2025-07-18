import { LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '@/assets/img/logo';
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Sidebar as SidebarPrimitive,
  useSidebar,
} from '@/components/ui/sidebar';
import { sidebarNavigations } from '@/const/sidebar-navigations';
import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';

export function Sidebar({
  ...props
}: React.ComponentProps<typeof SidebarPrimitive>) {
  const { isMobile } = useSidebar();
  const location = useLocation();
  const { logout } = useAuth();

  function handleLogout() {
    logout();
  }

  if (!isMobile) {
    return null;
  }

  return (
    <SidebarPrimitive {...props}>
      <SidebarHeader className="w-full bg-[#363636] py-10">
        <Logo className="w-full" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu className="gap-3 pt-12">
          {sidebarNavigations.navMain.map((item) => {
            const isActive = location.pathname === item.url;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className="data-[active=true]:bg-transparent"
                  isActive={isActive}
                >
                  <Link to={item.url}>
                    <item.icon
                      className={cn(
                        'data-[active=false]:text-black',
                        'data-[active=true]:text-custom-orange-500'
                      )}
                    />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
        <SidebarFooter className="mt-auto">
          <SidebarMenuButton
            className="flex items-center justify-center gap-2"
            onClick={handleLogout}
          >
            <LogOut className="text-black" />
            Sair
          </SidebarMenuButton>
        </SidebarFooter>
      </SidebarContent>
    </SidebarPrimitive>
  );
}
