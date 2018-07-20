import browserlist from './browserlist';

 export  default {
  presets: [
    ['env', {
      modules: false,
      targets: {
        browsers: browserlist,
      },
    }],
    'react',
    'stage-2',
  ],
  plugins: [
    'transform-runtime',
    'import'
  ],
};
