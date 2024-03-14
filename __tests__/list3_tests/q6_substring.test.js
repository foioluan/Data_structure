import substring from "../../src/list3_lists/q6_substring";
import List from "../../src/structures/list";

test('substring test', () => {
    let list = new List();

    list.add('L');
    list.add('U');
    list.add('A');
    list.add('N');
    list.add('T');
    list.add('A');
    list.add('D');
    list.add('S');

    expect(substring(list, 1, 4)).toBe('TADS');
});