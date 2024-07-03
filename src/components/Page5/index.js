import React from 'react';
import PropTypes from 'prop-types';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'dva'
import styles from './index.less'

const langCollection = {
  UA: {
    h1: 'ЗВІТ ПЕРШОГО',
    h2: 'ПЕРЕСУВНОГО ШПИТАЛЮ',
    dsc1: 'ГРУДЕНЬ 2022',
  },
  EN: {
    h1: 'REPORT OF THE FIRST',
    h2: 'MOBILE HOSPITAL',
    dsc1: 'DECEMBER 2022',
  },
};

const Page5 = ({ lang }) => {
  return (
    <div id="page5" className={styles.page5}>
      <div className={styles.page5Image1Block}>
        <div key="page5-image1" className={styles.page5Image1Block1Wrap}>
          <div className={styles.page5Image1} />
          <div className={styles.page5Image1BlockCover} />
          <div className={styles.page5Image2QrCode} />
        </div>
      </div>
      <div className={styles.page5ImageBlock}>
        <div className={styles.page5ImageBlockAllWrap} key="page5-image-block-all-wrap">
          <div key="page5-image3" className={styles.page5ImageBlockWrap}>
            <div className={styles.page5Image3} />
            <div className={styles.page5Image3BlockCover} />
          </div>
          <div key="page5-image4" className={styles.page5Image4BlockWrap}>
            <div className={styles.page5ImageBlock2Text}>
              <span>{langCollection[`${lang}`].dsc1}</span>
            </div>
            <div className={styles.page5Image4} />
            <div className={styles.page5Image4BlockCover} />
          </div>
        </div>
      </div>
      <ScrollOverPack>
        <QueueAnim
          type="top"
          className={styles.page5TitleWrapper}
          key="page5-title"
          delay={300}
          leaveReverse
        >
          <div key="page5-h2-title" className={styles.page5H2Title}>
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
  // lang: state.application.lang
})

export default connect(mapStateToProps, null)(Page5)
