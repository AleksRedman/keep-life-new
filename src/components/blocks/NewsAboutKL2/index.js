// import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva'
import { Popover } from 'antd';
import TSNImg from '../../../assets/img/tsn.png';
import TROMedia from '../../../assets/img/tro_media1.jpg';
import Avto24 from '../../../assets/img/avto24.png';
import UkrinformTV from '../../../assets/img/ukrinformTV.jpeg';
import ArmyInform from '../../../assets/img/army_inform1.png';
import Ukrinform from '../../../assets/img/ukrinform.png';
// import classNames from 'classnames'
import styles from './index.less'

const langCollection = {
  UA: {
    h1_1: 'ЗМІ',
    h1_2: ' про ',
    h1_3: ' (мобільний хірургічний стабілізаційний пункт, здано в листопаді 2023)'
  },
  EN: {
    h1_1: 'Media',
    h1_2: ' about ',
    h1_3: ' (mobile surgical stabilization facility, delivered in November 2023)'
  },
};

const NewsAboutKL2 = ({ isMobile, isScreenMdMin, lang }) => {
  return (
    <div className={styles.newsAboutKL}>
      <div className={styles.newsAboutKLWrap}>
        <div className={styles.newsAboutKLTitle}>
          <p><strong>{`${langCollection[`${lang}`].h1_1} `}</strong> {`${langCollection[`${lang}`].h1_2} `} <strong>KEEP LIFE 2</strong> {` ${langCollection[`${lang}`].h1_3}`}.</p>
        </div>
        <div className={styles.newsAboutKLList}>
          <a href='https://tsn.ua/video/video-novini/operaciyna-dlya-frontu-na-kolesah-nova-rozrobka-vid-ukrayinciv.html' target='_blank' rel="noreferrer">
            <img src={TSNImg} alt='ТСН' />
          </a>

          <a href='https://fb.watch/ohQrn8XTHm/' target='_blank' rel="noreferrer">
            <img src={TROMedia} alt='TRO Media' />
          </a>

          <a href='https://auto.24tv.ua/z_choho_skladaietsia_mobilna_khirurhichna_operatsiina_dlia_viiskovykh_foto_video_n48871' target='_blank' rel="noreferrer">
            <img src={Avto24} alt='Avto24' />
          </a>

          <a href='https://www.youtube.com/watch?si=t2mZBJK3xNGZQB2v&v=lffGm3Bnujo&feature=youtu.be' target='_blank' rel="noreferrer">
            <img src={UkrinformTV} alt='UkrinformTV' />
          </a>

          <a href='https://armyinform.com.ua/2023/11/10/u-kyyevi-prezentuvaly-vdoskonalenyj-mobilnyj-hirurgichno-stabilizaczijnyj-punkt-keep-life/' target='_blank' rel="noreferrer">
            <img src={ArmyInform} alt='ArmyInform' />
          </a>

          <a href='https://www.ukrinform.ua/rubric-health/3785364-u-kievi-prezentuvali-mobilnij-hirurgicnostabilizacijnij-punkt-dla-prifrontovih-teritorij.html' target='_blank' rel="noreferrer">
            <img src={Ukrinform} alt='Ukrinform' />
          </a>
        </div>
      </div>
    </div>
  );
};
NewsAboutKL2.propTypes = {
  isMobile: PropTypes.bool,
  isScreenMdMin: PropTypes.bool,
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  // lang: state.application.lang,
  isMobile: state.application.isMobile,
  isScreenMdMin: state.application.isScreenMdMin
})

export default connect(mapStateToProps, null)(NewsAboutKL2)
