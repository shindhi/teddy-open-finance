/**
 * Formata um valor em reais para o formato brasileiro
 * @param value - Valor a ser formatado
 * @returns Valor formatado em reais
 */
export function formatCurrency(value: number) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}
