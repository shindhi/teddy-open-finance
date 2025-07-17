import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '@/assets/img/Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { useSidebar } from './ui/sidebar';

export function Header() {
  const isMobile = useIsMobile();
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
          <div className=" flex items-center gap-8 ">
            <Link
              className={cn(
                'cursor-pointer p-0',
                'hover:bg-transparent hover:text-custom-orange-500 hover:underline',
                'transition-all duration-100'
              )}
              to="/dashboard"
            >
              Clientes
            </Link>
            <Link
              className={cn(
                'cursor-pointer p-0',
                'hover:bg-transparent hover:text-custom-orange-500 hover:underline',
                'transition-all duration-100'
              )}
              to="/clientes-selecionados"
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
