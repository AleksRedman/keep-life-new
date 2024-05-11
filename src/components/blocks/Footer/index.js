
import React, { useEffect } from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import { PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import LogoImg from '../../../assets/img/logo.png';
import LogoVoznFondImg from '../../../assets/img/vozn_fond.png';
import FooterBanner from '../../../assets/img/footer-banner.png';
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

const Footer = ({ lang, sectionId, onHandleSectionId, short }) => {
  useEffect(() => {
    if (sectionId) {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        onHandleSectionId('')
      }
    }
  }, [onHandleSectionId, sectionId])

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerWrap}>
        <div className={styles.footerContacts}>
          <div className={styles.footerContactsTitle}>
            {langCollection[`${lang}`].h1}
          </div>
          <div className={styles.footerContactsDetails}>
            <div className={styles.footerContactsAddress}>{langCollection[`${lang}`].adr}</div>
            <div className={styles.footerContactsItemsWrap}>
              <a href="tel:+38(096)213-44-48" className={styles.footerContactsItem}><PhoneOutlined /><span>+38(097)270-28-22</span></a>
              <a href="mailto:keeplife911@gmail.com" className={styles.footerContactsItem}><GlobalOutlined /><span>keeplife911@gmail.com</span></a>
              <a href="mailto:office@cfbvoznytskyy.org" className={styles.footerContactsItem}><GlobalOutlined /><span>office@cfbvoznytskyy.org</span></a>
            </div>
          </div>
        </div>
        <div className={styles.footerLogo}>
          <div className={styles.footerLogoImgWrap}>
            <a href="https://cfbvoznytskyy.org/" target="_blank" rel="noreferrer">
              <img key="vozn_fond" alt="vozn_fond" src={LogoVoznFondImg} />
            </a>
          </div>
        </div>
        {
          short
            ? <>
              <br/>
              <br/>
              <br/>
              <br/>
            </>
            : <div className={styles.footerBanner}>
            <img key="footer_banner" alt="footer_banner" src={FooterBanner} />
          </div>
        }
        
      </div>
    </footer>
  );
}

Footer.propTypes = {
  lang: PropTypes.string,
  short: PropTypes.bool,
  onHandleSectionId: PropTypes.func
};

const mapStateToProps = (state) => ({
  lang: state.application.lang,
  sectionId: state.application.sectionId
})

const mapDispatchToProps = (dispatch) => ({
  onHandleSectionId: (payload) => dispatch({ type: 'application/handleSectionId', payload })
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
