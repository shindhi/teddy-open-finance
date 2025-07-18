import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '@/http/types/user';

interface SelectedUsersState {
  selectedUsers: User[];
  addUser: (user: User) => void;
  removeUser: (userId: number) => void;
  clearSelectedUsers: () => void;
  isUserSelected: (userId: number) => boolean;
}

export const useSelectedUsersStore = create<SelectedUsersState>()(
  persist(
    (set, get) => ({
      selectedUsers: [],

      addUser: (user: User) => {
        const currentUsers = get().selectedUsers;

        if (currentUsers.some((selectedUser) => selectedUser.id === user.id)) {
          return;
        }

        const updatedUsers = [...currentUsers, user];
        set({ selectedUsers: updatedUsers });
      },

      removeUser: (userId: number) => {
        const currentUsers = get().selectedUsers;
        const updatedUsers = currentUsers.filter((user) => user.id !== userId);
        set({ selectedUsers: updatedUsers });
      },

      clearSelectedUsers: () => {
        set({ selectedUsers: [] });
      },

      isUserSelected: (userId: number) => {
        return get().selectedUsers.some((user) => user.id === userId);
      },
    }),
    {
      name: 'selected-users',
      storage: {
        getItem: (name) => {
          const str = sessionStorage.getItem(name);
          return str ? JSON.parse(str) : null;
        },
        setItem: (name, value) => {
          sessionStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          sessionStorage.removeItem(name);
        },
      },
    }
  )
);
