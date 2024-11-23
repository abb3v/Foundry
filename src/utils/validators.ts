const nonEmpty = (input: string, errorMessage: string) => input.trim() ? true : errorMessage;

export const validators = {
  projectName: (input: string) =>
      nonEmpty(input, 'Project name cannot be empty') ||
      (/^[a-zA-Z][a-zA-Z0-9-_]*$/.test(input) ? true : 'Project name must start with a letter and contain valid characters'),

  mainClass: (input: string) =>
      nonEmpty(input, 'Main class name cannot be empty') ||
      (/^[A-Z][a-zA-Z0-9]*$/.test(input) ? true : 'Class name must start with an uppercase letter and contain valid characters'),

  packageName: (input: string) =>
      nonEmpty(input, 'Package name cannot be empty') ||
      (/^[a-z][a-z0-9]*(\.[a-z][a-z0-9]*)*$/.test(input) ? true : 'Invalid package name format (e.g., com.example.plugin)')
};
