const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, employeeID, email, officeNum) {
        super(name, employeeID, email);
    this.officeNum = officeNum;
    }
    //getRole)
    //override for manager type
}


module.exports = Manager;




