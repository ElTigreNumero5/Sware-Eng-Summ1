// import my functions
const { getAttendData, buildChart } = require('../functions.js');

// set vars needed across multiple tests
// need to provide similar sort of data as the getAttendData function (same cols, but can be shorter)
const csvStr = `month_year,target,attendance_pc
                Jan25,60,65
                Feb25,60,70
                Mar25,60,80`;
// and convert it to text in the same way
const myNotCsv = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvStr);

// smoke test
test('when pressed to attest is there Jest test quest success?', () => {
    expect(2-1).toBe(1);
})


// full testing
describe('tests all functions', () => {
    test('that getAttendData function is not undefined', () => {
        // test function is defined when passing valid data and anything or nothing for target val
        expect(getAttendData(myNotCsv, undefined)).toBeDefined();
        expect(getAttendData(myNotCsv, 60)).toBeDefined();
        expect(getAttendData(myNotCsv, '55')).toBeDefined();
    });

    // now test that the outputs are arrays - resolve needed becuase of fetch() .then() in formula
    test('that getAttendData function returns an array for each property 1', () => {
        return expect(getAttendData(myNotCsv, 60)).resolves.toEqual({
            labels: expect.any(Array),
            targets: expect.any(Array),
            attends: expect.any(Array),
        });
    });
    // becuase of the return, each param change needs its own test
    test('that getAttendData function returns an array for each property 2', () => {
        return expect(getAttendData(myNotCsv, '55')).resolves.toEqual({
            labels: expect.any(Array),
            targets: expect.any(Array),
            attends: expect.any(Array),
        });
    }),
    test('that getAttendData function returns an array for each property 3', () => {
        return expect(getAttendData(myNotCsv, 1000)).resolves.toEqual({
            labels: expect.any(Array),
            targets: expect.any(Array),
            attends: expect.any(Array),
        });
    });


    // test that the outputs arrays contain valid data
    test('that getAttendData function returns arrays with valid data types 1', () => {
        // checks arrays contain at least one value of the stated dtype (not the most robust test, but still valid)
        return expect(getAttendData(myNotCsv, 60)).resolves.toEqual({
            labels: expect.arrayContaining([expect.any(String)]),
            targets: expect.arrayContaining([expect.any(Number)]),
            attends: expect.arrayContaining([expect.any(Number)]),
        });
    });
    test('that getAttendData function returns arrays with valid data types 2', () => {
        return expect(getAttendData(myNotCsv, -20)).resolves.toEqual({
            labels: expect.arrayContaining([expect.any(String)]),
            targets: expect.arrayContaining([expect.any(Number)]),
            attends: expect.arrayContaining([expect.any(Number)]),
        });
    });
    test('that getAttendData function returns arrays with valid data types 3', () => {
        return expect(getAttendData(myNotCsv, 105)).resolves.toEqual({
            labels: expect.arrayContaining([expect.any(String)]),
            targets: expect.arrayContaining([expect.any(Number)]),
            attends: expect.arrayContaining([expect.any(Number)]),
        });
    });



    // test that the outputs arrays don't contain invalid data
    test('that getAttendData function returns arrays with valid data types', () => {
        // can make more robust by checking don't have a wrong dtype - still not perfect, but better
        return expect(getAttendData(myNotCsv, 60)).resolves.toEqual({
            labels: expect.not.arrayContaining([expect.any(Number)]),
            targets: expect.not.arrayContaining([expect.any(String)]),
            attends: expect.not.arrayContaining([expect.any(String)]),
        });
    });

})