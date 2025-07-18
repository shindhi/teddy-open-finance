import { Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import type { User } from '@/http/types/user';
import { formatCurrency } from '@/utils/format-currency';

interface ItemCardProps {
  user: User;
  onRemove: (userId: number) => void;
}

export function ItemCard({ user, onRemove }: ItemCardProps) {
  return (
    <Card className="flex flex-col justify-between gap-4">
      <CardContent className="flex flex-col items-center justify-center gap-2.5">
        <div className="font-bold">{user.name}</div>
        <div className="text-sm">Salário: {formatCurrency(user.salary)}</div>
        <div className=" text-center text-sm">
          Empresa: {formatCurrency(user.companyValuation)}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-end ">
        <Button
          className="m-0 h-auto cursor-pointer p-0! hover:bg-transparent"
          onClick={() => onRemove(user.id)}
          variant="ghost"
        >
          <Minus className="size-4 text-red-500" strokeWidth={3} />
        </Button>
      </CardFooter>
    </Card>
  );
}
