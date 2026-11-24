export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['ts-jest', { 
      tsconfig: {
        jsx: 'react-jsx',
        esModuleInterop: true,
        verbatimModuleSyntax: false,
        allowJs: true,
        types: ['node', 'jest']
      } 
    }],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@my-app/ui-library$': '<rootDir>/../ui-library/src/index.ts',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
}