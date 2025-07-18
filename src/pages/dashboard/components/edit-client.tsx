import { Pencil } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { User } from '@/http/types/user';
import { EditClientForm } from './edit-client-form';

interface EditClientProps {
  user: User;
}

export function EditClient({ user }: EditClientProps) {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer">
        <Pencil className="size-3.5" strokeWidth={3} />
      </DialogTrigger>
      <DialogContent className="w-full sm:max-w-md md:max-w-[25rem] lg:max-w-[25rem]">
        <DialogHeader>
          <DialogTitle className="text-base">Editar cliente:</DialogTitle>
          <DialogClose />
        </DialogHeader>

        <EditClientForm user={user} />
      </DialogContent>
    </Dialog>
  );
}
