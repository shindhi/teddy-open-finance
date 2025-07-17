import { Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { EditClientForm } from './edit-client-form';

export function EditClient() {
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

        <EditClientForm />
      </DialogContent>
    </Dialog>
  );
}
