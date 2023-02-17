Acceptance Criteria
Create a command-line application that accepts user input.

When a user is prompted for information about the application repository, a high-quality, professional README.md is generated with:

The title of my project

Sections entitled:

Description

Table of Contents

Installation

Usage

License

Contributing

Tests

Questions

When a user enters the project title, it's displayed as the title of the README.

When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions, this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.

When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile.

When a user enters their email address, it's added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.

When a user clicks on the links in the Table of Contents, they are taken to the corresponding section of the README.

Getting Started
Here are some guidelines to help you get started:

Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.

Make sure that your repo includes a package.json with the required dependencies. You can create one by running npm init when you first set up the project, before installing any dependencies.