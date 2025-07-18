import { api } from '@/lib/api';
import type { GetUserRequest } from '../types/get-user-request';
import type { GetUserResponse } from '../types/get-user-response';

export const getUser = async ({ userId }: GetUserRequest) => {
  const result = await api
    .get<GetUserResponse>(`users/${userId}`)
    .json<GetUserResponse>();

  return result;
};
