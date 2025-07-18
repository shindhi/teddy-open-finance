import { useCallback, useMemo, useState } from 'react';
import { Pagination } from '@/components/pagination';
import { useUsers } from '@/http/hooks/use-users';
import { cn } from '@/lib/utils';
import { useSelectedUsersStore } from '@/stores/selected-users-store';
import { CreateClientButton } from './components/create-client-button';
import { ItemCard } from './components/item-card';
import { PageInformation } from './components/page-information';

export function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(16);

  const { data: users } = useUsers({ page: currentPage, limit });
  const { selectedUsers } = useSelectedUsersStore();

  const filteredUsers = useMemo(() => {
    if (!users?.clients) {
      return [];
    }

    const selectedUserIds = new Set(selectedUsers.map((user) => user.id));
    return users.clients.filter((user) => !selectedUserIds.has(user.id));
  }, [users?.clients, selectedUsers]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return (
    <div
      className={cn(
        'flex flex-1 flex-col gap-2',
        'px-6 py-10 sm:px-6 md:px-[1.75rem] lg:px-[7.5rem]'
      )}
    >
      <PageInformation
        limit={limit}
        selectedUsers={selectedUsers.length}
        setLimit={setLimit}
        totalUsers={filteredUsers.length}
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {filteredUsers.map((user) => (
          <ItemCard key={user.id} user={user} />
        ))}
      </div>

      {filteredUsers.length === 0 &&
        users?.clients &&
        users.clients.length > 0 && (
          <div className="flex flex-1 items-center justify-center py-12">
            <div className="text-center">
              <p className="font-medium text-gray-600 text-lg">
                Todos os clientes desta página foram selecionados
              </p>
              <p className="text-gray-500 text-sm">
                Navegue para outras páginas ou remova alguns da seleção
              </p>
            </div>
          </div>
        )}

      <CreateClientButton />

      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={users?.totalPages ?? 0}
      />
    </div>
  );
}
