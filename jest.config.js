export default {
  testEnvironment: "node",
  transform: { "^.+\\.jsx?$": "esbuild-jest" },
  transformIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["js", "jsx"],
};
