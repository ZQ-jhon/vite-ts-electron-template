const now = new Date;
const buildVersion = `${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`;

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  nsis: {
    language: 4, // 0x0004,
    installerIcon: './buildResources/favicon.ico',
  },
  appId: 'test',
  win: {
    icon: './buildResources/favicon.ico',
    target: [
      {
        target: 'nsis',
        arch: [
          'ia32',
        ],
      },
    ],
  },
  mac: {
    icon: './buildResources/favicon.icns',
  },
  directories: {
    output: 'dist',
    buildResources: './buildResources/**/*',
  },
  files: [
    'src/**/dist/**',
  ],
  extraMetadata: {
    version: buildVersion,
  },
};

module.exports = config;
