import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import type { User } from '@/http/types/user';
import { useSelectedUsersStore } from '@/stores/selected-users-store';
import { formatCurrency } from '@/utils/format-currency';
import { DeleteClient } from './delete-client';
import { EditClient } from './edit-client';

interface ItemCardProps {
  user: User;
}

export function ItemCard({ user }: ItemCardProps) {
  const { addUser, isUserSelected } = useSelectedUsersStore();
  const isSelected = isUserSelected(user.id);

  function handleSelectClient() {
    if (!isSelected) {
      addUser(user);
    }
  }

  return (
    <Card className="flex flex-col justify-between gap-4">
      <CardContent className="flex flex-col items-center justify-center gap-2.5">
        <div className="font-bold">{user.name}</div>
        <div className="text-sm">Salário: {formatCurrency(user.salary)}</div>
        <div className=" text-center text-sm">
          Empresa: {formatCurrency(user.companyValuation)}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Button
          className="m-0 h-auto cursor-pointer p-0! hover:bg-transparent"
          disabled={isSelected}
          onClick={handleSelectClient}
          title={isSelected ? 'Cliente já selecionado' : 'Selecionar cliente'}
          variant="ghost"
        >
          <Plus className="size-4" strokeWidth={3} />
        </Button>

        <EditClient user={user} />

        <DeleteClient userId={user.id} />
      </CardFooter>
    </Card>
  );
}
