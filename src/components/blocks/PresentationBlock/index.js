import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import PresentationKL from '../../../assets/presentationKL081024.mp4';
import PresentationKLSbtENG from '../../../assets/PresentationKLENG.vtt'
import PresentationKLSbtUKR from '../../../assets/PresentationKLUKR.vtt'
import TROMediaImg from '../../../assets/img/presentationKL.png';
import ShadowLine from '../../../assets/img/shadowLine.png'
import styles from './index.less';

const PresentationBlock = ({ isMobile, lang }) => {
  return (
    <section id="videoBlock" className={styles.videoBlock}>
      <div className={styles.videoBlockWrap}>
        {
          PresentationKL
            ? <video width="100%" height="100%" controls autoPlay muted loop playsInline poster={TROMediaImg} src={PresentationKL} >
              <source src={PresentationKL} type="video/mp4" />
              <track src={PresentationKLSbtENG} kind='subtitles' srcLang='en' label='English' default={lang === 'EN'} />
              <track src={PresentationKLSbtUKR} kind='subtitles' srcLang='ua' label='Ukrainian' default={lang === 'UA'} />
              Your browser does not support HTML5 video.
            </video>
            : <img alt='video' src={TROMediaImg} width="100%" height="100%" />
        }
        {/* <div className={styles.videoBlockShadow} /> */}
        <div className={styles.videoBlockShadowImg}>
          <img alt='shadowLine' src={ShadowLine} width="100%" height="100%" />
        </div>
      </div>
    </section>
  );
}

PresentationBlock.propTypes = {
  isMobile: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isMobile: state.application.isMobile
})

export default connect(mapStateToProps, null)(PresentationBlock)
