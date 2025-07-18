import { api } from '@/lib/http';
import type { UpdateUserRequest } from '../types/update-user-request';
import type { UpdateUserResponse } from '../types/update-user-response';

export const updateUser = async (
  userId: number,
  request: UpdateUserRequest
): Promise<UpdateUserResponse> => {
  const response = await api
    .put<UpdateUserResponse>(`/users/${userId}`, {
      json: request,
    })
    .json();

  return response;
};
