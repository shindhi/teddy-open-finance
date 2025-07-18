import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../services/get-users';
import type { GetUsersRequest } from '../types/get-users-request';

export function useUsers(params: GetUsersRequest) {
  return useQuery({
    queryKey: ['get-users', params],
    queryFn: () => getUsers(params),
  });
}
