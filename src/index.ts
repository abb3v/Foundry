#!/usr/bin/env node
import inquirer from 'inquirer';
import { Command } from 'commander';
import { createBanner } from './ui/components/Banner.js';
import { Spinner } from './ui/components/Spinner.js';
import { Screen } from './ui/screen.js';
import { PluginConfig } from './types/plugin.js';
import { createQuestions } from './ui/prompts.js';
import { showConfigPreview } from './ui/preview.js';
import { defaultTheme } from './types/theme.js';
import { createHelpContent } from './ui/help.js';
import chalk from "chalk";
import {CLIOptions} from "./types/cli.js";
import boxen from "boxen";
import { LIB_VERSION } from './version.js';

const program = new Command()
    .name('foundry')
    .description('CLI tool for initializing Minecraft plugins')
    .version(LIB_VERSION)
    .option('-y, --yes', 'Skip confirmation prompts')
    .option('-i, --inline', 'Run in inline mode (no alternate screen)')
    .option('--no-color', 'Disable colors')
    .option('-v, --verbose', 'Show verbose output')
    .addHelpCommand(false)
    .helpOption(false)
    .action((options) => {
      main(options).catch();
    });

// Custom help command
program
    .command('help')
    .description('Display help information')
    .action(() => {
      console.log(createHelpContent());
      process.exit(0);
    });

program.on('--help', () => {
  console.log(createHelpContent());
});

const spinner = new Spinner(defaultTheme);
let screen: Screen;

async function collectPluginInfo(): Promise<PluginConfig> {
  try {
    console.log(chalk.cyan('\n📋 Configure:\n'));

    const answers = await inquirer.prompt(createQuestions);

    console.log('\n'); // Add some spacing
    showConfigPreview(answers as PluginConfig, defaultTheme);

    if (!program.opts().yes) {
      const confirmation = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'proceed',
          message: chalk.cyan('Would you like to proceed with this configuration?'),
          default: true
        }
      ]);

      if (!confirmation.proceed) {
        console.log(chalk.red('\n❌ Operation cancelled by user'));
        process.exit(0);
      }
    }

    return answers as PluginConfig;
  } catch (error) {
    console.error(chalk.red('\n❌ Error during project configuration:'));
    if (program.opts().verbose) {
      console.error(error);
    }
    process.exit(1);
  }
}

async function main(options: CLIOptions) {
  screen = new Screen(options.inline);

  screen.clear();
  if (!options.inline) {
    screen.enterAlternateScreen();
  }

  screen.log(createBanner(LIB_VERSION));

  // Get plugin configuration
  const config = await collectPluginInfo();

  // TODO: THIS IS ALL TEMPORARY. SIMULATING STUFF BEING DONE.
  // Start project creation
  spinner.start('Creating project structure');
  try {
    // Project generation logic will go here
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate work
    spinner.succeed('Project structure created');

    // Install dependencies
    spinner.start('Installing dependencies');
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate work
    spinner.succeed('Dependencies installed');

    // Configure project
    spinner.start('Configuring project');
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate work
    spinner.succeed('Project configured');

    if (!options.inline) {
      screen.exitAlternateScreen();
    }

    console.log('\n' + boxen(
        chalk.green('🎉 Project initialized successfully!\n\n') +
        chalk.cyan(`CD into your project:\n`) +
        chalk.white(`  cd ${config.projectLocation}\n\n`) +
        chalk.cyan(`Start developing with your favorite editor:\n`) +
        chalk.white(`  code .`) + chalk.gray(' # for VSCode\n') +
        chalk.white(`  nvim .`) + chalk.gray(' # for Neovim'),
        {
          padding: 1,
          margin: 1,
          borderStyle: 'round',
          borderColor: 'green'
        }
    ));

  } catch (error) {
    spinner.fail('Failed to create project');
    if (program.opts().verbose) {
      console.error(error);
    }
    process.exit(1);
  }
}

program.parse();