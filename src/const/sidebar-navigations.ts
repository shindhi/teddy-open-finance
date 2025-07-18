import { Home } from '@/assets/icons/home';
import { User } from '@/assets/icons/user';
import { UserChecked } from '@/assets/icons/user-checked';

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
      url: '/dashboard',
    },
    {
      title: 'Clientes Selecionados',
      icon: UserChecked,
      url: '/selected-customers',
    },
  ],
};
