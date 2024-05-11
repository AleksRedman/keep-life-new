import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TrackImg from '../../assets/img/daf.jpg';
import SchemaImg from '../../assets/img/schema.jpg';
import VeldingImg from '../../assets/img/velding.jpg';
import ItemPoint from '../../assets/img/logo-point.png';
import styles from './index.less'

const langCollection = {
  UA: {
    h2: 'ЗАДАЧІ:',
    ip1: 'ЗОВНІШНІ ГАБАРИТИ',
    ip2: 'РОЗСУВНА РОБОЧА ПЛОЩА',
    ip3: 'ЧАС РОЗГОРТУВАННЯ ТА РОЗІГРІВУ',
    ip4: 'ОПЕРАТИВНА ПЕРЕДИСЛОКАЦІЯ',
    ip5: 'ПРОХІДНІСТЬ ПО БЕЗДОРІЖЖЮ',
    ip6: 'ДОТРИМАННЯ САНІТАРНИХ НОРМ',
    ip7: 'ПОВНА АВТОНОМНІСТЬ',
  },
  EN: {
    h2: 'TASKS:',
    ip1: 'EXTERNAL DIMENSIONS',
    ip2: 'SLIDING WORK AREA',
    ip3: 'DEPLOYMENT AND WARM-UP TIME',
    ip4: 'OPERATIONAL REDEPLOCATION',
    ip5: 'OFF-ROAD RANGE',
    ip6: 'COMPLIANCE WITH SANITARY STANDARDS',
    ip7: 'COMPLETE AUTONOMY',
  },
};

const Page2 = ({ lang }) => {
  return (
    <ScrollOverPack id="page2" className={styles.page2}>
      <QueueAnim
        type="left"
        className={styles.page2ImageBlock1}
        delay={300}
        key="track"
        leaveReverse
      >
        <div key="page2-image1" className={styles.page2ImageBlock1Wrap}>
          <img key="track" alt="track" src={TrackImg} style={{ width: '100%' }} />
          <div className={styles.page2ImageBlock1Cover} />
        </div>
      </QueueAnim>
      <QueueAnim
        type="left"
        className={styles.page2ImageBlock2}
        delay={300}
        key="schema"
        leaveReverse
      >
        <div key="page2-image2" className={styles.page2ImageBlock2Wrap}>
          <img key="schema" alt="schema" src={SchemaImg} style={{ width: '100%' }} />
          <div className={styles.page2ImageBlock2Cover} />
        </div>
      </QueueAnim>
      <QueueAnim
        type="right"
        className={styles.page2ImageBlock3}
        delay={300}
        key="velding"
        leaveReverse
      >
        <div key="page2-image3" className={styles.page2ImageBlock3Wrap}>
          <img key="velding" alt="velding" src={VeldingImg} style={{ width: '100%' }} />
          <div className={styles.page2ImageBlock3Cover} />
        </div>
      </QueueAnim>
      <QueueAnim
        type="left"
        className={styles.page2TitleWrapper}
        key="page2-title"
        delay={300}
        leaveReverse
      >
        <h2 className={styles.page2H2Title} key="h2-ttl">{langCollection[`${lang}`].h2}</h2>
      </QueueAnim>
      <QueueAnim
        type="bottom"
        className={styles.page2List}
        key="page2-list"
        delay={300}
        leaveReverse
      >
        <div className={styles.page2ListItem} key="page2-list-item1">
          <img key="itemPoint" alt="itemPoint" src={ItemPoint} />
          <span className={styles.page2ListItemHighlight}>{`MIN `}</span>
          <span>{langCollection[`${lang}`].ip1}</span>
        </div>
        <div className={styles.page2ListItem} key="page2-list-item2">
          <img key="itemPoint" alt="itemPoint" src={ItemPoint} />
          <span>{langCollection[`${lang}`].ip2}</span>
        </div>
        <div className={styles.page2ListItem} key="page2-list-item3">
          <img key="itemPoint" alt="itemPoint" src={ItemPoint} />
          <span className={styles.page2ListItemHighlight}>{`MIN `}</span>
          <span>{langCollection[`${lang}`].ip3}</span>
        </div>
        <div className={styles.page2ListItem} key="page2-list-item4">
          <img key="itemPoint" alt="itemPoint" src={ItemPoint} />
          <span>{langCollection[`${lang}`].ip4}</span>
        </div>
        <div className={styles.page2ListItem} key="page2-list-item5">
          <img key="itemPoint" alt="itemPoint" src={ItemPoint} />
          <span className={styles.page2ListItemHighlight}>{`MAX `}</span>
          <span>{langCollection[`${lang}`].ip5}</span>
        </div>
        <div className={styles.page2ListItem} key="page2-list-item6">
          <img key="itemPoint" alt="itemPoint" src={ItemPoint} />
          <span>{langCollection[`${lang}`].ip6}</span>
        </div>
        <div className={styles.page2ListItem} key="page2-list-item7">
          <img key="itemPoint" alt="itemPoint" src={ItemPoint} />
          <span>{langCollection[`${lang}`].ip7}</span>
        </div>
      </QueueAnim>
      <QueueAnim
        type="left"
        className={styles.page2DecorBlockWrapper}
        key="page2-decor-block"
        delay={200}
        leaveReverse
      >
        <div className={styles.page2DecorBlock} key="page2-decor-block" />
      </QueueAnim>
    </ScrollOverPack>
  );
}
Page2.propTypes = {
  lang: PropTypes.string
}

const mapStateToProps = (state) => ({
  lang: state.application.lang
})

export default connect(mapStateToProps, null)(Page2)
