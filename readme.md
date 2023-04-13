# README Generator
This project focuses on creating a readme generator comprising a command-line application in conjunction with Node.js. The aim is to generate a README.md file based upon project questions, prompts and responses/answers. 

## Name of Project
Choose a descriptive unique name

## Description
Overview and highlight the what, why, and how of your project: such as your motivation, the purpose of building this project, and what issue does your project address?

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Methods](#methods)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Tests](#tests)



## Installation
```
npm install
```
1. In generating your README file, git clone the repository to your local environment to enable the Node.js Project to be locally accessible.
2. Install the npm package dependencies as detailed in the package.JSON, including inquirer( which enables input prompts from the CLI)
3. To run the application enter node index.js in the CLI.
4. Respond to the prompts in the CLI to allow the README to be generated.
5. Following all responses to the prompts, your README will be accessible in the repository: title READMEGEN.md
6. Auto generation of badges for your repository is also enabled by shields.io. In addition, your profile pictures and email is provided. 

## Usage
```
node index.js
```
1. Node index.js uses the inquirer package to deliver CLI prompts: i.e. questions about your project.
2.The application generates markdown and table of contents for the README based on responses you provide to the inquirer prompts.  
3. The fs.writeFile generates your README.md file

## Screenshot example of generated readme.md

![RDME](https://user-images.githubusercontent.com/122957548/231637315-add62edb-fe40-4961-8754-9482e36d38ed.png)


## Methods

Modularisation is key within this project, enabling effective development of input, output and processing.
The following method is also used within the application: 
    1.async/await to manage inquirer and fs.writeFiles promise
   
## Credits 

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).


## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.


## Tests

Write tests for your application. Then provide examples on how to run them here.








