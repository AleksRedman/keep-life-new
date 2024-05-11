// import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva'
import { Popover } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import classNames from 'classnames'
import LMLogo from '../../assets/img/LRMR.png';
import OpChngLogo from '../../assets/img/operation_charge.png';
import OstCapitalLogo from '../../assets/img/logo_ost_capital.jpeg'
import FirstMem from '../../assets/img/first_mem.jpeg';
import styles from './index.less'

const langCollection = {
  UA: {
    ip1: 'Ми точно знаємо, що спільними зусиллями зможемо забезпечити фронт ще, як мінімум, одним мобільним шпиталем',
    ip2_1: 'Зібрати ',
    ip2_2: 'пазл номіналом',
    ip2_3: ' грн - в силах кожної організації, громади, відомої особи чи блогера.',
    ip3: 'Ми будемо широко висвітлювати перебіг виготовлення, звітуватись по кожному етапу та презентувати кожного благодійника на сайті і в соцмережах.',
    ip4: 'Оберіть свій пазл (або 2 чи 3) та зробіть внесок у збереження життя тисяч українців!',
    ip5: 'Запрошуємо до співпраці кожного!',
    ip6: 'Відповідальна за збір - Юлія',
    itxt1_1: 'ЗБІР 250,000грн тут можете бути ВИ',
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
    ip1: 'We know for sure that by combining our efforts, we can provide the front with at least one mobile hospital,',
    ip2_1: 'Collecting',
    ip2_2: 'puzzle with a nominal value of ',
    ip2_3: 'UAH is within the capabilities of every organization, community, well-known individual, or blogger.',
    ip3: 'We will extensively cover the progress of manufacturing, report on each stage, and present every donor on the website and in social media.',
    ip4: 'Choose your puzzle (or 2 or 3) and contribute to saving the lives of thousands of Ukrainians!',
    ip5: 'We invite everyone to collaborate!',
    ip6: 'Responsible for the collection - Yulia',
    itxt1_1: 'FOUNDRAISING 250,000 UAH YOU you can be HERE',
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

// We know for sure that by combining our efforts, we can provide the front with at least one mobile hospital, "KEEP LIFE."

// Collecting 1 puzzle with a nominal value of 250,000 UAH is within the capabilities of every organization, community, well-known individual, or blogger.

// We will extensively cover the progress of manufacturing, report on each stage, and present every donor on the website and in social media. Choose your puzzle (or 2 or 3) and contribute to saving the lives of thousands of Ukrainians!

// We invite everyone to collaborate!

// Responsible for the collection - Yulia.

const DonatePuzzle = ({ isMobile, isScreenMdMin, lang }) => {
  const donatePuzzlePazzleItemLTAngleStyles = classNames(
    styles.donatePuzzlePazzleItem,
    styles.donatePuzzlePazzleItemLTAngle
  )

  const donatePuzzlePazzleItemMTStyles = classNames(
    styles.donatePuzzlePazzleItem,
    styles.donatePuzzlePazzleItemMT
  )

  const donatePuzzlePazzleItemMBStyles = classNames(
    styles.donatePuzzlePazzleItem,
    styles.donatePuzzlePazzleItemMB
  )

  const donatePuzzlePazzleItemLMStyles = classNames(
    styles.donatePuzzlePazzleItem,
    styles.donatePuzzlePazzleItemLM
  )

  const donatePuzzlePazzleItemRMStyles = classNames(
    styles.donatePuzzlePazzleItem,
    styles.donatePuzzlePazzleItemRM
  )

  const donatePuzzlePazzleItemMMStyles = classNames(
    styles.donatePuzzlePazzleItem,
    styles.donatePuzzlePazzleItemMM
  )

  const donatePuzzlePazzleItemRTAngleStyles = classNames(
    styles.donatePuzzlePazzleItem,
    styles.donatePuzzlePazzleItemRTAngle
  )

  const donatePuzzlePazzleItemLBAngleStyles = classNames(
    styles.donatePuzzlePazzleItem,
    styles.donatePuzzlePazzleItemLBAngle
  )

  const donatePuzzlePazzleItemRBAngleStyles = classNames(
    styles.donatePuzzlePazzleItem,
    styles.donatePuzzlePazzleItemRBAngle
  )

  const pzlItmCntnt = () => {
    return (
      <>
        {
          isScreenMdMin
            ? <Popover
              content={(<p className='donate-puzzle-item-popup'>{`${langCollection[`${lang}`].itxt1_1} `}</p>)}
              title={null}
            >
              <div className={styles.donatePuzzlePazzleItemCont} />
            </Popover>
            : <div className={styles.donatePuzzlePazzleItemCont}><p>{`${langCollection[`${lang}`].itxt1_1} `}</p></div>
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
            ? <div className={styles.donatePuzzlePazzleItemCont}>
              <SyncOutlined spin style={{ fontSize: '35px' }} />
            </div>
            : <div className={styles.donatePuzzlePazzleItemCont} />
        }
        
      </Popover>
    )
  }

  return (
    <div className={styles.donatePuzzle}>
      <div className={styles.donatePuzzleDescrWrap}>
        <p>{`${langCollection[`${lang}`].ip1} `}<strong>KEEP LIFE</strong>.</p>
        <p>{`${langCollection[`${lang}`].ip2_1} `}<strong>1</strong>{` ${langCollection[`${lang}`].ip2_2} `}<strong>250 000</strong>{` ${langCollection[`${lang}`].ip2_3} `}</p>
        <p>{`${langCollection[`${lang}`].ip3} `}</p>
        <p>{`${langCollection[`${lang}`].ip4} `}</p>
        <p>{`${langCollection[`${lang}`].ip5} `}</p>
        <p>{`${langCollection[`${lang}`].ip6} `}<strong><a href="mailto: keeplife911@gmail.com">keeplife911@gmail.com</a></strong></p>
      </div>
      <div className={styles.donatePuzzleContent}>
        <div className={styles.donatePuzzleWrap}>
          <div key="dp_LTAngle" className={donatePuzzlePazzleItemLTAngleStyles} style={{ zIndex: 6, backdropFilter: 'none' }}>
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCustomCntnt(
              LMLogo,
              'lmFond_1',
              'lmFond_2',
              'lmFond_3',
              'https://lmsolidarity.com.ua/'
            )}
            <div className={styles.donatePuzzlePazzleItemVH} />
          </div>
          <div key="dp_MT" className={donatePuzzlePazzleItemMTStyles} style={{ zIndex: 6, backdropFilter: 'none' }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCustomCntnt(
              LMLogo,
              'lmFond_1',
              'lmFond_2',
              'lmFond_3',
              'https://lmsolidarity.com.ua/'
            )}
            <div className={styles.donatePuzzlePazzleItemVH} />
          </div>
          <div key="dp_MT" className={donatePuzzlePazzleItemMTStyles} style={{ zIndex: 6, backdropFilter: 'none' }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
              {pzlItmCustomCntnt(
                LMLogo,
                'lmFond_1',
                'lmFond_2',
                'lmFond_3',
                'https://lmsolidarity.com.ua/'
              )}
            <div className={styles.donatePuzzlePazzleItemVH} />
          </div>
          <div key="dp_MT" className={donatePuzzlePazzleItemMTStyles} style={{ zIndex: 6 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
              {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
          </div>
          <div key="dp_MT" className={donatePuzzlePazzleItemMTStyles} style={{ zIndex: 6 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
              {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
          </div>
          <div key="dp_RTAngle" className={donatePuzzlePazzleItemRTAngleStyles} style={{ zIndex: 6, backdropFilter: 'blur(3px)' }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
              {pzlItmCustomCntnt(
                OstCapitalLogo,
                'ostCapital_1',
                'ostCapital_2',
                'ostCapital_3',
                'https://t.me/OstanniyCapitalist',
                true
              )}
          </div>

          <div key="dp_LM" className={donatePuzzlePazzleItemLMStyles} style={{ zIndex: 5, backdropFilter: 'none' }}>
            <div className={styles.donatePuzzlePazzleItemHP} />
              {pzlItmCustomCntnt(
                LMLogo,
                'lmFond_1',
                'lmFond_2',
                'lmFond_3',
                'https://lmsolidarity.com.ua/'
              )}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_MM" className={donatePuzzlePazzleItemMMStyles} style={{ zIndex: 5, backdropFilter: 'none' }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
              {pzlItmCustomCntnt(
                LMLogo,
                'lmFond_1',
                'lmFond_2',
                'lmFond_3',
                'https://lmsolidarity.com.ua/'
              )}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_MM" className={donatePuzzlePazzleItemMMStyles} style={{ zIndex: 5 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_MM" className={donatePuzzlePazzleItemMMStyles} style={{ zIndex: 5, backdropFilter: 'none' }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
              {pzlItmCustomCntnt(
                OpChngLogo,
                'opChng_1',
                'opChng_2',
                'opChng_3',
                'https://operation-change.org/'
              )}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_MM" className={donatePuzzlePazzleItemMMStyles} style={{ zIndex: 5, backdropFilter: 'none' }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
              {pzlItmCustomCntnt(
                OpChngLogo,
                'opChng_1',
                'opChng_2',
                'opChng_3',
                'https://operation-change.org/'
              )}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_RM" className={donatePuzzlePazzleItemRMStyles} style={{ zIndex: 5, backdropFilter: 'blur(3px)' }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
              {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>

          <div key="dp_LM" className={donatePuzzlePazzleItemLMStyles} style={{ zIndex: 4 }}>
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_MM" className={donatePuzzlePazzleItemMMStyles} style={{ zIndex: 4 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_MM" className={donatePuzzlePazzleItemMMStyles} style={{ zIndex: 4 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_MM" className={donatePuzzlePazzleItemMMStyles} style={{ zIndex: 4 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_MM" className={donatePuzzlePazzleItemMMStyles} style={{ zIndex: 4 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_RM" className={donatePuzzlePazzleItemRMStyles} style={{ zIndex: 4 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
              {pzlItmCustomCntnt(
                FirstMem,
                'perPrivMem_1',
                'perPrivMem_2',
                'perPrivMem_3',
                'https://t.me/privatnamemarnya',
                true
              )}
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>

          <div key="dp_LM" className={donatePuzzlePazzleItemLMStyles} style={{ zIndex: 3 }}>
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_MM" className={donatePuzzlePazzleItemMMStyles} style={{ zIndex: 3 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_MM" className={donatePuzzlePazzleItemMMStyles} style={{ zIndex: 3 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_MM" className={donatePuzzlePazzleItemMMStyles} style={{ zIndex: 3 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_MM" className={donatePuzzlePazzleItemMMStyles} style={{ zIndex: 3 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_RM" className={donatePuzzlePazzleItemRMStyles} style={{ zIndex: 3 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>

          <div key="dp_LM" className={donatePuzzlePazzleItemLMStyles} style={{ zIndex: 2 }}>
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_MM" className={donatePuzzlePazzleItemMMStyles} style={{ zIndex: 2 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_MM" className={donatePuzzlePazzleItemMMStyles} style={{ zIndex: 2 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_MM" className={donatePuzzlePazzleItemMMStyles} style={{ zIndex: 2 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_MM" className={donatePuzzlePazzleItemMMStyles} style={{ zIndex: 2 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_RM" className={donatePuzzlePazzleItemRMStyles} style={{ zIndex: 2 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>

          <div key="dp_LBAngle" className={donatePuzzlePazzleItemLBAngleStyles} style={{ zIndex: 1 }}>
            <div className={styles.donatePuzzlePazzleItemHH} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
          </div>
          <div key="dp_MB" className={donatePuzzlePazzleItemMBStyles} style={{ zIndex: 1 }}>
            <div className={styles.donatePuzzlePazzleItemHH} />
            <div className={styles.donatePuzzlePazzleItemVP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
          </div>
          <div key="dp_MB" className={donatePuzzlePazzleItemMBStyles} style={{ zIndex: 1 }}>
            <div className={styles.donatePuzzlePazzleItemHH} />
            <div className={styles.donatePuzzlePazzleItemVP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
          </div>
          <div key="dp_MB" className={donatePuzzlePazzleItemMBStyles} style={{ zIndex: 1 }}>
            <div className={styles.donatePuzzlePazzleItemHH} />
            <div className={styles.donatePuzzlePazzleItemVP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
          </div>
          <div key="dp_MB" className={donatePuzzlePazzleItemMBStyles} style={{ zIndex: 1 }}>
            <div className={styles.donatePuzzlePazzleItemHH} />
            <div className={styles.donatePuzzlePazzleItemVP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
          </div>
          <div key="dp_RBAngle" className={donatePuzzlePazzleItemRBAngleStyles} style={{ zIndex: 1 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
        </div>
      </div>
    </div>
  );
};
DonatePuzzle.propTypes = {
  isMobile: PropTypes.bool,
  isScreenMdMin: PropTypes.bool,
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  lang: state.application.lang,
  isMobile: state.application.isMobile,
  isScreenMdMin: state.application.isScreenMdMin
})

export default connect(mapStateToProps, null)(DonatePuzzle)
