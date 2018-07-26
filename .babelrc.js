// const browserlist = require('./browserlist')

module.export = {
  presets: [
    [
      'env',
      {
        modules: false,
        // targets: {
        //   browsers: browserlist
        // }
      }
    ],
    'react',
    'stage-2'
  ],
  plugins: ['transform-runtime', 'import']
}
