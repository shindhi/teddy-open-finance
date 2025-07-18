import { useSearchParams } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PageInformationProps {
  totalUsers: number;
  selectedUsers: number;
  limit: number;
}

export function PageInformation({
  totalUsers,
  selectedUsers,
  limit,
}: PageInformationProps) {
  const [, setSearchParams] = useSearchParams();

  function handleLimitChange(value: string) {
    setSearchParams((params) => {
      params.set('limit', value);

      return params;
    });
  }

  return (
    <div
      className={cn(
        'flex flex-col-reverse items-end justify-between gap-8 text-[1.125rem]',
        'md:flex-row md:items-center md:justify-between'
      )}
    >
      <div className={cn('mx-auto flex items-center gap-2', 'md:mx-0')}>
        <strong>{totalUsers}</strong>
        clientes encontrados:
        {selectedUsers > 0 && (
          <span className="text-gray-500 text-sm">
            ({selectedUsers} selecionado
            {selectedUsers !== 1 ? 's' : ''})
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 text-[1.125rem]">
        Clientes por página:
        <select
          className="rounded-md border px-2 py-1.5 text-xs"
          onChange={(e) => handleLimitChange(e.target.value)}
          value={limit}
        >
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="16">16</option>
        </select>
      </div>
    </div>
  );
}
