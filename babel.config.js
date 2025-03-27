module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // Use 'babel-preset-expo' for Expo projects
    plugins: [
      'react-native-reanimated/plugin',
    ],
  };
};