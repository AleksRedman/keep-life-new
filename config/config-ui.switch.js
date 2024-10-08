import configTheme from './config-theme.switch'


export default () => {

  switch (process.env.REACT_APP_UI_CONF) {
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
        mentorLite: true,
        mentorLinks: null,
        merchantDashboardLinks: null,
        currency: 'en',
        country: 'Australia',
        widgetDistance: 'normal',
        theme: configTheme('Default')
      }
  }
}
