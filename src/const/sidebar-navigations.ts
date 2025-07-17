import { Home } from '@/assets/icons/Home';
import { User } from '@/assets/icons/User';
import { UserChecked } from '@/assets/icons/UserChecked';

export const sidebarNavigations = {
  navMain: [
    {
      title: 'Home',
      icon: Home,
      url: '/',
    },
    {
      title: 'Clientes',
      icon: User,
      url: '/clientes',
    },
    {
      title: 'Clientes Selecionados',
      icon: UserChecked,
      url: '/clientes-selecionados',
    },
  ],
};
