import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva'
import { Button, Tooltip } from 'antd'
import { CopyOutlined, CheckOutlined } from '@ant-design/icons'
import PrivatBankIcon from '../../../assets/img/privatbankIconTrsprnt.png';
// import PrivatBankQRImg from '../../../assets/img/qr-privat-bank-common.png';
import PrivatBankQRImg from '../../../assets/img/pb-qr.png';
import PayPalIcon from '../../../assets/img/paypal-logo-trsprnt.png'
import RedCrossIcon from '../../../assets/img/red-cross.png'
import MonobankIcon from '../../../assets/img/monobankIconTrsprnt.png'
// import MonobankQRImg from '../../../assets/img/monobankKLqr.png'
// import MonobankQRImg from '../../../assets/img/mb-kl-qr-new.png'
import MonobankQRImg from '../../../assets/img/mb-kl-qr-new2.png'
import MonobankBtnIcon from '../../../assets/img/monobankBtnIconTrsprnt.png'
import LiqPayForm from '../LiqPayForm'
import router from 'umi/router'
import styles from './index.less'

const langCollection = {
  UA: {
    link1: 'Долучитися до збору коштів для ще одного мобільного шпиталю KEEP LIFE',
    mbBtn: 'Підтримати',
    pbCurrency: 'Валюта:',
    pbRecpt: 'Recipient:',
    pbEDRPOU: 'ЄДРПОУ:',
    pbPurp: 'Призначення платежу:'
  },
  EN: {
    link1: 'Join the fundraising campaign for another one mobile hospital KEEP LIFE.',
    mbBtn: 'Support',
    pbCurrency: 'Currency:',
    pbRecpt: 'Recipient:',
    pbEDRPOU: 'EDRPOU:',
    pbPurp: 'Purpose of payment:'
  },
};

const Donate = ({ isMobile, lang }) => {
  const [copiedId, setCopiedId] = useState(null)

  const handleCopyText = (value) => {
    setCopiedId(value)
    navigator.clipboard.writeText(value)
  }

  const handleGoToPuzzleDonate = () => {
    const curPath = document?.location?.pathname
    console.log('handleGoToPuzzleDonate', curPath)

    if (curPath === '/en/donate') {
      router.push('/en/donate-puzzle')
    } else if (curPath === '/donate') {
      router.push('/donate-puzzle')
    }

    window.scrollTo(0, 0)
  }

  const copyValue = (val) => {
    return (
      <>
        {val}
        <Tooltip
          title={
            (copiedId === val)
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
            onClick={() => handleCopyText(val)}
            className={styles.donateCardPaymentDetailsCopy}
          />
        </Tooltip>
      </>
    )
  }

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
                <span className={styles.donatePBCardPaymentDetailsLabel}>{langCollection[`${lang}`].pbCurrency}</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>UAH</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>IBAN:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>
                  UA963052990000026007001034877
                  <Tooltip
                    title={
                      (copiedId === 'UA963052990000026007001034877')
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
                      onClick={() => handleCopyText( 'UA963052990000026007001034877' )}
                      className={styles.donateCardPaymentDetailsCopy}
                    />
                  </Tooltip>
                </span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>{langCollection[`${lang}`].pbRecpt}</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>БО КІП ЛАЙФ</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>{langCollection[`${lang}`].pbEDRPOU}</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>45569234</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>АТ КБ "ПРИВАТБАНК"</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>{langCollection[`${lang}`].pbPurp}</span>
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
                  // href='https://send.monobank.ua/jar/9HpA1JoFxq'
                  // href='https://send.monobank.ua/jar/49vTCiG8nt'
                  href='https://send.monobank.ua/jar/f4JBE7KdN'
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
        <div className={styles.donateBlock3}>
          <div className={styles.donatePBCard}>
            <div className={styles.donatePBCardImgsWrap}>
              <div className={styles.donatePBCardPaymentMethodShort}>
                <img key="icon-pb" alt="PrivatBank Icon" src={PrivatBankIcon} />
              </div>
              {/* <div className={styles.donatePBCardPaymentQR}>
                <img key="qr-pb" alt="PrivatBank QR" src={PrivatBankQRImg} />
              </div> */}
            </div>
            <div className={styles.donatePBCardPaymentDetails}>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>{langCollection[`${lang}`].pbCurrency}</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>EUR</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Реквізити компанії / Company details</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Назва компанії / Company Name:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('БО КІП ЛАЙФ')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>IBAN Code:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('UA233052990000026003001036909')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Назва банку / Name of the bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>SWIFT code банку / Bank SWIFT Code:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('PBANUA2X')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Адреса компанії / Company address:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('79018, УКРАЇНА, ОБЛ. ЛЬВІВСЬКА, М. ЛЬВІВ, ВУЛ. ФЕДЬКОВИЧА Ю, Б. 58, КВ. 304Б.')}</span>
              </p>
              <br />
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Банки кореспонденти/Correspondent banks</span>
              </p>
              <br />
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Рахунок у банку-кореспонденті / Account in the correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('400886700401')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>SWIFT Code банку-кореспондента / SWIFT Code of the correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('COBADEFF')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Банк-кореспондент / Correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('Commerzbank AG, Frankfurt am Main, Germany')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Або / Or</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Рахунок у банку-кореспонденті / Account in the correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('6231605145')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>SWIFT Code банку-кореспондента / SWIFT Code of the correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('CHASDEFX')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Банк-кореспондент / Correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('J.P.MORGAN AG, FRANKFURT AM MAIN, GERMANY')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Або / Or</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Рахунок у банку-кореспонденті / Account in the correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('5184099710, IBAN DE39503303005184099710')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>SWIFT Code банку-кореспондента / SWIFT Code of the correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('IRVTDEFX')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Банк-кореспондент / Correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('THE BANK OF NEW YORK MELLON, FRANKFURT AM MAIN')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Або / Or</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Рахунок у банку-кореспонденті / Account in the correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('0042997188, IBAN IE96CITI99005142997188')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>SWIFT Code банку-кореспондента / SWIFT Code of the correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('CITIIE2X')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Банк-кореспондент / Correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('CITIBANK EUROPE PLC')}</span>
              </p>
            </div>
          </div>
          <div className={styles.donatePBCard}>
            <div className={styles.donatePBCardImgsWrap}>
              <div className={styles.donatePBCardPaymentMethodShort}>
                <img key="icon-pb" alt="PrivatBank Icon" src={PrivatBankIcon} />
              </div>
              {/* <div className={styles.donatePBCardPaymentQR}>
                <img key="qr-pb" alt="PrivatBank QR" src={PrivatBankQRImg} />
              </div> */}
            </div>
            <div className={styles.donatePBCardPaymentDetails}>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>{langCollection[`${lang}`].pbCurrency}</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>USD</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Реквізити компанії / Company details</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Назва компанії / Company Name:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('БО КІП ЛАЙФ')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>IBAN Code:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('UA383052990000026001001024582')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Назва банку / Name of the bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>SWIFT code банку / Bank SWIFT Code:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('PBANUA2X')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Адреса компанії / Company address:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('79018, УКРАЇНА, ОБЛ. ЛЬВІВСЬКА, М. ЛЬВІВ, ВУЛ. ФЕДЬКОВИЧА Ю, Б. 58, КВ. 304Б.')}</span>
              </p>
              <br />
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Банки кореспонденти/Correspondent banks</span>
              </p>
              <br />
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Рахунок у банку-кореспонденті / Account in the correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('001-1-000080')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>SWIFT Code банку-кореспондента / SWIFT Code of the correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('CHASUS33')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Банк-кореспондент / Correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('JP Morgan Chase Bank, New York ,USA')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Або / Or</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Рахунок у банку-кореспонденті / Account in the correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('890-0085-754')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>SWIFT Code банку-кореспондента / SWIFT Code of the correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('IRVT US 3N')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Банк-кореспондент / Correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('The Bank of New York Mellon, New York, USA')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Або / Or</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Рахунок у банку-кореспонденті / Account in the correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('36445343')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>SWIFT Code банку-кореспондента / SWIFT Code of the correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('CITI US 33')}</span>
              </p>
              <p className={styles.donatePBCardPaymentDetailsRow}>
                <span className={styles.donatePBCardPaymentDetailsLabel}>Банк-кореспондент / Correspondent bank:</span>
                <span className={styles.donatePBCardPaymentDetailsValue}>{copyValue('Citibank N.A., NEW YORK, USA')}</span>
              </p>
            </div>
          </div>
        </div>
        {/* <div className={styles.donateWholeBlock}>
          <div className={styles.donateLiqPayCard}>
            <LiqPayForm
              isMobile={isMobile}
              lang={lang}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};
Donate.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  // lang: state.application.lang,
  isMobile:  state.application.isMobile
})

export default connect(mapStateToProps, null)(Donate)
