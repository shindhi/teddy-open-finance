import { api } from '@/lib/http';
import type { GetUsersRequest } from '../types/get-users-request';
import type { GetUsersResponse } from '../types/get-users-response';

export const getUsers = async ({
  page,
  limit,
}: GetUsersRequest): Promise<GetUsersResponse> => {
  const response = await api
    .get<GetUsersResponse>('/users', {
      searchParams: { page, limit },
    })
    .json();

  return response;
};
