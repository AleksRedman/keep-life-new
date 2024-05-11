import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva'
import { Button, Tooltip, Popover } from 'antd'
import { CopyOutlined, CheckOutlined, SyncOutlined } from '@ant-design/icons'
import PrivatBankIcon from '../../../assets/img/privatbankIconTrsprnt.png';
import PrivatBankQRImg from '../../../assets/img/qr-privat-bank-common.png';
import PayPalIcon from '../../../assets/img/paypal-logo-trsprnt.png'
import TruckFrontIcon from '../../../assets/img/truck-front.png'
import CurvArrowIcon from '../../../assets/img/curv-arrow.png'
import MonobankIcon from '../../../assets/img/monobankIconTrsprnt.png'
import MonobankQRImg from '../../../assets/img/monobankKLqr.png'
import MonobankBtnIcon from '../../../assets/img/monobankBtnIconTrsprnt.png'
import LMLogo from '../../../assets/img/LRMR.png';
import OpChngLogo from '../../../assets/img/operation_charge.png';
import OstCapitalLogo from '../../../assets/img/logo_ost_capital.jpeg'
import FirstMem from '../../../assets/img/first_mem.jpeg';
import classNames from 'classnames'
import router from 'umi/router'
import styles from './index.less'

const langCollection = {
  UA: {
    link1: 'Долучитися до збору коштів для ще одного мобільного шпиталю KEEP LIFE',
    p1: 'Тут можете бути ви',
    mbBtn: 'Підтримати',
    ip1: 'Ми точно знаємо, що спільними зусиллями зможемо забезпечити фронт ще, як мінімум, одним мобільним шпиталем',
    ip2_1: 'Зібрати ',
    ip2_2: 'пазл номіналом',
    ip2_3: ' грн - в силах кожної організації, громади, відомої особи чи блогера.',
    ip3: 'Ми будемо широко висвітлювати перебіг виготовлення, звітуватись по кожному етапу та презентувати кожного благодійника на сайті і в соцмережах.',
    ip4: 'Оберіть свій пазл (або 2 чи 3) та зробіть внесок у збереження життя тисяч українців!',
    ip5: 'Запрошуємо до співпраці кожного!',
    ip6: 'Відповідальна за збір - Юлія',
    itxt1_1: 'ЗБІР',
    itxt1_2: '250,000грн',
    pop_link: 'БІЛЬШЕ',
    lmFond_1: '1,200,000грн',
    lmFond_2: 'ЗБІР ЗАКРИТО',
    lmFond_3: 'БФ "Леруа Мерлен Солідарність" - наш постійний партнер в багатьох проектах. Їх мета - відновлення України. Всього цей Фонд реалізував 29 проектів, ще 49 в процесі, надав допомогу 112000 українцям.',
    opChng_1: '500,000грн',
    opChng_2: 'ЗБІР ЗАКРИТО',
    opChng_3: 'Шведсько-польська Благодійна Організація "Operation Change" - наш гуманітарний та логістичний партнер від початку ворожого вторгнення до України. Допомога постраждалим українцям в усіх сферах.',
    ostCapital_1: '',
    ostCapital_2: 'ЗБІР ТРИВАЄ',
    ostCapital_3: 'Телеграм канал "Останній капіталіст". Майже 87000 підписників. Тут кують українське економічне диво.',
    perPrivMem_1: '',
    perPrivMem_2: 'ЗБІР ТРИВАЄ',
    perPrivMem_3: 'Телеграм-канал "Перша приватна мемарня". Йому довіряють понад 150тис підписників. Тут найактуальніші новини в найсмішніших мемах і тільки перевірені збори на ЗСУ.'
  },
  EN: {
    link1: 'Join the fundraising campaign for another one mobile hospital KEEP LIFE.',
    p1: 'You can be here',
    mbBtn: 'Support',
    ip1: 'We know for sure that by combining our efforts, we can provide the front with at least one mobile hospital,',
    ip2_1: 'Collecting',
    ip2_2: 'puzzle with a nominal value of ',
    ip2_3: 'UAH is within the capabilities of every organization, community, well-known individual, or blogger.',
    ip3: 'We will extensively cover the progress of manufacturing, report on each stage, and present every donor on the website and in social media.',
    ip4: 'Choose your puzzle (or 2 or 3) and contribute to saving the lives of thousands of Ukrainians!',
    ip5: 'We invite everyone to collaborate!',
    ip6: 'Responsible for the collection - Yulia',
    itxt1_1: 'FOUNDRAISING',
    itxt1_2: '250,000 UAH',
    pop_link: 'MORE',
    lmFond_1: '1,200,000 UAH',
    lmFond_2: 'FOUNDRAISING IS CLOSED',
    lmFond_3: 'The CF "Lerua Merlen Solidarity" is our constant partner in many projects. Their goal is the restoration of Ukraine. In total, this Foundation has implemented 29 projects, with 49 more in progress, providing assistance to 112,000 Ukrainians.',
    opChng_1: '500,000 UAH',
    opChng_2: 'FOUNDRAISING IS CLOSED',
    opChng_3: 'The Swedish-Polish CO "Operation Change" is our humanitarian and logistical partner from the beginning of the hostile invasion into Ukraine. They provide assistance to affected Ukrainians in all areas.',
    ostCapital_1: '',
    ostCapital_2: 'FOUNDRAISING IS GOING',
    ostCapital_3: 'Telegram channel "Last Capitalist." Nearly 87,000 subscribers. Here, they forge the Ukrainian economic miracle.',
    perPrivMem_1: '',
    perPrivMem_2: 'FOUNDRAISING IS GOING',
    perPrivMem_3: 'Telegram channel "First Private Memery." Trusted by over 150,000 subscribers. Here, you wll find the latest news in the funniest memes and only verified fundraisers for the Armed Forces of Ukraine.'
  },
};

const DonatePazzle = ({ isMobile, lang, isScreenMdMin }) => {
  const [copiedId, setCopiedId] = useState(null)

  const handleCopyText = (value) => {
    setCopiedId(value)
    navigator.clipboard.writeText(value)
  }

  const handleGoToPuzzleDonate = () => {
    router.push('/donate-puzzle')
    window.scrollTo(0, 0)
  }

  const pzlItmCntnt = () => {
    return (
      <>
        {
          isScreenMdMin
            ? <Popover
              content={(
                <p className='donate-puzzle-item-popup'>
                  <strong>{`${langCollection[`${lang}`].itxt1_1} `}</strong>
                  <span>{`${langCollection[`${lang}`].itxt1_2} `}</span>
                </p>
              )}
              title={null}
            >
              <div className={styles.donatePazzleBannerCardItemCont} />
            </Popover>
            : <div className={styles.donatePazzleBannerCardItemCont}>
              <p>
                <strong>{`${langCollection[`${lang}`].itxt1_1} `}</strong>
                <span>{`${langCollection[`${lang}`].itxt1_2} `}</span>
              </p>
            </div>
        }
      </>
    )
  }

  const pzlItmCustomCntnt = (logo, txt1, txt2, txt3, link, loading) => {
    return (
      <Popover
        content={(
          <div className='donate-puzzle-item-popup-wrap'>
            <div className='donate-puzzle-item-popup-logo'>
              <img key="logo" alt="logo" src={logo} style={{ width: '50%' }} />
            </div>
            {txt1 ? <p className='donate-puzzle-item-popup-sum'>{`${langCollection[`${lang}`][`${txt1}`]} `}</p> : null}
            <p className='donate-puzzle-item-popup-sum'>{`${langCollection[`${lang}`][`${txt2}`]} `}</p>
            <p className='donate-puzzle-item-popup-descr'>{`${langCollection[`${lang}`][`${txt3}`]} `}</p>
            {
              link
                ? <p className='donate-puzzle-item-popup-link'>
                  <a href={link} target="_blank" rel="noreferrer">
                    {`${langCollection[`${lang}`]['pop_link']} `}
                  </a>
                </p>
                : null
            }
            
          </div>
        )}
        title={null}
      >
        {
          loading
            ? <div className={styles.donatePazzleBannerCardItemCont}>
              <SyncOutlined spin style={{ fontSize: '35px' }} />
            </div>
            : <div className={styles.donatePazzleBannerCardItemCont}><p><strong>DONE</strong></p></div>
        }
        
      </Popover>
    )
  }

  return (
    <div className={styles.donatePazzle}>
      <div className={styles.donatePazzleWrap}>
        <div className={styles.donatePazzleBlock1}>
          <div className={styles.donatePazzleDescrCard}>
            <div className={styles.donatePazzleDescrCardWrap}>
              <div>
                <img key="icon-truck-front" alt="Truck Front Icon" src={TruckFrontIcon} />
              </div>
              <span className={styles.donatePazzleDescrCardText}>{langCollection[`${lang}`].link1}</span>
              <p className={styles.donatePazzleDescrCardArrowText}>{langCollection[`${lang}`].p1}</p>
              <div className={styles.donatePazzleDescrCardArrow}>
                <img key="curv-arrow-icon" alt="Curv Arrow Icon" src={CurvArrowIcon} />
              </div>
            </div>
          </div>
          <div className={styles.donatePazzleBannerCard}>
            <div className={styles.donatePazzleBannerCardWrap}>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 6, backdropFilter: 'none', border: 'none' }}>
                {pzlItmCustomCntnt(
                  LMLogo,
                  'lmFond_1',
                  'lmFond_2',
                  'lmFond_3',
                  'https://lmsolidarity.com.ua/'
                )}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 6, backdropFilter: 'none', border: 'none' }}>
                {pzlItmCustomCntnt(
                  LMLogo,
                  'lmFond_1',
                  'lmFond_2',
                  'lmFond_3',
                  'https://lmsolidarity.com.ua/'
                )}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 6, backdropFilter: 'none', border: 'none' }}>
                {pzlItmCustomCntnt(
                  LMLogo,
                  'lmFond_1',
                  'lmFond_2',
                  'lmFond_3',
                  'https://lmsolidarity.com.ua/'
                )}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 6 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 6 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 6, backdropFilter: 'blur(3px)' }}>
                {pzlItmCustomCntnt(
                  OstCapitalLogo,
                  'ostCapital_1',
                  'ostCapital_2',
                  'ostCapital_3',
                  'https://t.me/OstanniyCapitalist',
                  true
                )}
              </div>

              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 5, backdropFilter: 'none', border: 'none' }}>
                {pzlItmCustomCntnt(
                  LMLogo,
                  'lmFond_1',
                  'lmFond_2',
                  'lmFond_3',
                  'https://lmsolidarity.com.ua/'
                )}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 5, backdropFilter: 'none', border: 'none' }}>
                {pzlItmCustomCntnt(
                  LMLogo,
                  'lmFond_1',
                  'lmFond_2',
                  'lmFond_3',
                  'https://lmsolidarity.com.ua/'
                )}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 5 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 5, backdropFilter: 'none', border: 'none' }}>
                {pzlItmCustomCntnt(
                  OpChngLogo,
                  'opChng_1',
                  'opChng_2',
                  'opChng_3',
                  'https://operation-change.org/'
                )}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 5, backdropFilter: 'none', border: 'none' }}>
                {pzlItmCustomCntnt(
                  OpChngLogo,
                  'opChng_1',
                  'opChng_2',
                  'opChng_3',
                  'https://operation-change.org/'
                )}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 5, backdropFilter: 'blur(3px)' }}>
                {pzlItmCntnt()}
              </div>

              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 4 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 4 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 4 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 4 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 4 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 4 }}>
                {pzlItmCustomCntnt(
                  FirstMem,
                  'perPrivMem_1',
                  'perPrivMem_2',
                  'perPrivMem_3',
                  'https://t.me/privatnamemarnya',
                  true
                )}
              </div>

              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 3 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 3 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 3 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 3 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 3 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 3 }}>
                {pzlItmCntnt()}
              </div>

              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 2 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 2 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 2 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 2 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 2 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 2 }}>
                {pzlItmCntnt()}
              </div>

              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 1 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 1 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 1 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 1 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 1 }}>
                {pzlItmCntnt()}
              </div>
              <div className={styles.donatePazzleBannerCardItem} style={{ zIndex: 1 }}>
                {pzlItmCntnt()}
              </div>

            </div>
          </div>
          <div className={styles.donatePazzleTextCard}>
            <div className={styles.donatePazzleTextCardWrap}>
              <p>{`${langCollection[`${lang}`].ip1} `}<strong>KEEP LIFE</strong>.</p>
              <p>{`${langCollection[`${lang}`].ip2_1} `}<strong>1</strong>{` ${langCollection[`${lang}`].ip2_2} `}<strong>250 000</strong>{` ${langCollection[`${lang}`].ip2_3} `}</p>
              <p>{`${langCollection[`${lang}`].ip3} `}</p>
              <p>{`${langCollection[`${lang}`].ip4} `}</p>
              <p>{`${langCollection[`${lang}`].ip5} `}</p>
              <p>{`${langCollection[`${lang}`].ip6} `}<strong><a href="mailto: keeplife911@gmail.com">keeplife911@gmail.com</a></strong></p>
            </div>
          </div>
        </div>
        <div className={styles.donatePazzleBlock2}>
          <div className={styles.donatePazzlePBCard}>
            <div className={styles.donatePazzlePBCardImgsWrap}>
              <div className={styles.donatePazzlePBCardPaymentMethod}>
                <img key="icon-pb" alt="PrivatBank Icon" src={PrivatBankIcon} />
              </div>
              <div className={styles.donatePazzlePBCardPaymentQR}>
                <img key="qr-pb" alt="PrivatBank QR" src={PrivatBankQRImg} />
              </div>
            </div>
            <div className={styles.donatePazzlePBCardPaymentDetails}>
              <p className={styles.donatePazzlePBCardPaymentDetailsRow}>
                <span className={styles.donatePazzlePBCardPaymentDetailsLabel}>Валюта:</span>
                <span className={styles.donatePazzlePBCardPaymentDetailsValue}>UAH</span>
              </p>
              <p className={styles.donatePazzlePBCardPaymentDetailsRow}>
                <span className={styles.donatePazzlePBCardPaymentDetailsLabel}>IBAN:</span>
                <span className={styles.donatePazzlePBCardPaymentDetailsValue}>
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
                      className={styles.donatePazzleCardPaymentDetailsCopy}
                    />
                  </Tooltip>
                </span>
              </p>
              <p className={styles.donatePazzlePBCardPaymentDetailsRow}>
                <span className={styles.donatePazzlePBCardPaymentDetailsLabel}>Отримувач:</span>
                <span className={styles.donatePazzlePBCardPaymentDetailsValue}>БО ІМ.Б.ВОЗНИЦЬКОГО БФ</span>
              </p>
              <p className={styles.donatePazzlePBCardPaymentDetailsRow}>
                <span className={styles.donatePazzlePBCardPaymentDetailsLabel}>ЄДРПОУ:</span>
                <span className={styles.donatePazzlePBCardPaymentDetailsValue}>43108345</span>
                <span className={styles.donatePazzlePBCardPaymentDetailsValue}>АТ КБ "ПРИВАТБАНК"</span>
              </p>
              <p className={styles.donatePazzlePBCardPaymentDetailsRow}>
                <span className={styles.donatePazzlePBCardPaymentDetailsLabel}>Призначення платежу:</span>
                <span className={styles.donatePazzlePBCardPaymentDetailsValue}>Благодійна пожертва</span>
              </p>
            </div>
          </div>
          <div className={styles.donatePazzleMBCard}>
            <div className={styles.donatePazzleMBCardImgsWrap}>
              <div className={styles.donatePazzleMBCardPaymentMethod}>
                <img key="icon-mb" alt="Monobank Icon" src={MonobankIcon} />
              </div>
              <div className={styles.donatePazzleMBCardPaymentQR}>
                <img key="qr-mb" alt="Monobank QR" src={MonobankQRImg} />
              </div>
            </div>
            <br/>
            <br/>
            <div className={styles.donatePazzleMBCardPaymentDetails}>
              <div className={styles.donatePazzleMBCardPaymentDetailsBtnWrap}>
                <Button
                  type='primary'
                  // icon={<CopyOutlined />}
                  // onClick={() => handleCopyText( 'UA823052990000026007021034880' )}
                  className={styles.donatePazzleMBCardPaymentDetailsMonoBtn}
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
          <div className={styles.donatePazzlePPCard}>
            <div className={styles.donatePazzlePPCardImgsWrap}>
              <div className={styles.donatePazzlePPCardPaymentMethod}>
                <img key="icon-pp" alt="Pay Pal Icon" src={PayPalIcon} />
              </div>
            </div>
            <br />
            <br />
            <div className={styles.donatePazzlePPCardPaymentDetails}>
              <p className={styles.donatePazzlePPCardPaymentDetailsRow}>
                <span className={styles.donatePazzlePPCardPaymentDetailsLabel}>Email:</span>
                <span className={styles.donatePazzlePPCardPaymentDetailsValue}>
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
                      className={styles.donatePazzlePPCardPaymentDetailsCopy}
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
DonatePazzle.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  lang: state.application.lang,
  isMobile: state.application.isMobile,
  isScreenMdMin: state.application.isScreenMdMin
})

export default connect(mapStateToProps, null)(DonatePazzle)
