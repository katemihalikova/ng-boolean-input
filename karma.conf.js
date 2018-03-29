process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      'jasmine',
      'karma-typescript',
    ],
    files: [
      'src/**/index.spec.ts',
      'src/**/*.ts',
    ],
    exclude: [
      'src/**/*.d.ts',
    ],
    preprocessors: {
      "**/*.ts": ['karma-typescript'],
    },
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.test.json',
      bundlerOptions: {
        entrypoints: /\.spec\.ts$/,
      },
      reports: {
        html: {
          "directory": "coverage",
          "subdirectory": ".",
          "filename": ".",
        },
      },
    },
    reporters: ['progress', 'karma-typescript', 'junit'],
    junitReporter: {
      suite: 'ng-boolean-input',
      outputDir: 'report',
      outputFile: 'junit.xml',
      useBrowserName: false,
    },
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity,
  });
}
