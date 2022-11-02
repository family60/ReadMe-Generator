// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const createReadMe = require('./createReadMe');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter project name/title",
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log("Please enter a project name/title to contiue");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Brief explanation/description of your project",
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log("Please enter a description of your project to continue");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installationGuide",
        message: "Explain how to install this project",
        validate: installtionGuide => {
            if (installtionGuide) {
                return true;
            } else {
                console.log("Please enter an explanation to continue");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Explain how to use your project",
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log("You must provide an explanation on how to use your project to continue");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribute",
        message: " Enter information on how to contribute to this project",
        validate: contribute => {
            if (contribute) {
                return true;
            } else {
                console.log("You must provide an explanation on contribution to continue");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "How would someone test your project?",
        validate: test => {
            if (test) {
                return true;
            } else {
                console.log("Please enter an explanation on how someone would test your project to continue");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Choose the license for your project",
        choices: ["MIT", "GNU-General-Public", "Eclipse-Public-License-2.0", "none"],
        default: "MIT",
        validate: license => {
            if (license) {
                return true;
            } else {
                console.log("Please check a box to continue");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username",
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log("Please enter your GitHub username to continue");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email for possible further questioning from other devs",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Please enter your email to finish this process");
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>{
        if(error){
            throw error;
        }else{
            console.log("Complete!");
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (userInput){
        console.log(userInput);
        writeToFile("README.md", createReadMe(userInput));
    });
}

// Function call to initialize app
init();
