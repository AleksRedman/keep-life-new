import React from 'react';
import PropTypes from 'prop-types';
import QrCode from '../../../assets/img/qr-report2.jpg'
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

const KL2Report = ({ lang }) => {
  return (
    <div id="kl2Report" className={styles.kl2Report}>
      <div className={styles.kl2ReportWrap}>
        <div className={styles.kl2ReportTitle}>
          <span>{langCollection[`${lang}`].h1}</span>
          <span>{langCollection[`${lang}`].h2}</span>
        </div>
        <div className={styles.kl2ReportImagesWrap}>
          <div className={styles.kl2ReportImagesBlock2} />
          <div className={styles.kl2ReportImagesBlock1}>
            <div className={styles.kl2ReportImagesBlock1Img}>
              <img alt={'QrCode'} src={QrCode} style={{ width: '100%' }} className={styles.kl2ReportImagesBlock1QrCode} />
            </div>
          </div>
          <div className={styles.kl2ReportImagesBlock3}>
            <div className={styles.kl2ReportImagesBlock3Text}>
              <span>{langCollection[`${lang}`].dsc1}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
KL2Report.propTypes = {
  lang: PropTypes.string
};

const mapStateToProps = (state) => ({
  // lang: state.application.lang
})

export default connect(mapStateToProps, null)(KL2Report)
