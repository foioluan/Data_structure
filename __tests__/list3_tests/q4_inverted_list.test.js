import invertList from "../../src/list3_lists/q4_inverted_list";
import List from "../../src/structures/list";

test('Invert list test', () => {
    let list = new List();

    list.add(1)
    list.add(2)
    list.add(3)
    list.add(4)
    
    let invertedList = invertList(list);

    expect(invertedList.toString()).toBe('1234');
});