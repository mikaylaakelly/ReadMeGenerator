const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('../../generateMarkdown.js');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are some things the user will need to know about using your repo?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should be applied?',
        choices: ['APACHE 2.0', 'MIT', 'GPL 3.0', 'NONE' ],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What guidelines should be applied when contributing to this repo?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What command should be used to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'install',
        message: 'what command did you use to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'yourlink',
        message: 'What is the link to your GitHub profile?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

]


function writeToFile(fileName, data) {
    const filePath = path.join(process.cwd(), fileName);
    fs.writeFile(filePath, data, (err) => {
        console.log('Creating ReadMe!');
        if (err) {
            console.error(err);
        } else {
            console.log(`ReadMe has been created at ${filePath}`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
            console.log('Creating ReadMe!');
            writeToFile('ReadMe.md', generateMarkdown({ ...responses }));
        });
}

// Function call to initialize app
init();