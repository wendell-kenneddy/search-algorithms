import { getSortedList } from "./get-sorted-list";
import { List, ListElement } from "./types";

function ternarySearch(list: List, target: ListElement, left: number, right: number) {
  if (right >= left) {
    const mid1 = Math.abs(Math.floor(left + (left - right) / 3));
    const mid2 = Math.abs(Math.floor(right - (right - left) / 3));

    if (list[mid1] == target) return mid1;
    if (list[mid2] == target) return mid2;

    if (list[mid1] > target) return ternarySearch(list, target, left, mid1 - 1);
    if (list[mid1] < target && target < list[mid2])
      return ternarySearch(list, target, mid1 + 1, mid2 - 1);
    return ternarySearch(list, target, mid2 + 1, right);
  }

  return -1;
}

const list = getSortedList(10_000_000);
console.time("ternary-search");
const index = ternarySearch(list, 7_531_277, 0, list.length);
console.timeEnd("ternary-search");
console.log(index);
