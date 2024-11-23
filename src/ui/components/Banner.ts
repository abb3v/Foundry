import chalk from 'chalk';
import boxen from 'boxen';

export const createBanner = (version: string): string => {
    const banner = `
███████╗ ██████╗ ██╗   ██╗███╗   ██╗██████╗ ██████╗ ██╗   ██╗
██╔════╝██╔═══██╗██║   ██║████╗  ██║██╔══██╗██╔══██╗╚██╗ ██╔╝
█████╗  ██║   ██║██║   ██║██╔██╗ ██║██║  ██║██████╔╝ ╚████╔╝ 
██╔══╝  ██║   ██║██║   ██║██║╚██╗██║██║  ██║██╔══██╗  ╚██╔╝  
██║     ╚██████╔╝╚██████╔╝██║ ╚████║██████╔╝██║  ██║   ██║   
╚═╝      ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝   ╚═╝   
  `;

    const bannerLines = banner.split('\n').map(line => line.trim());
    const bannerWidth = Math.max(...bannerLines.map(line => line.length));

    const versionText = `v${version}`;
    const versionPadding = Math.floor((bannerWidth - versionText.length) / 2);
    const centeredVersion = ' '.repeat(versionPadding) + versionText;

    const copyrightText = 'MIT License · Abb3v · All rights reserved';
    const copyrightPadding = Math.floor((bannerWidth - copyrightText.length) / 2);
    const centeredCopyright = ' '.repeat(copyrightPadding) + copyrightText;

    return boxen(
        chalk.cyan(banner) +
        chalk.gray(centeredVersion) +
        '\n\n' +
        chalk.gray(centeredCopyright),
        {
            padding: 1,
            margin: 1,
            borderStyle: 'round',
            borderColor: 'cyan'
        }
    );
};
