import { api } from '@/lib/http';
import type { GetUserRequest } from '../types/get-user-request';
import type { GetUserResponse } from '../types/get-user-response';

export const getUser = async ({
  userId,
}: GetUserRequest): Promise<GetUserResponse> => {
  const response = await api.get<GetUserResponse>(`/users/${userId}`).json();

  return response;
};
