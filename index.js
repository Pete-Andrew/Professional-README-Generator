const inquirer = require('inquirer');
const fs = require('fs');

const licenseImages = {

    "MIT" : '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    "IBM" : '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
    "Apache 2.0" : '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    "Mozilla 2.0" : '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    "The Do What the F*ck You Want to Public" : '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
}

//prompt brings up the questions in the terminal
inquirer 
    .prompt([
        {
            type: 'input',
            message: 'Project Title',
            name: 'projectTitle'
        },
        {
            type: 'input',
            message: 'Please enter your GitHub user name (this is case sensitive)',
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
            // choices: ['MIT', 'Creative Commons Attribution 4.0', 'Apache license 2.0', 'Do What The F*ck You Want To Public License'],
            // using Object.Keys returns the first half of all the key value pairs. Object.value will return the values (e.g. the second half of the key value pairs)
            // choices: Object.keys(licenseImages) creates a list of the keys from the licenceImage variable 
            choices: Object.keys(licenseImages), 
            
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
        console.log("Thanks for entering your data")
        
const licence = `${response.licence}`
console.log("The licence selected: " + licence);

// function logo () {
    if (`${response.licence}` === 'MIT') {
        let licenceLogo = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';            
        console.log(licenceLogo);
    }
    else if (`${response.licence}` === 'IBM') {
        let licenceLogo = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';            
        console.log(licenceLogo);
    } 
    else if (`${response.licence}` === 'Apache 2.0') {
        let licenceLogo = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';  
        console.log(licenceLogo);
    }
    else if (`${response.licence}` === 'Mozilla 2.0') {
        let licenceLogo = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';            
        console.log(licenceLogo);
    } 
    else if (`${response.licence}` === 'The Do What the F*ck You Want to Public') {
        let licenceLogo = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';  
        console.log(licenceLogo);
    };
            
    
// }
// logo();

const usersInfo = 

`# ${response.projectTitle}
## Description: 
${response.description}



${response.licence}

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



// When a user enters the project title, it's displayed as the title of the README.

// When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions, this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.

// When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

// When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile.

// When a user enters their email address, it's added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.

// When a user clicks on the links in the Table of Contents, they are taken to the corresponding section of the README.

//homework overview: https://courses.bootcampspot.com/courses/3018/assignments/44672?module_item_id=831886
//links to makrdown badges: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba 
