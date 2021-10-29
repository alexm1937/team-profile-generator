
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const generatePage = require('./src/generateHTML');

class Builder {
    constructor() {
    this.manager;
    this.engineer = [];
    this.intern = [];
    }

    getManager () {
        inquirer.prompt([
            {
            type: 'text',
            name: 'name',
            message: "What is the Team Manager's Name?"
            },
            {
            type: 'text',
            name: 'employeeID',
            message: "What is the Team Manager's employee ID Number?"
            },
            {
            type: 'text',
            name: 'email',
            message: "What is the Team Manager's email?"
            },
            {
            type: 'text',
            name: 'officeNum',
            message: "What is the Team Manager's office number?"
            }
        ])
        .then(({ name, employeeID, email, officeNum }) => {
        this.manager = new Manager(name, employeeID, email, officeNum);
        console.log(this.manager)
        this.setNextFunction();
        })
    }
    //get engineer info
    createEngineer () {
        inquirer.prompt([
            {
            type: 'text',
            name: 'managerName',
            message: "What is your engineers Name?"
            },
            {
            type: 'text',
            name: 'employeeID',
            message: "What is your engineers employee ID Number?"
            },
            {
            type: 'text',
            name: 'email',
            message: "What is your engineers email?"
            },
            {
            type: 'text',
            name: 'officeNum',
            message: "What is your engineers office number?"
            }
        ])
        .then(({ managerName, employeeID, email, officeNum }) => {
        this.manager = new Manager(managerName, employeeID, email, officeNum);
        console.log(this.manager)
        this.setNextFunction();
        })
    }
//get intern info

    setNextFunction () {
        inquirer.prompt({
        type: 'list', 
        name: 'nextAction',
        message: 'What would you like to do next?',
        choices: ['Enter Engineer', 'Enter Intern', 'Finish Team']
        }).then(({nextAction}) => {
            if (nextAction === 'Enter Engineer') {
                console.log('engineer func triggered!')
            }
            if (nextAction === 'Enter Intern') {
                console.log('intern func triggered!')
            }
            if (nextAction === 'Finish Team') {
                console.log('finsih team func triggered!')
                this.finishTeam();
            }
        })
    }
}

new Builder().getManager();
