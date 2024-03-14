import DynamicQueue from "../../src/list3_lists/q2_dynamic_queue";

test('Dynamic queue test', () => {
    let queue = new DynamicQueue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.toString()).toBe('21');

    queue.dequeue();

    expect(queue.toString()).toBe('1');
});