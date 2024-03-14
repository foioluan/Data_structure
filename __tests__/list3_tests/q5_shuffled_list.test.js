import shuffleList from "../../src/list3_lists/q5_shuffled_list";
import List from "../../src/structures/list";

test('shuffle list test', () => {
    let list = new List();

    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.add(6);

    expect(shuffleList(list)).not.toEqual('654321');
});