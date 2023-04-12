// TODO: Include packages needed for this application

//External modules
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

//Internal modules
const generateMarkdown = require('./utils/generateMarkdown');
const { default: Prompt } = require('inquirer/lib/prompts/base');
const { type } = require('os');

// TODO: Create an array of questions for user input>
//Inquirer Prompts/ questions for User input: if / else for input??
const questions = [

{
    type: 'input',
    name: 'title',
    question: 'What is the title of your project?',
    validate: (answer) => {
        if (answer.length < 1) {
            return console.log("A valid title is required.");
        }
        return true;
    }
},
{
    type: 'input',
    name: 'description',
    question: 'What is the description of your project?',
    validate: (answer) => {
        if (answer.length < 1) {
            return console.log("A valid description is required.");
        }
        return true;
    }
},
{
    type: 'input',
    name: 'email',
    question: 'What is your email address?',
    validate:(answer) => {
        if (answer.length < 1) {
            return console.log("A valid email is required.");
        }
        return true;
    }
},
{
    type: 'input',
    name: 'github',
    question: 'What is your github user name?',
    validate:(answer) => {
        if (answer.length < 1) {
            return console.log("A valid name is required.");
        }
        return true;
    }
},

{
    type: 'input',
    prompt: 'Enter installation instructions for your project',
    name: 'installation',
}, 
 {
    type: 'input',
    prompt: 'Enter usage instructions for your project',
    name: 'usage',
 },

{
    type: 'input',
    prompt: 'Enter test instructions for your project',
    name: 'tests'
}, 
{
    type: 'input',
    prompt: 'Enter contribution guidelines for your project',
    name: 'contribution'     
},
{
    type: 'list',
    prompt: 'Enter license for your project',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
},     
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile (fileName, data, (err) => {
        if (err) throw err;
        console.log('The README.md file has been generated!')
    });
};


// TODO: Create a function to initialize app ( inquirer prompt)
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const generateContent = generateMarkdown(answers);
        await writeToFile('README.md', generateContent);
        console.log('Successfully wrote to README.md');
    } catch (err) {
        console.log(err);
    }


}

// Function call to initialize app: check???
init();

/*code from clas: Yun
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });*/
