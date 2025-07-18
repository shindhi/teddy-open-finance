import { useCallback, useState } from 'react';
import { Pagination } from '@/components/pagination';
import { useUsers } from '@/http/hooks/use-users';
import { cn } from '@/lib/utils';
import { CreateClientButton } from './components/create-client-button';
import { ItemCard } from './components/item-card';

export function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(16);

  const { data: users, isLoading } = useUsers({ page: currentPage, limit });

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
      <div
        className={cn(
          'flex flex-col-reverse items-end justify-between gap-8 text-[1.125rem]',
          'md:flex-row md:items-center md:justify-between'
        )}
      >
        <div className={cn('mx-auto flex items-center gap-2', 'md:mx-0')}>
          <strong>{users?.clients.length}</strong>
          clientes encontrados:
        </div>

        <div className="flex items-center gap-2 text-[1.125rem]">
          Clientes por página:
          <select
            className="rounded-md border px-2 py-1.5 text-xs"
            onChange={(e) => setLimit(Number(e.target.value))}
            value={limit}
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {users?.clients.map((user) => (
          <ItemCard key={user.id} user={user} />
        ))}
      </div>

      <CreateClientButton />

      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={users?.totalPages ?? 0}
      />
    </div>
  );
}
