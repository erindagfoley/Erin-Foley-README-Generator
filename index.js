// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import path from 'path';
const generateMarkdown =  require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: 'Please enter your project name',
    },
    {
        type: "input",
        name: "description",
        message: 'Provide a short description explaining the what, why, and how of your project',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
