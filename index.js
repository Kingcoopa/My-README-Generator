const inquirer = require("inquirer");
const fs = require("fs");
const newReadme = "newREADME.md";
const generateMarkdown = require("./Assets/generateMD");

// Array of questions
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your Project?"
        
    },
    {
        type: "input", 
        name: "description",
        message: "Give a brief discription of your Project: "
       
    },
    {
        type: "input",
        name: "installation",
        message: "How is your project installed? "
        
    },
    {
        type: "input",
        name: "usage",
        message: "How does someone use your project? "
        
    },
    {
        type: "input",
        name: "contribution",
        message: "Please list the contributors for this project? "
        
    },
    {
        type: "input",
        name: "testing",
        message: "Please provide test instructions for this project? "
    },
    {
        type: "checkbox",
        name: "license",
        message: "Which license did you use for this project:",
        choices: [
            "AGPL",
            "Apache",
            "GNU",
            "ISC",
            "LGPL",
            "MIT",
            "MPL",
            "The_Unlicense"
        ],       
    },
    {
        type: "input",
        name: "gitName",
        message: "What is your GitHub Username? "
        
    },
    {
        type: "input",
        name: "email",
        message: "What is your email? "
        
    }
];

// Function to create README
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
        return console.log(err);
      }
      else{
        return console.log("Congradulations! Your README has been completed")
      }
    });
}

// Function to initialize
function init() {
    inquirer.prompt(questions).then(userdata => writeToFile(newReadme, userdata));
}

// Function call to initialize
init();
