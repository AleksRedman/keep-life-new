import React from 'react';
import PropTypes from 'prop-types';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'dva'
import styles from './index.less'

const langCollection = {
  UA: {
    title: 'ЗМІ про KEEP LIFE 1 (здано в грудні 2022 року)',
    h2: 'ПЕРЕСУВНОГО ШПИТАЛЮ',
    dsc1: 'ЛИСТОПАД 2023',
  },
  EN: {
    h1: 'REPORT OF THE SECOND',
    h2: 'MOBILE HOSPITAL',
    dsc1: 'NOVEMBER 2023',
  },
};

const ReportKL2Descr = ({ lang }) => {
  return (
    <div id="reportKL2" className={styles.reportKL2}>
      <h3>{langCollection[`${lang}`].title}</h3>
      <div key="reportKL2-h2-title" className={styles.reportKL2H2Title}>
        <span>{langCollection[`${lang}`].h1}</span>
        <span>{langCollection[`${lang}`].h2}</span>
      </div>
    </div>
  );
}
ReportKL2Descr.propTypes = {
  lang: PropTypes.string
};

const mapStateToProps = (state) => ({
  lang: state.application.lang
})

export default connect(mapStateToProps, null)(ReportKL2Descr)
