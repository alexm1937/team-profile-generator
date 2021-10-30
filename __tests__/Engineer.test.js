

const { expect, test } = require('@jest/globals');
const expectExport = require('expect');
const Engineer = require('../lib/Engineer');

test('creates new Engineer object', () => {
    const engineer = new Engineer('Dave', 123, 'dave123@yahoo.com', 1234);
    expect(engineer.name).toBe('Dave');
    expect(engineer.employeeID).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.anything());
    expect(engineer.github).toEqual(expect.anything());

})
