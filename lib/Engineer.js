const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, employeeID, email, github) {
    super(name, employeeID, email);
    this.github = github;
    this.role = "Engineer";
    }

    getGitHub() {
        return this.github;
    }
    getRole() {
        this.role;
    }
} 
module.exports = Engineer;