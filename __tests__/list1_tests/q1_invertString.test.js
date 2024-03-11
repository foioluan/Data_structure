import invertString from '../../src/list1_stacks/q1_invertString';

test('Invert string test', () => {
    expect(invertString('LUAN')).toBe('NAUL');
    expect(invertString('ABACAXI')).toBe('IXACABA');
});