import React from 'react';
import { connect } from 'dva'
import classNames from 'classnames'
import PropTypes from 'prop-types';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import styles from './index.less'

const langCollection = {
  UA: {
    h2: 'ТЕХНІЧНЕ ЗАБЕЗПЕЧЕННЯ',
    ip1: 'ВАНТАЖІВКА',
    ip2: 'МЕТАЛЕВИЙ МОДУЛЬ',
    ip3: 'РОЗСУВНА КОНСТРУКЦІЯ (ГОТОВНІСТЬ 5 ХВ)',
    ip4: 'АВАРІЙНИЙ АКУМУЛЯТОР',
    ip5: 'ПРИТОЧНО ВИТЯЖНА ВЕНТИЛЯЦІЯ, ОПАЛЕННЯ',
    ip6: 'ДИЗЕЛЬНИЙ ГЕНЕРАТОР ДО 16 КВТ',
    ip7: 'ДОДАТКОВИЙ ПАЛИВНИЙ БАК 360Л',
    ip8: 'ВОДЯНИЙ БАК НА 650Л',
  },
  EN: {
    h2: 'TECHNICAL SUPPORT',
    ip1: 'TRUCK',
    ip2: 'METAL MODULE',
    ip3: 'SLIDING CONSTRUCTION (5 MINUTES READINESS)',
    ip4: 'EMERGENCY BATTERY',
    ip5: 'SUPPLY EXHAUST VENTILATION, HEATING',
    ip6: 'DIESEL GENERATOR UP TO 16KW',
    ip7: 'ADDITIONAL FUEL TANK 360L',
    ip8: 'WATER TANK FOR 650L',
  },
};

const Page3 = ({ lang }) => {
  const page3List2ItemImg1Styles = classNames(
    styles.page3List2ItemImg,
    styles.page3List2ItemImg1
  )

  const page3List2ItemImg2Styles = classNames(
    styles.page3List2ItemImg,
    styles.page3List2ItemImg2
  )

  const page3List2ItemImg3Styles = classNames(
    styles.page3List2ItemImg,
    styles.page3List2ItemImg3
  )

  const page3List2ItemImg4Styles = classNames(
    styles.page3List2ItemImg,
    styles.page3List2ItemImg4
  )

  return (
    <ScrollOverPack id="page3" className={styles.page3}>
      <QueueAnim
        type="left"
        className={styles.page3TitleWrapper}
        key="page3-title"
        delay={300}
        leaveReverse
      >
        <h2 className={styles.page3H2Title} key="page3-h2">{langCollection[`${lang}`].h2}</h2>
      </QueueAnim>
      <QueueAnim
        type="right"
        className={styles.page3List1}
        key="page3-list"
        delay={300}
        leaveReverse
      >
        <div className={styles.page3List1Wrap} key="page3-list1-wrap">
          <div className={styles.page3List1Item} key="list-item1">
            <span>{langCollection[`${lang}`].ip1}</span>
          </div>
          <div className={styles.page3List1Item} key="list-item2">
            <span>{langCollection[`${lang}`].ip2}</span>
          </div>
          <div className={styles.page3List1Item} key="list-item3">
            <span>{langCollection[`${lang}`].ip3}</span>
          </div>
          <div className={styles.page3List1Item} key="list-item4">
            <span>{langCollection[`${lang}`].ip4}</span>
          </div>
        </div>
      </QueueAnim>
      <QueueAnim
        type="left"
        className={styles.page3List2}
        key="page3-list2"
        delay={400}
        leaveReverse
      >
        <div className={styles.page3List2Wrap} key="page3-list2-wrap">
          <div className={styles.page3List2Item} key="list-item1">
            <div className={page3List2ItemImg1Styles} />
          </div>
          <div className={styles.page3List2Item} key="list-item2">
            <div className={page3List2ItemImg2Styles} />
          </div>
          <div className={styles.page3List2Item} key="list-item3">
            <div className={page3List2ItemImg3Styles} />
          </div>
          <div className={styles.page3List2Item} key="list-item4">
            <div className={page3List2ItemImg4Styles} />
          </div>
        </div>
      </QueueAnim>
      <QueueAnim
        type="right"
        className={styles.page3List3}
        key="page3-list3"
        delay={500}
        leaveReverse
      >
        <div className={styles.page3List3Wrap} key="page3-list3-wrap">
          <div className={styles.page3List3Item} key="list-item1">
            <span>{langCollection[`${lang}`].ip5}</span>
          </div>
          <div className={styles.page3List3Item} key="list-item2">
            <span>{langCollection[`${lang}`].ip6}</span>
          </div>
          <div className={styles.page3List3Item} key="list-item3">
            <span>{langCollection[`${lang}`].ip7}</span>
          </div>
          <div className={styles.page3List3Item} key="list-item4">
            <span>{langCollection[`${lang}`].ip8}</span>
          </div>
        </div>
      </QueueAnim>
      <QueueAnim
        type="left"
        className={styles.page3Decor}
        key="page3-decor-block"
        delay={200}
        leaveReverse
      >
        <div className={styles.page3DecorBlock} key="page3-decor-block" />
      </QueueAnim>
    </ScrollOverPack>
  );
}
Page3.propTypes = {
  lang: PropTypes.string
};

const mapStateToProps = (state) => ({
  lang: state.application.lang
})

export default connect(mapStateToProps, null)(Page3)
