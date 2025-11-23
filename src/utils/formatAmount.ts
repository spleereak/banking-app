/**
 * Форматирует сумму перевода в формат: +$155.00 или -$10.52
 * @param amount - сумма перевода (может быть положительной или отрицательной)
 * @returns отформатированная строка с знаком, символом доллара и числом
 */

export function formatAmount(amount: number): string {
  const sign = amount >= 0 ? "+" : "-";

  const absoluteAmount = Math.abs(amount);

  const isInteger = Number.isInteger(absoluteAmount);

  const formattedNumber = isInteger
    ? `${absoluteAmount}.00`
    : absoluteAmount.toFixed(2);

  return `${sign}$${formattedNumber}`;
}
