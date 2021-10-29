const { expect, test } = require('@jest/globals');
const expectExport = require('expect');
const Employee = require('../lib/Employee');

//jest.mock('../lib/Manager');

test('creates new Employee object', () => {
    const employee = new Employee('Dave', 123, 'dave123@yahoo.com');
    expect(employee.name).toBe('Dave');
    expect(employee.employeeID).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.anything());

})