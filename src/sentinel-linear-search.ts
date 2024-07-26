import { getSortedList } from "./get-sorted-list";
import { List, ListElement } from "./types";

function sentinelLinearSearch(list: List, target: ListElement) {
  if (!list.length) throw new Error("List empty.");
  list[list.length - 1] = target;

  for (let i = 0; i < list.length; i++) {
    if (list[i] == target) return i;
  }
}

const list = getSortedList(1000);
console.time("sentinel-linear-search");
const target = sentinelLinearSearch(list, 1092192);
console.timeEnd("sentinel-linear-search");
console.log(target);
