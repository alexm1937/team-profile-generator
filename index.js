
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/pageTemplate');

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
                var htmlString = generatePage(employees)
                writeFile(htmlString)
                .then(writeFileResponse => {
                    console.log(writeFileResponse);
                })
            }
        })
    }

    const writeFile = fileContent => {
        return new Promise((resolve, reject) => {
            fs.writeFile('./dist/yourTeam.html', fileContent, err => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve({
                    ok: true,
                    message: 'File created! Please navigate to ./dist/ to view yourTeam.html'
                });
            });
        });
    };


getManager()


