import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '../services/update-user';
import type { GetUsersResponse } from '../types/get-users-response';
import type { UpdateUserRequest } from '../types/update-user-request';

interface UpdateUserVariables {
  userId: number;
  data: UpdateUserRequest;
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, data }: UpdateUserVariables) =>
      updateUser(userId, data),

    onMutate: async ({ userId, data }) => {
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
            clients: oldData.clients.map((client) =>
              client.id === userId
                ? { ...client, ...data, updatedAt: new Date().toISOString() }
                : client
            ),
          };
        }
      );

      return { previousUsers };
    },

    onError: (_error, _variables, context) => {
      if (context?.previousUsers) {
        queryClient.setQueryData(['get-users'], context.previousUsers);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['get-users'] });
    },
  });
}
