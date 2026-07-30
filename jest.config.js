module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: [],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?|expo(nent)?|expo-modules-core|@expo(nent)?/.*|@react-navigation/.*)/)"
  ]
};
