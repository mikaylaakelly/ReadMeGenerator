
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return '';
  }
}


function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n* [License](#license)\n`;
  } else {
    return '';
  }
}


function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    
This project is licensed under the ${license} license.`;
  } else {
    return '';
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To install the necessary items, run the command: ${data.install}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
To run any tests, run the command: ${data.testing}

## Questions
For any further questions, I have linked my Email and a link to my GitHub profile!

GitHub: ${data.yourlink}
Email: ${data.email}
`;
}

module.exports = generateMarkdown;