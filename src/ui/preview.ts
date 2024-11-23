import chalk from 'chalk';
import boxen from 'boxen';
import { PluginConfig } from '../types/plugin.js';
import { ThemeColors } from '../types/theme.js';

export const showConfigPreview = (config: PluginConfig, theme: ThemeColors): void => {
    const {
        projectName,
        projectLocation,
        buildSystem,
        language,
        minecraftVersion,
        pluginName,
        mainClass,
        packageName,
        description,
        authors,
        website
    } = config;

    const content = [
        ['Project Name', projectName],
        ['Location', projectLocation],
        ['Build System', buildSystem],
        ['Language', language],
        ['Minecraft Version', minecraftVersion],
        ['Plugin Name', pluginName],
        ['Main Class', `${packageName}.${mainClass}`],
        ['Description', description],
        ['Authors', authors.join(', ')],
        ['Website', website || 'N/A']
    ]
        .map(([key, value]) => `${chalk.cyan(key.padEnd(20))} ${value}`)
        .join('\n');

    console.log(
        boxen(content, {
            title: 'Plugin Configuration Preview',
            titleAlignment: 'center',
            padding: 1,
            margin: 1,
            borderStyle: 'round',
            borderColor: 'cyan'
        })
    );
};