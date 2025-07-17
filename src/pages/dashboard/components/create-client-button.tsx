import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { CreateClientForm } from './create-client-form';

export function CreateClientButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            'cursor-pointer',
            'border-custom-orange-500 font-bold text-custom-orange-500 text-sm',
            'hover:bg-custom-orange-500 hover:text-white',
            'transition-all duration-150'
          )}
          variant="outline"
        >
          Criar cliente
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base">Criar cliente:</DialogTitle>
          <DialogClose />
        </DialogHeader>

        <CreateClientForm />
      </DialogContent>
    </Dialog>
  );
}
