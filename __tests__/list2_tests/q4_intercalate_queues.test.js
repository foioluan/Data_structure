import Queue from '../../src/structures/queue';
import intercalateQueues from '../../src/list2_queues/q4_intercalate_queues';

let queue1;
let queue2;

beforeEach(() => {
    queue1 = new Queue(4);
    queue2 = new Queue(4);
});

test('Intercalate queues test', () => {
    queue1.enqueue(1)
    queue1.enqueue(2)
    queue1.enqueue(3)
    queue1.enqueue(4)
    queue2.enqueue(5)
    queue2.enqueue(6)
    queue2.enqueue(7)
    queue2.enqueue(8)
    expect(intercalateQueues(queue1, queue2)).toBe('15263748');
});