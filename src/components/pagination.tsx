import { useSearchParams } from 'react-router-dom';
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  Pagination as PaginationPrimitive,
} from '@/components/ui/pagination';
import { visiblesPages } from '@/utils/visibles-pages';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const [, setSearchParams] = useSearchParams();

  const pages = visiblesPages(currentPage, totalPages);

  function handlePageChange(page: number) {
    setSearchParams((params) => {
      params.set('page', page.toString());

      return params;
    });
  }

  return (
    <PaginationPrimitive className="flex items-center gap-5">
      <PaginationContent>
        {pages.map((page) => {
          return (
            <PaginationItem key={page}>
              {page === 'ellipsis' ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  className="cursor-pointer rounded-xl p-2.5 font-bold is-active:text-white text-sm data-[active=true]:bg-primary data-[active=true]:text-white"
                  isActive={page === currentPage}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          );
        })}
      </PaginationContent>
    </PaginationPrimitive>
  );
}
