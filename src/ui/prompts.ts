import inquirer from 'inquirer';
import { existsSync } from 'fs';
import { validators } from '../utils/validators.js';
import { formatters } from '../utils/formatters.js';
import { MINECRAFT_VERSIONS } from '../constants.js';

export const createQuestions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project?',
    validate: validators.projectName
  },
  {
    type: 'input',
    name: 'projectLocation',
    message: 'Where would you like to create your project?',
    default: (answers: any) => `./${answers.projectName}`,
    validate: (input: string) => {
      const path = input.trim();
      if (!path) return 'Location cannot be empty';
      if (existsSync(path)) return 'Directory already exists';
      return true;
    }
  },
  {
    type: 'list',
    name: 'buildSystem',
    message: 'Select your build system:',
    choices: ['Maven', 'Gradle'],
    default: 'Maven'
  },
  {
    type: 'list',
    name: 'language',
    message: 'Select your programming language:',
    choices: ['Java', 'Kotlin'],
    default: 'Java'
  },
  {
    type: 'list',
    name: 'minecraftVersion',
    message: 'Select Minecraft version:',
    choices: MINECRAFT_VERSIONS,
    default: MINECRAFT_VERSIONS[0]
  },
  {
    type: 'input',
    name: 'pluginName',
    message: 'What is your plugin name?',
    default: (answers: any) => answers.projectName,
    validate: (input: string) => input.trim() ? true : 'Plugin name cannot be empty'
  },
  {
    type: 'input',
    name: 'mainClass',
    message: 'What is your main class name?',
    default: (answers: any) => `${formatters.toClassName(answers.pluginName)}Plugin`,
    validate: validators.mainClass
  },
  {
    type: 'input',
    name: 'packageName',
    message: 'What is your package name?',
    default: (answers: any) => `org.example.${formatters.toPackageName(answers.projectName)}`,
    validate: validators.packageName
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description for your plugin:',
    default: (answers: any) => `A Minecraft plugin called ${answers.pluginName}`
  },
  {
    type: 'input',
    name: 'authors',
    message: 'Enter author names (comma-separated):',
    filter: (input: string) => input.split(',').map(author => author.trim()).filter(author => author)
  },
  {
    type: 'input',
    name: 'website',
    message: 'Enter website URL (optional):',
    default: ''
  }
];