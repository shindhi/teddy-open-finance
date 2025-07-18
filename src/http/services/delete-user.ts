import { api } from '@/lib/api';
import type { DeleteUserRequest } from '../types/delete-user-request';

export const deleteUser = async ({ userId }: DeleteUserRequest) => {
  const result = await api.delete(`users/${userId}`).json<string>();

  return result;
};
