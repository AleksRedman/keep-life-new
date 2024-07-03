// import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva'
import { Popover } from 'antd';
import ArmyInform from '../../../assets/img/army_inform1.png';
import EspressoTV from '../../../assets/img/EspressoTV.png';
import ShoTam from '../../../assets/img/sho_tam.png'
import LvivNews from '../../../assets/img/lvivNews.png'
import Suspilne from '../../../assets/img/suspilne.jpeg'
// import classNames from 'classnames'
import styles from './index.less'

const langCollection = {
  UA: {
    h1_1: 'ЗМІ',
    h1_2: ' про ',
    h1_3: ' (здано в грудні 2022 року)'
  },
  EN: {
    h1_1: 'Media',
    h1_2: ' about ',
    h1_3: ' (delivered in December 2023)'
  },
};

const NewsAboutKL1 = ({ isMobile, isScreenMdMin, lang }) => {
  return (
    <div className={styles.newsAboutKL}>
      <div className={styles.newsAboutKLWrap}>
        <div className={styles.newsAboutKLTitle}>
          <p><strong>{`${langCollection[`${lang}`].h1_1} `}</strong> {`${langCollection[`${lang}`].h1_2} `} <strong>KEEP LIFE 1</strong> {` ${langCollection[`${lang}`].h1_3}`}.</p>
        </div>
        <div className={styles.newsAboutKLList}>
          <a href='https://youtu.be/5eIVY0piAnQ' target='_blank' rel="noreferrer">
            <img src={EspressoTV} alt='EspressoTV' />
          </a>

          <a href='https://armyinform.com.ua/2022/12/25/u-lvovi-vijskovym-medykam-peredaly-mobilnyj-hirurgichnyj-kompleks/' target='_blank' rel="noreferrer">
            <img src={ArmyInform} alt='ArmyInform' />
          </a>

          <a href='https://shotam.info/viyskovi-otrymaly-vid-blahodiynykiv-suchasnyy-shpytal-mobilnoi-khirurhii/' target='_blank' rel="noreferrer">
            <img src={ShoTam} alt='Sho Tam' />
          </a>

          <a href='https://news.lviv-company.in.ua/zi-lvova-na-peredovu-peredali-shpital-mobilno%d1%97-xirurgi%d1%97.html' target='_blank' rel="noreferrer">
            <img src={LvivNews} alt='Lviv News' />
          </a>

          <a href='https://suspilne.media/345082-zi-lvova-na-peredovu-peredali-spital-mobilnoi-hirurgii/' target='_blank' rel="noreferrer">
            <img src={Suspilne} alt='Suspilne' />
          </a>
        </div>
      </div>
    </div>
  );
};

NewsAboutKL1.propTypes = {
  isMobile: PropTypes.bool,
  isScreenMdMin: PropTypes.bool,
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  // lang: state.application.lang,
  isMobile: state.application.isMobile,
  isScreenMdMin: state.application.isScreenMdMin
})

export default connect(mapStateToProps, null)(NewsAboutKL1)
