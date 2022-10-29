function createReadMe(userInput) {
    return `
    # ${userInput.title}
    
    ## Table of Contents 
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Licensing](#license)
    - [Contribution](#contribution)
    - [Testing](#testing)
    - [Additional Info](#additional-info)
    ## Description:
    ${userInput.description}
    ## Installation:
    ${userInput.installationGuide}
    ## Usage:
    ${userInput.usage}
    ## License:
    ${userInput.license}
    [![license](https://img.shields.io/badge/license-${userInput.license}-blue)](https://shields.io)
    ## Contribution:
    ${userInput.contribute}
    ## Testing:
    ${userInput.test}
    ## Additional Info:
    - Github: [${userInput.github}](https://github.com/${userInput.github})
    - Email: ${userInput.email} 
    `;
}
module.exports = createReadMe;