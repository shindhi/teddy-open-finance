import { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button
          className={cn(
            'mt-3 cursor-pointer',
            'border-custom-orange-500 font-bold text-custom-orange-500 text-sm',
            'hover:bg-custom-orange-500 hover:text-white',
            'transition-all duration-150'
          )}
          onClick={() => setIsOpen(true)}
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

        <CreateClientForm onClose={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
