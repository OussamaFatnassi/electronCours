module.exports = {
  // Other configurations
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "test-results", // Directory where the report will be saved
        outputName: "test-results.xml", // Name of the test report file
      },
    ],
  ],
};
