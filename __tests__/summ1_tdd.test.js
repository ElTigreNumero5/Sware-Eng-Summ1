// import the functions as developed to pass each test
const { attendPC, daysLeft } = require('../output_funcs.js');

// smoke test
test('if jest is functioning properly', () => {
    expect(7+7).toBe(14);
})

// TDD - attendPC
describe('tests the attendPC function', () => {
    test('That function returns a number between 0 and 100', () => {
        expect(typeof attendPC(20,10)).toBe('number'); // check for number type
        expect(attendPC(20,10)).toBeGreaterThanOrEqual(0); // check zero or more
        expect(attendPC(20,10)).toBeLessThanOrEqual(100); // check 100 or less
    })
})


// TDD - days left