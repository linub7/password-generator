#!/usr/bin/env node
const program = require('commander');
const clipboardy = require('clipboardy');
const chalk = require('chalk');
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');

const log = console.log;

program.version('1.0.0').description('Simple Password Generator');

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'Save Password to passwords.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Get Generated Password
const generatedPassword = createPassword(length, numbers, symbols);

// Save to file
if (save) {
    savePassword(generatedPassword)
}

// Copy to Clipboard
clipboardy.writeSync(generatedPassword);

// Output Generated Password
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));
log(chalk.yellow('Password Copied to Clipboard'));
