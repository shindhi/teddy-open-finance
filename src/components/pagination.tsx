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
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = visiblesPages(currentPage, totalPages);

  return (
    <PaginationPrimitive className="flex items-center gap-5">
      <PaginationContent>
        {pages.map((page, index) => {
          return (
            <PaginationItem key={index}>
              {page === 'ellipsis' ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  className="cursor-pointer rounded-xl p-2.5 font-bold is-active:text-white text-sm data-[active=true]:bg-primary data-[active=true]:text-white"
                  isActive={page === currentPage}
                  onClick={() => onPageChange(page)}
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
