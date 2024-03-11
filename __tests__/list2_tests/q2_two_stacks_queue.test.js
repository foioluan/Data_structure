import Queue from '../../src/structures/queue';

let queue;

beforeEach(() => {
    queue = new Queue(5);
});

test('Queue dequeue test', () => {
    queue.enqueue('T')
    queue.enqueue('A')
    queue.enqueue('D')
    queue.enqueue('S')
    expect(queue.dequeue()).toBe('T');
    expect(queue.toString()).toBe('ADS');
});