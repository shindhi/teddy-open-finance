import { Card } from '@/components/card';
import { cn } from '@/lib/utils';
import { CreateClientButton } from './components/create-client-button';

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
          <Card.Root key={index}>
            <Card.Content />
            <Card.Footer />
          </Card.Root>
        ))}
      </div>

      <CreateClientButton />
      {/* Paginacao */}
    </div>
  );
}
