module.exports = {
  preset: "jest-expo",
  setupFilesAfterEach: [],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@react-navigation/.*)/)"
  ]
};
