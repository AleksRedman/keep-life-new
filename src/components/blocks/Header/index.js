import React from 'react';
import Headroom from 'react-headroom'
import { connect } from 'dva'
import { MenuOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu, Popover, Dropdown } from 'antd';
import LogoImg from '@/assets/img/logo.png';
import Shevron from '@/assets/img/shevron.png'
import router from 'umi/router'
import styles from './index.less'

const langCollection = {
  UA: {
    p1: 'УМОВИ РОБОТИ',
    p2: 'ЗАДАЧІ',
    p3: 'ТЕХНІЧНЕ ЗАБЕЗПЕЧЕННЯ',
    p4: 'МЕДИЧНЕ ОБЛАДНАННЯ',
    p5: '3D МОДЕЛЬ',
    p6: 'ПРОЄКТИ',
    p7: 'НАШ МЕРЧ',
    p8: 'ВІДГУКИ'
  },
  EN: {
    p1: 'WORKING CONDITIONS',
    p2: 'TASKS',
    p3: 'TECHNICAL SUPPORT',
    p4: 'MEDICAL EQUIPMENT',
    p5: '3D MODEL',
    p6: 'PROJECTS',
    p7: 'OUR MERCH',
    p8: 'REVIEWS'
  },
};

const langMapping = {
  'EN': '/en',
  'UA': ''
}

class Header extends React.Component {
  static propTypes = {
    isFirstScreen: PropTypes.bool,
    isMobile: PropTypes.bool,
    lang: PropTypes.string.isRequired,
    onHandleChangeLang: PropTypes.func,
    onHandleSectionId: PropTypes.func
  }
  state = {
    menuVisible: false,
  };
  onMenuVisibleChange = (visible) => {
    this.setState({
      menuVisible: visible,
    });
  }
  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    });
  }

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    });
  }

  handleMenuItemClick = (navId) => {
    const { lang } = this.props
    const { onHandleSectionId } = this.props
    if (document?.location?.pathname !== '/' && document?.location?.pathname !== '/en' ) {
      onHandleSectionId(navId)
      if (lang === 'UA') {
        router.push('/')
      } else if (lang === 'EN') {
        router.push('/en')
      }
    } if (navId === 'projects') {
      onHandleSectionId(navId)
      if (lang === 'UA') {
        router.push('/projects')
      } else if (lang === 'EN') {
        router.push('/en/projects')
      }
      window.scrollTo(0, 0)
    } else if (navId === 'merch') {
      onHandleSectionId(navId)
      if (lang === 'UA') {
        router.push('/merch')
      } else if (lang === 'EN') {
        router.push('/en/merch')
      }
      window.scrollTo(0, 0)
    }  if (navId === 'reviews') {
      onHandleSectionId(navId)
      if (lang === 'UA') {
        router.push('/reviews')
      } else if (lang === 'EN') {
        router.push('/en/reviews')
      }
      window.scrollTo(0, 0)
    } else {
      const element = document.getElementById(navId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  handleLangMenuClick = ({ key }) => {
    const { lang } = this.props
    const lngPath = langMapping[`${key}`]
    const curPath = document?.location?.pathname
    const curLangPath = curPath.slice(0,3)

    if (curLangPath === '/en') {
      const curRestPath = curPath.slice(3)
      if (key !== 'EN') {
        router.push(`${lngPath}${curRestPath}`)
      }
    } else if (curLangPath === '/') {
      if (key !== 'UA') {
        router.push(`${lngPath}`)
      }
    } else {
      if (key !== 'UA') {
        router.push(`${lngPath}${curPath}`)
      }
    }

    console.log('handleLangMenuClick', { lang, lngPath, curPath, curLangPath })
    // if (pathArray?.length > 1 && pathArray[(pathArray?.length) - 1]) {
    //   console.log('pathArray > 1 && pathArray[1]', `${lngPath}/${pathArray[(pathArray?.length) - 1]}`)
    //   router.push(`${lngPath}/${pathArray[(pathArray?.length) - 1]}`)
    // } else if (pathArray?.length === 1 && pathArray[0]) {
    //   console.log('pathArray?.length === 1 && pathArray[0]', `${lngPath}/${pathArray[0]}`)
    //   router.push(`${lngPath}/${pathArray[0]}`)
    // } else if (pathArray?.length < 1) {
    //   console.log('pathArray?.length < 1', `${lngPath || '/'}`)
    //   router.push(`${lngPath || '/'}`)
    // }
  }

  handleGoHome = () => {
    const { lang } = this.props
    if (lang === 'EN') {
      router.push('/en')
    } else {
      router.push('/')
    }
    
    window.scrollTo(0, 0)
  }

  render() {
    const { isFirstScreen, isMobile, lang } = this.props;
    const { menuVisible } = this.state;
    const { handleGoHome } = this
    const headerClassName = classNames(
      {
        clearfix: true,
        'home-nav-white': !isFirstScreen,
      },
      styles.header
    );

    const langMenu = (
      <Menu onClick={this.handleLangMenuClick}>
        <Menu.Item key="UA">UA</Menu.Item>
        <Menu.Item key="EN">EN</Menu.Item>
      </Menu>
    );

    const menu = [
      <Menu mode={isMobile ? 'vertical' : 'horizontal'} inlineCollapsed={false} defaultSelectedKeys={['home']} id="nav" key="nav" onClick={({ key }) => this.handleMenuItemClick(key)}>
        <Menu.Item key="problems">
          {langCollection[`${lang}`].p1}
        </Menu.Item>
        {/* <Menu.Item key="mission">
          {langCollection[`${lang}`].p2}
        </Menu.Item> */}
        <Menu.Item key="technicalProvision">
          {langCollection[`${lang}`].p3}
        </Menu.Item>
        {/* <Menu.Item key="equipment">
          {langCollection[`${lang}`].p4}
        </Menu.Item> */}
        <Menu.Item key="innovations">
          {langCollection[`${lang}`].p5}
        </Menu.Item>
        <Menu.Item key="projects">
          {langCollection[`${lang}`].p6}
        </Menu.Item>
        {/* <Menu.Item key="merch">
          {langCollection[`${lang}`].p7}
        </Menu.Item> */}
        <Menu.Item key="reviews">
          {langCollection[`${lang}`].p8}
        </Menu.Item>
      </Menu>,
    ];

    return (
      <Headroom
        disable={false}
        upTolerance={10}
        wrapperStyle={{
          width: '100%',
          minWidth: '100%',
          zIndex: 999
        }}
      >
        <header id="header" className={headerClassName}>
          {console.log('isMoblie', isMobile)}
          {console.log('document.location', document.location.pathname)}
          <div className={styles.headerWrap}>
            {
              isMobile
                ? <Popover
                    overlayClassName="popover-menu"
                    placement="bottomRight"
                    content={menu}
                    trigger="click"
                    open={menuVisible}
                    arrowPointAtCenter
                    onOpenChange={this.onMenuVisibleChange}
                >
                  <MenuOutlined className={styles.headerMenuIcon} onClick={this.handleShowMenu} />
                </Popover>
                : null
            }
            <div className={styles.headerLogoWrap}>
              <a id="logo" onClick={() => handleGoHome()}>
                <img alt="logo" src={LogoImg} />
              </a>
            </div>
            {
              !isMobile
                ? menu
                : null
            }
            <div className={styles.langMenuDropdown}>
              <Dropdown
                overlay={langMenu}
                key="lang"
              >
                <a onClick={e => e.preventDefault()}>
                  {lang}
                  <span><img alt="shevron" src={Shevron} /></span>
                </a>
              </Dropdown>
            </div>
          </div>
        </header>
      </Headroom>
    );
  }
}

const mapStateToProps = (state) => ({
  // lang: state.application.lang,
  isFirstScreen: state.application.isFirstScreen,
  isMobile: state.application.isMobile
})

const mapDispatchToProps = (dispatch) => ({
  onHandleChangeLang: (payload) => dispatch({ type: 'application/handleLang', payload }),
  onHandleSectionId: (payload) => dispatch({ type: 'application/handleSectionId', payload })
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
