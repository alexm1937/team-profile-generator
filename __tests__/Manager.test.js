const { expect, test } = require('@jest/globals');
const expectExport = require('expect');
const Manager = require('../lib/Manager');

//jest.mock('../lib/Manager');

test('creates new Manager object', () => {
    const manager = new Manager('Dave', 123, 'dave123@yahoo.com', 1234);
    expect(manager.name).toBe('Dave');
    expect(manager.employeeID).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.anything());
    expect(manager.officeNum).toEqual(expect.any(Number));

})
