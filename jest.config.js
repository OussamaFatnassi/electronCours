module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: ".", outputFile: "jest-junit.xml" }],
  ],
};
