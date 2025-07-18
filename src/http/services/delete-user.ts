import { api } from '@/lib/http';
import type { DeleteUserRequest } from '../types/delete-user-request';

export const deleteUser = async ({
  userId,
}: DeleteUserRequest): Promise<string> => {
  const response = await api.delete<string>(`/users/${userId}`).json();

  return response;
};
