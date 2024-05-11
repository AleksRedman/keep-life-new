import React, { useEffect } from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'dva'
import router from 'umi/router'
import styles from './index.less'

const langCollection = {
  UA: {
    h1: 'ДЯКУЄМО',
    h2: 'ВАМ',
  },
  EN: {
    h1: 'THANK',
    h2: 'YOU',
  },
};

const Page6 = ({ sectionId, onHandleSectionId, lang }) => {
  useEffect(() => {
    if (sectionId) {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        onHandleSectionId('')
      }
    }
  }, [onHandleSectionId, sectionId])

  const page6H2TitleStyles = classNames(
    styles.page6H2TitleText,
    styles.page6H2TitleTextPadding
  )
  return (
    <ScrollElement
      className={styles.page6}
      id="page6"
    >
      <QueueAnim
        type="bottom"
        className={styles.page6TitleWrapper}
        key="page6-title"
        delay={300}
        leaveReverse
      >
        <h2 className={styles.page6H2Title} key="h2">
          <span className={styles.page6H2TitleLine} />
          <span className={styles.page6H2TitleText} key="thank">{langCollection[`${lang}`].h1}</span>
          <span className={page6H2TitleStyles} key="you">{langCollection[`${lang}`].h2}</span>
          <span className={styles.page6H2TitleLine} />
        </h2>
      </QueueAnim>
    </ScrollElement>
  );
}
Page6.propTypes = {
  lang: PropTypes.string,
  onHandleSectionId: PropTypes.func
};

const mapStateToProps = (state) => ({
  lang: state.application.lang,
  sectionId: state.application.sectionId
})

const mapDispatchToProps = (dispatch) => ({
  onHandleSectionId: (payload) => dispatch({ type: 'application/handleSectionId', payload })
})

export default connect(mapStateToProps, mapDispatchToProps)(Page6)
