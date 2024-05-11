import configTheme from './config-theme.switch'

export default () => {

  switch (process.env.REACT_APP_UI_CONF) {
    case 'Config/custom':
      return {
        appVersion: '2.0.8',
        themeSwitchEnable: false,
        userGuideEnable: false,
        primaryColor: '#0218A8',
        hidePages: [
        ],
        hideWidgets: ['terminalsCounter'],
        mentorLite: false,
        mentorLinks: {
          prod: 'https://mentor.datameshgroup.in',
          dev: 'https://dev.mentor.datameshgroup.in',
          staging: 'https://staging.mentor.datameshgroup.in',
          local: 'https://mentor.datameshgroup.in'
        },
        merchantDashboardLinks: {
          prod: 'https://merchant.datameshgroup.in',
          dev: 'https://dev.merchant.datameshgroup.in',
          staging: 'https://staging.merchant.datameshgroup.in',
          local: 'https://dev.merchant.datameshgroup.in'
        },
        currency: 'hi-in',
        country: 'India',
        widgetDistance: 'small',
        theme: configTheme('DataMesh/Mentor/custom'),
        logoOpt: {
          default: {
            logoPath: 'DBLogo.png',
            logoDarkModePath: 'DBLogo.png',
            logoSider: 'DBLogoBig.png',
            logoSiderDarkMode: 'DBLogoBig.png',
            logoSiderHeight: '100'
          }
        },
        loginPage: {
          logo: 'DBLogoIcon.png',
          title: 'Deutsche Bank',
          descr: '',
          banner: 'MentorBannerBlue.jpg',
          default: {
            logo: 'DBLogoIcon.png',
            title: 'Deutsche Bank',
            descr: '',
            banner: 'MentorBannerBlue.jpg',
            showFooter: false
          }
        },
        layout: {
          header: {
            styles: {
              backgroundColor: null,
              backgroundImage: null
            },
            calendarIcon: 'calendar-icon-blue.svg'
          },
          sider: {
            styles: {
              backgroundColor: null,
              backgroundImage: 'SiderPattern.png'
            },
            navMenu: {
              useWhiteFilterForIcons: true
            }
          },
          content: {
            styles: {
              backgroundColor: null,
              backgroundImage: null
            }
          }
        },
        widgets: {
          txnsListTable: {
            filters: {
              hidenFilters: []
            },
            hideField: [],
            hideCSVfields: [],
            dataTypes: []
          },
          salesData: {
            title: 'Purchase Transactions',
            dataTypes: [],
            totalDataLabels: {
              txnsNum: 'Transactions Count'
            }
          },
          txnCounter: {
            dataLabels: {
              txnsNum: 'Transactions Total',
              sales: 'Purchase Transactions'
            }
          },
          txnStatistics: {
            dataLabels: {
              sales: 'Purchase Transactions'
            },
            metrics: {
              metricslist: [
                'sales',
                'transactions',
                'avgTxnSize'
              ]
            }
          },
          salesByVisits: {
            title: 'Purchases By Visits'
          },
          salesTrends: {
            title: 'Purchases Trends'
          },
          customersListTable: {
            tableFieldsNames: {
              totalSales: 'Total Purchases'
            }
          }
        }
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
        theme: configTheme('DataMesh/Mentor'),
        logoOpt: {
          default: {
            logoPath: 'LogoIcon.png',
            logoDarkModePath: 'LogoIconW.png',
            logoSider: 'LogoIcon.png',
            logoSiderDarkMode: 'LogoIconW.png',
            logoSiderHeight: '30',
          },
          novatti: {
            logoPath: 'NovattiLogoIcon.png',
            logoDarkModePath: 'NovattiLogoIconW.png',
            logoSider: 'NovattiLogoIcon.png',
            logoSiderDarkMode: 'NovattiLogoIconW.png',
            logoSiderHeight: '30',
          },
          urpay: {
            logoPath: 'UrPayLogoIcon.png',
            logoDarkModePath: 'UrPayLogoIcon.png',
            logoSider: 'UrPayLogoIcon.png',
            logoSiderDarkMode: 'UrPayLogoIcon.png',
            logoSiderHeight: '40',
          }
        },
        loginPage: {
          logo: 'MentorLogoIcon.png',
          title: 'Mentor',
          descr: 'A DataMesh product, part of the Atlas Suite',
          banner: 'MentorBanner.jpg',
          showFooter: true,
          default: {
            logo: 'MentorLogoIcon.png',
            title: 'Mentor',
            descr: 'A DataMesh product, part of the Atlas Suite',
            banner: 'MentorBanner.jpg',
            showFooter: true
          },
          novatti: {
            logo: 'NovattiLogoIcon.png',
            title: null,
            descr: '',
            banner: 'MentorBanner.jpg',
            showFooter: false
          },
          urpay: {
            logo: 'UrPayLogoIcon.png',
            title: null,
            descr: '',
            banner: 'MentorBanner.jpg',
            showFooter: false
          }
        },
        layout: {
          header: {
            styles: {
              backgroundColor: null,
              backgroundImage: null
            },
            calendarIcon: 'calendar-icon.svg'
          },
          sider: {
            styles: {
              backgroundColor: null,
              backgroundImage: null
            }
          },
          content: {
            styles: {
              backgroundColor: null,
              backgroundImage: null
            }
          }
        },
        widgets: {
          paymentData: {
            styles: {
              backgroundColor: null,
              backgroundImage: null,
              chartColors: []
            }
          },
          txnsListTable: {
            hideField: [],
            dataTypes: []
          },
          salesData: {
            dataTypes: []
          },
          txnStatistics: {
            dataLabels: {
              sales: 'Purchase Transactions'
            },
            metrics: {
              metricslist: []
            }
          }
        }
      }
  }
}
