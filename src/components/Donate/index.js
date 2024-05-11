import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva'
import { Button, Tooltip } from 'antd'
import { CopyOutlined, CheckOutlined } from '@ant-design/icons'
import PrivatBankIcon from '../../assets/img/icon-privat-bank.png';
import PrivatBankQRImg from '../../assets/img/qr-privat-bank-common.png';
import PayPalIcon from '../../assets/img/paypal-logo.jpeg'
import MonobankIcon from '../../assets/img/monobank.jpeg'
import MonobankQRImg from '../../assets/img/monobankKLqr.png'
import MonobankBtnIcon from '../../assets/img/monobankBtnIcon.png'
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
        <br />
        <br />
        <div className={styles.donateBlock}>
          <div className={styles.donateLinkWrap}>
            <Button
              className={styles.donateCardPuzzleDonatePageLink}
              shape='default'
              type='danger'
              size='large'
              title={langCollection[`${lang}`].p}
              onClick={() => handleGoToPuzzleDonate()}
            >
              <span className={styles.donateCardPuzzleDonatePageLinkText}>{langCollection[`${lang}`].link1}</span>
            </Button>
          </div>
        </div>
        <br />
        <br />
        <br />
        {/* <h3 className={styles.donateBlockTitle}>Перекази по Україні</h3> */}
        <div className={styles.donateBlock}>
          <div className={styles.donateCard}>
            <div className={styles.donateCardImgsWrap}>
              <div className={styles.donateCardPaymentMethod}>
                <img key="icon-pb" alt="PrivatBank Icon" src={PrivatBankIcon} />
              </div>
              <div className={styles.donateCardPaymentQR}>
                <img key="qr-pb" alt="PrivatBank QR" src={PrivatBankQRImg} />
              </div>
            </div>
            <div className={styles.donateCardPaymentDetails}>
              <p>
                <span>Валюта:</span>
                <span>UAH</span>
              </p>
              <p>
                <span>IBAN:</span>
                <span>
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
              <p>
                <span>Отримувач:</span>
                <span>БО ІМ.Б.ВОЗНИЦЬКОГО БФ</span>
              </p>
              <p>
                <span>ЄДРПОУ:</span>
                <span>43108345</span>
              </p>
              <p><span/><span>АТ КБ "ПРИВАТБАНК"</span></p>
              <p>
                <span>Призначення платежу:</span>
                <span>Благодійна пожертва</span>
              </p>
            </div>
          </div>
          <div className={styles.donateCard}>
            <div className={styles.donateCardImgsWrap}>
              <div className={styles.donateCardPaymentMethod}>
                <img key="icon-mb" alt="Monobank Icon" src={MonobankIcon} />
              </div>
              <div className={styles.donateCardPaymentQR}>
                <img key="qr-mb" alt="Monobank QR" src={MonobankQRImg} />
              </div>
            </div>
            <br/>
            <br/>
            <div className={styles.donateCardPaymentDetails}>
              <div className={styles.donateCardPaymentDetailsBtnWrap}>
                <Button
                  type='primary'
                  // icon={<CopyOutlined />}
                  // onClick={() => handleCopyText( 'UA823052990000026007021034880' )}
                  className={styles.donateCardPaymentDetailsMonoBtn}
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
          <div className={styles.donateCard}>
            <div className={styles.donateCardImgsWrap}>
              <div className={styles.donateCardPaymentMethod}>
                <img key="icon-pp" alt="Pay Pal Icon" src={PayPalIcon} />
              </div>
            </div>
            <br />
            <br />
            <div className={donateCardPPPaymentDetailsStyles}>
              <p>
                <span>Email:</span>
                <span>
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
                      className={styles.donateCardPaymentDetailsCopy}
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
