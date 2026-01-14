
// import my functions
const { attendPC, daysLeft, getAttendData, buildChart, attendTargetSet } = require('../functions.js');

// set vars needed across multiple tests
// need to provide similar sort of data as the getAttendData function (same cols, but can be shorter)
const csvStr = `month_year,target,attendance_pc
                Jan25,60,65
                Feb25,60,70
                Mar25,60,80`;
// and convert it to text in the same way
const myNotCsv = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvStr);




// ********************************************************************************
// smoke test
test('when pressed to attest is there Jest test quest success?', () => {
    expect(2-1).toBe(1);
})

// ********************************************************************************
// full testing


// TDD - attendPC
describe('tests the attendPC function', () => {
    // test red becuase there's nothing built yet
    test('that function is defined', () => {
        expect(attendPC).toBeDefined();
    })
    // test green after an empty function defined

    // test red because nothing returned by function
    // test still green after update when function requires param inputs 
    test('That function returns a number between 0 and 100', () => {
        // previously this test was passed no parameters - later dev means it now must have params to pass
        expect(typeof attendPC(20,10)).toBe('number'); // check for number type
        expect(attendPC(20,10)).toBeGreaterThanOrEqual(0); // check zero or more
        expect(attendPC(20,10)).toBeLessThanOrEqual(100); // check 100 or less
    });
    // now green after fucntion made to output 10
    // still green after function made to divide attendDays by workingDays inputs (and *100)
    
    // test red becuase function simply returns 10 and received no params
    test('That 20 working days and 10 attendances is 50', () => {
        expect(attendPC(20,10)).toBe(50);
    });
    // now green after function made to divide attendDays by workingDays inputs (and *100)
    
    // test red because the function attempts to divide by zero
    test('zero working days outputs 0', () => {
        expect(attendPC(0,10)).toBe(0);
    });
    // now green after function made to return zero if workingDays is zero
})


// TDD - days left
describe('tests the daysLeft function', () => {
    // test red becuase there's nothing built yet
    test('that function is defined', () => {
        expect(daysLeft).toBeDefined();
    })
    // test green after an empty function defined
    
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


describe('tests getAttendData function', () => {
    test('that function is defined', () => {
        // test function is defined
        expect(getAttendData).toBeDefined();
    });

    // now test that the outputs are arrays - resolve needed becuase of fetch() .then() in formula
    test('that function returns an array for each property 1', () => {
        return expect(getAttendData(myNotCsv, 60)).resolves.toEqual({
            labels: expect.any(Array),
            targets: expect.any(Array),
            attends: expect.any(Array),
        });
    });
    // becuase of the return, each param change needs its own test
    test('that function returns an array for each property 2', () => {
        return expect(getAttendData(myNotCsv, '55')).resolves.toEqual({
            labels: expect.any(Array),
            targets: expect.any(Array),
            attends: expect.any(Array),
        });
    }),
    test('that function returns an array for each property 3', () => {
        return expect(getAttendData(myNotCsv, 1000)).resolves.toEqual({
            labels: expect.any(Array),
            targets: expect.any(Array),
            attends: expect.any(Array),
        });
    });


    // test that the outputs arrays contain valid data
    test('that function returns arrays with valid data types 1', () => {
        // checks arrays contain at least one value of the stated dtype (not the most robust test, but still valid)
        return expect(getAttendData(myNotCsv, 60)).resolves.toEqual({
            labels: expect.arrayContaining([expect.any(String)]),
            targets: expect.arrayContaining([expect.any(Number)]),
            attends: expect.arrayContaining([expect.any(Number)]),
        });
    });
    test('that function returns arrays with valid data types 2', () => {
        return expect(getAttendData(myNotCsv, -20)).resolves.toEqual({
            labels: expect.arrayContaining([expect.any(String)]),
            targets: expect.arrayContaining([expect.any(Number)]),
            attends: expect.arrayContaining([expect.any(Number)]),
        });
    });
    test('that function returns arrays with valid data types 3', () => {
        return expect(getAttendData(myNotCsv, 105)).resolves.toEqual({
            labels: expect.arrayContaining([expect.any(String)]),
            targets: expect.arrayContaining([expect.any(Number)]),
            attends: expect.arrayContaining([expect.any(Number)]),
        });
    });

    // test that the outputs arrays don't contain invalid data
    test('that function dont return arrays with invalid data types 1', () => {
        // can make more robust by checking don't have a wrong dtype - still not perfect, but better
        return expect(getAttendData(myNotCsv, 60)).resolves.toEqual({
            labels: expect.not.arrayContaining([expect.any(Number)]),
            targets: expect.not.arrayContaining([expect.any(String)]),
            attends: expect.not.arrayContaining([expect.any(String)]),
        });
    });
    test('that function dont return arrays with invalid data types 2', () => {
        // can make more robust by checking don't have a wrong dtype - still not perfect, but better
        return expect(getAttendData(myNotCsv, -500)).resolves.toEqual({
            labels: expect.not.arrayContaining([expect.any(Number)]),
            targets: expect.not.arrayContaining([expect.any(String)]),
            attends: expect.not.arrayContaining([expect.any(String)]),
        });
    });
    test('that function dont return arrays with invalid data types 3', () => {
        // can make more robust by checking don't have a wrong dtype - still not perfect, but better
        return expect(getAttendData(myNotCsv, 10568)).resolves.toEqual({
            labels: expect.not.arrayContaining([expect.any(Number)]),
            targets: expect.not.arrayContaining([expect.any(String)]),
            attends: expect.not.arrayContaining([expect.any(String)]),
        });
    });
})

    // test the build chart function - though this is very low risk, probably not really required
describe('Tests the buildChart function', () => {
    test('that function is defined', () => {
        expect(buildChart).toBeDefined();
    })
})

    // test the attendTargetSet() function
describe('Tests the attendTargetSet function', () => {
    test('that function is defined', () => {
        expect(attendTargetSet).toBeDefined();
    })
    // further testing should include mocking this functionality
})
