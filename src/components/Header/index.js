import React from 'react';
import { connect } from 'dva'
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu, Popover, Dropdown } from 'antd';
import { setLocalData } from '@/utils/helpers'
import LogoImg from '../../assets/img/logo.png';
import router from 'umi/router'
import styles from './index.less'

const langCollection = {
  UA: {
    p1: 'УМОВИ РОБОТИ',
    p2: 'ЗАДАЧІ',
    p3: 'ТЕХНІЧНЕ ЗАБЕЗПЕЧЕННЯ',
    p4: 'МЕДИЧНЕ ОБЛАДНАННЯ',
    pvdo: '3D МОДЕЛЬ',
    p5: 'ЗВІТИ',
    p6: 'НАШ МЕРЧ'
  },
  EN: {
    p1: 'WORKING CONDITIONS',
    p2: 'TASKS',
    p3: 'TECHNICAL SUPPORT',
    p4: 'MEDICAL EQUIPMENT',
    pvdo: '3D MODEL',
    p5: 'REPORTS',
    p6: 'OUR MERCH'
  },
};

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
    const { onHandleSectionId } = this.props
    if (document?.location?.pathname !== '/' ) {
      onHandleSectionId(navId)
      router.push('/')
    } if (navId === 'reports') {
      onHandleSectionId(navId)
      router.push('/reports')
      window.scrollTo(0, 0)
    } else if (navId === 'merch') {
      onHandleSectionId(navId)
      router.push('/merch')
      window.scrollTo(0, 0)
    } else {
      const element = document.getElementById(navId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  handleLangMenuClick = ({ key }) => {
    this.props.onHandleChangeLang(key);
  }

  handleGoHome = () => {
    router.push('/')
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
        <Menu.Item key="page1">
          {langCollection[`${lang}`].p1}
        </Menu.Item>
        <Menu.Item key="page2">
          {langCollection[`${lang}`].p2}
        </Menu.Item>
        <Menu.Item key="page3">
          {langCollection[`${lang}`].p3}
        </Menu.Item>
        <Menu.Item key="page4">
          {langCollection[`${lang}`].p4}
        </Menu.Item>
        <Menu.Item key="video-banner">
          {langCollection[`${lang}`].pvdo}
        </Menu.Item>
        <Menu.Item key="reports">
          {langCollection[`${lang}`].p5}
        </Menu.Item>
        {/* <Menu.Item key="merch">
          {langCollection[`${lang}`].p6}
        </Menu.Item> */}
      </Menu>,
    ];

    return (
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
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  lang: state.application.lang,
  isFirstScreen: state.application.isFirstScreen,
  isMobile: state.application.isMobile
})

const mapDispatchToProps = (dispatch) => ({
  onHandleChangeLang: (payload) => dispatch({ type: 'application/handleLang', payload }),
  onHandleSectionId: (payload) => dispatch({ type: 'application/handleSectionId', payload })
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
