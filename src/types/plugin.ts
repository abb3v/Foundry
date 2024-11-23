export interface PluginConfig {
    projectName: string;
    projectLocation: string;
    buildSystem: 'Maven' | 'Gradle';
    language: 'Java' | 'Kotlin';
    minecraftVersion: string;
    pluginName: string;
    mainClass: string;
    packageName: string;
    description: string;
    authors: string[];
    website: string;
}