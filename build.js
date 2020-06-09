// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Text + chalk definitions
const data = {
  import: `${chalk.redBright('import')} ${chalk.white('{')} ${chalk.greenBright('profile')} ${chalk.white('}')} ${chalk.redBright('from')} ${chalk.yellowBright(`'users'`)}`,
  name: chalk.cyanBright(`.name(`) + chalk.yellowBright(`'Lewis Munyi'`) + chalk.cyanBright(')'),
  handle: chalk.cyanBright(`.Handle(`) + chalk.yellowBright(`'@lewismunyi'`) + chalk.cyanBright(')'),
  work: chalk.cyanBright(`.Work(`) + chalk.yellowBright(`'Software Developer'`) + chalk.cyanBright(')'),
  community: chalk.cyanBright(`.Community(`) + chalk.yellowBright(`'Mozilla Open Leader X'`) + chalk.cyanBright(')'),
  twitter: chalk.cyanBright(`.Twitter(`) + chalk.yellowBright(`'https://twitter.com/lewismunyi'`) + chalk.cyanBright(')'),
  npm: chalk.cyanBright(`.npm(`) + chalk.yellowBright(`'https://npmjs.com/~lewismunyi'`) + chalk.cyanBright(')'),
  github: chalk.cyanBright(`.GitHub(`) + chalk.yellowBright(`'https://github.com/lewis-munyi'`) + chalk.cyanBright(')'),
  linkedin: chalk.cyanBright(`.LinkedIn(`) + chalk.yellowBright(`'https://linkedin.com/in/lewismunyi'`) + chalk.cyanBright(')'),
  web: chalk.cyanBright(`.Website(`) + chalk.yellowBright(`'https://lewis-munyi.github.io'`) + chalk.cyanBright(')'),
  card: chalk.cyanBright(`.Card(`) + chalk.yellowBright(`'$ npx ...'`) + chalk.cyanBright(')'),
}

// Actual strings we're going to output
const newline = '\n'
const semicolon = chalk.cyan(';')
const space = "    ";
const profile = chalk.greenBright('profile')

const output = data.import+newline + newline + newline + // data.name + data.handle
  profile + newline + // Add two line spaces
  space + data.name + newline + newline + // Display respective tag
  space + data.work + newline + newline + // Display respective tag
  space + data.web + newline + newline + // Display respective tag
  space + data.community + newline + newline + // Display respective tag
  space + data.linkedin + newline + newline + // Display respective tag
  space + data.github + newline + newline + // Display respective tag
  space + data.twitter + semicolon + newline + newline +  // Display respective tag
  newline + "$ npx @lewismunyi/card"; // Add one whole blank line

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  dimBorder: true,
  borderColor: "green",
  backgroundColor: "#151718"
}

fs.writeFileSync(path.join(__dirname, 'bin/output'), boxen(output, options))