import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser } from '../services/create-user';
import type { CreateUserRequest } from '../types/create-user-request';
import type { GetUsersResponse } from '../types/get-users-response';

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateUserRequest) => {
      const response = await createUser(data);

      return response;
    },

    onMutate: ({ name, salary, companyValuation }) => {
      queryClient.cancelQueries({ queryKey: ['get-users'] });

      const users = queryClient.getQueryData<GetUsersResponse>(['get-users']);
      const usersArray = users?.clients ?? [];

      const newUser = {
        id: Date.now(),
        name,
        salary,
        companyValuation,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      queryClient.setQueryData<GetUsersResponse>(['get-users'], (oldData) => {
        if (!oldData) {
          return {
            clients: [newUser],
            totalPages: 1,
            currentPage: 1,
          };
        }

        return {
          ...oldData,
          clients: [...usersArray, newUser],
        };
      });

      return { previousData: users, newUser };
    },

    onSuccess: (data, _variables, context) => {
      queryClient.setQueryData<GetUsersResponse>(['get-users'], (oldData) => {
        if (!oldData) {
          return {
            clients: [data],
            totalPages: 1,
            currentPage: 1,
          };
        }

        const updatedClients = oldData.clients.map((client) =>
          client.id === context?.newUser.id ? data : client
        );

        return {
          ...oldData,
          clients: updatedClients,
        };
      });
    },

    onError: (_error, _variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData<GetUsersResponse>(
          ['get-users'],
          context.previousData
        );
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['get-users'] });
    },
  });
}
