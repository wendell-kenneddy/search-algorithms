import { getSortedList } from "./get-sorted-list";
import { List, ListElement } from "./types";

function sequentialSearch(list: List, target: ListElement) {
  if (!list.length) throw new Error("List is empty.");
  if (list.length == 1) {
    if (list[0] == target) return list[0];
    throw new Error("Target not found.");
  }
  let currentValue: ListElement | null = null;

  for (let i = 0; i < list.length; i++) {
    if (list[i] == target) {
      currentValue = list[i];
      break;
    }
  }

  if (!currentValue) throw new Error("Target not found.");
  return currentValue;
}

const list = getSortedList(10_000_000);
console.time("sequential-search");
const target = sequentialSearch(list, 7_531_277);
console.timeEnd("sequential-search");
console.log(target);
