const inquirer = require('inquirer');
const fs = require('fs');
const generatorMarkdown = require('./utils/generateMarkdown');
// TODO: user input
const question =[
{
    type: 'input',
    name: 'title',
    message: 'What is your title of project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a short description explanation of your project.',
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
},
{
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. Include screenshots as needed.',
},
{
    type: 'list',
    name: 'license',
    message: 'What is the license?',
    choices: ['MIT', 'GPL-v3', 'Apache-2.0', 'Mozilla-Public-License-2.0']
},
{
    type: 'input',
    name: 'contributing',
    message: 'Contributing:',
},
{
    type: 'input',
    name: 'tests',
    message: 'Tests:',
},
{
    type: 'input',
    name: 'questions',
    message: 'Questions:',
},
{
    type: 'input',
    name: 'github',
    message: 'What is your github username:',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email:',
},

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(question).then(function(data){
        writeToFile('professionalREADME.md', generatorMarkdown(data));
    })
}

// Function call to initialize app
init();


