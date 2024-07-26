export function getSortedList(max: number) {
  return Array(max + 1)
    .fill(0)
    .map((v, i) => i);
}
