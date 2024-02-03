/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let arr = [];
  for (let i = 0; i < lists.length; i++) {
    if (lists[i]?.val || lists[i]?.val === 0) {
      arr.push([i, lists[i]?.val]);
      lists[i] = lists[i].next;
    } else {
      arr.push([i, Number.MAX_SAFE_INTEGER]);
    }
  }
  let ans = new ListNode();
  let result = ans;
  buildHeap(arr);

  while (arr.length && arr[0][1] !== Number.MAX_SAFE_INTEGER) {
    let temp = new ListNode(arr[0][1]);
    ans.next = temp;
    ans = ans.next;
    if (lists[arr[0][0]]?.val || lists[arr[0][0]]?.val === 0) {
      arr[0] = [arr[0][0], lists[arr[0][0]]?.val];
      lists[arr[0][0]] = lists[arr[0][0]].next;
    } else {
      arr[0] = [arr[0][0], Number.MAX_SAFE_INTEGER];
    }
    maxHeapify(arr, 0, arr.length);
  }

  return result.next;
};

const maxHeapify = (arr, i, heapLength) => {
  let LC = 2 * i + 1;
  let RC = 2 * i + 2;
  let largest;

  if (LC < heapLength && arr[LC][1] < arr[i][1]) largest = LC;
  else largest = i;

  if (RC < heapLength && arr[RC][1] < arr[largest][1]) largest = RC;

  if (largest !== i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    maxHeapify(arr, largest, heapLength);
  }
};

const buildHeap = (arr) => {
  let heapLength = arr.length;
  for (let i = arr.length >> 1; i >= 0; i--) {
    maxHeapify(arr, i, heapLength);
  }
};
