// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## title
  ${data.title}

  ## Project description
  ${data.Projectdescription}

  ## Installation guide
  ${data.installationguide}

  ## Usage
  ${data.Usage}

  ## Contribution guidelines
  ${data.Contributionguidelines}

  ## Test instructions
  ${data.Testinstructions}

  ## License
  ${data.license}

## github
${data.github}

##email
${data.email}



`;
}

module.exports = generateMarkdown;
