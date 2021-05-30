const now = new Date;
const buildVersion = `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`;

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  directories: {
    output: 'dist',
    buildResources: './buildResources/**/*',
  },
  files: [
    'packages/**/dist/**',
  ],
  extraMetadata: {
    version: buildVersion,
  },
};

module.exports = config;
