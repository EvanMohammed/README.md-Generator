// array of questions for user
const fs = require("fs");
const inquirer = require('inquirer');
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


function questions() {

  return inquirer.prompt([
    {
      type: 'input',
      name: 'project_title',
      message: "What's your project title?",
    },
    {
      type: 'input',
      name: 'description',
      message: "please write a description about your project",

    },
    {
      type: 'input',
      name: 'table_content1',
      message: "what does your project's first content?",
    },
    {
      type: 'input',
      name: 'table_content2',
      message: "what does your project's second content?",
    },
    {
      type: 'input',
      name: 'table_content3',
      message: "what does your project's third content?",
    },
    {
      type: 'input',
      name: 'table_content4',
      message: "what does your project's fourth content?",
    },
    {
      type: 'input',
      name: 'first_install',
      message: "write down the installation first step",
    },
    {
      type: 'input',
      name: 'second_install',
      message: "write down the installation second step",
    },
    {
      type: 'input',
      name: 'third_install',
      message: "write down the installation third step",
    },
    {
      type: 'input',
      name: 'usage',
      message: "your project's usage?",
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license did you use?',
      choices: ['BSD-2-Clause', 'MIT', 'Apache-2.0', 'ISC'],
      filter: function (val) {
        return val;
      },
    },
    {
      type: 'input',
      name: 'test',
      message: "write a sentence for the test section",
    },
    {
      type: 'input',
      name: 'github_username',
      message: "What's your github username?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What's your email address?",
    },
  ])


}

// function to write README file
function generateReadMe(answers) {
  return ` # ${answers.project_title}

## Description 
${answers.description}
## Table of Contents 
- ${answers.table_content1} 
- ${answers.table_content2} 
- ${answers.table_content3} 
- ${answers.table_content4} 

## Installation 
- ${answers.first_install}
- ${answers.second_install}
- ${answers.third_install}

## Usage 
${answers.usage}

## License
https://img.shields.io/static/v1?label=License&message=${answers.license}&color=green

## Tests 
${answers.test}

## Links
- Github Account : https://github.com/${answers.github_username}
- Email Address : ${answers.email}

  
  `;
}

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
questions()
  .then(function (answers) {
    const readMe = generateReadMe(answers);
    return writeFileAsync("README.md", readMe)
  })
  .then(function () {
    console.log("Written to README.md")
  })
  .catch(function (err) {
    console.log(err)
  })

