import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Dashboard() {
  return (
    <div
      className={cn(
        'flex flex-1 flex-col gap-2',
        'px-6 sm:px-6 md:px-[1.75rem] lg:px-[7.5rem]'
      )}
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2" />

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
      {/* Paginacao */}
    </div>
  );
}
