import { Link } from 'react-router-dom';
import { Logo } from '@/assets/img/logo';
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Sidebar as SidebarPrimitive,
  useSidebar,
} from '@/components/ui/sidebar';
import { sidebarNavigations } from '@/const/sidebar-navigations';

export function Sidebar({
  ...props
}: React.ComponentProps<typeof SidebarPrimitive>) {
  const { isMobile } = useSidebar();

  if (!isMobile) {
    return null;
  }

  return (
    <SidebarPrimitive {...props}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {sidebarNavigations.navMain.map((item) => {
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link to={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </SidebarPrimitive>
  );
}
