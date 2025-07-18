/**
 * Retorna as páginas visíveis para a paginação
 * @param currentPage - Página atual
 * @param totalPages - Total de páginas
 * @returns Páginas visíveis
 * @example
 *  Página 1 de 10: [1] 2 ... 10
 *  Página 3 de 10: 1 [3] 4 ... 10
 *  Página 5 de 10: 1 ... 4 [5] 6 ... 10
 *  Página 8 de 10: 1 ... 7 [8] 9 10
 *  Página 10 de 10: 1 ... 9 [10]
 */
export function visiblesPages(currentPage: number, totalPages: number) {
  const pages: (number | 'ellipsis')[] = [];

  pages.push(1);

  if (currentPage > 3) {
    pages.push('ellipsis');
  }

  for (
    let i = Math.max(2, currentPage - 1);
    i <= Math.min(totalPages - 1, currentPage + 1);
    i++
  ) {
    if (!pages.includes(i)) {
      pages.push(i);
    }
  }

  if (currentPage < totalPages - 2) {
    pages.push('ellipsis');
  }

  if (totalPages > 1 && !pages.includes(totalPages)) {
    pages.push(totalPages);
  }

  return pages;
}
