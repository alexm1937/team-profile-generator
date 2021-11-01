const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, employeeID, email, school) {
        super(name, employeeID, email);
    this.school = school;
    this.roll = "intern";
    }

    getSchool() {
        return this.school;
    }
    getRole() {
        return this.getRole
    }
}


module.exports = Intern;
