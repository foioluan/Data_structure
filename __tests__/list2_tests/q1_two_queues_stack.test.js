import Stack from '../../src/structures/stack';

let stack;

beforeEach(() => {
    stack = new Stack(5);
});

test('Stack pop test', () => {
    stack.push('T')
    stack.push('A')
    stack.push('D')
    stack.push('S')
    expect(stack.pop()).toBe('S');
    expect(stack.toString()).toBe('TAD');
});