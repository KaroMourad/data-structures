module.exports = {
  transform: {
    "^.+\\.jsx?$": "@swc/jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
};
