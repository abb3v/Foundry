export const formatters = {
  toClassName: (name: string) =>
      name
          .split(/[-_]/)
          .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
          .join(''),

  toPackageName: (name: string) =>
      name.toLowerCase().replace(/[-_]/g, '')
};
