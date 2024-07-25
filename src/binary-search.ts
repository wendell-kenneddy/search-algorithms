import { getSortedList } from "./get-sorted-list";
import { List, ListElement } from "./types";

// get rid of the slice so the performance goes higher
function binarySearch(list: List, target: ListElement) {
  if (!list.length) throw new Error("List is empty.");
  if (list.length == 1) {
    if (list[0] == target) return list[0];
    throw new Error("Target not found.");
  }

  const middleIndex = Math.floor(list.length / 2);
  const currentValue = list[middleIndex];

  if (currentValue == target) return currentValue;
  if (currentValue > target) {
    return binarySearch(list.slice(0, middleIndex + 1), target);
  }

  return binarySearch(list.slice(middleIndex), target);
}

const list = getSortedList(1_000_000);
console.time("binary-search");
const target = binarySearch(list, 670_351);
console.timeEnd("binary-search");
console.log(target);
