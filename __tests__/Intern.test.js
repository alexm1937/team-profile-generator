const { expect, test } = require('@jest/globals');
const expectExport = require('expect');
const Intern = require('../lib/Intern');

test('creates new Intern object', () => {
    const intern = new Intern('Dave', 123, 'dave123@yahoo.com', 1234);
    expect(intern.name).toBe('Dave');
    expect(intern.employeeID).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.anything());
    expect(intern.school).toEqual(expect.anything());

})
