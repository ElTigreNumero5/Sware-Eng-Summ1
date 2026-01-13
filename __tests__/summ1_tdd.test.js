// import the functions as developed to pass each test
const { attendPC, daysLeft } = require('../output_funcs.js');

// smoke test
test('if jest is functioning properly', () => {
    expect(7+7).toBe(14);
})

// TDD - attendPC
describe('tests the attendPC function', () => {
    // test red because nothing returned by function
    // then test updated when function requires param inputs - green 
    test('That function returns a number between 0 and 100', () => {
        // previously this test was passed no parameters - later dev means it now must have params to pass
        expect(typeof attendPC(20,10)).toBe('number'); // check for number type
        expect(attendPC(20,10)).toBeGreaterThanOrEqual(0); // check zero or more
        expect(attendPC(20,10)).toBeLessThanOrEqual(100); // check 100 or less
    });
    // now green after fucntion made to output 10
    // still green after function made to divide attendDays by workingDays inputs (and *100)
    
    // test red becuase function simply returned 10 and received no params
    test('That 20 working days and 10 attendances is 50', () => {
        expect(attendPC(20,10)).toBe(50);
    });
    // now green after function made to divide attendDays by workingDays inputs (and *100)
    
    // test red because the function attempted to divide by zero
    test('zero working days outputs 0', () => {
        expect(attendPC(0,10)).toBe(0);
    });
    // now green after function made to return zero if workingDays is zero
})


// TDD - days left
describe('tests the daysLeft function', () => {
    // test red becuase daysLeft() doesn't do anything
    // later test red because this test doesn't pass any params and the function now needs them
    test('that outputs a number >= 0', () => {
        expect(typeof daysLeft(10,20,80)).toBe('number');
        expect(daysLeft(10,20,80)).toBeGreaterThanOrEqual(0);
    });
    // greeen after function made to output 1
    // green after params added to these tests

    // red becuase function doesn't have any input params
    test('three parameter inputs', () => {
        expect(daysLeft.length).toBe(3);
    });
    // green after function given 3 params, attendDays, workDays, targetPC

    // red because function still simply returns 1
    test('10 day attendance, 20 day working month, 80% target is 6 days left', () => {
        expect(daysLeft(10,20,80)).toBe(6);
    });
    // green after function made to calculate the number of days left from the inputs

    
})