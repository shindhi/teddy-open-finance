import { Trash } from '@/assets/icons/trash';
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
import { useDeleteUser } from '@/http/hooks/use-delete-user';

interface DeleteClientProps {
  userId: number;
}
export function DeleteClient({ userId }: DeleteClientProps) {
  const { mutate: deleteClient } = useDeleteUser();

  function handleDeleteClient() {
    deleteClient(userId);
  }

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer">
        <Trash className="size-4 text-red-500" strokeWidth={3} />
      </DialogTrigger>
      <DialogContent className="w-full sm:max-w-md md:max-w-[25rem] lg:max-w-[25rem]">
        <DialogHeader>
          <DialogTitle className="text-base">Excluir cliente:</DialogTitle>
          <DialogDescription className="text-base text-foreground">
            Você está prestes a excluir o cliente: <strong>Eduardo</strong>
          </DialogDescription>
          <DialogClose />
        </DialogHeader>

        <DialogFooter>
          <Button
            className="w-full cursor-pointer py-3 font-bold text-sm"
            onClick={handleDeleteClient}
          >
            Excluir cliente
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
