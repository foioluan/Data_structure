// ta errada, não consegui fazer

import Deque from '../../src/list2_queues/q5_deque';

let deque;

beforeEach(() => {
    deque = new Deque(4);
});

test('Deque enqueue test', () => {
    deque.enqueueBack(1);
    deque.enqueueBack(2);
    deque.enqueueFront(4);
    deque.enqueueFront(3);
    expect(deque.toString()).toBe('1234');
});

test('Deque dequeue test', () => {
    deque.enqueueBack(1);
    deque.enqueueBack(2);
    deque.enqueueFront(4);
    deque.enqueueFront(3);
    deque.dequeueFront();
    expect(deque.toString()).toBe('123');
});