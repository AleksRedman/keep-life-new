// import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva'
import { Popover } from 'antd';
import classNames from 'classnames'
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
    itxt1_1: 'ЗБІР 250000грн тут можете бути ВИ'
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
    itxt1_1: 'COLLECTION 250,000 UAH YOU you can be HERE'
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
          <div key="dp_LTAngle" className={donatePuzzlePazzleItemLTAngleStyles} style={{ zIndex: 6 }}>
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
          <div key="dp_MT" className={donatePuzzlePazzleItemMTStyles} style={{ zIndex: 6 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
          </div>
          <div key="dp_RTAngle" className={donatePuzzlePazzleItemRTAngleStyles} style={{ zIndex: 6 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
          </div>

          <div key="dp_LM" className={donatePuzzlePazzleItemLMStyles} style={{ zIndex: 5 }}>
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
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
          <div key="dp_MM" className={donatePuzzlePazzleItemMMStyles} style={{ zIndex: 5 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
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
          <div key="dp_MM" className={donatePuzzlePazzleItemMMStyles} style={{ zIndex: 5 }}>
            <div className={styles.donatePuzzlePazzleItemVP} />
            <div className={styles.donatePuzzlePazzleItemHP} />
            {pzlItmCntnt()}
            <div className={styles.donatePuzzlePazzleItemVH} />
            <div className={styles.donatePuzzlePazzleItemHH} />
          </div>
          <div key="dp_RM" className={donatePuzzlePazzleItemRMStyles} style={{ zIndex: 5 }}>
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
            {pzlItmCntnt()}
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
