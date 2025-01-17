// TODO: Include packages needed for this application
import fs from 'fs'
import inquirer from 'inquirer'
import path from 'path'
const generateMarkdown =  require('./utils/generateMarkdown')
import markdown from ('./utils/generateMarkdown') //This might do the same as line 5. If so, change it to this because this is the syntax used in class

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
   {
    type: "input",
    name: "installation",
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running'
   },
   {
    type: "input",
    name: "usage",
    message: 'Provide instructions for use'
   },
   {
    type: "input",
    name: "credits",
    message: 'List your collaborators, third-party assets, or tutorials'
   },
   {
    type: "checkbox",
    name: "license",
    message: 'Please select a license for this project',
    choices: ['MIT', 'APACHE2.0', 'Boost1.0', 'MPL2.0', 'BSD2', 'BSD3', 'none'],
   },

]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
init();