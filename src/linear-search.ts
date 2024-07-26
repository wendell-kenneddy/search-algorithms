import { getSortedList } from "./get-sorted-list";
import { List, ListElement } from "./types";

function linearSearch(list: List, target: ListElement, startIndex: number, endIndex: number) {
  if (!list.length) throw new Error("List is empty.");

  for (let i = startIndex; i < endIndex; i++) {
    if (list[i] == target) return i;
  }

  return -1;
}

const list = getSortedList(10_000_000);
console.time("linear-search");
const target = linearSearch(list, 7_531_277, 0, list.length);
console.timeEnd("linear-search");
console.log(target);
