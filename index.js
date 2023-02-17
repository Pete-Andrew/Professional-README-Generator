const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Project Title',
            name: 'projectTitle'
        },
        {
            type: 'input',
            message: 'Please enter your GitHub user name and link to GitHub profile',
            name: 'questionsGithub'
        },
        {
            type: 'input',
            message: 'Please enter your email address',
            name: 'questionsEmail'
        },
        {
            type: 'input',
            message: 'Description',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Installation',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Usage',
            name: 'usage'
        },
        {
            type: 'list',
            message: 'Licence',
            name: 'licence',
            choices: ['MIT', 'Creative Commons Attribution 4.0', 'Apache license 2.0', 'Do What The F*ck You Want To Public License'],
        },
        {
            type: 'input',
            message: 'Contirbuting',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'Tests',
            name: 'tests'
        },
    ])
    
    .then((response) => {
        console.log(response.usersName)

const usersInfo = 

`# Project Title: 
${response.projectTitle}
## Description: 
${response.description}
## Table of Contents: 

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [licence](#Licence)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation: 
${response.installation}
## Usage: 
${response.usage}
## Licence: 
This product is licenced under the ${response.licence} licence.
## Contributing: 
${response.contributing}
## Tests: 
${response.tests}
## Questions: 
If you would like to learn more about this project or my programming please see the following GitHub:  \n
${"https://github.com/" + response.questionsGithub} \n

If you would like to contact me please use the following email address: \n
${response.questionsEmail} \n
`;

fs.writeFile('README.md', usersInfo, (err) =>
            err ? console.error(err) : console.log('Generating README...')
        )
    })


// `![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)`



// When a user enters the project title, it's displayed as the title of the README.

// When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions, this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.

// When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

// When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile.

// When a user enters their email address, it's added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.

// When a user clicks on the links in the Table of Contents, they are taken to the corresponding section of the README.

//homework overview: https://courses.bootcampspot.com/courses/3018/assignments/44672?module_item_id=831886

//https://github.com/Pete-Andrew

//this product is liscenced under the .... liscence 