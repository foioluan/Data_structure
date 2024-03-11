import Queue from "../../src/structures/queue";
import reverse from "../../src/list2_queues/q6_reverse_queue";

let queue;

beforeEach(() => {
    queue = new Queue(4);
});

test('Reverse queue test', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(reverse(queue)).toBe('4321');
});