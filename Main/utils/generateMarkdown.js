// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license ==! 'none') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } 
  else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license ==! 'none') {
    return `\n* [License](#license)\n`
  }
  else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license ==! 'none') {
    return `#License
    
    License\n\nThis project is licensed under the ${license} license.`
  }
  else {
    return '';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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
${data.install}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.testing}

## Questions
GitHub: [${data.username}](${data.yourlink})
Email: ${data.email}
`;
}


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license ==! 'none') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } 
  else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license ==! 'none') {
    return `\n* [License](#license)\n`
  }
  else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license ==! 'none') {
    return `#License
    
    License\n\nThis project is licensed under the ${license} license.`
  }
  else {
    return '';
  }
};


module.exports = generateMarkdown;