import decToBin from '../../src/list1_stacks/q4_dec_to_bin';

test('Decimal to binarie test', () => {
    expect(decToBin(10)).toBe('1010');
    expect(decToBin(15)).toBe('1111');
    expect(decToBin(200)).toBe('11001000');
});