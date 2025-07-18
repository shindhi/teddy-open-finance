import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useSelectedUsersStore } from '@/stores/selected-users-store';
import { formatCurrency } from '@/utils/format-currency';
import { ItemCard } from './components/item-card';

export function SelectedCustomers() {
  const { selectedUsers, removeUser, clearSelectedUsers } =
    useSelectedUsersStore();

  function handleRemoveUser(userId: number) {
    removeUser(userId);
  }

  function handleClearAll() {
    clearSelectedUsers();
  }

  if (selectedUsers.length === 0) {
    return (
      <div
        className={cn(
          'flex flex-1 flex-col items-center justify-center gap-4',
          'px-6 py-10 sm:px-6 md:px-[1.75rem] lg:px-[7.5rem]'
        )}
      >
        <h2 className="font-bold text-2xl text-gray-600">
          Nenhum cliente selecionado
        </h2>
        <p className="text-gray-500">
          Vá para a página de clientes e selecione alguns para vê-los aqui.
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex flex-1 flex-col gap-6',
        'px-6 py-10 sm:px-6 md:px-[1.75rem] lg:px-[7.5rem]'
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-lg">
          <strong>{selectedUsers.length}</strong>
          {selectedUsers.length === 1
            ? 'cliente selecionado'
            : 'clientes selecionados'}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {selectedUsers.map((user) => (
          <ItemCard key={user.id} onRemove={handleRemoveUser} user={user} />
        ))}
      </div>

      <Button
        className={cn(
          'mt-3 cursor-pointer',
          'border-custom-orange-500 font-bold text-custom-orange-500 text-sm',
          'hover:bg-custom-orange-500 hover:text-white',
          'transition-all duration-150'
        )}
        onClick={handleClearAll}
        variant="outline"
      >
        Limpar clientes selecionados
      </Button>
    </div>
  );
}
