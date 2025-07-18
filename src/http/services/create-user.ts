import { api } from '@/lib/http';
import type { CreateUserRequest } from '../types/create-user-request';
import type { CreateUserResponse } from '../types/create-user-response';

export const createUser = async (
  request: CreateUserRequest
): Promise<CreateUserResponse> => {
  const response = await api
    .post<CreateUserResponse>('/users', {
      json: request,
    })
    .json();

  return response;
};
