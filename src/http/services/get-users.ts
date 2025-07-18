import { api } from '@/lib/api';
import type { GetUsersRequest } from '../types/get-users-request';
import type { GetUsersResponse } from '../types/get-users-response';

export const getUsers = async ({ page, limit }: GetUsersRequest) => {
  const result = await api
    .get('users', {
      searchParams: { page, limit },
    })
    .json<GetUsersResponse>();

  return result;
};
