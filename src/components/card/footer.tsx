import { Pencil, Plus } from 'lucide-react';

import { Trash } from '@/assets/icons/trash';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <div className="flex w-full items-center justify-between pt-1.5">
      <Button className="cursor-pointer hover:bg-transparent" variant="ghost">
        <Plus className="size-4" strokeWidth={3} />
      </Button>

      <Button className="cursor-pointer hover:bg-transparent" variant="ghost">
        <Pencil className="size-3.5" strokeWidth={3} />
      </Button>

      <Button className="cursor-pointer hover:bg-transparent" variant="ghost">
        <Trash className="size-4 text-red-500" />
      </Button>
    </div>
  );
}
