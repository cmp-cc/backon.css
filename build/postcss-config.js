module.exports = {
  use: [
    'autoprefixer',
    'cssnano'
  ],
  map: {
    inline: false,
    annotation: true,
    sourcesContent: true
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'Edge >= 12',
      'IE >= 8',
      'iOS >= 8',
      'Safari >= 6',
      'Android >= 4',
    ]
  }
}