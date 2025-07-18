import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '../services/delete-user';
import type { GetUsersResponse } from '../types/get-users-response';

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId: number) => deleteUser({ userId }),

    onMutate: async (userId) => {
      await queryClient.cancelQueries({ queryKey: ['get-users'] });

      const previousUsers = queryClient.getQueryData<GetUsersResponse>([
        'get-users',
      ]);

      queryClient.setQueryData(
        ['get-users'],
        (oldData: GetUsersResponse | undefined) => {
          if (!oldData) {
            return oldData;
          }

          return {
            ...oldData,
            clients: oldData.clients.filter((client) => client.id !== userId),
          };
        }
      );

      return { previousUsers };
    },

    onError: (_error, _userId, context) => {
      if (context?.previousUsers) {
        queryClient.setQueryData(['get-users'], context.previousUsers);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['get-users'] });
    },
  });
}
