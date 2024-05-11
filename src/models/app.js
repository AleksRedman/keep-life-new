/* global window */
/* global document */
import { switchTheme, getTheme } from 'umi-plugin-theme-switch'
import moment from 'moment'

const { themeSwitchEnable } = process.env.CONFIG_UI

export default {
  namespace: 'application',

  state: {
    isIE: /* @cc_on!@ */false || !!document.documentMode,
    isScreenLg: document.body.clientWidth < 1440,
    isScreenMd: document.body.clientWidth < 1281,
    isScreenMdMin: document.body.clientWidth < 1024,
    isScreenTablet: document.body.clientWidth < 769,
    isScreenTabletMin: document.body.clientWidth < 750,
    isScreenSm: document.body.clientWidth < 680,
    isScreenSmMin: document.body.clientWidth < 577,
    mobileMenuVisible: false,
    siderCollapsed: false,
    customizeDashboard: false,
    themeMode: getComputedStyle(document.documentElement).getPropertyValue('--app-theme-mode'),
    secondaryChartColor: getComputedStyle(document.documentElement).getPropertyValue('--app-chart-secondary-color'),
    primaryChartColor: getComputedStyle(document.documentElement).getPropertyValue('--app-primary-color'),
    secondaryColor: getComputedStyle(document.documentElement).getPropertyValue('--app-secondary-color'),
    chartTrailColor: getComputedStyle(document.documentElement).getPropertyValue('--app-chart-trail-color'),
    chartAxisColor: getComputedStyle(document.documentElement).getPropertyValue('--app-chart-axis-color'),

    isFirstScreen: true,
    isMobile: false,
    lang: 'UA',
    sectionId: ''
  },

  subscriptions: {
    setup ({ dispatch }) {
      window.onresize = () => {
        dispatch({type: 'chengeScreenSize'})
      }

      if (themeSwitchEnable) {
        window.onload = () => {
          dispatch({type: 'loadWindow'})
        }
      }
    }
  },

  effects: {
    chengeScreenSize: [function * (action, { put, select }) {
      const { application } = yield select(state => state)
      const isScreenLg = document.body.clientWidth < 1440
      const isScreenMd = document.body.clientWidth < 1281
      const isScreenMdMin = document.body.clientWidth < 1024
      const isScreenTablet = document.body.clientWidth < 769
      const isScreenTabletMin = document.body.clientWidth < 750
      const isScreenSm = document.body.clientWidth < 680
      const isScreenSmMin = document.body.clientWidth < 577

      if (isScreenLg !== application.isScreenLg) {
        yield put({ type: 'handleScreenLg', payload: isScreenLg })
      }

      if (isScreenMd !== application.isScreenMd) {
        yield put({ type: 'handleScreenMd', payload: isScreenMd })
      }

      if (isScreenMdMin !== application.isScreenMdMin) {
        yield put({ type: 'handleScreenMdMin', payload: isScreenMdMin })
      }

      if (isScreenTablet !== application.isScreenTablet) {
        yield put({ type: 'handleScreenTablet', payload: isScreenTablet })
      }

      if (isScreenTabletMin !== application.isScreenTabletMin) {
        yield put({ type: 'handleScreenTabletMin', payload: isScreenTabletMin })
      }

      if (isScreenSm !== application.isScreenSm) {
        yield put({ type: 'handleScreenSm', payload: isScreenSm })
      }

      if (isScreenSmMin !== application.isScreenSmMin) {
        yield put({ type: 'handleScreenSmMin', payload: isScreenSmMin })
      }
    }, { type: 'throttle', ms: 100 }],

    loadWindow: [function * (action, {put, select}) {
      const { application } = yield select(state => state)

      const currentTheme = getTheme()
      const hours = (new Date()).getHours()
      const currentDate = moment().format('YY-MM-DD')
      const autoSwitchThemeDate = window.localStorage.getItem('autoSwitchDarkThemeDate')

      if (
        currentTheme !== 'dark' &&
        (hours <= 6 || hours >= 18) &&
        (!autoSwitchThemeDate || autoSwitchThemeDate !== currentDate)
      ) {
        switchTheme('dark')
        window.localStorage.setItem('autoSwitchDarkThemeDate', currentDate)
      }

      const themeMode = getComputedStyle(document.documentElement).getPropertyValue('--app-theme-mode')
      const secondaryChartColor = getComputedStyle(document.documentElement).getPropertyValue('--app-chart-secondary-color')
      const primaryChartColor = getComputedStyle(document.documentElement).getPropertyValue('--app-primary-color')
      const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--app-secondary-color')
      const chartTrailColor = getComputedStyle(document.documentElement).getPropertyValue('--app-chart-trail-color')
      const chartAxisColor = getComputedStyle(document.documentElement).getPropertyValue('--app-chart-axis-color')

      if (themeMode !== application.themeMode) {
        yield put({ type: 'handleSwitchThemeMode' })
      }

      if (primaryChartColor !== application.primaryChartColor) {
        yield put({ type: 'handleSwitchPrimaryChartColor' })
      }

      if (secondaryChartColor !== application.secondaryChartColor) {
        yield put({ type: 'handleSwitchSecondaryChartColor' })
      }

      if (secondaryColor !== application.secondaryColor) {
        yield put({ type: 'handleSwitchSecondaryColor' })
      }

      if (chartTrailColor !== application.chartTrailColor) {
        yield put({ type: 'handleSwitchChartTrailColor' })
      }

      if (chartAxisColor !== application.chartAxisColor) {
        yield put({ type: 'handleSwitchChartAxisColor' })
      }
    }, { type: 'throttle', ms: 100 }]
  },

  reducers: {
    handleScreenLg (state, { payload }) {
      return {
        ...state,
        isScreenLg: payload
      }
    },

    handleScreenMd (state, { payload }) {
      return {
        ...state,
        isScreenMd: payload
      }
    },

    handleScreenMdMin (state, { payload }) {
      return {
        ...state,
        isScreenMdMin: payload
      }
    },

    handleScreenTablet (state, { payload }) {
      return {
        ...state,
        isScreenTablet: payload
      }
    },

    handleScreenTabletMin (state, { payload }) {
      return {
        ...state,
        isScreenTabletMin: payload
      }
    },

    handleScreenSm (state, { payload }) {
      return {
        ...state,
        isScreenSm: payload
      }
    },

    handleScreenSmMin (state, { payload }) {
      return {
        ...state,
        isScreenSmMin: payload
      }
    },

    handleMobileMenuVisible (state, { payload }) {
      return {
        ...state,
        mobileMenuVisible: payload
      }
    },

    handleSiderMenuVisible (state) {
      return {
        ...state,
        siderCollapsed: !state.siderCollapsed
      }
    },

    handleCustomizeDashboard (state, { payload }) {
      return {
        ...state,
        customizeDashboard: payload
      }
    },

    handleSwitchThemeMode (state) {
      return {
        ...state,
        themeMode: getComputedStyle(document.documentElement).getPropertyValue('--app-theme-mode')
      }
    },

    handleSwitchPrimaryChartColor (state) {
      return {
        ...state,
        primaryChartColor: getComputedStyle(document.documentElement).getPropertyValue('--app-primary-color')
      }
    },

    handleSwitchSecondaryChartColor (state) {
      return {
        ...state,
        secondaryChartColor: getComputedStyle(document.documentElement).getPropertyValue('--app-chart-secondary-color')
      }
    },

    handleSwitchSecondaryColor (state) {
      return {
        ...state,
        secondaryColor: getComputedStyle(document.documentElement).getPropertyValue('--app-secondary-color')
      }
    },

    handleSwitchChartTrailColor (state) {
      return {
        ...state,
        chartTrailColor: getComputedStyle(document.documentElement).getPropertyValue('--app-chart-trail-color')
      }
    },

    handleSwitchChartAxisColor (state) {
      return {
        ...state,
        chartAxisColor: getComputedStyle(document.documentElement).getPropertyValue('--app-chart-axis-color')
      }
    },

    handleIsFirstScreen (state, { payload }) {
      return {
        ...state,
        isFirstScreen: payload
      }
    },

    handleIsMobile (state, { payload }) {
      return {
        ...state,
        isMobile: payload
      }
    },

    handleLang (state, { payload }) {
      return {
        ...state,
        lang: payload
      }
    },

    handleSectionId (state, { payload }) {
      return {
        ...state,
        sectionId: payload
      }
    },
  }
}
