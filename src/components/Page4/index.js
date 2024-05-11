import React from 'react';
import PropTypes from 'prop-types';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'dva'
import styles from './index.less'

const langCollection = {
  UA: {
    h2: 'СУЧАСНЕ МЕДИЧНЕ ОБЛАДНАННЯ:',
    dsc1: 'ПРОПУСКНА ЗДАТНІСТЬ',
    dsc2: 'ПАЦІЄНТІВ В ДЕНЬ',
    ip1: '2 ОПЕРАЦІЙНИХ СТОЛА ТА ЛАМПИ',
    ip2: 'ЕЛЕКТРОХІРУРГІЧНИЙ АПАРАТ BOWA',
    ip3: 'АПАРАТ ШТУЧНОЇ ВЕНТИЛЯЦІЇ ЛЕГЕНЬ',
    ip4: 'КИСНЕВИЙ КОНЦЕНТРАТОР, ДЕФІБРИЛЯТОР',
    ip5: 'МОНІТОР ПАЦІЄНТА',
    ip6: 'ПОРТАТИВНЕ УЗД ТА ІНШЕ',
  },
  EN: {
    h2: 'MODERN MEDICAL EQUIPMENT',
    dsc1: 'CAPACITY',
    dsc2: 'PATIENTS PER DAY',
    ip1: 'OPERATING TABLES AND LAMPS',
    ip2: 'BOWA ELECTROSURGICAL APPARATUS',
    ip3: 'ARTIFICIAL LUNG VENTILATION APPARATUS',
    ip4: 'OXYGEN CONCENTRATOR, DEFIBRILLATOR',
    ip5: 'PATIENT MONITOR',
    ip6: 'PORTABLE ULTRASOUND AND MORE',
  },
};

const Page4 = ({ lang }) => {
  return (
    <ScrollOverPack id="page4" className={styles.page4}>
      <QueueAnim
        type="right"
        className={styles.page4TitleWrapper}
        key="page4-title"
        delay={300}
        leaveReverse
      >
        <h2 className={styles.page4H2Title} key="page4-h2">{langCollection[`${lang}`].h2}</h2>
      </QueueAnim>
      <QueueAnim
        type="left"
        className={styles.page4ImageBlock}
        delay={300}
        key="page4-img-wrap"
        leaveReverse
      >
        <div className={styles.page4ImageBlockAllWrap} key="page4-image-block-all-wrap">
          <div key="page4-image1" className={styles.page4ImageBlock1Wrap}>
            <div className={styles.page4Image1} />
            <div className={styles.page4ImageBlock1Cover} />
          </div>
          <div key="page4-image2" className={styles.page4ImageBlock2Wrap}>
            <div className={styles.page4Image2} />
            <div className={styles.page4ImageBlock2Cover} />
            <div className={styles.page4ImageBlock2Text}>
              <span>{langCollection[`${lang}`].dsc1}</span>
              <strong>60+</strong>
              <span>{langCollection[`${lang}`].dsc2}</span>
            </div>
          </div>
        </div>
      </QueueAnim>
      <QueueAnim
        type="bottom"
        className={styles.page4List}
        key="page4-list"
        delay={300}
        leaveReverse
      >
        <div className={styles.page4ListItem} key="page4-list-item1">
          <span>{langCollection[`${lang}`].ip1}</span>
        </div>
        <div className={styles.page4ListItem} key="page4-list-item2">
          <span>{langCollection[`${lang}`].ip2}</span>
        </div>
        <div className={styles.page4ListItem} key="page4-list-item3">
          <span>{langCollection[`${lang}`].ip3}</span>
        </div>
        <div className={styles.page4ListItem} key="page4-list-item4">
          <span>{langCollection[`${lang}`].ip4}</span>
        </div>
        <div className={styles.page4ListItem} key="page4-list-item5">
          <span>{langCollection[`${lang}`].ip5}</span>
        </div>
        <div className={styles.page4ListItem} key="page4-list-item6">
          <span>{langCollection[`${lang}`].ip6}</span>
        </div>
      </QueueAnim>
    </ScrollOverPack>
  );
}
Page4.propTypes = {
  lang: PropTypes.string
};

const mapStateToProps = (state) => ({
  lang: state.application.lang
})

export default connect(mapStateToProps, null)(Page4)
