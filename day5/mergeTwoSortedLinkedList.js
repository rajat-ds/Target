/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val > list2.val) {
    let temp = list1;
    list1 = list2;
    list2 = temp;
  }
  let res = list1;
  while (list1 && list2) {
    let temp = new ListNode();
    while (list1 && list1.val <= list2.val) {
      temp = list1;
      list1 = list1.next;
    }
    temp.next = list2;
    let temp2 = list1;
    list1 = list2;
    list2 = temp2;
  }
  return res;
};
