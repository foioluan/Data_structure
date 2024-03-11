import rpnConverter from "../../src/list1_stacks/q6_reverse_polish_notation";

test('Reverse polish notation converter test', () => {
    expect(rpnConverter('3+4*(2-1)')).toBe('3421-*+');
    expect(rpnConverter('(a+(b*c))')).toBe('abc*+');
    expect(rpnConverter('((a+t)*((b+(a+c))^(c+d)))')).toBe('at+bac++cd+^*');
});