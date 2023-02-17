const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Project Title',
            name: 'prodjectTitle'
        },
        {
            type: 'input',
            message: 'Description',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Table of Contents',
            name: 'ToC'
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
            message: 'Liscence',
            name: 'liscence',
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
        {
            type: 'input',
            message: 'Questions',
            name: 'questions'
        },
    ])
    .then((response) => {

        console.log(response.usersName)

const usersInfo = 

`##Project Title: 
${response.projectTitle}
##Description: 
${response.description}
##Table of Contents: 
${response.ToC}
##Installation: 
${response.installation}
##Usage: 
${response.usage}
##Liscence: 
${response.liscence}
##Contributing: 
${response.contributing}
##Tests: 
${response.tests}
##Questions: 
${response.questions}
`;

        fs.writeFile('README.txt', usersInfo, (err) =>
            err ? console.error(err) : console.log('User\'s info logged!')
        )
    })


//homework overview: https://courses.bootcampspot.com/courses/3018/assignments/44672?module_item_id=831886