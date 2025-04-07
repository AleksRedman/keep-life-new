
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
      routes: [].concat(
        configUI().country !== 'Ukraine'
          ? []
          : [
            { path: '/', component: '../pages/index' }
          ]
      ).concat(
        // configUI().hidePages.find((i) => i === 'reports')
        //   ? []
        //   : [
        //     { path: '/reports', component: '../pages/reports' }
        (configUI().hidePages.find((i) => i === 'projects') && configUI().country !== 'Ukraine')
          ? []
          : [
            { path: '/projects', component: '../pages/projects' }
          ]
      ).concat(
        (configUI().hidePages.find((i) => i === 'activity-reporting') && configUI().country !== 'Ukraine')
          ? []
          : [
            { path: '/activity-reporting', component: '../pages/activity-reporting' }
          ]
      ).concat(
        (configUI().hidePages.find((i) => i === 'projects/kl-mark-1') && configUI().country !== 'Ukraine')
          ? []
          : [
            { path: '/projects/kl-mark-1', component: '../pages/kl-mark-1' }
          ]
      ).concat(
        (configUI().hidePages.find((i) => i === 'projects/kl-mark-2') && configUI().country !== 'Ukraine')
          ? []
          : [
            { path: '/projects/kl-mark-2', component: '../pages/kl-mark-2' }
          ]
      ).concat(
        (configUI().hidePages.find((i) => i === 'projects/kl-mark-3') && configUI().country !== 'Ukraine')
          ? []
          : [
            { path: '/projects/kl-mark-3', component: '../pages/kl-mark-3' }
          ]
      ).concat(
        (configUI().hidePages.find((i) => i === 'projects/kl-mark-4') && configUI().country !== 'Ukraine')
          ? []
          : [
            { path: '/projects/kl-mark-4', component: '../pages/kl-mark-4' }
          ]
      ).concat(
        (configUI().hidePages.find((i) => i === 'projects/kl-mark-5') && configUI().country !== 'Ukraine')
          ? []
          : [
            { path: '/projects/kl-mark-5', component: '../pages/kl-mark-5' }
          ]
      ).concat(
        (configUI().hidePages.find((i) => i === 'donate') && configUI().country !== 'Ukraine')
          ? []
          : [
            { path: '/donate', component: '../pages/donate' }
          ]
      ).concat(
        (configUI().hidePages.find((i) => i === 'donate-puzzle') && configUI().country !== 'Ukraine')
          ? []
          : [
            { path: '/donate-puzzle', component: '../pages/donate-puzzle' }
          ]
      ).concat(
        (configUI().hidePages.find((i) => i === 'merch') && configUI().country !== 'Ukraine')
          ? []
          : [
            { path: '/merch', component: '../pages/merch' }
          ]
      ).concat(
        (configUI().hidePages.find((i) => i === 'model-3d') && configUI().country !== 'Ukraine')
          ? []
          : [
            { path: '/model-3d', component: '../pages/model-3d' }
          ]
      ).concat(
        (configUI().hidePages.find((i) => i === 'reviews') && configUI().country !== 'Ukraine')
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
      ).concat(
        configUI().hidePages.find((i) => i === 'model-3d')
          ? []
          : [
            { path: '/en/model-3d', component: '../pages/model-3d-en' }
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
        configUI().hidePages.find((i) => i === 'activity-reporting')
          ? []
          : [
            { path: '/en/activity-reporting', component: '../pages/activity-reporting-en' }
          ]
      )
      .concat(
        configUI().hidePages.find((i) => i === 'reviews')
          ? []
          : [
            { path: '/de/reviews', component: '../pages/reviews-de' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'projects')
          ? []
          : [
            { path: '/de/projects', component: '../pages/projects-de' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'projects/kl-mark-1')
          ? []
          : [
            { path: 'de/projects/kl-mark-1', component: '../pages/kl-mark-1-de' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'projects/kl-mark-2')
          ? []
          : [
            { path: 'de/projects/kl-mark-2', component: '../pages/kl-mark-2-de' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'projects/kl-mark-3')
          ? []
          : [
            { path: 'de/projects/kl-mark-3', component: '../pages/kl-mark-3-de' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'projects/kl-mark-4')
          ? []
          : [
            { path: 'de/projects/kl-mark-4', component: '../pages/kl-mark-4-de' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'projects/kl-mark-5')
          ? []
          : [
            { path: 'de/projects/kl-mark-5', component: '../pages/kl-mark-5-de' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'donate')
          ? []
          : [
            { path: '/de/donate', component: '../pages/donate-de' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'donate-puzzle')
          ? []
          : [
            { path: '/de/donate-puzzle', component: '../pages/donate-puzzle-de' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'merch')
          ? []
          : [
            { path: '/de/merch', component: '../pages/merch-de' }
          ]
      ).concat(
        configUI().hidePages.find((i) => i === 'model-3d')
          ? []
          : [
            { path: '/de/model-3d', component: '../pages/model-3d-de' }
          ]
      ).concat([
        { path: '/de', component: '../pages/index-de' }
        // ]).concat(
        //   configUI().hidePages.find((i) => i === 'reports')
        //     ? []
        //     : [
        //       { path: '/en/reports', component: '../pages/reports-en' }
        //     ]
        // ).concat(
      ]).concat(
        configUI().hidePages.find((i) => i === 'activity-reporting')
          ? []
          : [
            { path: '/de/activity-reporting', component: '../pages/activity-reporting-de' }
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
