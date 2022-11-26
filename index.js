// Importing node modules
const inquirer = require("inquirer");
const fs = require("fs");

// Importing team member classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// Importing HTML generation functionality
const generateCards = require("./src/template");

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
    });
}

// Intern questions
const createNewIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is this intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is this intern's ID number?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is this intern's email address?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school does this intern attend?"
        },
    ])
    .then((intern) => {
        const newIntern = new Intern(
            intern.internName,
            intern.internId,
            intern.internEmail,
            intern.internSchool
        );
        teamMembers.push(newIntern);
        addNewTeamMember();
    });
}

// Function to add members to the team
const addNewTeamMember = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "newTeamMember",
            message: "Please select one of the following roles to add to your team:",
            choices: ["Engineer", "Intern", "My team is complete!"]
        }
    ])
    .then((res) => {
        console.log(res);
        if (res.newTeamMember === "Engineer") {
            createNewEngineer();
        } else if (res.newTeamMember === "Intern") {
            createNewIntern();
        } else {
            const template = generateCards(teamMembers);
            writeFile(template);
        }
    })
}

// Writing HTML file
const writeFile = (data) => {
    fs.writeFile("./dist/index.html", data, err => {
        console.log(data),
        err ? console.log(err) : console.log("Your custom HTML file has been successfully created!");
    })
}

// Calling createNewManager to kick off the application
createNewManager();