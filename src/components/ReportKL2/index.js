import React from 'react';
import PropTypes from 'prop-types';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'dva'
import styles from './index.less'

const langCollection = {
  UA: {
    h1: 'ЗВІТ ДРУГОГО',
    h2: 'ПЕРЕСУВНОГО ШПИТАЛЮ',
    dsc1: 'ЛИСТОПАД 2023',
  },
  EN: {
    h1: 'REPORT OF THE SECOND',
    h2: 'MOBILE HOSPITAL',
    dsc1: 'NOVEMBER 2023',
  },
};

const Page5 = ({ lang }) => {
  return (
    <div id="reportKL2" className={styles.reportKL2}>
      <div className={styles.reportKL2Image1Block} key="reportKL2-image-wrap1">
        <div key="reportKL2-image1" className={styles.reportKL2Image1Block1Wrap}>
          <div className={styles.reportKL2Image1} />
          <div className={styles.reportKL2Image1BlockCover} />
          <div className={styles.reportKL2Image2QrCode} />
        </div>
      </div>
      <div className={styles.reportKL2ImageBlock} key="reportKL2-image-wrap2">
        <div className={styles.reportKL2ImageBlockAllWrap} key="reportKL2-image-block-all-wrap">
          <div key="reportKL2-image3" className={styles.reportKL2ImageBlockWrap}>
            <div className={styles.reportKL2Image3} />
            <div className={styles.reportKL2Image3BlockCover} />
          </div>
          <div key="reportKL2-image4" className={styles.reportKL2Image4BlockWrap}>
            <div className={styles.reportKL2ImageBlock2Text}>
              <span>{langCollection[`${lang}`].dsc1}</span>
            </div>
            <div className={styles.reportKL2Image4} />
            <div className={styles.reportKL2Image4BlockCover} />
          </div>
        </div>
      </div>
      <ScrollOverPack>
        <QueueAnim
          type="top"
          className={styles.reportKL2TitleWrapper}
          key="reportKL2-title"
          delay={300}
          leaveReverse
        >
          <div key="reportKL2-h2-title" className={styles.reportKL2H2Title}>
            <span>{langCollection[`${lang}`].h1}</span>
            <span>{langCollection[`${lang}`].h2}</span>
          </div>
        </QueueAnim>
      </ScrollOverPack>
    </div>
  );
}
Page5.propTypes = {
  lang: PropTypes.string
};

const mapStateToProps = (state) => ({
  lang: state.application.lang
})

export default connect(mapStateToProps, null)(Page5)
