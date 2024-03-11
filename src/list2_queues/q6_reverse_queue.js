export default function reverse(queue) {
  
  function reverseString(q) {
    if (q.isEmpty()) {
      return '';
    }

    const front = q.dequeue();
    const reversedString = reverseString(q);
    q.enqueue(front);

    return reversedString + front;
  }

  return reverseString(queue);
}
