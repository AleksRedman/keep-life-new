import configTheme from './config-theme.switch'
import configText from './config-text.switch'


export default () => {

  switch (process.env.REACT_APP_UI_CONF) {
    case 'Config/EU':
      return {
        appVersion: '2.0.8',
        primaryColor: '#70B0DC',
        themeSwitchEnable: true,
        userGuideEnable: true,
        hidePages: [
          'donate',
          'model-3d',
          'donate-puzzle',
          'activity-reporting',
          'reviews'
        ],
        hideWidget: [],
        currency: 'en',
        country: 'Europe',
        widgetDistance: 'normal',
        theme: configTheme('Default'),
        text: configText('Config/EU')
      }
    case 'Config/custom':
      return {
        appVersion: '2.0.8',
        themeSwitchEnable: false,
        userGuideEnable: false,
        primaryColor: '#0218A8',
        hidePages: [],
        hideWidget: [],
        // theme: configTheme('DataMesh/Mentor')
        theme: configTheme('Default')
      }
    case 'Config':
    default:
      return {
        appVersion: '2.0.8',
        primaryColor: '#70B0DC',
        themeSwitchEnable: true,
        userGuideEnable: true,
        hidePages: [],
        hideWidget: [],
        currency: 'en',
        country: 'Ukraine',
        widgetDistance: 'normal',
        theme: configTheme('Default'),
        text: configText('Config')
      }
  }
}
