import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import styles from './index.less';

const langCollection = {
  UA: {
    h1: 'НА 50%+',
    p1: 'ЗРОСТАЮТЬ ШАНСИ БІЙЦЯ ВИЖИТИ ПІСЛЯ ОТРИМАННЯ ВАЖКОГО ПОРАНЕННЯ',
    h2: 'ДО 3-Х',
    p2: 'БРИГАД МЕДИКІВ ПРАЦЮЮТЬ З ОДНИМ СТАБІЛІЗАЦІЙНИМ ПУНКТОМ',
    h3: 'ДО 1-2 ГОД',
    p3: 'ЧЕРЕЗ СТІЛЬКИ ЧАСУ ПОРАНЕНОМУ БУДЕ НАДАНО ПЕРВИННУ МЕДИЧНУ ДОПОМОГУ',
    h4: '10-15 ХВ',
    p4: 'ПОТРІБНО НА РОЗГОРТАННЯ МОБІЛЬНОГО СТАБІЛІЗАЦІЙНОГО ПУНКТУ',
  },
  EN: {
    h1: 'BY 50%+',
    p1: 'CHANCES OF SURVIVAL INCREASE AFTER SUSTAINING A SEVERE INJURY',
    h2: 'UP TO 3',
    p2: 'MEDICAL BRIGADES OPERATE WITH ONE STABILIZATION POINT',
    h3: '1-2 HOURS',
    p3: 'WITHIN THIS TIMEFRAME, PRIMARY MEDICAL ASSISTANCE WILL BE PROVIDED TO THE INJURED',
    h4: '10-15 MIN',
    p4: 'REQUIRED FOR DEPLOYING THE MOBILE STABILIZATION POINT',
  }
};

const Advantages = ({ isMobile, lang }) => {
  return (
    <section id="advantages" className={styles.advantages}>
      <div className={styles.advantagesWrap}>
        <div className={styles.advantagesItem} style={{ backgroundColor: '#D9E1E3' }}>
          <div className={styles.advantagesItemContent}>
            <h4 className={styles.advantagesItemTitle}>{langCollection[`${lang}`].h1}</h4>
            <div className={styles.advantagesItemDescr}>{langCollection[`${lang}`].p1}</div>
          </div>
        </div>
        <div className={styles.advantagesItem} style={{ backgroundColor: '#E8E8E8' }}>
          <div className={styles.advantagesItemContent}>
            <h4 className={styles.advantagesItemTitle}>{langCollection[`${lang}`].h2}</h4>
            <div className={styles.advantagesItemDescr}>{langCollection[`${lang}`].p2}</div>
          </div>
        </div>
        <div className={styles.advantagesItem} style={{ backgroundColor: '#F1F1F1' }}>
          <div className={styles.advantagesItemContent}>
            <h4 className={styles.advantagesItemTitle}>{langCollection[`${lang}`].h3}</h4>
            <div className={styles.advantagesItemDescr}>{langCollection[`${lang}`].p3}</div>
          </div>
        </div>
        <div className={styles.advantagesItem} style={{ backgroundColor: '#FBFBFB' }}>
          <div className={styles.advantagesItemContent}>
            <h4 className={styles.advantagesItemTitle}>{langCollection[`${lang}`].h4}</h4>
            <div className={styles.advantagesItemDescr}>{langCollection[`${lang}`].p4}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

Advantages.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  lang: state.application.lang,
  isMobile: state.application.isMobile
})

export default connect(mapStateToProps, null)(Advantages)
