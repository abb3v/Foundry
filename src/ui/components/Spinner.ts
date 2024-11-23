import ora, { Ora } from 'ora';
import { ThemeColors } from '../../types/theme.js';
import chalk from "chalk";

export class Spinner {
    private spinner: Ora;
    private theme: ThemeColors;

    constructor(theme: ThemeColors) {
        this.theme = theme;
        this.spinner = ora({
            color: 'cyan',
            spinner: 'dots'
        });
    }

    start(text: string): void {
        this.spinner.start(chalk.cyan(text));
    }

    succeed(text: string): void {
        this.spinner.succeed(chalk.green(text));
    }

    fail(text: string): void {
        this.spinner.fail(chalk.red(text));
    }

    warn(text: string): void {
        this.spinner.warn(chalk.yellow(text));
    }

    stop(): void {
        this.spinner.stop();
    }
}