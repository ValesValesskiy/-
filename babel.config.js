module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"], // Adjust if your source code is in a different root
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@shared": "./src/shared",
          "@entities": "./src/entities",
          "@store": "./src/store",
          "@features": "./src/features",
          "@screens": "./src/screens",
          "@layouts": "./src/layouts",
        },
      },
    ],
    "@babel/plugin-transform-class-static-block",
    ["@babel/plugin-proposal-decorators", { version: "2023-11" }],
  ],
};
