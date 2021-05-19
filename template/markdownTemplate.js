function readMeTemplate(data) {
 return   `
# ${data.Title}
# Description
${data.Description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
Instructions & Dependencies : ${data.Installation}
# Usage
The app is used for:  ${data.Usage}
# License
This project is licensed under the ${data.License} license. 
![GitHub license]
# Contributing
​Contributors: ${data.Contributors}
# Tests
Test needed for this : ${data.Tests}
# Questions
For any questions email : ${data.Username}  at : ${data.Email}.
`
};


module.exports = readMeTemplate;