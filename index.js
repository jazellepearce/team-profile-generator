const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./libs/Employee");
const Engineer = require("./libs/Engineer");
const Intern = require("./libs/Intern");
const Manager = require("./libs/Manager");

let answers = [];
const questions = [
    {
        type: "input",
        name: "teamName",
        message: "Please insert team name",
    },
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  { type: "input", name: "id", message: "insert id number" 


    },
  {
    type: "input",
    name: "email",
    message: "Please insert email address",
  },
  {
    type: "input",
    name: "github",
    message: "Please insert Github username",
  },
  {
    type: "input",
    name: "number",
    message: "Please enter office number",
  },
  {
    type: "list",
    name: "role",
    message: "What team member would you like to add",
    choices: ["intern", "employee"],
  },

  /* {
        type: 'list',
        name: 'continue',
        message: 'You like to add another team member?',
        choices: ['yes', 'no']
    }*/
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  { type: "input", name: "id", message: "insert id number" },
  {
    type: "input",
    name: "email",
    message: "Please insert email address",
  },
  {
    type: "input",
    name: "school",
    message: "What school do you go to?",
  },

  {
    type: "list",
    name: "continue",
    message: "You like to add another team member?",
    choices: ["engineer", "intern", "no"],
  },
];
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  { type: "input", name: "id", message: "insert id number" },
  {
    type: "input",
    name: "email",
    message: "Please insert email address",
  },
  {
    type: "input",
    name: "github",
    message: "Please insert Github username",
  },

  {
    type: "list",
    name: "continue",
    message: "You like to add another team member?",
    choices: ["engineer", "intern", "no"],
  },
];

function writeToFile(fileName, data) {
 
    fs.writeFile(fileName, data, (err) => {
      // if there is an error
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("Your html has been successfully created!");
      }
    });
  
}

function init() {
  inquirer.prompt(questions).then((data) => {
      answers.push(data)

    askQuestions(data.role);
  });
}
function askQuestions(role) {
  inquirer
    .prompt(role === "engineer" ? engineerQuestions : internQuestions)
    .then((data) => {
      answers.push(data);
      if (data.continue !== "no") {
        askQuestions(data.role);
      } else {
          console.log(123);
        createHTML()
      }
    });
}

function createHTML() {
    const managerData = answers[0]
  const html = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Portfolio</title>
            <style>
                body {background-color: powderblue;}
                body {background-color: powderblue;
                    font-family: Arial, Helvetica, sans-serif;
            }
            h1   {    margin: 0;
                    background: white;
                    position: absolute;
                    left: 50%;
                    margin-right: -50%;
                    transform: translate(-50%, -50%)
                }
            h2 {
                background-color: powderblue;
                text-align: center;
            }
            h3 {
                    background-color: powderblue;
                    text-align: center;
            }
            .row {
                display: flex;
                top: 100%
                
            }
            .card {
                    background-color: white;
                    border:1px solid black;
                    float: left;
                    padding: 10px 3px;
                    width: calc( 100% / 5 - 10px);
                    position: relative;
                    height: 250px;
                    margin-top: 100px;
                    }
            </style>

        </head>
        <body>
            <div class="header">
                <div class="jumbotron bg-warning">
                    <h1 class="display-4 text-white text-center">
                ${managerData.teamName}</h1>
                </div>
            </div>
            <div class="container">
                <div class="row">
                ${
                    answers.map((answer, index) => {
                        console.log(answer)
                        return `
                            <div class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h2>${answer.name}</h2>
                                    <h3>${answer.role}</h3>
                                        <div class="list-group">
                                            <div class="list-group-item">
                                                ${answer.id}
                                            </div>
                                            <div class="list-group-item">
                                                ${answer.email}
                                            </div>
                                            ${index === 0 ? `<div class="list-group-item">
                                                ${answer.number}
                                            </div>` : ""}
                                            ${index > 0 && answer.role === 'engineer' ? `<div class="list-group-item">
                                               <a href = "//github.com/${answer.github}">
                                                 ${answer.github}
                                                </a>
                                            </div>` : ""} 
                                            ${index > 0 && answer.role === 'intern' ? `<div class="list-group-item">
                                                ${answer.school}
                                            </div>` : ""}
                                           



                                        </div>
                                </div>
        
                            </div>
                        `
                    })
                }
                </div>
            </div>
        </body>
    </html>
    `;
    console.log(1234)
  writeToFile("./index.html", html);

}

// Function call to initialize app
init();

