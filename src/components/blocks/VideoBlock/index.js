import React from 'react';
import { connect } from 'dva'
import PropTypes from 'prop-types';
import TROMediaVideo from '../../../assets/troMediaVideo.mp4';
import TROMediaSbtUKR from '../../../assets/troMediaVideoUKR.vtt'
import TROMediaSbtENG from '../../../assets/troMediaVideoENG.vtt'
import TROMediaImg from '../../../assets/img/troMediaImg.png';
import ShadowLine from '../../../assets/img/shadowLine.png'
import styles from './index.less';

const VideoBlock = ({ isMobile, lang }) => {
  return (
    <section id="videoBlock" className={styles.videoBlock}>
      <div className={styles.videoBlockWrap}>
        {
          TROMediaVideo
            ? <video width="100%" height="100%" controls autoPlay muted loop playsInline poster={TROMediaImg} src={TROMediaVideo} >
              <source src={TROMediaVideo} type="video/mp4" />
              <track src={TROMediaSbtENG} kind='subtitles' srcLang='en' label='English' default />
              <track src={TROMediaSbtUKR} kind='subtitles' srcLang='ua' label='Ukrainian' />
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

VideoBlock.propTypes = {
  isMobile: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isMobile: state.application.isMobile
})

export default connect(mapStateToProps, null)(VideoBlock)
