const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./libs/Employee")
const Engineer = require("./libs/Engineer")
const Intern = require("./libs/Intern")
const Manager = require("./libs/Manager");



let answers = [];
const questions = [
    {
        type: 'input',
        name: 'manager-name',
        message: 'What is your name?'

    },
      {  type: 'input',
        name: 'manager-id',
        message: 'insert id number'

},
    {
        type: 'input',
        name: 'manager-email',
        message: 'Please insert email address'
    },
    {
        type: 'input',
        name: 'manager-Github',
        message: 'Please insert Github username'
    },
       { type: 'input',
        name: 'manager-number',
            message:  'Please enter office number'
       },
       {
           type: 'list',
           name: 'role',
           message: "What team member would you like to add",
           choices: ['intern', 'employee']
       }

   /* {
        type: 'list',
        name: 'continue',
        message: 'You like to add another team member?',
        choices: ['yes', 'no']
    }*/

]


const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'

    },
      {  type: 'input',
        name: 'id',
        message: 'insert id number'

},
    {
        type: 'input',
        name: 'email',
        message: 'Please insert email address'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school do you go to?'
    },


    {
        type: 'list',
        name: 'continue',
        message: 'You like to add another team member?',
        choices: ['engineer', 'intern', 'no']
    },



]
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'

    },
      {  type: 'input',
        name: 'id',
        message: 'insert id number'

},
    {
        type: 'input',
        name: 'email',
        message: 'Please insert email address'
    },
    {
        type: 'input',
        name: 'Github',
        message: 'Please insert Github username'
    },

    {
        type: 'list',
        name: 'continue',
        message: 'You like to add another team member?',
        choices: ['engineer', 'intern', 'no']
    },


]

function init() {
    inquirer.prompt (questions).then(data => {
        askQuestions(data.role)

 
})
}
function askQuestions(role) {
    inquirer.prompt (role === 'engineer' ? engineerQuestions:internQuestions).then(data => {
        answers.push(data)
        if (data.continue !== 'no') {

            askQuestions(data.role)
        }else {
            //to do writefile
            const writeFile = data => {
                fs.writeFile(createHTML, data, err => {
                    // if there is an error 
                    if (err) {
                        console.log(err);
                        return;
                    // when profile is created
                    } else {
                        console.log("Employee profile created")
                    }
                })
            }; 
        }

 
})
}
function createHTML () {
    const html = 
    `<html>
    `
}

// Function call to initialize app
init();