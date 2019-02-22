module.exports = {
  printWidth: 120,
  overrides: [
    {
      files: ["*.json", "themes/**/*.json"],
      options: {
        parser: "json"
      }
    }
  ]
};