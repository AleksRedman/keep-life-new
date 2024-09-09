
// ref: https://umijs.org/config/
import config from './config/config.switch'
import configUI from './config/config-ui.switch'

export default {
  hash: true,
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/base-layout',
      routes: [
        { path: '/', component: '../pages/index' }
      ].concat(
        // configUI().hidePages.find((i) => i === 'reports')
        //   ? []
        //   : [
        //     { path: '/reports', component: '../pages/reports' }
        //   ]
        configUI().hidePages.find((i) => i === 'projects')
          ? []
          : [
            { path: '/projects', component: '../pages/projects' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'projects/kl-mark-1')
          ? []
          : [
            { path: '/projects/kl-mark-1', component: '../pages/kl-mark-1' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'projects/kl-mark-2')
          ? []
          : [
            { path: '/projects/kl-mark-2', component: '../pages/kl-mark-2' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'projects/kl-mark-3')
          ? []
          : [
            { path: '/projects/kl-mark-3', component: '../pages/kl-mark-3' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'projects/kl-mark-4')
          ? []
          : [
            { path: '/projects/kl-mark-4', component: '../pages/kl-mark-4' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'projects/kl-mark-5')
          ? []
          : [
            { path: '/projects/kl-mark-5', component: '../pages/kl-mark-5' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'donate')
          ? []
          : [
            { path: '/donate', component: '../pages/donate' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'donate-puzzle')
          ? []
          : [
            { path: '/donate-puzzle', component: '../pages/donate-puzzle' }
          ]
      ).concat([
        { path: '/en', component: '../pages/index-en' }
        // ]).concat(
        //   configUI().hidePages.find((i) => i === 'reports')
        //     ? []
        //     : [
        //       { path: '/en/reports', component: '../pages/reports-en' }
        //     ]
        // ).concat(
      ]).concat(
        configUI().hidePages.find((i) => i === 'merch')
          ? []
          : [
            { path: '/merch', component: '../pages/merch' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'reviews')
          ? []
          : [
            { path: '/reviews', component: '../pages/reviews' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'reviews')
          ? []
          : [
            { path: '/en/reviews', component: '../pages/reviews-en' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'projects')
          ? []
          : [
            { path: '/en/projects', component: '../pages/projects-en' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'projects/kl-mark-1')
          ? []
          : [
            { path: 'en/projects/kl-mark-1', component: '../pages/kl-mark-1-en' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'projects/kl-mark-2')
          ? []
          : [
            { path: 'en/projects/kl-mark-2', component: '../pages/kl-mark-2-en' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'projects/kl-mark-3')
          ? []
          : [
            { path: 'en/projects/kl-mark-3', component: '../pages/kl-mark-3-en' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'projects/kl-mark-4')
          ? []
          : [
            { path: 'en/projects/kl-mark-4', component: '../pages/kl-mark-4-en' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'projects/kl-mark-5')
          ? []
          : [
            { path: 'en/projects/kl-mark-5', component: '../pages/kl-mark-5-en' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'donate')
          ? []
          : [
            { path: '/en/donate', component: '../pages/donate-en' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'donate-puzzle')
          ? []
          : [
            { path: '/en/donate-puzzle', component: '../pages/donate-puzzle-en' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'merch')
          ? []
          : [
            { path: '/en/merch', component: '../pages/merch-en' }
          ]
      )
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: 'components/Loader/index.js'
      },
      title: 'umijs-2',
      dll: true,
      pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          importWorkboxFrom: 'local'
        }
      },
      // alias: { TODO: *** WIP ***
      //   components: resolve(__dirname, './src/components')
      // },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
    [
      "@babel/plugin-transform-react-jsx",
      {
        "throwIfNamespace": false, // defaults to true
        "runtime": "automatic", // defaults to classic
        "importSource": "custom-jsx-library" // defaults to react
      }
    ],
    ['umi-plugin-theme-switch', {
      themes: configUI().theme,
      defaultTheme: 'light',
      remember: true,
      autoDetectDarkMode: {
        enable: true
      }
    }],
  ],
  theme: {
    '@app-theme-mode': 'var(--app-theme-mode)',
    '@primary-color': configUI().primaryColor,
    '@font-family': 'Inter, sans-serif',
    '@app-primary-color': 'var(--app-primary-color)',
    '@app-secondary-color': 'var(--app-secondary-color)',
    '@app-primary-color-opacity': 'var(--app-primary-color-opacity)',
    '@app-secondary-btn-bg-color': 'var(--app-secondary-btn-bg-color)',
    '@app-secondary-btn-text-color': 'var(--app-secondary-btn-text-color)'
  },
  define: {
    'process.env.CONFIG': config(),
    'process.env.CONFIG_UI': configUI(),
    'process.env.REACT_APP_ENV': process.env.REACT_APP_ENV,
    'process.env.REACT_APP_UI_CONF': process.env.REACT_APP_UI_CONF
  },
  targets: {
    ie: 9,
    ios: 9
  }
}
