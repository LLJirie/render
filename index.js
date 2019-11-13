// NPM Modules
const inquirer = require("inquirer");
const fs = require('fs')

// Local Modules
const htmlRender = require("./lib/constructors/htmlrenderer");

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
    const manager = new Manager(data.name, data.id, data.email, data.office);
    teamMembers.push(manager);
    makeTeamMembers();

  });
}

function makeTeamMembers() {
  inquirer.prompt([
    {
      type: "list",
      name: "member-type",
      message: "What type of team member do you want to add?",
      choices: [
        "Engineer",
        "Intern",
        "I am done adding members"
      ]
    }
  ]).then(function (answers) {
    if (answers.member - type === "Engineer") {
      createEngineer();
    }
    else if (answers.member - type === "Intern") {
      createIntern();
    }
    else {
      buildTeam();
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
      name: "office",
      message: "What is your Github name?",

    }

  ]).then(function (data) {
    const engineer = new Engineer(data.name, data.id, data.email, data.github);
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
      name: "office",
      message: "What is the name of your school?",

    }

  ]).then(function (data) {
    const engineer = new Engineer(data.name, data.id, data.email, data.github);
    teamMembers.push(engineer);
    makeTeamMembers();

  });



  // async function init() {
  //   render(teamMembers);
  // }

  createManager();


}


// async function init() {
//   render(teamMembers);
// }

// createManager();



function makeTeamMembers() {
  inquirer.prompt([
    {
      type: "list",
      name: "member-type",
      message: "What type of team member do you want to add?",
      choices: [
        "Engineer",
        "Intern",
        "I am done adding members"
      ]
    }
  ]).then(function (answers) {
    if (answers.member - type === "Engineer") {
      createEngineer();
    }
    else if (answers.member - type === "Intern") {
      createIntern();
    }
    else {
      buildTeam();
    }
  })
}





// async function init() {
//   render(teamMembers);
// }

createManager();
createEngineer();
createIntern();
