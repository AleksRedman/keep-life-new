import React, { Component, Fragment } from 'react'
import { connect } from 'dva'
import { enquireScreen } from 'enquire-js';
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Layout, Button } from 'antd'
import isMobOS from '../utils/mobile-os-detection'
import { getLocalData, setLocalData } from '@/utils/helpers'
import router from 'umi/router'
import Redirect from 'umi/redirect'
import styles from './primary-layout.less'

const { Content } = Layout
const { text, hidePages, country } = process.env.CONFIG_UI

const langCollection = text?.primary_layout

// const langCollection = {
//   UA: {
//     p: 'DONATE!'
//   },
//   EN: {
//     p: 'DONATE!'
//   },
// };

class PrimaryLayout extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    locationPath: PropTypes.string.isRequired,
    isFirstScreen: PropTypes.bool,
    isMobile: PropTypes.bool,
    lang: PropTypes.string,
    onHandleIsFirstScreen: PropTypes.func,
    onHandleIsMobile: PropTypes.func,
    onHandleLang: PropTypes.func,
    onHandleSectionId: PropTypes.func,
    sectionId: PropTypes.string
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.props.onHandleIsMobile(!!b)
    });
  }

  componentDidUpdate() {
    enquireScreen((b) => {
      this.props.onHandleIsMobile(!!b)
    });
  }

  onEnterChange = (mode) => {
    this.props.onHandleIsFirstScreen(mode === 'enter')
  }

  handleChangeLang = (key) => {
    this.props.onHandleLang(key)
  }

  handleGoToDonate = () => {
    const curPath = document?.location?.pathname
    const curLangPath = curPath.slice(0,3)

    if (curLangPath === '/en') {
      router.push('/en/donate')
    } else if (curLangPath === '/') {
      router.push('/donate')
    } else {
      router.push('/donate')
    }

    window.scrollTo(0, 0)
  }

  render () {
    const {
      children,
      lang,
      locationPath
    } = this.props

    if ((!locationPath || locationPath === '/') && country !== 'Ukraine') {
      console.log(`(!locationPath || locationPath === '/') && country !== 'Ukraine')`, locationPath)
      return <Redirect to={'/en'} />
    }
    // if ((locationPath === '/de') && country !== 'Ukraine') {
    //   return <Redirect to={'/de'} />
    // }
    if ((locationPath === '/projects') && country !== 'Ukraine') {
      return <Redirect to={'/en/projects'} />
    }
    if ((locationPath === '/activity-reporting') && country !== 'Ukraine') {
      return <Redirect to={'/en/activity-reporting'} />
    }
    if ((locationPath === '/projects/kl-mark-1') && country !== 'Ukraine') {
      return <Redirect to={'/en/projects/kl-mark-1'} />
    }
    if ((locationPath === '/projects/kl-mark-2') && country !== 'Ukraine') {
      return <Redirect to={'/en/projects/kl-mark-2'} />
    }
    if ((locationPath === '/projects/kl-mark-3') && country !== 'Ukraine') {
      return <Redirect to={'/en/projects/kl-mark-3'} />
    }
    if ((locationPath === '/projects/kl-mark-4') && country !== 'Ukraine') {
      return <Redirect to={'/en/projects/kl-mark-4'} />
    }
    if ((locationPath === '/projects/kl-mark-5') && country !== 'Ukraine') {
      return <Redirect to={'/en/projects/kl-mark-5'} />
    }
    if ((locationPath === '/reviews') && country !== 'Ukraine') {
      return <Redirect to={'/en'} />
    }
    if ((locationPath === '/donate') && country !== 'Ukraine') {
      return <Redirect to={'/en'} />
    }
    if ((locationPath === '/donate-puzzle') && country !== 'Ukraine') {
      return <Redirect to={'/en'} />
    }
    if ((locationPath === '/merch') && country !== 'Ukraine') {
      return <Redirect to={'/en'} />
    }
    if ((locationPath === '/model-3d') && country !== 'Ukraine') {
      return <Redirect to={'/en/model-3d'} />
    }

    return (
      <Fragment>
        <Layout className={styles.primaryLayout}>
          <Content className={styles.primaryLayoutContent} style={{ minHeight: 700 }}>
            {children}
          </Content>
          {
            (
              !hidePages.includes('donate') &&
              (locationPath ==='/' || locationPath ==='/en')
            )
              ? <Button
                className={styles.primaryLayoutDonateBtn}
                shape='circle'
                type='danger'
                size='large'
                title={langCollection[`${lang}`].p}
                onClick={() => this.handleGoToDonate()}
              >
                {/* <HeartOutlined className={styles.primaryLayoutDonateBtnIcon} /> */}
                <HeartFilled className={styles.primaryLayoutDonateBtnIcon} />
                <span className={styles.primaryLayoutDonateBtnText}>{langCollection[`${lang}`].p}</span>
              </Button>
              : null
          }
        </Layout>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  isFirstScreen: state.application.isFirstScreen,
  isMobile: state.application.isMobile,
  lang: state.application.lang,
  sectionId: state.application.sectionId
})

const mapDispatchToProps = (dispatch) => ({
  onHandleIsFirstScreen: (payload) => dispatch({ type: 'application/handleIsFirstScreen', payload }),
  onHandleIsMobile: (payload) => dispatch({ type: 'application/handleIsMobile', payload }),
  onHandleLang: (payload) => dispatch({ type: 'application/handleLang', payload }),
  onHandleSectionId: (payload) => dispatch({ type: 'application/handleSectionId', payload })
})

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryLayout)
