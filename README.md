<div align="center">
<p align="center">
  <img src="https://i.imgur.com/7nFAdB4.png" width=100px />
</p>

# Foundry CLI

A powerful CLI tool for bootstrapping Minecraft plugins with modern development tooling.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](https://github.com/abb3v/foundry)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

</div>

## 🚀 Features

- **Interactive Setup**: User-friendly CLI interface for creating new plugin projects
- **Multiple Build Systems**: Support for Maven and Gradle
- **Smart Defaults**: Intelligent project structure and naming conventions
- **Modern Tooling**: Built with TypeScript for reliability and maintainability

## 📦 Installation

```bash
# Using npm
npm install -g foundry-cli

# Using yarn
yarn global add foundry-cli
```

## 🎮 Usage

To create a new plugin project, simply run:

```bash
foundry
```

### Command Line Options

```bash
Options:
  -V, --version        Output the version number
  -y, --yes            Skip confirmation prompts
  -i, --inline         Run in inline mode (no alternate screen)
  --no-color           Disable colors in output
  -v, --verbose        Show detailed error messages
  -h, --help           Display help message
```

### Examples

```bash
# Start interactive setup
foundry

# Skip all confirmations
foundry --yes

# Run in inline mode
foundry --inline

# Inline mode with no confirmations
foundry -i -y
```

## 🔧 Environment Variables

You can customize default behaviors using environment variables:

- `FOUNDRY_DEFAULT_AUTHOR`: Set default author name
- `FOUNDRY_DEFAULT_PACKAGE`: Set default package prefix

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/abb3v/foundry.git

# Install dependencies
npm install

# Build the project
npm run build

# Link for local development
npm link

# Run in development mode
npm run dev
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Commander.js](https://github.com/tj/commander.js)
- Interactive prompts powered by [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)
- Beautiful terminal interfaces with [Chalk](https://github.com/chalk/chalk) and [Boxen](https://github.com/sindresorhus/boxen)

---

<div align="center">

Made with ❤️ by [Abb3v](https://github.com/abb3v) & [Kalani](https://github.com/12kc)

</div>
