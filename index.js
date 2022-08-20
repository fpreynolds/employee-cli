const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const path = requires('path');
const fs = requires('fs');
const render = require('./template.js');


const distDir = path.resolve(__dirname, "dist");
const distPath = path.join(distDir, 'index.html');

const team = [];
const idArray = [];

console.log('\nreset dist with `npm run reset`');

function app() {
    function newManager() {
        console.log('Answer all questions to build your team');
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'managerName',
                    message: "Enter manager name",
                    validate: (answer) => {
                        if (answer !== "") {
                            return true;
                        }
                        return "!Invalid Entry!";
                    },
                },
                {
                    type: 'input',
                    name: 'managerId',
                    message: "Enter manager ID",
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/);
                        if (pass) {
                            return true;
                        }
                        return "!Invalid Entry!";
                    },
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: "Enter managers email address",
                    validate: (answer) => {
                        const pass = answer.match(/\S+@\S+\.\S+/);
                        if (pass) {
                            return true;
                        }
                        return "!Invalid Entry!";
                    },
                },
                {
                    type: 'input',
                    name: 'managerOfficeNum',
                    message: "Enter managers office number",
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/);
                        if (pass) {
                            return true;
                        }
                        return "!Invalid Entry!";
                    },
                },

            ])
            .then((answers) => {
                const manager = new Manager(
                    answers.managerName,
                    answers.managerId,
                    answers.managerEmail,
                    answers.managerOfficeNum
                );
                team.push(manager);
                idArray.push(answers.managerId);
                createTeam();
            });
    }

    function createTeam() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'chooseMember',
                    message: 'Choose member to add, or finalize',
                    choices: [
                        'engineer',
                        'intern',
                        'finalize',
                    ],
                },
            ])
            .then((userChoice) => {
                switch (userChoice.chooseMember) {
                    case 'engineer':
                        addEngineer();
                        break;
                    case 'intern':
                        addIntern();
                        break;
                    default:
                        finalizeTeam();
                }
            });
    }

    function addEngineer() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "Enter engineer name",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "!Invalid Entry!";
                },
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "Enter engineer ID",
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                        if (idArray.includes(answer)) {
                            return 'ID already in use, try again';
                        } else {
                            return true;
                        }
                    }
                    return "!Invalid Entry!";
                },
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "Enter engineer email address",
                validate: (answer) => {
                    const pass = answer.match(/\S+@\S+\.\S+/);
                    if (pass) {
                        return true;
                    }
                    return "!Invalid Entry!";
                },
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "Enter engineer GitHub username",
                validate: (answer) => {
                  if (answer !== '') {
                    return true;
                  }
                  return "!Invalid Entry!";
                },
              },
        ])
        .then((answers) => {
            const engineer = new Engineer(
                answers.engineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerGithub
            );
            team.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        });
    }

    function addIntern() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "Enter intern name",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "!Invalid Entry!";
                },
            },
            {
                type: 'input',
                name: 'internId',
                message: "Enter intern ID",
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                        if (idArray.includes(answer)) {
                            return 'ID already in use, try again';
                        } else {
                            return true;
                        }
                    }
                    return "!Invalid Entry!";
                },
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "Enter intern email address",
                validate: (answer) => {
                    const pass = answer.match(/\S+@\S+\.\S+/);
                    if (pass) {
                        return true;
                    }
                    return "!Invalid Entry!";
                },
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "Enter intern school name",
                validate: (answer) => {
                  if (answer !== '') {
                    return true;
                  }
                  return "!Invalid Entry!";
                },
              },
        ])
        .then((answers) => {
            const intern = new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internGithub
            );
            team.push(intern);
            idArray.push(answers.internId);
            createTeam();
        });
    }

    function finalizeTeam() {
        if (!fs.existsSync(distDir)) {
            fs.mkdir(distDir);
        }
        fs.writeFileSync(distPath, render(team), 'utf-8');
    }
    newManager();
}
app();