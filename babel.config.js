module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@apis': './src/apis',
          '@assets': './src/assets',
          '@fonts': './src/assets/fonts',
          '@images': './src/assets/images',
          '@icons': './src/assets/icons',
          '@svgs': './src/assets/svgs',
          '@components': './src/components',
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@state': './src/state',
          '@navigation': './src/navigation',
          '@utils': './src/utils',
        },
      },
    ],
    // 'react-native-reanimated/plugin',
  ],
};
