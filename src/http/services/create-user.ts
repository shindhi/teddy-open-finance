import { api } from '@/lib/api';
import type { CreateUserRequest } from '../types/create-user-request';
import type { CreateUserResponse } from '../types/create-user-response';

export const createUser = async (request: CreateUserRequest) => {
  const result = await api
    .post('users', {
      json: request,
    })
    .json<CreateUserResponse>();

  return result;
};
