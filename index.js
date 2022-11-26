// Importing node modules
const inquirer = require("inquirer");
const fs = require("fs");

// Importing team member classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// Importing HTML generation functionality
const generatePage = require("./src/template");

const teamMembers = [];

// Questions

// Manager questions
const createNewManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the name of your team's manager?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is your manager's ID number?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your manager's email address?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your manager's office number?"
        },
    ])
    .then((manager) => {
        const newManager = new Manager(
            manager.managerName,
            manager.managerId,
            manager.managerEmail,
            manager.officeNumber
        );
        teamMembers.push(newManager);
        addNewTeamMember();
    });
};

// Engineer questions
const createNewEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is this engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is this engineer's ID number?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is this engineer's email address?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is this engineer's GitHub username?",
        },
    ])
    .then((engineer) => {
        const newEngineer = new Engineer(
            engineer.engineerName,
            engineer.engineerId,
            engineer.engineerEmail,
            engineer.engineerGithub
        );
        teamMembers.push(newEngineer);
        addNewTeamMember();
    })
}