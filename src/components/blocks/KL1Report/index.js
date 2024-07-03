import React from 'react';
import PropTypes from 'prop-types';
import QrCode from '../../../assets/img/qr-code.jpg'
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

const KL1Report = ({ lang }) => {
  return (
    <div id="kl1Report" className={styles.kl1Report}>
      <div className={styles.kl1ReportWrap}>
        <div className={styles.kl1ReportTitle}>
          <span>{langCollection[`${lang}`].h1}</span>
          <span>{langCollection[`${lang}`].h2}</span>
        </div>
        <div className={styles.kl1ReportImagesWrap}>
          <div className={styles.kl1ReportImagesBlock2} />
          <div key="kl1Report-image1" className={styles.kl1ReportImagesBlock1}>
            <div className={styles.kl1ReportImagesBlock1Img}>
              <img alt={'QrCode'} src={QrCode} style={{ width: '100%' }} className={styles.kl1ReportImagesBlock1QrCode} />
            </div>
          </div>
          <div className={styles.kl1ReportImagesBlock3}>
            <div className={styles.kl1ReportImagesBlock3Text}>
              <span>{langCollection[`${lang}`].dsc1}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
KL1Report.propTypes = {
  lang: PropTypes.string
};

const mapStateToProps = (state) => ({
  // lang: state.application.lang
})

export default connect(mapStateToProps, null)(KL1Report)
