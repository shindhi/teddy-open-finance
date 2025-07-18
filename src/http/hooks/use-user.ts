import { useQuery } from '@tanstack/react-query';
import { getUser } from '../services/get-user';

export function useUser(id: number) {
  return useQuery({
    queryKey: ['get-user', id],
    queryFn: () => getUser({ userId: id }),
    enabled: !!id,
  });
}
