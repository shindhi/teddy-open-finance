import { api } from '@/lib/api';
import type { UpdateUserRequest } from '../types/update-user-request';
import type { UpdateUserResponse } from '../types/update-user-response';

export const updateUser = async (
  userId: number,
  request: UpdateUserRequest
) => {
  const result = await api
    .patch(`users/${userId}`, {
      json: request,
    })
    .json<UpdateUserResponse>();

  return result;
};
