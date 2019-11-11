// NPM Modules
const inquirer = require("inquirer");
const fs = require('fs')

// Local Modules
const render = require("./lib/htmlrenderer");

// Constructors
const Manager = require("./lib/constructors/Manager");
const Engineer = require("./lib/constructors/Engineer");
const Intern = require("./lib/constructors/Intern");




inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "What is your name?"
    },
    {
        type: "input",
        message: "What is your ID?";
        school: "where did you graduate";
    
    },
        
        
        

    {
        type: "role",
        message: "what is your job position?",
        choices: [
            "engineer",
            "intern",
            "manager",
        ]
    },
]).then(function (response) {
    fs.writeFile("test.json", response, function (err) {
        if (err) {
            console.log(err);
        }
    });
    console.log(response);
});

// Global Variables
const teamMembers = [
  new Manager("Brent", 1, "brent@trilogyed.com", 200),
  new Engineer("Tucker", 2, "tbeauchamp@2u.com", "tuckerbeauchamp"),
  new Intern("Becky", 3, "becky@becky.com", "UofA"),
  new Intern("Shelly", 4, "shelly@shelly.com", "UofA")
];
/***
 * THIS PROJECT IS NOT COMPLETE.
 * YOU WILL NEED TO BUILD YOUR HTML LAYOUTS
 * PROMPT THE USER FOR ALL OF THEIR DIFFERENT TEAM MEMBERS
 */

async function init() {
  render(teamMembers);
}

init();
