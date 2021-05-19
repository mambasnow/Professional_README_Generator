// importing all required files
const fs = require('fs');
const inquirer = require("inquirer");
const markdownTemplate = require('./template/markdownTemplate')


// questionaire prompts for the user
const questions = [{
    type: 'input',
    message: ' Title of your project',
    name: 'Title',
    validate: (str) => { if (str){return true} else {return 'You need to enter an answer'}},
                },
    {
        type:'input',
        message:'What is your Github username?',
        name: 'Username',
        validate: (str) => { if (str){return true} else {return 'You need to enter an answer'}},
    },
    {
        type: "list",
        name: "License",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "Description",
        message: "Write a brief description of your project: ",
        validate: (str) => { if (str){return true} else {return 'You need to enter an answer'}},
    },
    {
        type: "input",
        name: "Email",
        message: "Please enter your email: ",
        validate: (str) => { if (str){return true} else {return 'You need to enter an answer'}},
    },
    {
        type:"input",
        name:"Installation",
        message: "Instructions for installations:",
        validate: (str) => { if (str){return true} else {return 'You need to enter instructions'}}
    },
    {
        type:"input",
        name:"Contributors",
        message: "If any add contributors to your project",
    },
    {
        type:"input",
        name:"Tests",
        message:"Do you have tests included with the project?",
        validate: (str) => { if (str){return true} else {return 'You need to enter instructions'}}
    },
    {
        type:"input",
        name:"Usage",
        message:"What is this app used for?",
        validate:  (str) => { if (str){return true} else {return 'You need to enter instructions'}},
    }
            ];





// writing  function using fs 
function writeReadMeFile (fileName, data){
        fs.writeFile(fileName, data, function(err) {
          if (err) {
            return console.log(err);
          }
          console.log ("Finsihed: " + fileName);
        })
        };


// function that takes questions puts it into inquirer and writes out the readme file
 function start() {
     // takes the questions and puts in inquierer parameters
     inquirer.prompt(questions)
         .then(function(data) {
            writeReadMeFile("README.md", markdownTemplate(data));
            })
          }

start();