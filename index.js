// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

const questions = [
  
  {
    type: 'input',
    name: 'title',
    message: 'What is the project title?',
  },
  {
    type: 'input',
    name: 'Projectdescription',
    message: 'Provide a detailed description of your project.',
  
  },
  {
    type: 'input',
    name: 'installationguide',
    message: 'Provide a step-by-step description on how to install your project.',
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Provide instructions and examples for use.',
  },
  {
    type: 'input',
    name: 'Contributionguidelines',
    message: 'Provide guidelines on how others can contribute to the project.',
  },
  {
    type: 'input',
    name: 'Testinstructions',
    message: 'Provide any tests for the project and examples on how to run them.',
  },
  {
    type: 'checkbox',
    message: 'Choose a license for your project.',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];


// TODO: Create a function to write README file
function writeToFile (fileName, data) { 
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
  })};


// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
 };

// Function call to initialize app
init()
.then(userInput => {
  return generateMarkdown(userInput);
})
.then(readmeInfo => {
  return writeToFile("./complete/README.md",readmeInfo);
});

