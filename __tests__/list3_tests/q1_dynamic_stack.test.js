import DynamicStack from "../../src/list3_lists/q1_dynamic_stack";

test('Dynamic stack test', () => {
    let stack = new DynamicStack();

    stack.push(1);
    stack.push(2);

    expect(stack.toString()).toBe('12');

    stack.pop();

    expect(stack.toString()).toBe('1');
});