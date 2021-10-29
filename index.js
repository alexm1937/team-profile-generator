
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');


//first prompt for MANAGER
//prompt should ask questions 
//trigger constructor passing answers as params

function Builder() {
    this.manager;
    
    Builder.prototype.getManager = function() {
        inquirer.prompt([
            {
            type: 'text',
            name: 'managerName',
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
        .then(({ managerName, employeeID, email, officeNum }) => {
        this.manager = new Manager(managerName, employeeID, email, officeNum);
        console.log(this.manager)
        this.setNextFunction();
        })
    }

    Builder.prototype.setNextFunction = function() {
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
            }
        })
    }
}

new Builder().getManager();