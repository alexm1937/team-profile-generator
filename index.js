
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//const generatePage = require('./src/pageTemplate');
const testData = require('./src/testData');

const employees = [];

    const getManager = () => {
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
        employees.push(new Manager(name, employeeID, email, officeNum));
        //console.log(employees)
        setNextFunction();
        })
    }
    
    const createEngineer = () => {
        inquirer.prompt([
            {
            type: 'text',
            name: 'name',
            message: "What is your engineers name?"
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
            name: 'github',
            message: "What is your engineers github name?"
            }
        ])
        .then(({ name, employeeID, email, github }) => {
        employees.push(new Engineer(name, employeeID, email, github));
        setNextFunction();
        })
    }

    const createIntern = () => {
        inquirer.prompt([
            {
            type: 'text',
            name: 'name',
            message: "What is the Intern's Name?"
            },
            {
            type: 'text',
            name: 'employeeID',
            message: "What is the Intern's employee ID Number?"
            },
            {
            type: 'text',
            name: 'email',
            message: "What is the Intern's email?"
            },
            {
            type: 'text',
            name: 'school',
            message: "What is the Intern's school?"
            }
        ])
        .then(({ name, employeeID, email, school }) => {
        employees.push(new Intern(name, employeeID, email, school));
        console.log(employees)
        setNextFunction();
        })
    }

    const setNextFunction = () => {
        inquirer.prompt({
        type: 'list', 
        name: 'nextAction',
        message: 'What would you like to do next?',
        choices: ['Enter Engineer', 'Enter Intern', 'Finish Team']
        }).then(({nextAction}) => {
            if (nextAction === 'Enter Engineer') {
                createEngineer();
            }
            if (nextAction === 'Enter Intern') {
                createIntern();
            }
            if (nextAction === 'Finish Team') {
                console.log('finish func trigger')
                testData(employees);
                
            }
        })
    }

    // const finishTeam = () => {
    //     //logs entire builder object
    //     // console.log(this)
    //     const team = this
    //     generateTeam(team);
    // }

getManager()

