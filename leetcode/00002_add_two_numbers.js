var addTwoNumbers = function (l1, l2) {
  const sum = new ListNode();
  let pointer = sum;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const l1Val = l1 ? l1.val : 0;
    const l2Val = l2 ? l2.val : 0;

    const sum = l1Val + l2Val + carry;
    const sumDigit = sum % 10;
    carry = Math.trunc(sum / 10); //get int part of num

    pointer.next = new ListNode(sumDigit);
    pointer = pointer.next;

    l1 &&= l1.next;
    l2 &&= l2.next;
  }

  return sum.next;
};
