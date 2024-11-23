export class Screen {
    private isInline: boolean;

    constructor(inline: boolean = false) {
        this.isInline = inline;
    }

    clear(): void {
        if (!this.isInline) {
            console.clear();
        }
    }

    enterAlternateScreen(): void {
        if (!this.isInline && process.stdout.isTTY) {
            process.stdout.write('\x1b[?1049h');
            process.stdout.write('\x1b[2J');
            process.stdout.write('\x1b[H');
        }
    }

    exitAlternateScreen(): void {
        if (!this.isInline && process.stdout.isTTY) {
            process.stdout.write('\x1b[?1049l');
        }
    }

    log(message: string): void {
        if (this.isInline) {
            console.log(message);
        } else {
            process.stdout.write(message + '\n');
        }
    }
}