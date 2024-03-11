import Stack from '../../src/structures/stack';
import invertExtremities from '../../src/list1_stacks/q3_invertExtremities';

test('Invert extremities test', () => {
    let stack = new Stack(5);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    expect(invertExtremities(stack)).toBe('52341');

    let stack2 = new Stack(4);

    stack2.push('T');
    stack2.push('A');
    stack2.push('D');
    stack2.push('S');

    expect(invertExtremities(stack2)).toBe('SADT');
});