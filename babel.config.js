module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module:react-native-dotenv", 
        {
          "envName": "APP_ENV",
          "moduleName": "@env",
          "path": ".env",
          "blocklist": null,
          "allowlist": null,
          "safe": false,
          "allowUndefined": true,
          "verbose": false
        }
      ],
      'react-native-reanimated/plugin',
      [
        "module-resolver", 
        {
          root: ["./src"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@themes": "./src/styles/themes",
            "@routes": "./src/routes",
            "@hooks": "./src/hooks"
          }
        }
      ]
    ]
  };
};
