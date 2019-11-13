// NPM Modules
const inquirer = require("inquirer");
const fs = require('fs')

// Local Modules
const render = require("./lib/htmlrenderer");

// Constructors
const Manager = require("./lib/constructors/Manager");
const Engineer = require("./lib/constructors/Engineer");
const Intern = require("./lib/constructors/Intern");


// Global Variables
const teamMembers = [
  // new Manager("Brent", 1, "brent@trilogyed.com", 200),
  // new Engineer("Tucker", 2, "tbeauchamp@2u.com", "tuckerbeauchamp"),
  // new Intern("Becky", 3, "becky@becky.com", "UofA"),
  // new Intern("Shelly", 4, "shelly@shelly.com", "UofA")
];
function createManager() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is your ID?",

    },
    {
      type: "input",
      name: "email",
      message: "what is your email address?",

    },
    {
      type: "input",
      name: "office",
      message: "What is your office number?",

    }

  ]).then(function (data) {
    const manager = new Manager(data.name, parseInt(data.id), data.email, parseInt(data.office));
    teamMembers.push(manager);
    makeTeamMembers();

  });
}

function makeTeamMembers() {
  console.log("make team members fired");
  inquirer.prompt([
    {
      type: "list",
      name: "member",
      message: "What type of team member do you want to add?",
      choices: [
        "Engineer",
        "Intern",
        "I am done adding members"
      ]
    }
  ]).then(function (answers) {
    if (answers.member === "Engineer") {
      createEngineer();
    }
    else if (answers.member === "Intern") {
      createIntern();
    }
    else {
      render(teamMembers);
    }
  })
}

function createEngineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is your ID?",

    },
    {
      type: "input",
      name: "email",
      message: "what is your email address?",

    },
    {
      type: "input",
      name: "github",
      message: "What is your Github name?",

    }

  ]).then(function (data) {
    const engineer = new Engineer(data.name, parseInt(data.id), data.email, data.github);
    teamMembers.push(engineer);
    makeTeamMembers();

  });
}
function createIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is your ID?",

    },
    {
      type: "input",
      name: "email",
      message: "what is your email address?",

    },
    {
      type: "input",
      name: "school",
      message: "What is the name of your school?",

    }

  ]).then(function (data) {
    const intern = new Intern(data.name, parseInt(data.id), data.email, data.school);
    teamMembers.push(intern);
    makeTeamMembers();

  });


}



createManager();

