import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva'
import { Button, Tooltip } from 'antd'
import { CopyOutlined, CheckOutlined } from '@ant-design/icons'
import PrivatBankIcon from '../../../assets/img/privatbankIconTrsprnt.png';
import PrivatBankQRImg from '../../../assets/img/qr-privat-bank-common.png';
import PayPalIcon from '../../../assets/img/paypal-logo-trsprnt.png'
import RedCrossIcon from '../../../assets/img/red-cross.png'
import MonobankIcon from '../../../assets/img/monobankIconTrsprnt.png'
import MonobankQRImg from '../../../assets/img/monobankKLqr.png'
import MonobankBtnIcon from '../../../assets/img/monobankBtnIconTrsprnt.png'
import classNames from 'classnames'
import router from 'umi/router'
import styles from './index.less'

const langCollection = {
  UA: {
    link1: 'Долучитися до збору коштів для ще одного мобільного шпиталю KEEP LIFE',
    mbBtn: 'Підтримати'
  },
  EN: {
    link1: 'Join the fundraising campaign for another one mobile hospital KEEP LIFE.',
    mbBtn: 'Support'
  },
};

const Donate = ({ isMobile, lang }) => {
  const [copiedId, setCopiedId] = useState(null)

  const handleCopyText = (value) => {
    setCopiedId(value)
    navigator.clipboard.writeText(value)
  }

  const handleGoToPuzzleDonate = () => {
    router.push('/donate-puzzle')
    window.scrollTo(0, 0)
  }

  const donateCardPPPaymentDetailsStyles = classNames(
    styles.donateCardPaymentDetails,
    styles.donateCardPaymentDetailsWide
  )

  return (
    <div className={styles.donate}>
      <div className={styles.donateWrap}>
        <div className={styles.donateBlock1}>
          <div className={styles.donateDescrCard}>
            <div className={styles.donateDescrCardWrap}>
              <div>
                <img key="icon-red-cross" alt="Red Cross Icon" src={RedCrossIcon} />
              </div>
              <span className={styles.donateDescrCardText}>{langCollection[`${lang}`].link1}</span>
              <Button
                className={styles.donateDescrCardLink}
                shape='default'
                type='danger'
                size='large'
                title={langCollection[`${lang}`].p}
                onClick={() => handleGoToPuzzleDonate()}
              >
                <span className={styles.donateCardPuzzleDonatePageLinkText}>DONATE!</span>
              </Button>
            </div>
          </div>
          <div className={styles.donatePBCard}>
            <div className={styles.donatePBCardImgsWrap}>
              <div className={styles.donatePBCardPaymentMethod}>
                <img key="icon-pb" alt="PrivatBank Icon" src={PrivatBankIcon} />
              </div>
              <div className={styles.donatePBCardPaymentQR}>
                <img key="qr-pb" alt="PrivatBank QR" src={PrivatBankQRImg} />
              </div>
            </div>
            <div className={styles.donatePBCardPaymentDetails}>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Валюта:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>UAH</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>IBAN:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>
                  UA823052990000026007021034880
                  <Tooltip
                    title={
                      (copiedId === 'UA823052990000026007021034880')
                        ? <div>
                          <CheckOutlined />
                          <span>Copied to clipboard</span>
                        </div>
                        : <span>Click to copy</span>
                    }
                  >
                    <Button
                      type='link'
                      icon={<CopyOutlined />}
                      onClick={() => handleCopyText( 'UA823052990000026007021034880' )}
                      className={styles.donateCardPaymentDetailsCopy}
                    />
                  </Tooltip>
                </span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Отримувач:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>БО ІМ.Б.ВОЗНИЦЬКОГО БФ</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>ЄДРПОУ:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>43108345</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>АТ КБ "ПРИВАТБАНК"</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Призначення платежу:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>Благодійна пожертва</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.donateBlock2}>
          <div className={styles.donateMBCard}>
            <div className={styles.donateMBCardImgsWrap}>
              <div className={styles.donateMBCardPaymentMethod}>
                <img key="icon-mb" alt="Monobank Icon" src={MonobankIcon} />
              </div>
              <div className={styles.donateMBCardPaymentQR}>
                <img key="qr-mb" alt="Monobank QR" src={MonobankQRImg} />
              </div>
            </div>
            <br/>
            <br/>
            <div className={styles.donateMBCardPaymentDetails}>
              <div className={styles.donateMBCardPaymentDetailsBtnWrap}>
                <Button
                  type='primary'
                  // icon={<CopyOutlined />}
                  // onClick={() => handleCopyText( 'UA823052990000026007021034880' )}
                  className={styles.donateMBCardPaymentDetailsMonoBtn}
                  href='https://send.monobank.ua/jar/9HpA1JoFxq'
                  target='_blank'
                  referrerPolicy='no-referrer'
                >
                  <img key="icon-mb-btn" alt="Monobank" src={MonobankBtnIcon} />
                </Button>
                {/* <a href='https://send.monobank.ua/jar/9HpA1JoFxq'>

                  {langCollection[`${lang}`].mbBtn}
                </a> */}
              </div>
            </div>
          </div>
          <div className={styles.donatePPCard}>
            <div className={styles.donatePPCardImgsWrap}>
              <div className={styles.donatePPCardPaymentMethod}>
                <img key="icon-pp" alt="Pay Pal Icon" src={PayPalIcon} />
              </div>
            </div>
            <br />
            <br />
            <div className={styles.donatePPCardPaymentDetails}>
              <p className={styles.donatePPCardPaymentDetailsRow}>
                <span className={styles.donatePPCardPaymentDetailsLabel}>Email:</span>
                <span className={styles.donatePPCardPaymentDetailsValue}>
                  donate@cfbvoznytskyy.org
                  <Tooltip
                    title={
                      (copiedId === 'donate@cfbvoznytskyy.org')
                        ? <div>
                          <CheckOutlined />
                          <span>Copied to clipboard</span>
                        </div>
                        : <span>Click to copy</span>
                    }
                  >
                    <Button
                      type='link'
                      icon={<CopyOutlined />}
                      onClick={() => handleCopyText( 'donate@cfbvoznytskyy.org' )}
                      className={styles.donatePPCardPaymentDetailsCopy}
                    />
                  </Tooltip>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Donate.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  lang: state.application.lang,
  isMobile:  state.application.isMobile
})

export default connect(mapStateToProps, null)(Donate)
