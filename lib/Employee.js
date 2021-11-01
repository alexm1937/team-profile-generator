
class Employee {
    constructor(name, employeeID, email) {
    this.name = name;
    this.employeeID = employeeID;
    this.email = email;
    this.roll = "employee";
    }
    
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Employee