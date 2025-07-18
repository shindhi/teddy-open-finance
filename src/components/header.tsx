import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '@/assets/img/logo';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { useSidebar } from './ui/sidebar';

export function Header() {
  const isMobile = useIsMobile();
  const location = useLocation();
  const { toggleSidebar } = useSidebar();
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
  }

  return (
    <header className="flex items-center px-6 sm:px-6 md:px-[1.75rem] lg:px-[7.5rem]">
      {isMobile && (
        <div className="grid w-full grid-cols-3 items-center gap-2 py-6">
          <Button
            className="justify-self-start"
            onClick={toggleSidebar}
            variant="ghost"
          >
            <Menu className="size-6" />
          </Button>

          <Logo className="justify-self-center" />
        </div>
      )}

      {!isMobile && (
        <div
          className={cn(
            'flex flex-1 items-center justify-between gap-14 py-6',
            'hidden md:flex'
          )}
        >
          <Logo />
          <div className="flex items-center gap-8 ">
            <Link
              className={cn(
                'cursor-pointer p-0',
                'data-[active=true]:text-custom-orange-500 data-[active=true]:underline',
                'hover:bg-transparent hover:text-custom-orange-500 hover:underline',
                'transition-all duration-100'
              )}
              data-active={location.pathname === '/dashboard'}
              to="/dashboard"
            >
              Clientes
            </Link>
            <Link
              className={cn(
                'cursor-pointer p-0',
                'data-[active=true]:text-custom-orange-500 data-[active=true]:underline',
                'hover:bg-transparent hover:text-custom-orange-500 hover:underline',
                'transition-all duration-100'
              )}
              data-active={location.pathname === '/selected-customers'}
              to="/selected-customers"
            >
              Clientes selecionados
            </Link>
            <Button
              className={cn(
                'cursor-pointer p-0',
                'hover:bg-transparent hover:text-custom-orange-500 hover:underline',
                'transition-all duration-100'
              )}
              onClick={handleLogout}
              variant="ghost"
            >
              Sair
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-foreground">
            Olá,
            <span className="text-balance font-bold">{user}</span>
          </div>
        </div>
      )}
    </header>
  );
}
