import checkFormula from '../../src/list1_stacks/q5_is_well_formed';

test('Well formeded formula test', () => {
    // expect(checkFormula('(([[]]))')).toBe(true);
    // expect(checkFormula('[(])')).toBe(false);
    // expect(checkFormula('{[()]}')).toBe(true);
    // expect(checkFormula('((()){)}')).toBe(false);
    expect(checkFormula('[()[()]]()')).toBe(true);
});