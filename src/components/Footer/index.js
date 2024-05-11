
import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import { PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import LogoImg from '../../assets/img/logo.png';
import LogoVoznFondImg from '../../assets/img/vozn_fond.png';
import styles from './index.less'

const langCollection = {
  UA: {
    h1: 'Контакти',
    adr: '79018, Україна, м. Львів, вул. Юрія Федьковича 58, офіс 305',
    // phn1: '+38(066)123-13-50 - Прихисток',
  },
  EN: {
    h1: 'Contacts',
    adr: '58 Yuri Fedkovycha Street, Office 305, Lviv, Ukraine, 79018',
    // phn1: '+38(066)123-13-50 - Shelter',
  },
};

const Footer = ({ lang }) => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerWrap}>
        <div className={styles.footerLeft}>
          <div className={styles.footerLeftImg1Wrap}>
            <a href="https://cfbvoznytskyy.org/" target="_blank" rel="noreferrer">
              <img key="logo" alt="logo" src={LogoImg} />
            </a>
          </div>
          <div className={styles.footerLeftImg2Wrap}>
            <img key="vozn_fond" alt="vozn_fond" src={LogoVoznFondImg} />
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerRightTitle}>
            {langCollection[`${lang}`].h1}
          </div>
          <div className={styles.footerRightContacts}>
            <div className={styles.footerRightContactsAddress}>{langCollection[`${lang}`].adr}</div>
            <a href="tel:+38(096)213-44-48" className={styles.footerRightContactsItem}><PhoneOutlined /><span>+38(097)270-28-22</span></a>
            <a href="mailto:keeplife911@gmail.com" className={styles.footerRightContactsItem}><GlobalOutlined /><span>keeplife911@gmail.com</span></a>
            <a href="mailto:office@cfbvoznytskyy.org" className={styles.footerRightContactsItem}><GlobalOutlined /><span>office@cfbvoznytskyy.org</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  lang: state.application.lang
})

export default connect(mapStateToProps, null)(Footer)
