import { getSortedList } from "./get-sorted-list";
import { List, ListElement } from "./types";

function simpleLinearSearch(list: List, target: ListElement, start: number, end: number) {
  for (let i = start; i < end; i++) {
    if (list[i] == target) return i;
  }
}

function jumpSearch(list: List, target: ListElement, jump: number) {
  if (!list.length) return -1;
  let prev: number = 0;

  for (let i = 0; i < list.length; i += jump) {
    if (list[i] == target) return i;
    if (list[i] > target) {
      return simpleLinearSearch(list, target, prev + 1, i);
    }
    prev = i;
    if (i + jump >= list.length) i = list.length - jump - 1;
  }

  return -1;
}
//            0  1   2   3   4   5   6   7   8   9   10  11
const list = getSortedList(10_000_000);
console.time("jump-search");
const target = jumpSearch(list, 7_531_277, 250);
console.timeEnd("jump-search");
console.log(target);
