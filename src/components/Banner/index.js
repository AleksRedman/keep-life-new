import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import classNames from 'classnames'
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import { DownOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import LogoImg from '../../assets/img/logo.png';
import styles from './index.less'

const langCollection = {
  UA: {
    h1: 'МОБІЛЬНИЙ',
    h2: 'СТАБІЛІЗАЦІЙНИЙ ПУНКТ',
  },
  EN: {
    h1: 'MOBILE',
    h2: 'STABILIZATION POINT',
  },
};

const Banner = ({ onEnterChange, lang }) => {
  const pageStyles = classNames(
    styles.bannerWrapper,
    styles.bannerPage
  )

  return (
    <section className={pageStyles}>
    {console.log('lang', lang)}
      <div className={styles.bannerCover}>
        <ScrollElement
          className={styles.bannerPage}
          id="banner"
          onChange={({ mode }) => onEnterChange(mode)}
          playScale={0.9}
        >
          <QueueAnim className={styles.bannerLogoWrapper} type="right" delay={300} key="banner-logo">
            <img key="logo" alt="logo" src={LogoImg} />
          </QueueAnim>
          <QueueAnim className={styles.bannerTextWrapper} type="left" delay={400} key="banner-text">
            <div key="banner-text" className={styles.bannerTextBlock}>
              <h2 key="h2.0">{langCollection[`${lang}`].h1}</h2>
              <h2 key="h2.1">{langCollection[`${lang}`].h2}</h2>
            </div>
          </QueueAnim>
          <DownOutlined className={styles.bannerDownIcon} />
        </ScrollElement>
      </div>
    </section>
  );
}
Banner.propTypes = {
  onEnterChange: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  lang: state.application.lang
})

const mapDispatchToProps = (dispatch) => ({
  onEnterChange: (payload) => dispatch({ type: 'application/handleOnEnterChange', payload })
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
