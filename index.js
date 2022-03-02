const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const teamArray = [];

function init() {

  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "mName",
          message: "Manager name",
          validate: (answer) => {if (answer !== "") {return true} else {return "Input a value";}},
        },
        {
          type: "input",
          name: "mId",
          message: "Manager Id",
          validate: (answer) => { const validNum = answer.match(/^\d+$/);
            if (validNum){return true} else {return "Input a value";}},
        },
        {
          type: "input",
          name: "mEmail",
          message: "Manager email",
          validate: (answer) => { const validEmail = answer.match(/\S+@\S+\.\S+/);
            if (validEmail) {return true;} else {return "Input a value";}},
        },
        {
          type: "input",
          name: "OfficeNumber",
          message: "Office number",
          validate: (answer) => { const validNum = answer.match(/^\d+$/);
            if (validNum) {return true;} else {return "Input a value";}},
        },
      ])
      .then((answers) => {
        const newManager = new Manager(
          answers.mName,
          answers.mId,
          answers.mEmail,
          answers.OfficeNumber
        );
        
        teamArray.push(newManager);
        createTeam();
      });
  }

  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "teamChoice",
          message: "Add another memeber / Create Team",
          choices: ["Engineer", "Intern", "Create team"],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.teamChoice) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            buildTeam();
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Something went wrong");
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "eName",
          message: "Engineer name",
          validate: (answer) => {if (answer !== "") {return true;} else {return "Input a value";}},
        },
        {
          type: "input",
          name: "eId",
          message: "Engineer Id",
          validate: (answer) => { const validNum = answer.match(/^\d+$/);
            if (validNum) {return true;} else {return "Input a value";}},
        },
        {
          type: "input",
          name: "eEmail",
          message: "Engineer email",
          validate: (answer) => { const validEmail = answer.match(/\S+@\S+\.\S+/);
            if (validEmail) {return true;} else {return "Input a value";}},
        },
        {
          type: "input",
          name: "GitHub",
          message: "Github",
          validate: (answer) => {if (answer != "") {return true;} else {return "Input a value";}},
        },
      ])
      .then((answers) => {
        const newEngineer = new Engineer(
          answers.eName,
          answers.eId,
          answers.eEmail,
          answers.GitHub
        );
        teamArray.push(newEngineer);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "iName",
          message: "Intern name",
          validate: (answer) => {if (answer !== "") {  return true;  } else {return "Input a value";}},
        },
        {
          type: "input",
          name: "iId",
          message: "Intern Id",
          validate: (answer) => { const validNum = answer.match(/^\d+$/);
            if (validNum) {return true;} else {return "Input a value";}},
        },
        {
          type: "input",
          name: "iEmail",
          message: "Intern email",
          validate: (answer) => { const validEmail = answer.match(/\S+@\S+\.\S+/);
            if (validEmail) {return true;} else {return "Input a value";}},
        },
        {
          type: "input",
          name: "school",
          message: "Intern's school",
          validate: (answer) => {if (answer != "") {return true;} else {return "Input a value";}},
        },
      ])
      .then((answers) => {
        const newIntern = new Intern(
          answers.iName,
          answers.iId,
          answers.iEmail,
          answers.school
        );
        teamArray.push(newIntern);
        createTeam();
      });
  }

  function writeToFile(fileName,data){
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
    });
  }

  function buildTeam() {
    writeToFile("./dist/index.html",generateHTML(teamArray));
  }
   addManager();
}

init();
















// const questions = [ {
//     type: 'input',
//     name: 'first_name',
//     message: "What's your first name",
//     validate: (value)=>{ if(value){return true} else {return 'input a value'}},

//   }, {
//     type: 'input',
//     name: 'last_name',
//     message: "What's your last name",
//     validate: (value)=>{ if(value){return true} else {return 'input a value'}},
//   },{
//     type: 'input',
//     name: 'title',
//     message: "What's your Title",
//     validate: (value)=>{ if(value){return true} else {return 'input a value'}},
//   },{
//     type: "input",
//     name: "description",
//     message: "Write a brief description of your project: ",
//     validate: (value)=>{ if(value){return true} else {return 'input a value'}},
// },{
//   type: "input",
//   name: "installation",
//   message: "Describe the installation process if any: ",
//   validate: (value)=>{ if(value){return true} else {return 'input a value'}},
// },{
//   type: "input",
//   name: "usage",
//   message: "What is this project usage for?",
//   validate: (value)=>{ if(value){return true} else {return 'input a value'}},
// },
// {
//   type: "list",
//   name: "license",
//   message: "Chose the appropriate license for this project: ",
//   choices: [
//       "Apache",
//       "Academic",
//       "GNU",
//       "ISC",
//       "MIT",
//       "Mozilla",
//       "Open"
//   ]
// },
//   {
//     type: "input",
//     name: "contributing",
//     message: "Who are the contributors of this projects?",
//     validate: (value)=>{ if(value){return true} else {return 'input a value'}},
// },{
//   type: "input",
//   name: "tests",
//   message: "Is there a test included?",
//   validate: (value)=>{ if(value){return true} else {return 'input a value'}},
// },{
//   type: "input",
//   name: "questions",
//   message: "What do I do if I have an issue? ",
//   validate: (value)=>{ if(value){return true} else {return 'input a value'}},
// }
// ];