import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import HandsImg from '../../assets/img/hands.jpg';
import SurgeryImg from '../../assets/img/surgery2.jpg';
import ItemPoint from '../../assets/img/list-item-point.png';
import styles from './index.less'

const langCollection = {
  UA: {
    h2: 'УМОВИ РОБОТИ УКРАЇНСЬКИХ ПОЛЬОВИХ МЕДИКІВ:',
    ip1: 'ПОШКОДЖЕНІ ДОРОГИ',
    ip2: 'ОБСТРІЛЮВАНІ ШЛЯХИ ЕВАКУАЦІЇ',
    ip3: 'НАВМИСНЕ УРАЖЕННЯ ЛОКАЛЬНИХ МЕДЗАКЛАДІВ',
    ip4: 'ВІДСУТНІСТЬ САНІТАРНИХ УМОВ СПОРАДИЧНО ОБЛАШТОВАНИХ СТАБПУНКТАХ',
    ip5: 'НЕСТАБІЛЬНІСТЬ ТЕМПЕРАТУРИ',
    ip6: 'НЕСТАЧА МЕДИЧНОГО ОБЛАДНАННЯ',
  },
  EN: {
    h2: 'WORKING CONDITIONS OF UKRAINIAN FIELD MEDICINES:',
    ip1: 'DAMAGED ROADS',
    ip2: 'EVACUATION ROUTES UNDER SHOT',
    ip3: 'INTENTIONAL INFRINGEMENT OF LOCAL MEDICAL FACILITIES',
    ip4: 'LACK OF SANITARY CONDITIONS SPORADICALLY EQUIPPED STAB POINTS',
    ip5: 'TEMPERATURE INSTABILITY',
    ip6: 'SHORTAGE OF MEDICAL EQUIPMENT',
  },
};

const Page1 = ({ lang }) => {
  return (
    <ScrollOverPack id="page1" className={styles.page1}>
      <QueueAnim
        type="right"
        className={styles.page1ImageBlock1}
        delay={300}
        key="hands-img"
        leaveReverse
      >
        <div key="page1-image1" className={styles.page1ImageBlock1Wrap}>
          <img key="hands" alt="hands" src={HandsImg} style={{ width: '100%' }} />
          <div className={styles.page1ImageBlock1Cover} />
        </div>
      </QueueAnim>
      <QueueAnim
        type="right"
        className={styles.page1ImageBlock2}
        delay={300}
        key="surgery"
        leaveReverse
      >
        <div key="page1-image1" className={styles.page1ImageBlock2Wrap}>
          <img key="surgery" alt="surgery" src={SurgeryImg} style={{ width: '100%' }} />
          <div className={styles.page1ImageBlock2Cover} />
        </div>
      </QueueAnim>
      <QueueAnim
        type="left"
        className={styles.page1TitleWrapper}
        key="page1-title"
        delay={300}
        leaveReverse
      >
        <h2 className={styles.page1H2Title} key="h2">{langCollection[`${lang}`].h2}</h2>
      </QueueAnim>
      <QueueAnim
        type="left"
        className={styles.page1List}
        key="page1-list"
        delay={300}
        leaveReverse
      >
        <div className={styles.page1ListItem} key="page1-list-item1">
          <img key="itemPoint" alt="itemPoint" src={ItemPoint} />
          <span>{langCollection[`${lang}`].ip1}</span>
        </div>
        <div className={styles.page1ListItem} key="page1-list-item2">
          <img key="itemPoint" alt="itemPoint" src={ItemPoint} />
          <span>{langCollection[`${lang}`].ip2}</span>
        </div>
        <div className={styles.page1ListItem} key="page1-list-item3">
          <img key="itemPoint" alt="itemPoint" src={ItemPoint} />
          <span>{langCollection[`${lang}`].ip3}</span>
        </div>
        <div className={styles.page1ListItem} key="page1-list-item4">
          <img key="itemPoint" alt="itemPoint" src={ItemPoint} />
          <span>{langCollection[`${lang}`].ip4}</span>
        </div>
        <div className={styles.page1ListItem} key="page1-list-item5">
          <img key="itemPoint" alt="itemPoint" src={ItemPoint} />
          <span>{langCollection[`${lang}`].ip5}</span>
        </div>
        <div className={styles.page1ListItem} key="page1-list-item6">
          <img key="itemPoint" alt="itemPoint" src={ItemPoint} />
          <span>{langCollection[`${lang}`].ip6}</span>
        </div>
      </QueueAnim>
      <QueueAnim
        type="bottom"
        className={styles.page1TitleWrapper}
        key="page1-decor-wrap"
        delay={300}
        leaveReverse
      >
        <div className={styles.page1DecorBlock} key="page1-decor-block" />
      </QueueAnim>
    </ScrollOverPack>
  );
}
Page1.propTypes = {
  lang: PropTypes.string
};

const mapStateToProps = (state) => ({
  lang: state.application.lang
})

export default connect(mapStateToProps, null)(Page1)
