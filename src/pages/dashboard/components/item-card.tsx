import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { DeleteClient } from './delete-client';
import { EditClient } from './edit-client';

export function ItemCard() {
  function handleSelectClient() {}

  return (
    <Card className="gap-4">
      <CardContent className="flex flex-col items-center justify-center gap-2.5">
        <div className="font-bold">Eduardo</div>
        <div className="text-sm">Salário: R$ 3.500,00</div>
        <div className="text-sm">Empresa: R$ 120.500,00</div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Button
          className="m-0 h-auto cursor-pointer p-0! hover:bg-transparent"
          variant="ghost"
        >
          <Plus className="size-4" strokeWidth={3} />
        </Button>

        <EditClient />

        <DeleteClient />
      </CardFooter>
    </Card>
  );
}
