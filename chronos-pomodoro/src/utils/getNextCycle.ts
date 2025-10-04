export function getNextCycle(currencyCycle: number) {
  return currencyCycle === 0 || currencyCycle === 8 ? 1 : currencyCycle + 1;
}
