import { cn } from '@/lib/utils';
import { CreateClientButton } from './components/create-client-button';
import { ItemCard } from './components/item-card';

export function Dashboard() {
  return (
    <div
      className={cn(
        'flex flex-1 flex-col gap-2',
        'px-6 sm:px-6 md:px-[1.75rem] lg:px-[7.5rem]'
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <strong>16</strong>
          clientes encontrados:
        </div>

        <div className="flex items-center gap-2">Clientes por página:</div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 16 }).map((_, index) => (
          <ItemCard key={index} />
        ))}
      </div>

      <CreateClientButton />
      {/* Paginacao */}
    </div>
  );
}
