import { getSortedList } from "./get-sorted-list";
import { List, ListElement } from "./types";

function binarySearch(list: List, target: ListElement, min: number, high: number) {
  if (!list.length) throw new Error("Empty list.");
  if (list.length == 1) {
    if (list[0] != target) throw new Error("Target not found.");
    return list[0];
  }

  if (high >= min) {
    const mid = Math.floor((high - min) / 2) + min;
    const element = list[mid];

    if (element == target) return mid;
    if (element > target) return binarySearch(list, target, min, mid - 1);
    return binarySearch(list, target, mid + 1, high);
  }

  return -1;
}

const list = getSortedList(10_000_000);
console.time("binary-search");
const target = binarySearch(list, 7_531_277, 0, list.length - 1);
console.timeEnd("binary-search");
console.log(target);
