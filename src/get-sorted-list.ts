export function getSortedList(length: number) {
  return Array(length)
    .fill(0)
    .map((v, i) => i);
}
