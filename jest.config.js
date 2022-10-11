module.exports = {
  testEnvironment: `jsdom`,
  preset: `ts-jest`,
  clearMocks: true,
  setupFilesAfterEnv: [`<rootDir>/jest/setupTest.js`],
  testPathIgnorePatterns: [`<rootDir>/.next`, `<rootDir>/node_modules/`],
  moduleFileExtensions: [`js`, `jsx`, `ts`, `tsx`],
  moduleDirectories: [`node_modules`, `<rootDir>`, `<rootDir>/src/`],
  transformIgnorePatterns: [`/node_modules/`, `^.+\\.module\\.(css)$`],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": [
      `babel-jest`,
      {
        presets: [`next/babel`],
        plugins: [`babel-plugin-dynamic-import-node`],
      },
    ],
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/fileMock.js`,
    "\\.(css)$": `identity-obj-proxy`,
    "^@/(.*)$": `<rootDir>/src/$1`,
    "^@/public/(.*)$": `<rootDir>/public/$1`,
    "^@/components/(.*)$": `<rootDir>/src/components/$1`,
    "^@/pages/(.*)$": `<rootDir>/src/pages/$1`,
    "^@/utils/(.*)$": `<rootDir>/src/utils/$1`,
  },
};
