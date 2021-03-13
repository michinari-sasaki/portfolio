module.exports = {
  plugins: [
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-sorting'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
