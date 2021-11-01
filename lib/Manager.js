const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, employeeID, email, officeNum) {
        super(name, employeeID, email);
    this.officeNum = officeNum;
    this.role = "Manager"
    }
    getRole() {
        return this.role;
    }
}


module.exports = Manager;
