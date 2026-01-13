const { multiply, divide } = require('../funcs_for_testing')


// smoke test
test('when pressed to attest is there Jest test quest success?', () => {
    expect(2-1).toBe(1);
})


describe('tests all functions', () => {
    test('that multiply funciton works with numbers', () => {
        expect(multiply(3,5)).toBe(15);
        expect(multiply(1,1)).toBe(1);
        expect(multiply(3.1,3)).toBe(9.3);
    });

    test('that multiply function works with strings', () => {
        expect(multiply('3','2')).toBe(6);
        expect(multiply('7','4')).toBe(28);
    })

    test('that divide function works with numbers', () => {
        expect(divide(8,4)).toBe(2);
    });
})