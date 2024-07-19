import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import styles from './index.less';

const langCollection = {
  UA: {
    h1: 'НА 50%+',
    p1: 'Зростають шанси у важкопоранених вижити, якщо поблизу є стабпункт',
    h2: '24/7',
    p2: 'Функціонує стабпункт за умови ротації медичних бригад',
    h3: '5-15 КМ',
    p3: 'Від лінії зіткнення до дислокації модулів',
    h4: '10-15 ХВ',
    p4: 'Загалом потрібно для розгортання пункту та початку роботи',
  },
  EN: {
    h1: '50%+',
    p1: 'The chances of survival for the severely wounded increase if there is a stabilization point nearby',
    h2: '24/7',
    p2: "The stabilization unit operates with the rotation of medical teams",
    h3: '5-15 KM',
    p3: 'From the front line to the module deployment',
    h4: '10-15 MIN',
    p4: 'Generally required for setting up the point and starting work',
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
  // lang: state.application.lang,
  isMobile: state.application.isMobile
})

export default connect(mapStateToProps, null)(Advantages)
