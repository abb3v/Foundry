import chalk from 'chalk';
import boxen from 'boxen';

export const createHelpContent = (): string => {
    const sections = [
        {
            title: 'Usage',
            content: `  $ foundry [options]

  Initialize a new Minecraft plugin project interactively.`
        },
        {
            title: 'Options',
            content: `  -V, --version        Output the version number
  -y, --yes            Skip confirmation prompts
  -i, --inline         Run in inline mode (no alternate screen)
  --no-color          Disable colors in output
  -v, --verbose       Show detailed error messages
  -h, --help          Display this help message`
        },
        {
            title: 'Examples',
            content: `  $ foundry                 # Start interactive setup
  $ foundry --yes          # Skip all confirmations
  $ foundry --inline       # Run in inline mode
  $ foundry -i -y          # Inline mode with no confirmations`
        },
        {
            title: 'Project Types',
            content: `  • Java with Maven
  • Java with Gradle
  • Kotlin with Maven
  • Kotlin with Gradle`
        },
        {
            title: 'Environment Variables',
            content: `  FOUNDRY_DEFAULT_AUTHOR    Set default author name
  FOUNDRY_DEFAULT_PACKAGE  Set default package prefix`
        }
    ];

    const formatSection = (section: { title: string; content: string }) => {
        return `${chalk.cyan.bold(section.title)}\n${section.content}\n`;
    };

    return boxen(
        sections.map(formatSection).join('\n'),
        {
            padding: 1,
            margin: 1,
            borderStyle: 'round',
            borderColor: 'cyan',
            title: 'Foundry CLI Help',
            titleAlignment: 'center'
        }
    );
};